export function EvaDentLogo({
  className,
  color = "#2563EB", // Tailwind blue-600
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 420 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Eva Dent — стоматология в Казани"
    >
      <title>Eva Dent</title>
      <desc>Стоматологическая клиника Eva Dent в Казани</desc>

      <defs>
        <mask id="logo-mask">
          <image
            href="https://eva-dent.com/wp-content/uploads/2021/03/logo.png"
            width="420"
            height="120"
          />
        </mask>
      </defs>

      <rect
        width="420"
        height="120"
        fill={color}
        mask="url(#logo-mask)"
      />
    </svg>
  );
}
