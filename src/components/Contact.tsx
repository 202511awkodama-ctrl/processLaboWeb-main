export default function Contact() {
  return (
    <section className="py-32 px-8 bg-surface-container" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">お問い合わせ</h2>
            <p className="text-on-surface-variant mb-12">
              AI導入のご相談や、サービスの詳細についてお気軽にお問い合わせください。パートナーシップのご提案も歓迎いたします。
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">explore</span>
                  お問い合わせの流れ
                </h4>
                <ol className="space-y-4 text-sm text-on-surface-variant">
                  <li className="flex gap-4">
                    <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs shrink-0">1</span>
                    <span>フォームよりお問い合わせ内容を送信</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs shrink-0">2</span>
                    <span>担当者より2営業日以内にご連絡・日程調整</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs shrink-0">3</span>
                    <span>ヒアリング・デモの実施（オンライン可）</span>
                  </li>
                </ol>
              </div>

              <div className="pt-8 border-t border-outline-variant/30">
                <h4 className="font-bold text-primary mb-4">よくあるご質問</h4>
                <div className="space-y-4">
                  <details className="group bg-surface-container-low rounded-sm">
                    <summary className="list-none p-4 font-medium text-sm cursor-pointer flex justify-between items-center">
                      Q. 導入にはどのくらいの期間がかかりますか？
                      <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="p-4 pt-0 text-sm text-on-surface-variant">
                      A. プロジェクトの規模によりますが、初期ヒアリングから導入まで最短1ヶ月から3ヶ月程度が一般的です。
                    </div>
                  </details>
                  <details className="group bg-surface-container-low rounded-sm">
                    <summary className="list-none p-4 font-medium text-sm cursor-pointer flex justify-between items-center">
                      Q. 費用感について教えてください。
                      <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="p-4 pt-0 text-sm text-on-surface-variant">
                      A. 各企業の課題に合わせてカスタマイズするため一概には言えませんが、ワークショップ単体から長期コンサルティングまで幅広くご用意しています。
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-10 md:p-12">
            <p className="bg-secondary-container/30 text-on-secondary-container text-xs p-4 mb-8 text-center rounded-sm font-medium">
              ※デモサイトのため送信機能は無効です
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">お名前</label>
                <input className="w-full bg-background border-none focus:ring-1 focus:ring-secondary py-4 px-4 text-sm" placeholder="山田 太郎" type="text" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">貴社名</label>
                <input className="w-full bg-background border-none focus:ring-1 focus:ring-secondary py-4 px-4 text-sm" placeholder="株式会社サンプル" type="text" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">メールアドレス</label>
                <input className="w-full bg-background border-none focus:ring-1 focus:ring-secondary py-4 px-4 text-sm" placeholder="example@process-lab.co.jp" type="email" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">お問い合わせ項目</label>
                <select className="w-full bg-background border-none focus:ring-1 focus:ring-secondary py-4 px-4 text-sm appearance-none">
                  <option>コンサルティングについて</option>
                  <option>ワークショップのご依頼</option>
                  <option>採用・協業について</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">メッセージ内容</label>
                <textarea className="w-full bg-background border-none focus:ring-1 focus:ring-secondary py-4 px-4 text-sm" placeholder="ご質問やご相談内容をご記入ください" rows={5}></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 font-bold tracking-widest text-sm hover:bg-primary-container transition-all" type="button">
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
