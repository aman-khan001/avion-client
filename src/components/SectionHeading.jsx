export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <div
        className={`mt-3 h-1 rounded-full bg-avion-green/70 ${isCentered ? "mx-auto w-16" : "w-16"}`}
      />
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  );
}
