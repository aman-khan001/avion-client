import axios from "axios";
import { useAuthStore } from "../store/authStore.js";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api/v1",
  timeout: 12000
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    const store = useAuthStore.getState();

    if (error.response?.status === 401 && store.refreshToken && !original._retry) {
      original._retry = true;
      try {
        const { data } = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {
          refreshToken: store.refreshToken
        });
        store.setSession(data.data);
        original.headers.Authorization = `Bearer ${data.data.tokens.accessToken}`;
        return api(original);
      } catch {
        store.logout();
      }
    }

    return Promise.reject(error);
  }
);

export function apiMessage(error) {
  return error.response?.data?.message || error.message || "Something went wrong";
}
