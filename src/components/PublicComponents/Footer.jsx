import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const PublicFooter = () => {
  const col1Links = [
    "New Remote Jobs Hiring Now",
    "Remote Jobs Near Me",
    "Part-Time Remote Jobs",
    "Entry Level Remote Jobs",
    "Freelance Remote Jobs",
    "Browse Remote Jobs by Category",
    "Full-Time Remote Jobs",
    "Work from Anywhere Jobs",
  ];

  const col2Links = [
    "About Us",
    "How HireZen Works",
    "Pricing",
    "Careers",
    "Affiliate Program",
    "Contact Us",
    "Fraud Awareness",
  ];

  const col3Links = [
    "Resume Builder",
    "Interview Tips",
    "Remote Companies",
    "Career Guides",
    "Salary Insights",
    "Remote Work Trends",
    "Blog",
  ];

  return (
    <footer className="mt-20 border-t bg-linear-to-b from-white to-slate-50">
      <div className="w-11/12 max-w-7xl mx-auto py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#060b30]">
              Hire<span className="text-[#3881f5]">Zen</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-7 text-sm">
              Discover thousands of remote opportunities from trusted companies
              worldwide. Build your dream career from anywhere.
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaLinkedinIn, FaGithub, FaXTwitter].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="h-10 w-10 rounded-full border flex items-center justify-center text-gray-500 hover:bg-[#060b30] hover:text-white hover:border-[#060b30] duration-300"
                  >
                    <Icon size={16} />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-lg text-[#060b30] mb-5">
              Remote Jobs
            </h3>

            <ul className="space-y-3">
              {col1Links.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#3881f5] transition-all hover:translate-x-1 inline-block duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg text-[#060b30] mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              {col2Links.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#3881f5] transition-all hover:translate-x-1 inline-block duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg text-[#060b30] mb-5">
              Resources
            </h3>

            <ul className="space-y-3">
              {col3Links.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#3881f5] transition-all hover:translate-x-1 inline-block duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} HireZen. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-500 hover:text-[#3881f5] duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-[#3881f5] duration-300"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-[#3881f5] duration-300"
            >
              Cookies
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-[#3881f5] duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;