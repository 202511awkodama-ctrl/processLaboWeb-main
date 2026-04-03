export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-8 tracking-tight">
            テクノロジーの力を、<br/>現場で使える<br/><span className="text-secondary">「自分ごと」</span>に。
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            プロセスラボは、最先端のAIを企業の思考プロセスに溶け込ませ、現場の意思決定を劇的に加速させる伴走型パートナーです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              className="bg-secondary bg-gradient-to-br from-secondary to-secondary-fixed-dim text-on-secondary px-10 py-5 rounded-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
              href="#services"
            >
              サービスを見る
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a 
              className="border border-primary/20 text-primary px-10 py-5 rounded-sm font-bold flex items-center justify-center transition-all duration-300 hover:bg-surface-container" 
              href="#contact"
            >
              資料請求
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* AIPL Framework Graphic */}
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-primary text-white rounded-full flex flex-col items-center justify-center shadow-2xl z-20">
                <span className="text-4xl font-extrabold tracking-widest">AIPL</span>
                <span className="text-xs font-medium opacity-70">Pipeline for Thinking</span>
              </div>
            </div>
            
            {/* Orbital Items */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center">
              <div className="w-24 h-24 bg-white shadow-xl rounded-full flex items-center justify-center border border-surface-container-high text-primary font-bold">壁打ち</div>
              <div className="h-12 w-[1px] bg-outline-variant/40"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 flex flex-col items-center">
              <div className="h-12 w-[1px] bg-outline-variant/40"></div>
              <div className="w-24 h-24 bg-white shadow-xl rounded-full flex items-center justify-center border border-surface-container-high text-primary font-bold">実行</div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 flex items-center">
              <div className="w-24 h-24 bg-white shadow-xl rounded-full flex items-center justify-center border border-surface-container-high text-primary font-bold">判定</div>
              <div className="w-12 h-[1px] bg-outline-variant/40"></div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 flex items-center">
              <div className="w-12 h-[1px] bg-outline-variant/40"></div>
              <div className="w-24 h-24 bg-white shadow-xl rounded-full flex items-center justify-center border border-surface-container-high text-primary font-bold">提案</div>
            </div>

            {/* Connecting Ellipse Decorations */}
            <div className="absolute inset-0 border-2 border-dashed border-secondary/60 rounded-full animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-dotted border-primary/40 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 border border-solid border-secondary/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Trust Metrics */}
      <div className="absolute bottom-0 left-0 w-full bg-surface-container-low py-8">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-primary text-2xl font-bold">15社+</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">導入実績</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-primary text-2xl font-bold">400名+</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">受講生数</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-primary text-2xl font-bold">3年</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">平均支援期間</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-primary text-2xl font-bold">70%</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">継続率</div>
          </div>
        </div>
      </div>
    </section>
  );
}
