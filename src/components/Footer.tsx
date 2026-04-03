export default function Footer() {
  return (
    <footer className="bg-[#f4f4f2] w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="text-[#02241d] font-['Manrope','Noto_Sans_JP'] text-xs leading-relaxed tracking-wider">
          © 2024 株式会社プロセスラボ | ポートフォリオ用デモサイトです
        </div>
        <div className="flex items-center space-x-8">
          <a className="font-['Manrope','Noto_Sans_JP'] text-xs leading-relaxed tracking-wider text-[#414846] hover:text-[#02241d] transition-all duration-300" href="#">プライバシーポリシー</a>
          <a className="font-['Manrope','Noto_Sans_JP'] text-xs leading-relaxed tracking-wider text-[#414846] hover:text-[#02241d] transition-all duration-300" href="#">利用規約</a>
        </div>
      </div>
    </footer>
  );
}
