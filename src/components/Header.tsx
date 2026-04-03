export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#f9f9f7]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(2,36,29,0.06)] flex justify-between items-center px-8 h-20 max-w-full mx-auto">
      <div className="text-xl font-bold text-[#02241d] tracking-tight">株式会社プロセスラボ</div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10">
        <a className="font-['Manrope','Noto_Sans_JP'] font-medium text-sm tracking-wide text-[#414846] hover:text-[#725b20] transition-colors duration-300 ease-out-expo" href="#services">サービス</a>
        <a className="font-['Manrope','Noto_Sans_JP'] font-medium text-sm tracking-wide text-[#414846] hover:text-[#725b20] transition-colors duration-300 ease-out-expo" href="#company">会社概要</a>
        <a className="font-['Manrope','Noto_Sans_JP'] font-medium text-sm tracking-wide text-[#414846] hover:text-[#725b20] transition-colors duration-300 ease-out-expo" href="#team">チーム</a>
        <a className="font-['Manrope','Noto_Sans_JP'] font-medium text-sm tracking-wide text-[#414846] hover:text-[#725b20] transition-colors duration-300 ease-out-expo" href="#contact">お問い合わせ</a>
        <a 
          className="bg-secondary text-on-secondary px-6 py-3 text-sm font-bold tracking-wide rounded-sm scale-95 active:opacity-80 transition-all duration-300 hover:bg-primary-container" 
          href="#contact"
        >
          無料相談・お問い合わせ
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}
