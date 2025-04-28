import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed h-[80px] bg-white z-2">
      <div className="flex items-center justify-between px-4 py-0 h-full md:px-20">
        {/* 로고 부분 */}
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <h1 className="font-bold md:text-lg">Runimo</h1>
        </Link>

        {/* 메뉴 부분 */}
        <div className="flex items-start gap-2 md:gap-4">
          <Link href="/blog" className="menu-custom bg-primary">
            <span className="font-bold md:text-lg">블로그</span>
          </Link>
          <Link href="/blog" className="menu-custom bg-primary">
            <span className="font-bold md:text-lg">블로그</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;