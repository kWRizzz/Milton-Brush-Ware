import Image from "next/image";
import fac from "../../../assets/factory/fac1.jpg"


const stats = [
  {
    number: "20+",
    label: "Years Experience",
  },
  {
    number: "500+",
    label: "Industrial Clients",
  },
  {
    number: "1000+",
    label: "Projects Delivered",
  },
];

const process = [
  "Raw Material Selection",
  "Precision Manufacturing",
  "Quality Inspection",
  "Packaging & Delivery",
];


export default function AboutPage (){

    return (
        <main>

             <section className="bg-primary text-white py-28">

        <div className="container-custom text-center">

          <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
            About Milton Brush Ware
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Trusted Industrial Brush Manufacturers
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Delivering precision-engineered industrial brush solutions
            designed for durability, reliability, and industrial performance.
          </p>

        </div>

      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative w-full h-[500px]">

            <Image
              src={fac}
              alt="Factory"
              fill
              className="object-cover rounded-2xl"
            />

          </div>

          {/* Content */}
          <div>

            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
              Our Story
            </p>

            <h2 className="heading-secondary mb-6">
              Manufacturing Excellence With Quality & Precision
            </h2>

            <p className="paragraph mb-6">
              Milton Brush Ware has been manufacturing industrial
              and commercial brush solutions focused on quality,
              precision, and long-term industrial durability.
            </p>

            <p className="paragraph mb-6">
              Our commitment to advanced manufacturing techniques
              and customer-focused solutions has helped businesses
              across industries achieve efficient operational performance.
            </p>

            <p className="paragraph">
              We continuously innovate and improve our manufacturing
              standards to deliver trusted industrial brush products.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-primary p-10 text-center"
              >

                <h3 className="text-5xl font-bold text-primary mb-4">
                  {item.number}
                </h3>

                <p className="paragraph">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">

        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="border border-primary rounded-2xl p-10">

            <h3 className="text-3xl font-bold mb-5">
              Our Mission
            </h3>

            <p className="paragraph">
              To manufacture reliable industrial brush solutions
              with high-quality standards, innovation, and customer satisfaction.
            </p>

          </div>

          {/* Vision */}
          <div className="border border-primary rounded-2xl p-10">

            <h3 className="text-3xl font-bold mb-5">
              Our Vision
            </h3>

            <p className="paragraph">
              To become a trusted global industrial brush manufacturing
              company known for durability and precision engineering.
            </p>

          </div>

        </div>

      </section>

      {/* Manufacturing Process */}
      <section className="section-padding">

        <div className="container-custom text-center">

          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
            Manufacturing Process
          </p>

          <h2 className="heading-secondary mb-14">
            How We Manufacture Quality Brushes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-primary rounded-2xl p-10"
              >

                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

        </main>
    )
}