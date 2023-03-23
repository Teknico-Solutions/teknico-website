import Image from "next/image";
import Link from "next/link";

import SectionHeading from "@/components/SectionHeading";
import { Services } from "@/assets/ServiceVariables";
import ServiceCards from "@/components/ServiceCards";
import ContactForm from "@/components/ContactForm";
import { HomeVariables } from "@/assets/HomeVariables";
import contactFormImage from "../public/images/contact_form_image.jpg";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="w-full h-screen bg-black/70">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src={HomeVariables.heroImage.src}
            alt={HomeVariables.heroImage.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-[#E9ECEF] px-[15px] container max-w-[50%] flex flex-col gap-[20px] justify-center items-center h-full text-center mx-auto">
          <h1>Seamless IT Integration for Your Business Needs</h1>
          <p className="lg:text-[24px]">
            We provide customized IT solutions and services tailored to meet the
            unique needs of your business, ensuring seamless integration and
            optimal performance.
          </p>
          <Link href="" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      {/* about us section */}
      <section className="section-container">
        <div className="">
          <div className="w-full h-[450px] relative">
            <Image
              src={HomeVariables.aboutUsImage.src}
              alt={HomeVariables.aboutUsImage.alt}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-[30px] flex flex-col justify-center gap-[10px] items-start">
            <SectionHeading
              heading="About Us"
              description="Cutting-Edge Technology Solutions for Businesses"
              isCenter={false}
              isMaxWidth
            />
            <p className="leading-[1.75] text-paragraph text-base">
              Teknico Solutions is a leading provider of cutting-edge technology
              solutions that empower businesses to stay ahead in today&apos;
              fast-paced digital landscape. They specialize in a range of
              services, including web development, software development, cloud
              computing, machine learning development, e-commerce development,
              and automation development.
            </p>
            <p className="leading-[1.75] text-paragraph text-base">
              Teknico Solutions&apos; team of experienced professionals is
              committed to delivering innovative solutions tailored to meet the
              unique needs of each client. They pride themselves on their
              ability to build long-lasting partnerships with their clients and
              their dedication to excellence. Whether you&apos;re looking for a
              new website, automation solutions, or machine learning services,
              Teknico Solutions has the expertise to deliver results that will
              help your business thrive.
            </p>
            <Link href={"#"} className="btn-primary-rounded">
              send your enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="section-container">
        <SectionHeading
          heading="Services"
          description="Comprehensive IT Solutions for Business Growth"
          isMaxWidth
        />
        <ServiceCards data={Services} />
      </section>

      {/* team section */}
      <section className="section-container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="w-full h-[450px] relative lg:h-full">
            <Image
              src={HomeVariables.teamImage.src}
              alt={HomeVariables.teamImage.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-[30px] flex flex-col justify-center gap-[10px] items-start lg:py-[1.5rem]">
            <SectionHeading
              heading="Our Team"
              description="Experienced IT Professionals for Innovative Solutions"
              isCenter={false}
              isMaxWidth
            />
            <p className="text-paragraph">
              Welcome to our team of IT experts! With a deep understanding of
              the industry and a passion for technology, we specialize in
              providing innovative and reliable IT solutions to businesses of
              all sizes.
            </p>
            <p className="text-paragraph">
              Our team offers a range of services tailored to meet the unique
              needs of our clients. We believe in collaboration and
              communication, working closely with our clients to deliver
              transparent and accessible solutions that drive business success.
              Thank you for considering our team for your IT needs. We look
              forward to working with you.
            </p>
            <Link href={"#"} className="btn-primary-rounded">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* project section */}
      <section className="section-container">
        <SectionHeading
          heading="Feature Works"
          description="Discover Our Diverse and Innovative Top Projects"
        />
        <div className="mt-[50px] flex flex-col gap-[20px] justify-center items-center">
          <div>
            <div className="h-[200px] w-[200px] relative">
              <Image
                src={HomeVariables.comingSoonImage.src}
                alt={HomeVariables.comingSoonImage.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <Link href={"#"} className="btn-primary-rounded">
            SHOW ALL
          </Link>
        </div>
      </section>

      {/* contact form */}
      <section className="bg-black/30 py-[50px] mt-[90px] relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src={contactFormImage} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-[30px] lg:flex-row-reverse">
          <div className="lg:self-start p-[30px] flex flex-col gap-[20px]">
            <div>
              <span className="form-label text-[#fff]">Company</span>
              <h3 className="text-[#fff]">Teknico Solutions</h3>
            </div>
            <div>
              <span className="form-label text-[#fff]">email</span>
              <h3 className="text-[#fff]">hello@teknico.dev</h3>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
