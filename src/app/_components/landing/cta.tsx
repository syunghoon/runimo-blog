"use client";

import RiveTest from "@/app/_components/rive-test";

const handleClick = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "runimo-appstore" });
  window.open("https://apps.apple.com/kr/app/%EB%9F%AC%EB%8B%88%EB%AA%A8/id6743544062?l", "_blank");
};

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-primary-bg to-primary-400 py-28 text-center dark:from-primary-bg dark:to-primary-400">
      <div className="mx-auto flex max-w-3xl flex-col justify-center px-4">
        <h2 className="mb-6 text-4xl font-extrabold text-primary-gray">
          첫걸음이 어렵다면, 우리와 함께해요.
        </h2>
        <p className="mb-10 text-lg font-medium text-secondary-gray">
          게임을 통한 러닝 습관 형성 서비스, 러니모
          <br />
          러니모 서비스 정식 출시
        </p>
        <div className="h-64 w-full">
          <RiveTest></RiveTest>
        </div>
        <button onClick={handleClick} className="cursor-pointer rounded-lg bg-primary-bg px-6 py-3">
          <h6>App Store에서 받기</h6>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
