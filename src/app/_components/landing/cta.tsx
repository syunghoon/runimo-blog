const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-primary-bg to-primary-400 py-28 text-center dark:from-primary-bg dark:to-primary-400">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-6 text-4xl font-extrabold text-primary-gray">
          첫걸음이 어렵다면, 우리와 함께해요.
        </h2>
        <p className="mb-10 text-lg font-medium text-secondary-gray">
          게임을 통한 러닝 습관 형성 서비스, 러니모
          <br />
          5월 출시 예정.
        </p>
        <button className="cursor-pointer rounded-lg bg-primary-bg px-6 py-3">
          <h6>출시 알림 받기</h6>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
