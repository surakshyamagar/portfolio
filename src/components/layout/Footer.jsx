import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

import Container from "../common/Container";
import SocialLinks from "../common/SocialLinks";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-stone-50">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-gray-900">
            Surakshya<span className="text-emerald-600">.</span>
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Software Engineering Graduate & Aspiring Software Developer
          </p>
        </div>

        <SocialLinks />

        <Link
          to="home"
          smooth
          duration={500}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-emerald-500 hover:text-emerald-600"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </Link>
      </Container>

      <div className="border-t border-gray-200 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Surakshya Roka Magar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;