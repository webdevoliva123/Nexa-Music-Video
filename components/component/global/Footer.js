import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      name: "Leagal",
      href: "/legal",
    },
    {
        name: "Privacy center",
        href: "/privacy-center",
      },
      {
        name: "Privacy policy",
        href: "/privacy-policy",
      },
      {
        name: "Cookies",
        href: "/cookies",
      },
      {
        name: "About Ads",
        href: "/about-ads",
      },
      {
        name: "Accessibility",
        href: "/accessibility",
      }
  ];
  return (
  <div className="w-full">
    <div className="w-full flex flex-wrap justify-start items-start gap-x-4 gap-y-2 ">
        {
            links.map((link,idx) => {
                return (
                    <Link key={idx} href={link.href} className="text-xs font-light text-[#ccc] hover:text-green">{link.name}</Link>
                )
            })
        }
    </div>
  </div>
  );
};

export default Footer;
