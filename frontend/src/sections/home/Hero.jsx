import Image from "next/image";
import heroImg from "../../app/assets/hero.jpg"
const Hero = () => {
  return (
    <section className="section-padding">

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>

          <p className="text-primary font-semibold mb-4 uppercase tracking-widest text-sm">
            Trusted Brush Manufacturers
          </p>

          <h1 className="heading-primary mb-6">
            Quality Industrial Brushes For Every Need
          </h1>

          <p className="paragraph mb-8 max-w-xl">
            Milton Brush Ware manufactures durable and reliable
            industrial brushes designed for commercial and industrial
            applications with precision and quality craftsmanship.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="bg-primary text-white px-7 py-4 rounded-md font-medium hover:bg-secondary   transition">
              Explore Products
            </button>

            <button className="border border-primary text-primary px-7 py-4 rounded-md font-medium hover:bg-primary hover:text-white transition">
              Contact Us
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative w-full h-[31rem]">

          <Image
            src={heroImg}
            alt="Industrial Brushes"
            fill
            className="object-cover rounded-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;