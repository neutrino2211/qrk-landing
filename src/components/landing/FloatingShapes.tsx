export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large gradient circle - top right */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-float-slow"
      />

      {/* Medium gradient circle - bottom left */}
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-chart-2/5 to-transparent blur-3xl animate-float"
      />

      {/* Rotated square - mid right */}
      <div
        className="absolute top-1/3 -right-10 w-60 h-60 bg-gradient-to-tl from-chart-1/5 to-transparent rotate-45 blur-2xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Small accent circle - left center */}
      <div
        className="absolute top-1/2 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-chart-4/10 to-transparent blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Decorative lines */}
      <svg
        className="absolute top-[20%] left-[15%] w-40 h-40 text-border/20"
        viewBox="0 0 100 100"
      >
        <line
          x1="0"
          y1="100"
          x2="100"
          y2="0"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>

      <svg
        className="absolute bottom-[30%] right-[20%] w-32 h-32 text-border/20"
        viewBox="0 0 100 100"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1="50"
          x2="50"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
