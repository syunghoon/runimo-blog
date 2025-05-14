import Container from "@/app/_components/container";

const features = [
  {
    title: "달리기로 알을 부화시키세요!",
    desc: "나만의 동물을 모으는 재미를 느껴보세요.",
    image: "/assets/images/hero/feature-egg.png",
  },
  {
    title: "다양한 캐릭터를 수집하세요!",
    desc: "달린 거리에 따라 다양한 친구들이 찾아올 거예요.",
    image: "/assets/images/hero/feature-collect.png",
  },
  {
    title: "더 많은 기능이 기다리고 있어요!",
    desc: "친구와 함께 달리는 ‘모임’ 기능이 곧 출시됩니다.",
    image: "/assets/images/hero/feature-coming-1.png",
  },
];

const FeatureSection = () => {
  return (
    <section className="mt-12 bg-primary-bg py-20">
      <Container>
        <div className="mx-auto max-w-4xl space-y-20 px-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10 md:gap-20`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-auto w-full max-w-[300px]"
              />
              <div className="max-w-md text-center md:text-left">
                <h3 className="mb-2 text-2xl font-extrabold text-primary-400">{feature.title}</h3>
                <p className="text-base leading-relaxed text-secondary-gray">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureSection;
