import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target={name !== "Email" ? "_blank" : undefined}
          rel={name !== "Email" ? "noreferrer" : undefined}
          aria-label={name}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;