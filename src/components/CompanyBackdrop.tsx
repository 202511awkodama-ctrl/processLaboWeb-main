const backdropRings = [
  {cx: 180, cy: 200, radius: 168, className: 'company-backdrop__ring company-backdrop__ring--primary'},
  {cx: 540, cy: 120, radius: 118, className: 'company-backdrop__ring company-backdrop__ring--secondary'},
  {cx: 520, cy: 360, radius: 212, className: 'company-backdrop__ring company-backdrop__ring--tertiary'},
] as const;

const backdropNodes = [
  {cx: 152, cy: 76, r: 20},
  {cx: 676, cy: 150, r: 16},
  {cx: 600, cy: 404, r: 18},
  {cx: 336, cy: 300, r: 14},
] as const;

const backdropBeams = [
  {x1: 152, y1: 76, x2: 336, y2: 300},
  {x1: 336, y1: 300, x2: 676, y2: 150},
  {x1: 336, y1: 300, x2: 600, y2: 404},
] as const;

export default function CompanyBackdrop() {
  return (
    <div aria-hidden="true" className="company-backdrop pointer-events-none absolute inset-0 overflow-hidden">
      <div className="company-backdrop__glow company-backdrop__glow--left" />
      <div className="company-backdrop__glow company-backdrop__glow--right" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 520">
        <defs>
          <linearGradient id="company-backdrop-beam" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#725b20" stopOpacity="0" />
            <stop offset="50%" stopColor="#725b20" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#02241d" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="company-backdrop-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="company-backdrop__field">
          {backdropRings.map((ring) => (
            <circle
              key={`${ring.cx}-${ring.cy}-${ring.radius}`}
              className={ring.className}
              cx={ring.cx}
              cy={ring.cy}
              fill="none"
              r={ring.radius}
            />
          ))}
        </g>

        <g className="company-backdrop__beams">
          {backdropBeams.map((beam) => (
            <line
              key={`${beam.x1}-${beam.y1}-${beam.x2}-${beam.y2}`}
              className="company-backdrop__beam"
              stroke="url(#company-backdrop-beam)"
              strokeLinecap="round"
              strokeWidth="2.5"
              x1={beam.x1}
              x2={beam.x2}
              y1={beam.y1}
              y2={beam.y2}
            />
          ))}
        </g>

        <g>
          {backdropNodes.map((node) => (
            <g key={`${node.cx}-${node.cy}`}>
              <circle cx={node.cx} cy={node.cy} fill="url(#company-backdrop-node)" r={node.r * 2.4} />
              <circle className="company-backdrop__node" cx={node.cx} cy={node.cy} fill="#ffffff" r={node.r} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
