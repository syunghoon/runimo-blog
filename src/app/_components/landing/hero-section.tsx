import Container from "@/app/_components/container";

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
              5월 출시 예정.
            </h4>
            <button className="mt-8 cursor-pointer rounded-lg bg-primary-400 px-6 py-3">
              <h4 className="text-white">출시 알림 받기</h4>
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
