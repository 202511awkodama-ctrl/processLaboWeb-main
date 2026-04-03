const latticePoints = [
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

const latticeLines = [
  {x1: 130, y1: 120, x2: 220, y2: 164},
  {x1: 220, y1: 164, x2: 328, y2: 124},
  {x1: 328, y1: 124, x2: 436, y2: 188},
  {x1: 436, y1: 188, x2: 542, y2: 146},
  {x1: 542, y1: 146, x2: 632, y2: 214},
  {x1: 220, y1: 164, x2: 282, y2: 278},
  {x1: 282, y1: 278, x2: 396, y2: 316},
  {x1: 396, y1: 316, x2: 512, y2: 286},
  {x1: 328, y1: 124, x2: 396, y2: 316},
  {x1: 436, y1: 188, x2: 512, y2: 286},
] as const;

const latticePlanes = [
  "220,164 328,124 436,188 282,278",
  "282,278 436,188 512,286 396,316",
] as const;

const spiralPaths = [
  "M380 260 C420 220 486 218 522 258 C554 294 548 352 506 382 C452 420 374 410 326 356",
  "M392 228 C448 190 530 202 576 260 C626 322 618 416 546 472 C456 540 332 522 248 440",
] as const;

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
          {latticeLines.map((line, index) => (
            <line
              key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`}
              className="company-backdrop__line"
              stroke="url(#company-backdrop-line)"
              strokeLinecap="round"
              strokeWidth="2.5"
              style={{ animationDelay: `${index * 0.18}s` }}
              x1={line.x1}
              x2={line.x2}
              y1={line.y1}
              y2={line.y2}
            />
          ))}
        </g>

        <g className="company-backdrop__planes">
          {latticePlanes.map((points, index) => (
            <polygon
              key={points}
              className="company-backdrop__plane"
              fill="url(#company-backdrop-plane)"
              points={points}
              style={{ animationDelay: `${1.1 + index * 0.6}s` }}
            />
          ))}
        </g>

        <g className="company-backdrop__spirals">
          {spiralPaths.map((path, index) => (
            <path
              key={path}
              className={`company-backdrop__spiral ${index === 1 ? 'company-backdrop__spiral--outer' : ''}`}
              d={path}
              fill="none"
              stroke="url(#company-backdrop-line)"
              strokeLinecap="round"
              strokeWidth={index === 1 ? 2.2 : 2.8}
              style={{ animationDelay: `${2.3 + index * 0.45}s` }}
            />
          ))}
        </g>

        <g className="company-backdrop__points">
          {latticePoints.map((point, index) => (
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
                style={{ animationDelay: `${index * 0.16}s` }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
