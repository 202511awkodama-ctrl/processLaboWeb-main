import CompanyBackdrop from "./CompanyBackdrop";

export default function Company() {
  return (
    <section className="relative py-32 px-8 bg-surface-container-low overflow-hidden" id="company">
      <CompanyBackdrop />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Company Profile</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">会社概要</h2>
            <div className="space-y-6">
              <div className="flex border-b border-outline-variant/30 pb-6">
                <div className="w-32 text-on-surface-variant text-sm font-medium">設立</div>
                <div className="flex-1 text-primary text-sm">2025年 4月</div>
              </div>
              <div className="flex border-b border-outline-variant/30 pb-6">
                <div className="w-32 text-on-surface-variant text-sm font-medium">従業員数</div>
                <div className="flex-1 text-primary text-sm">15名</div>
              </div>
              <div className="flex border-b border-outline-variant/30 pb-6">
                <div className="w-32 text-on-surface-variant text-sm font-medium">資本金</div>
                <div className="flex-1 text-primary text-sm">30,000,000円</div>
              </div>
              <div className="flex border-b border-outline-variant/30 pb-6">
                <div className="w-32 text-on-surface-variant text-sm font-medium">代表者</div>
                <div className="flex-1 text-primary text-sm">架空 太郎</div>
              </div>
              <div className="flex border-b border-outline-variant/30 pb-6">
                <div className="w-32 text-on-surface-variant text-sm font-medium">所在地</div>
                <div className="flex-1 text-primary text-sm">東京都渋谷区 (ハイブリッド・リモート)</div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-surface-container-lowest/95 backdrop-blur-sm p-12 relative shadow-sm border-l-4 border-secondary">
              <span className="material-symbols-outlined text-secondary/10 text-8xl absolute top-6 right-6">format_quote</span>
              <h3 className="text-secondary font-bold text-lg mb-6">Our Mission</h3>
              <p className="text-2xl font-bold text-primary leading-relaxed mb-8">
                「中小企業と個人事業主が、AIを「自分の思考の延長」として使いこなせる状態を創り出す。」
              </p>
              <p className="text-on-surface-variant leading-loose">
                私たちは、テクノロジーの進化が誰にとっても「味方」となる社会を目指しています。複雑なシステムを単純な対話へと落とし込み、ビジネスの可能性を広げることが私たちの存在意義です。
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-primary/96 backdrop-blur-sm p-6 text-center">
                <div className="text-white/60 text-[10px] tracking-widest mb-2">DIVISION 01</div>
                <div className="text-white text-xs font-bold">コンサルティング</div>
              </div>
              <div className="bg-primary/96 backdrop-blur-sm p-6 text-center">
                <div className="text-white/60 text-[10px] tracking-widest mb-2">DIVISION 02</div>
                <div className="text-white text-xs font-bold">プロダクト開発</div>
              </div>
              <div className="bg-primary/96 backdrop-blur-sm p-6 text-center">
                <div className="text-white/60 text-[10px] tracking-widest mb-2">DIVISION 03</div>
                <div className="text-white text-xs font-bold">事業推進</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
