import AiplReactorGraphic from "./AiplReactorGraphic";

export default function Services() {
  return (
    <section className="py-40 px-8 bg-surface overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="text-secondary font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Our Business Structure</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-8">事業の三本の柱</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            私たちは「戦略」「道具」「実践」を統合し、<br className="hidden md:block"/>組織が自律的にAIを使いこなすためのエコシステムを構築します。
          </p>
        </div>

        <div className="space-y-48">
          {/* 01. Consulting */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="w-full lg:w-3/5">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-extrabold text-secondary/20 font-headline">01</span>
                <div className="h-[1px] w-12 bg-secondary/30"></div>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">STRATEGY & CONSULTING</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">AIイネーブルメント<br/>コンサルティング</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl">
                単なるツールの導入支援ではありません。企業の文化、既存のワークフロー、そして働く人々のマインドセットを深く理解し、AIを「思考のパートナー」として再定義。ROI（投資対効果）を最大化させるための戦略立案から現場への定着までを伴走支援します。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary-container/5 text-primary text-xs font-bold border border-primary/10">戦略策定</span>
                <span className="px-4 py-2 bg-primary-container/5 text-primary text-xs font-bold border border-primary/10">ワークフロー再設計</span>
                <span className="px-4 py-2 bg-primary-container/5 text-primary text-xs font-bold border border-primary/10">伴走型実装</span>
              </div>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute -inset-4 border border-secondary/20 -z-10 translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop" 
                  alt="AIイネーブルメント コンサルティング" 
                  className="w-full h-full object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* 02. Product */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
            <div className="w-full lg:w-3/5">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-extrabold text-secondary/20 font-headline">02</span>
                <div className="h-[1px] w-12 bg-secondary/30"></div>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">CORE METHODOLOGY / PRODUCT</span>
              </div>
              <div className="inline-block bg-secondary-container/30 text-on-secondary-container text-[10px] font-bold px-3 py-1 tracking-widest mb-6 border border-secondary-container">COMING SOON</div>
              <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">AIPL<br/><span className="text-xl opacity-70">次世代AI業務基盤 - AI Pipeline for Thinking</span></h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl">
                人間の直感とAIの演算能力をシームレスに繋ぐ、独自の思考フレームワークをデジタル化。散在する情報を知恵へと変換し、最適な意思決定を自動的にガイドする次世代の業務基盤プロダクトです。
              </p>
              <ul className="space-y-4 text-sm text-primary font-medium">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  思考プロセスの可視化と自動化
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  意思決定バイアスの最小化支援
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
              <AiplReactorGraphic compact className="relative w-full max-w-sm scale-90" />
            </div>
          </div>

          {/* 03. Workshop */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 pb-16">
            <div className="w-full lg:w-3/5">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-extrabold text-secondary/20 font-headline">03</span>
                <div className="h-[1px] w-12 bg-secondary/30"></div>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">PRACTICAL TRAINING</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">AI活用<br/>ワークショップ</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl">
                「何ができるか」の知識ではなく「自分の業務にどう使うか」の体験を。受講したその日から実務が変わる、実践重視のプログラム。AIを道具として使い倒すためのリテラシーを、全社員レベルまで引き上げます。
              </p>
              <a className="inline-flex items-center gap-4 text-primary font-bold hover:text-secondary transition-colors group" href="#contact">
                <span className="text-sm border-b border-primary/20 group-hover:border-secondary pb-1">プログラム詳細を見る</span>
                <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
              </a>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute -inset-4 border border-secondary/20 -z-10 translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                  alt="AI活用ワークショップ" 
                  className="w-full h-full object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
