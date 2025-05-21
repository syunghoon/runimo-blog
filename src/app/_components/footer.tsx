import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-400 to-primary-500 py-10 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 flex gap-8 text-sm font-semibold md:mb-0">
            <a href="/posts/privacy-policy">개인정보처리방침</a>
            {/* <a href="/posts/brand-resource">브랜드 리소스</a> */}
            <a href="/posts/faq">자주 묻는 질문</a>
          </div>
          <div className="flex gap-6 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
