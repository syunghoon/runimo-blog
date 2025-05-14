import Image from "next/image";
import Container from "@/app/_components/container";

const testimonials = [
  {
    quote:
      "I appreciate the consistent reminders to be kind and patient with myself as I learn and practice daily habits that are helping me find a calmer daily space.",
    author: "Member on forming more helpful habits",
  },
  {
    quote:
      "Runimo helped me form a consistent running routine with fun characters and light goals. I love seeing my progress!",
    author: "Crew runner",
  },
  {
    quote:
      "I never imagined running could be this cute. I come back just to see what egg hatches next.",
    author: "Beginner runner",
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
