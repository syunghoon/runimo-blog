"use client";

import Container from "@/app/_components/container";

const handleClick = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "runimo-appstore" });
  window.open("https://apps.apple.com/kr/app/%EB%9F%AC%EB%8B%88%EB%AA%A8/id6743544062?l", "_blank");
};

const HeroSection = () => {
  return (
    <section className="bg-secondary-bg py-20">
      <Container>
        <div className="grid min-h-[60vh] grid-cols-1 gap-8 md:grid-cols-2">
          {/* 텍스트 영역 */}
          <div className="flex h-[50vh] flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
            <h1>러닝을 즐겁게!</h1>
            <h4 className="text-quaternary-gray">
              나만의 캐릭터와 함께 뛰어봐요! <br />
              러니모 서비스 정식 출시
            </h4>
            <button
              onClick={handleClick}
              className="mt-8 cursor-pointer rounded-lg bg-primary-400 px-6 py-3"
            >
              <h4 className="text-white">App Store에서 받기</h4>
            </button>
          </div>

          {/* 이미지 영역 */}
          <div className="flex h-full items-center justify-center">
            <img
              src="/assets/images/hero/runimo-hero.png"
              alt="러니모 캐릭터"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
