export default function SectionHeading({ kicker, title, light = false, center = false, className = "" }) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {kicker && (
        <p
          className={`eyebrow ${light ? "eyebrow--light" : ""} ${
            center ? "eyebrow--center" : ""
          }`}
        >
          {kicker}
        </p>
      )}
      <h2 className={`h2 ${light ? "lead--light" : ""}`} style={{ marginTop: "18px" }}>
        {title}
      </h2>
    </div>
  );
}
