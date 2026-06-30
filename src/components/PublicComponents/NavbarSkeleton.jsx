import { useSession } from "@/lib/auth-client";

const NavbarSkeleton = () => {
    const { data: session, isPending } = useSession()
    const user = session?.user

    return (
        <nav className="w-11/12 mx-auto py-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center animate-pulse">

            {/* Top Section */}
            <div className="flex justify-between items-center w-full">

                {/* Menu */}
                <div className="w-8 h-8 bg-gray-200 rounded md:hidden" />

                {/* Logo */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <div className="h-8 w-36 bg-gray-200 rounded" />
                    <div className="h-3 w-28 bg-gray-200 rounded" />
                </div>

                {/* Avatar */}
                {user && <div className="w-10 h-10 rounded-full bg-gray-200" />}
            </div>

            {/* Search */}
            <div className="w-full md:w-[500px] flex justify-center">
                <div className="w-full h-12 bg-gray-200 rounded-md" />
            </div>

        </nav>
    );
};

export default NavbarSkeleton;