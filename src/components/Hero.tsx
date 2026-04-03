import AiplReactorGraphic from "./AiplReactorGraphic";

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
          <AiplReactorGraphic className="relative w-full max-w-[30rem]" />
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
