type AiplReactorGraphicProps = {
  compact?: boolean;
  className?: string;
};

const heroNodes = [
  {label: '壁打ち', x: 200, y: 26},
  {label: '提案', x: 374, y: 200},
  {label: '実行', x: 200, y: 374},
  {label: '判定', x: 26, y: 200},
] as const;

const shardArcs = [
  {d: 'M200 20 A180 180 0 0 1 332 68', delay: '0s'},
  {d: 'M380 200 A180 180 0 0 1 332 332', delay: '-1.875s'},
  {d: 'M200 380 A180 180 0 0 1 68 332', delay: '-3.75s'},
  {d: 'M20 200 A180 180 0 0 1 68 68', delay: '-5.625s'},
] as const;

export default function AiplReactorGraphic({
  compact = false,
  className = '',
}: AiplReactorGraphicProps) {
  const rootClassName = [
    'hero-reactor',
    compact ? 'hero-reactor--compact' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClassName}>
      <div className="pointer-events-none absolute inset-12 rounded-full bg-secondary/12 blur-3xl" />
      <svg
        aria-label="AIPL framework graphic"
        className="relative z-10 h-auto w-full drop-shadow-[0_24px_60px_rgba(2,36,29,0.18)]"
        viewBox="0 0 400 400"
      >
        <defs>
          <radialGradient id={compact ? 'aipl-core-glow-compact' : 'aipl-core-glow'} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fcdc93" stopOpacity="0.95" />
            <stop offset="58%" stopColor="#fcdc93" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#fcdc93" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={compact ? 'aipl-node-glow-compact' : 'aipl-node-glow'} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={compact ? 'aipl-beam-compact' : 'aipl-beam'} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#725b20" stopOpacity="0" />
            <stop offset="50%" stopColor="#725b20" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#725b20" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle
          className="hero-reactor__halo"
          cx="200"
          cy="200"
          fill={`url(#${compact ? 'aipl-core-glow-compact' : 'aipl-core-glow'})`}
          r="112"
        />
        <circle cx="200" cy="200" fill="none" r="145" stroke="#02241d" strokeOpacity="0.1" strokeWidth="1.5" />
        <circle
          className="hero-reactor__orbit hero-reactor__orbit--outer"
          cx="200"
          cy="200"
          fill="none"
          r="178"
          stroke="#725b20"
          strokeDasharray="7 11"
          strokeOpacity="0.34"
          strokeWidth="3"
        />
        <circle
          className="hero-reactor__orbit hero-reactor__orbit--inner"
          cx="200"
          cy="200"
          fill="none"
          r="132"
          stroke="#02241d"
          strokeDasharray="2 10"
          strokeOpacity="0.24"
          strokeWidth="2"
        />

        <g className="hero-reactor__shards">
          {shardArcs.map((arc) => (
            <path
              key={arc.d}
              className="hero-reactor__shard"
              d={arc.d}
              fill="none"
              stroke="#725b20"
              strokeLinecap="round"
              strokeOpacity="0.82"
              strokeWidth="11"
              style={{
                animationDelay: arc.delay,
              }}
            />
          ))}
        </g>

        <g className="hero-reactor__beams">
          {heroNodes.map((node, index) => (
            <g key={node.label}>
              <line
                className="hero-reactor__beam"
                stroke={`url(#${compact ? 'aipl-beam-compact' : 'aipl-beam'})`}
                strokeLinecap="round"
                strokeWidth="4"
                style={{animationDelay: `${index * 0.45}s`}}
                x1="200"
                x2={node.x}
                y1="200"
                y2={node.y}
              />
              <circle
                className="hero-reactor__node-glow"
                cx={node.x}
                cy={node.y}
                fill={`url(#${compact ? 'aipl-node-glow-compact' : 'aipl-node-glow'})`}
                r="34"
              />
              <circle
                className="hero-reactor__node-shell"
                cx={node.x}
                cy={node.y}
                fill="#ffffff"
                r="26"
                stroke="#e8e8e6"
                strokeWidth="2"
                style={{animationDelay: `${index * 0.35}s`}}
              />
              <text
                dominantBaseline="middle"
                fill="#02241d"
                fontFamily="Manrope, Noto Sans JP, sans-serif"
                fontSize={compact ? '12' : '14'}
                fontWeight="700"
                textAnchor="middle"
                x={node.x}
                y={node.y + 1}
              >
                {node.label}
              </text>
            </g>
          ))}
        </g>

        <g className="hero-reactor__core">
          <circle cx="200" cy="200" fill="#02241d" r="74" />
          <circle cx="200" cy="200" fill="none" r="88" stroke="#725b20" strokeOpacity="0.28" strokeWidth="2" />
          <circle cx="200" cy="200" fill="none" r="100" stroke="#fcdc93" strokeOpacity="0.24" strokeWidth="1.5" />
          <text
            fill="#ffffff"
            fontFamily="Manrope, Noto Sans JP, sans-serif"
            fontSize={compact ? '32' : '38'}
            fontWeight="800"
            letterSpacing="0.28em"
            textAnchor="middle"
            x="207"
            y={compact ? '193' : '196'}
          >
            AIPL
          </text>
          <text
            fill="rgba(255,255,255,0.72)"
            fontFamily="Manrope, Noto Sans JP, sans-serif"
            fontSize={compact ? '9' : '11'}
            fontWeight="600"
            letterSpacing="0.08em"
            textAnchor="middle"
            x="200"
            y={compact ? '214' : '220'}
          >
            Pipeline for Thinking
          </text>
        </g>
      </svg>
    </div>
  );
}
