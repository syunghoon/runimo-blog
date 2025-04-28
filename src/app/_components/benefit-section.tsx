import Image from 'next/image'

export default function BenefitSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          러니모와 함께라면, 마라톤도 가능해요
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/images/benefit-1.png"
                alt="Benefit 1"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600">
              I appreciate the consistent reminders to be kind and patient with myself as I learn and grow.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/images/benefit-2.png"
                alt="Benefit 2"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600">
              I appreciate the consistent reminders to be kind and patient with myself as I learn and grow.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/images/benefit-3.png"
                alt="Benefit 3"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600">
              I appreciate the consistent reminders to be kind and patient with myself as I learn and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 