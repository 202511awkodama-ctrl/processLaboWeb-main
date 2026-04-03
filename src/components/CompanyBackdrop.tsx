const baseLatticePoints = [
  {cx: 130, cy: 120, r: 7},
  {cx: 220, cy: 164, r: 8},
  {cx: 328, cy: 124, r: 7},
  {cx: 436, cy: 188, r: 9},
  {cx: 542, cy: 146, r: 7},
  {cx: 632, cy: 214, r: 8},
  {cx: 282, cy: 278, r: 7},
  {cx: 396, cy: 316, r: 8},
  {cx: 512, cy: 286, r: 7},
] as const;

const lineConnections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 6],
  [6, 7],
  [7, 8],
  [2, 7],
  [3, 8],
] as const;

const planeConnections = [
  [1, 2, 3, 6],
  [6, 3, 8, 7],
] as const;

const baseSpiralPaths = [
  "M380 260 C420 220 486 218 522 258 C554 294 548 352 506 382 C452 420 374 410 326 356",
  "M392 228 C448 190 530 202 576 260 C626 322 618 416 546 472 C456 540 332 522 248 440",
] as const;

function seededUnit(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function seededRange(seed: number, min: number, max: number) {
  return min + seededUnit(seed) * (max - min);
}

const latticePoints = baseLatticePoints.map((point, index) => ({
  ...point,
  cx: point.cx + seededRange(index + 1, -18, 18),
  cy: point.cy + seededRange(index + 19, -16, 16),
  delay: `${seededRange(index + 37, 0, 1.9).toFixed(2)}s`,
  duration: `${seededRange(index + 53, 6.9, 9.8).toFixed(2)}s`,
}));

const latticeLines = lineConnections.map(([start, end], index) => ({
  x1: latticePoints[start].cx,
  y1: latticePoints[start].cy,
  x2: latticePoints[end].cx,
  y2: latticePoints[end].cy,
  delay: `${seededRange(index + 71, 0.2, 2.5).toFixed(2)}s`,
  duration: `${seededRange(index + 89, 7.2, 10.4).toFixed(2)}s`,
}));

const latticePlanes = planeConnections.map((indexes, index) => ({
  points: indexes
    .map((pointIndex) => `${latticePoints[pointIndex].cx},${latticePoints[pointIndex].cy}`)
    .join(" "),
  delay: `${seededRange(index + 103, 1.1, 2.8).toFixed(2)}s`,
  duration: `${seededRange(index + 121, 7.5, 10.8).toFixed(2)}s`,
}));

const spiralPaths = baseSpiralPaths.map((path, index) => ({
  path,
  delay: `${seededRange(index + 139, 2.2, 4.1).toFixed(2)}s`,
  duration: `${seededRange(index + 157, 8.2, 11.6).toFixed(2)}s`,
}));

export default function CompanyBackdrop() {
  return (
    <div aria-hidden="true" className="company-backdrop pointer-events-none absolute inset-0 overflow-hidden">
      <div className="company-backdrop__glow company-backdrop__glow--left" />
      <div className="company-backdrop__glow company-backdrop__glow--right" />
      <svg className="absolute inset-0 h-full w-full opacity-100" viewBox="0 0 800 520">
        <defs>
          <linearGradient id="company-backdrop-line" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#725b20" stopOpacity="0" />
            <stop offset="50%" stopColor="#725b20" stopOpacity="0.54" />
            <stop offset="100%" stopColor="#02241d" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="company-backdrop-point" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="company-backdrop-plane" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#fcdc93" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#725b20" stopOpacity="0.22" />
          </linearGradient>
          <radialGradient id="company-backdrop-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fcdc93" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#fcdc93" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle className="company-backdrop__core" cx="404" cy="286" fill="url(#company-backdrop-core)" r="104" />

        <g className="company-backdrop__lattice">
          {latticeLines.map((line) => (
            <line
              key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`}
              className="company-backdrop__line"
              stroke="url(#company-backdrop-line)"
              strokeLinecap="round"
              strokeWidth="2.5"
              style={{
                animationDelay: line.delay,
                animationDuration: line.duration,
              }}
              x1={line.x1}
              x2={line.x2}
              y1={line.y1}
              y2={line.y2}
            />
          ))}
        </g>

        <g className="company-backdrop__planes">
          {latticePlanes.map((plane) => (
            <polygon
              key={plane.points}
              className="company-backdrop__plane"
              fill="url(#company-backdrop-plane)"
              points={plane.points}
              style={{
                animationDelay: plane.delay,
                animationDuration: plane.duration,
              }}
            />
          ))}
        </g>

        <g className="company-backdrop__spirals">
          {spiralPaths.map((spiral, index) => (
            <path
              key={spiral.path}
              className={`company-backdrop__spiral ${index === 1 ? 'company-backdrop__spiral--outer' : ''}`}
              d={spiral.path}
              fill="none"
              stroke="url(#company-backdrop-line)"
              strokeLinecap="round"
              strokeWidth={index === 1 ? 2.2 : 2.8}
              style={{
                animationDelay: spiral.delay,
                animationDuration: spiral.duration,
              }}
            />
          ))}
        </g>

        <g className="company-backdrop__points">
          {latticePoints.map((point) => (
            <g key={`${point.cx}-${point.cy}`}>
              <circle
                cx={point.cx}
                cy={point.cy}
                fill="url(#company-backdrop-point)"
                r={point.r * 3.2}
              />
              <circle
                className="company-backdrop__point"
                cx={point.cx}
                cy={point.cy}
                fill="#ffffff"
                r={point.r}
                style={{
                  animationDelay: point.delay,
                  animationDuration: point.duration,
                }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
