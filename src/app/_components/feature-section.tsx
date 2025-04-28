import Image from 'next/image'

function FeatureCard({ title, description, imageSrc, imageAlt }: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function FeatureSection() {
  const features = [
    {
      title: "러닝, 꾸준히 못하셨나요?",
      description: "러닝을 시작하고 기록하는 것부터 차근차근 도와드릴게요.",
      imageSrc: "/images/feature-running.png",
      imageAlt: "Running Feature"
    },
    {
      title: "달리기로 앱을 부화시켜요!",
      description: "나만의 특별한 러닝 메이트와 함께 뛰어보세요.",
      imageSrc: "/images/feature-character.png",
      imageAlt: "Character Feature"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
} 