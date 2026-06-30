"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Magnifier,
  Bell,
  Envelope,
  Person,
} from "@gravity-ui/icons";

const navItems = [
  { icon: House, label: "Home", href: "/dashboard" },
  { icon: Magnifier, label: "Search", href: "/dashboard/search" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: Envelope, label: "Messages", href: "/dashboard/messages" },
  { icon: Person, label: "Profile", href: "/dashboard/profile" },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow lg:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center transition-colors ${
                active
                  ? "text-[#004f6e]"
                  : "text-gray-500 hover:text-[#004f6e]"
              }`}
            >
              <Icon className="w-5 h-5" />

              <span className="mt-1 text-[11px] font-medium">
                {label}
              </span>

              {active && (
                <span className="absolute bottom-0 h-1 w-10 rounded-full bg-[#ff5429]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}