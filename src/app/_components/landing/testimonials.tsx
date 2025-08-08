import Image from "next/image";
import Container from "@/app/_components/container";

const testimonials = [
  {
    quote:
      "매일 아침 달린 습관이 숫자 뿐 아니라 도감이 채워지는 게 눈에 보여서 좋아요! 다음 스테이지 캐릭터도 궁금해요.",
    author: "30대 직장인 러너",
  },
  {
    quote:
      "'모임' 기능을 통해 크루의 다양한 일정들을 생성하고 관리할 수 있어서 편했어요. 빨리 정식 출시됐으면 좋겠습니다!",
    author: "대학교 러닝크루 운영진",
  },
  {
    quote:
      "달릴 때마다 어떤 캐릭터가 알에서 부화할지 기대돼서 계속 들어오게 돼요. 이거 때문에라도 5km씩 뛰고 있어요! ㅋㅋㅎ",
    author: "20대 초보 러너",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-primary-bg py-20">
      <Container>
        <div className="mb-12 flex flex-col items-center justify-center gap-2">
          <div className="flex w-[80%] justify-end">
            <Image
              src="/assets/images/hero/egg-yellow.png"
              alt="Egg left"
              width={160}
              height={160}
              className="rotate-12 md:block"
            />
          </div>

          <h2 className="text-center text-primary-gray">러니모와 함께라면, 마라톤도 가능해요</h2>
          <div className="flex w-[80%]">
            <Image
              src="/assets/images/hero/egg-green.png"
              alt="Egg right"
              width={160}
              height={160}
              className="-rotate-12 md:block"
            />
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex max-w-sm flex-1 flex-col justify-between rounded-xl border border-secondary-fill bg-primary-fill p-6 text-left shadow-sm"
            >
              <p className="mb-4 font-semibold text-primary-gray">{t.quote}</p>
              <div className="mt-auto flex items-center gap-4 pt-4">
                <Image
                  src="/assets/images/hero/avatar-default.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm text-secondary-gray">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
