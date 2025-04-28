import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              러닝을 즐겁게!
            </h1>
            <p className="text-gray-600 mb-8">
              나만의 러닝메이트와 함께 뛰어보세요!
              <br />
              그냥 뛰기 시작해요
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              뛰기 시작하기
            </button>
          </div>
          <div className="relative w-full max-w-lg">
            <Image
              src="/images/hero-characters.png"
              alt="Runimo Characters"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 