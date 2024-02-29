import Image from "next/image";
import Link from "next/link";

const Socials = () => {
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
    <div className="floating-social-bar">
      {socialButtons.map((SocialButton, index) => (
        <div key={index} className="bg-transparent px-2 py-1 hover:bg-gray-200 rounded-full">
          <Link href={SocialButton.link} target="_blank">
            <Image
              className="bg-transparent"
              src={SocialButton.name}
              alt={SocialButton.name}
              width={35}
              height={35}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Socials;
