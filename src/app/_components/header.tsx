import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-secondary-fill bg-primary-bg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/ui/logo.svg"
              alt="Runimo Logo"
              width={0}
              height={40}
              className="h-8 w-auto md:h-10"
            />
          </Link>

          {/* 메뉴 */}
          <nav className="flex items-center gap-4">
            <Link
              href="/store"
              className="rounded-lg px-3 py-2.5 text-primary-gray hover:bg-secondary-fill"
            >
              스토어
            </Link>
            <Link
              href="/magazine"
              className="rounded-lg px-3 py-2.5 text-primary-gray hover:bg-secondary-fill"
            >
              매거진
            </Link>
            <ThemeSwitcher />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
