import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";

const ContactMe = () => {
  const socialButtons = [
    { name: "/images/github.svg", link: "https://github.com/AakashRaj20" },
    { name: "/images/gmail.svg", link: "mailto:aakashraj914@gmail.com" },
    {
      name: "/images/linkedin.svg",
      link: "https://www.linkedin.com/in/aakashraj20/",
    },
    { name: "/images/twitter.svg", link: "https://twitter.com/AakashRaj2003" },
    {
      name: "/images/upwork.svg",
      link: "https://www.upwork.com/freelancers/~01fe460af3874bf516?viewMode=1",
    },
  ];

  return (
    <div
      className="md:px-4 lg:pl-24 lg:pr-8 xl:px-24 px-2 flex flex-col gap-y-10"
      id="contact"
    >
      <h5 className="text-4xl md:text-5xl text-center lg:text-start text-white">
        Contact Me
      </h5>
      <div className="text-white flex lg:justify-between flex-wrap lg:flex-nowrap gap-y-10 justify-center">
        <div className="flex flex-col gap-y-5 text-center lg:text-start">
          <h3 className="text-3xl font-semibold">Get a Quote </h3>
          <div className="text-2xl flex flex-col gap-y-5">
            <p>&quot;Let&apos;s Create Something Amazing Together!</p>
            <p>
              Are you looking to bring your ideas to life? As a full-stack
              developer, I&apos;m here to collaborate with you and turn your
              vision into reality. Whether you need a sleek website, a powerful
              web application, or anything in between, I&apos;ve got you
              covered.
            </p>
            <p>
              With a passion for innovation and a knack for problem-solving, I
              thrive on building custom solutions tailored to your unique needs.
              Let&apos;s connect and embark on a journey to create something
              truly remarkable.
            </p>
            <p>
              Get in touch today for a personalized quote and let&apos;s start
              building greatness together!&quot;
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            {socialButtons.map((SocialButton, index) => (
              <div key={index} className="bg-transparent px-2 py-1">
                <Link href={SocialButton.link} target="_blank">
                  <Image
                    className="bg-white rounded-lg"
                    src={SocialButton.name}
                    alt={SocialButton.name}
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xl">
            <span className="text-3xl font-semibold">Email:</span>{" "}
            aakashraj914@gmail.com
          </p>
          <p className="text-xl">
            <span className="text-3xl font-semibold">Phone:</span>{" "}
            +91-6203-710-265
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
