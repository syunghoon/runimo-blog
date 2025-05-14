const AppPreviewSection = () => {
  return (
    <section className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-0 px-5 md:grid-cols-2">
      <div className="flex h-full flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
        <div className="mt-12 flex flex-col gap-2">
          <h6 className="text-primary-400">러닝 습관 형성 서비스 · 러니모</h6>
          <h2 className="mb-6">러닝, 꾸준히 못하겠다고요?</h2>
          <p className="text-xl">
            걱정하지 마세요!
            <br />
            우리는 초보자를 위해 러닝을 게임으로 바꿨어요.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/hero/preview-left.png"
            alt="러니모 캐릭터"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
        <div className="flex w-full items-center justify-center">
          <img
            src="/assets/images/hero/preview-right.png"
            alt="러니모 캐릭터"
            className="h-auto w-full"
          />
        </div>
        <p className="text-xl">
          내가 달려 성장한 만큼, 캐릭터도 성장해요.
          <br />
          같이 일주일에 한 번씩만 달려봐요!
        </p>
      </div>
    </section>
  );
};

export default AppPreviewSection;
