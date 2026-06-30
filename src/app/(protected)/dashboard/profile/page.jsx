'use client'

import { useSession } from "@/lib/auth-client";
import {
    Shield,
    Mail,
    Calendar,
    User,
    CheckCircle2,
    Users,
    Briefcase,
    Building2,
    FileText,
    Activity,
    Lock,
} from "lucide-react";

const AdminProfilePage = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="p-6 space-y-6 animate-pulse">
                <div className="h-52 bg-gray-200 rounded-3xl" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-28 bg-gray-200 rounded-2xl" />
                    ))}
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="h-72 bg-gray-200 rounded-2xl" />
                    <div className="h-72 bg-gray-200 rounded-2xl" />
                </div>
            </div>
        );
    }

    const stats = [
        {
            title: "Total Users",
            value: "2,540",
            icon: Users,
        },
        {
            title: "Jobs",
            value: "142",
            icon: Briefcase,
        },
        {
            title: "Companies",
            value: "58",
            icon: Building2,
        },
        {
            title: "Applications",
            value: "8,421",
            icon: FileText,
        },
    ];

    const permissions = [
        "Manage Users",
        "Manage Jobs",
        "Manage Companies",
        "Review Applications",
        "Analytics Access",
        "System Settings",
        "Role Management",
        "Platform Moderation",
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6">
            <div className=" mx-auto space-y-6">

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-[#004f6e] to-[#ff5429]" />

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

                                <div className="p-1 rounded-full bg-gradient-to-r from-[#004f6e] to-[#ff5429]">
                                    <img
                                        src={
                                            user?.image ||
                                            `https://ui-avatars.com/api/?name=${user?.name}`
                                        }
                                        alt={user?.name}
                                        className="w-28 h-28 rounded-full object-cover bg-white"
                                    />
                                </div>

                                <div className="text-center sm:text-left">
                                    <h1 className="text-3xl font-bold text-slate-900">
                                        {user?.name || "Admin User"}
                                    </h1>

                                    <p className="text-slate-500 mt-1">
                                        {user?.email}
                                    </p>

                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">

                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#004f6e]/10 text-[#004f6e]">
                                            Super Admin
                                        </span>

                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#ff5429]/10 text-[#ff5429]">
                                            Active
                                        </span>

                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                                            Verified
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="px-5 py-3 rounded-xl bg-[#004f6e] text-white font-medium hover:opacity-90 transition">
                                    Edit Profile
                                </button>

                                <button className="px-5 py-3 rounded-xl border border-[#004f6e] text-[#004f6e] font-medium hover:bg-[#004f6e] hover:text-white transition">
                                    Security
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.title}
                                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="min-w-0">
                                        <p className="text-sm text-slate-500 truncate">
                                            {stat.title}
                                        </p>

                                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#004f6e]">
                                            {stat.value}
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#ff5429]/10 shrink-0">
                                        <Icon className="h-6 w-6 text-[#ff5429]" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Information Section */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Account Info */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-xl font-bold text-[#004f6e] mb-6">
                            Account Information
                        </h2>

                        <div className="space-y-5">

                            <InfoRow
                                icon={<User size={18} />}
                                label="Full Name"
                                value={user?.name || "N/A"}
                            />

                            <InfoRow
                                icon={<Mail size={18} />}
                                label="Email"
                                value={user?.email || "N/A"}
                            />

                            <InfoRow
                                icon={<Shield size={18} />}
                                label="Role"
                                value={user?.role || "Admin"}
                            />

                            <InfoRow
                                icon={<Calendar size={18} />}
                                label="Joined"
                                value={
                                    user?.createdAt
                                        ? new Date(user.createdAt).toLocaleDateString()
                                        : "N/A"
                                }
                            />
                        </div>
                    </div>

                    {/* Security */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-xl font-bold text-[#004f6e] mb-6">
                            Security Overview
                        </h2>

                        <div className="space-y-4">

                            <SecurityItem
                                title="Email Verification"
                                value="Verified"
                            />

                            <SecurityItem
                                title="Two Factor Authentication"
                                value="Enabled"
                            />

                            <SecurityItem
                                title="Session Status"
                                value="Active"
                            />

                            <SecurityItem
                                title="Security Score"
                                value="96%"
                            />

                        </div>

                        <div className="mt-6">
                            <div className="w-full bg-slate-200 rounded-full h-3">
                                <div
                                    className="h-3 rounded-full bg-linear-to-r from-[#004f6e] to-[#ff5429]"
                                    style={{ width: "96%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Permissions */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-xl font-bold text-[#004f6e] mb-6">
                        Admin Permissions
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {permissions.map((permission) => (
                            <span
                                key={permission}
                                className="px-4 py-2 rounded-full bg-[#004f6e]/10 text-[#004f6e] font-medium hover:bg-[#004f6e] hover:text-white transition cursor-pointer"
                            >
                                {permission}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Activity */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-xl font-bold text-[#004f6e] mb-6">
                        Recent Activity
                    </h2>

                    <div className="space-y-5">

                        <ActivityItem text="Logged into admin dashboard" />
                        <ActivityItem text="Updated profile information" />
                        <ActivityItem text="Approved a company account" />
                        <ActivityItem text="Reviewed job applications" />

                    </div>
                </div>

            </div>
        </div>
    );
};

function InfoRow({ icon, label, value }) {
    return (
        <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-[#004f6e]/10 text-[#004f6e]">
                {icon}
            </div>

            <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="font-semibold text-slate-900">{value}</p>
            </div>
        </div>
    );
}

function SecurityItem({ title, value }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
            <div className="flex items-center gap-3">
                <Lock size={18} className="text-[#004f6e]" />
                <span className="font-medium">{title}</span>
            </div>

            <span className="text-[#ff5429] font-semibold">
                {value}
            </span>
        </div>
    );
}

function ActivityItem({ text }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5429]" />
            <p className="text-slate-700">{text}</p>
            <CheckCircle2 className="w-4 h-4 text-green-600 ml-auto" />
        </div>
    );
}

export default AdminProfilePage;