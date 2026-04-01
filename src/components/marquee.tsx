type Props = {
  items: string[];
  separator?: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
};

export function Marquee({
  items,
  separator = " \u2022 ",
  className = "",
  speed = "normal",
}: Props) {
  const speedMap = { slow: "60s", normal: "35s", fast: "15s" };
  const content = items.join(separator) + separator;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: speedMap[speed] }}
      >
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
