"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightFromSquare, Bell, Envelope, Gear, House, Magnifier, Person,} from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";

const navItems = [
    { icon: House, label: "Home", href: "/dashboard" },
    { icon: Magnifier, label: "Search", href: "/dashboard/search" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
    { icon: Envelope, label: "Messages", href: "/dashboard/messages" },
    { icon: Person, label: "Profile", href: "/dashboard/profile" },
    { icon: Gear, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    const { data: session, isPending } = useSession()
    const user = session?.user

    const handleSignOut = async () => {
        await signOut();
        router.refresh();
        router.push('/')
    };

    return (
        <aside className="hidden lg:flex w-60 shrink-0 bg-white sticky top-0 h-screen shadow-sm rounded-sm">
            <div className="flex flex-col w-full p-5">

                {/* user */}
                <div className="mb-5">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt={user?.name}
                                src={user?.image}
                            />
                            <Avatar.Fallback delayMs={300}>
                                {user?.name?.charAt(0).toUpperCase()}
                            </Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col min-w-0 flex-1 ">
                            <p className="text-sm leading-5 font-medium truncate">{user?.name}</p>
                            <p className="text-xs leading-none text-muted truncate">{user?.email}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    {navItems.map(({ icon: Icon, label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className=
                            {`flex items-center gap-3 rounded-lg px-4 py-2 transition ${pathname === href
                                ? "bg-[#004f6e] text-white"
                                : "text-gray-600 hover:bg-[#004f6e] hover:text-white"
                                }`}                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{label}</span>
                        </Link>
                    ))}
                </nav>

                {/* logout btn */}
                <div className="mt-auto pt-6 border-t">
                    <Dropdown.Menu>
                        <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                            <div
                                onClick={handleSignOut}
                                className="flex w-full items-center justify-between gap-2 px-3">
                                <Label>Log Out</Label>
                                <ArrowRightFromSquare className="size-3.5 text-danger" />
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </div>

            </div>
        </aside>
    );
}