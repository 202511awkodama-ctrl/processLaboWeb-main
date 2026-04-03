export default function Team() {
  return (
    <section className="py-32 px-8 bg-surface" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Leadership Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">専門家集団</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            戦略コンサルタント、AIエンジニア、UI/UXデザイナー、現場のオペレーションに精通した各分野のスペシャリストが、一つのチームとして課題解決に取り組みます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* Member 1 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjesJRJbDya57s2nb8gToCrsOovd9cU5fSfdIGdGVfXKOrUY1BQ0lxnkrK0b_VYQzXP6lNPIoW72NNMOfO8zsR_kWEYVxPu7f4iyJvbEi2L5O2bunG0hgLhvrcqdJj9qg3u1jmzmTjgIizQ6_CgVvSWgfOuhUAztbprjocveRu63LmS5gBe2stGAAaW0AnQ1nK4MZ8RWWMSC3JxVhLr8MU4SXY3WLau2zr5yJL_9-PCaoET-zpzCo8EdSALCQOjBf6Tj9s1WcSDQ" alt="CEO" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-xs text-secondary font-bold tracking-widest mb-2">CEO / FOUNDER</div>
            <h4 className="text-xl font-bold text-primary mb-4">架空 太郎 <span className="text-sm font-normal text-on-surface-variant ml-2">Taro Kakuu</span></h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              大手外資系コンサルティングファームを経て独立。AIと人間の協調によるビジネス変革を10年以上にわたり研究。
            </p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5qLRd7SzaMkDvt081ipWf0VZmMH1dOTzLKMbF6V43hiv_mhaIfKZAuTQ3_Lty8hP7rH_kdRNzS2wcPpgNQD6Ukv_cFrPKbanlBMCe_cicJNr2yEm97ud_v9NEi3ToLCSBT46QvQOH4WfrnDYEUxZeSYMhfpkIMb0QmBRB9J7x4POCBTcU1H-PW83hdwMQnlhMf-yvglbG4HaxqabBgsumnXMWoemIrJBGsnGms4B-uye1Q0sODOS2n4FGG3d5iNk2_PAJsyA3Ug" alt="CTO" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-xs text-secondary font-bold tracking-widest mb-2">CTO / AI ENGINEER</div>
            <h4 className="text-xl font-bold text-primary mb-4">佐藤 結衣 <span className="text-sm font-normal text-on-surface-variant ml-2">Yui Sato</span></h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              深層学習の専門家。数多くの生成AI導入プロジェクトをリードし、実務で使える独自の言語モデル最適化手法を確立。
            </p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XbWzhOze2wbBWzzZGHynSVPctbsJah7VmOGxEWrlRkHKfbQEnUKRxHFygFIXYznG-VWvLNH73h75mdhMGSWiFI8728JNZGT33lwDSGmsYt46BhlSVH2svbVJN6YNduRy3bD691xwBnYvImY9AchxgY8-WdQ60XiveR4UdX9ZBqGmzO8sfdhjaek3aZgsPZfstq3qS9FtWtvZwId_Gs-uP6fOeYnSWZ4OUpROA_NJfgvPzAfxYawRJr-La36O8uQHzUlrUJRB-g" alt="DESIGN DIRECTOR" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-xs text-secondary font-bold tracking-widest mb-2">DESIGN DIRECTOR</div>
            <h4 className="text-xl font-bold text-primary mb-4">田中 健一 <span className="text-sm font-normal text-on-surface-variant ml-2">Kenichi Tanaka</span></h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              UI/UX設計の第一人者。ユーザーの思考プロセスに寄り添ったインターフェース開発を主導。
            </p>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiamhogCL-DWF75FoKup1SloZAqsWdTValMkA7aZz9fIUP_xPsUCdTmt639-dCcg9ICGnXvJfzEvcr35bsllV5xEoaFM6RwFBzbCPnM2nySbC5NstowlqBQ7aOKh_2MQxGRzL2ZLsDfabAHL5ZG-pYnBaAy5Gd9A1hPYLZZWLO0OFQ9VukUUrqkr6Rat-fnBOJpJPFSbUu_7SvJ3f3oBxakfLcykM8umjYwJ_QDJ2dbky5_x2nwHlIodKbNxRSxdDPSCnPCvkdnQ" alt="OPERATIONS STRATEGIST" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-xs text-secondary font-bold tracking-widest mb-2">OPERATIONS STRATEGIST</div>
            <h4 className="text-xl font-bold text-primary mb-4">鈴木 美咲 <span className="text-sm font-normal text-on-surface-variant ml-2">Misaki Suzuki</span></h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              現場改善のプロ。AI導入における組織内の抵抗を最小限に抑え、スムーズな運用体制の構築を専門とする。
            </p>
          </div>

          {/* Member 5 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByV9cuCMqPPdyAWrSWQwOUrsAiqhUwZ9vZBjjLMBrD2CXRyOEAab98AWGbnOu6mpBt64Gq1CBDsWN_kb_8we__y0LNU8lGHtuiJW_pTG3HE8eJuNNVAzoKJae6ZgUbj4H01Ga3rwHWxaFaAfQQ2Lp-59PuUpw26UT8gDMFNE7gIM0JRrCFHtJ4X9iw5leEuiXqFo00-8Z1BishGLgAWYz9fjDEyvin0hqYSN2u5OqyIlesS78LRCHOQmLQqMz77TGKz29paz-3kw" alt="SENIOR ADVISOR" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-xs text-secondary font-bold tracking-widest mb-2">SENIOR ADVISOR</div>
            <h4 className="text-xl font-bold text-primary mb-4">伊藤 博 <span className="text-sm font-normal text-on-surface-variant ml-2">Hiroshi Ito</span></h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              中小企業診断士として30年のキャリア。地域に根ざした経営支援の知見をプロセスラボの戦略に注入。
            </p>
          </div>

          {/* Member 6 */}
          <div className="flex flex-col">
            <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY62UhSyOQz00Ddv0EeJiaYQX7P2tWN8uJoLYfxeOqHssi9SxdRCaettCydMil00uY9kkeBWijZQfIL_MS68fHsDqXETAAObh3mVlsWRG7Y77_h467ftmPe3jNZSNZYJlSIfwy3J82OQkItmV2SH3ANh_P3F-Gvaq3xv_JbSHspR6h6-BB_M88aEWuvCXoiBYyUjysldk_1KkpJ5V4EWZU_COsCJmBEanuze5EsgqGq9UPcgnBV8AHZV_iSeEivXHxvtxfYv_GHw" alt="UX RESEARCHER" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-xs text-secondary font-bold tracking-widest mb-2">UX RESEARCHER</div>
            <h4 className="text-xl font-bold text-primary mb-4">加藤 遥 <span className="text-sm font-normal text-on-surface-variant ml-2">Haruka Kato</span></h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              心理学に基づいたユーザー行動分析を担当。AIと人間の最適な距離感をデザインで解決する。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
