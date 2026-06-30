'use client'

import { useSession } from "@/lib/auth-client";
import { motion } from "framer-motion";
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

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const permissionContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.15,
            },
        },
    };

    const permissionItem = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.35,
                ease: "easeOut",
            },
        },
    };


    const activityContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const activityItem = {
        hidden: {
            opacity: 0,
            x: -30,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6">
            <div className=" mx-auto space-y-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
                >
                    <div className="h-2 bg-gradient-to-r from-[#004f6e] to-[#ff5429]" />

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 0.5,
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 2,
                                    }}
                                    className="p-1 rounded-full bg-gradient-to-r from-[#004f6e] to-[#ff5429]"
                                >
                                    <img
                                        src={
                                            user?.image ||
                                            `https://ui-avatars.com/api/?name=${user?.name}`
                                        }
                                        alt={user?.name}
                                        className="w-28 h-28 rounded-full object-cover bg-white"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                    }}
                                    className="text-center sm:text-left"
                                >
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
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.5,
                                }}
                                className="flex gap-3"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-3 rounded-xl bg-[#004f6e] text-white font-medium"
                                >
                                    Edit Profile
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-3 rounded-xl border border-[#004f6e] text-[#004f6e] hover:bg-[#004f6e] hover:text-white transition"
                                >
                                    Security
                                </motion.button>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6"
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 cursor-pointer"
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

                                    <motion.div
                                        whileHover={{
                                            rotate: 10,
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#ff5429]/10 shrink-0 group-hover:bg-[#ff5429] transition-colors duration-300"
                                    >
                                        <Icon className="h-6 w-6 text-[#ff5429] group-hover:text-white transition-colors duration-300" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Information Section */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Account Info */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
                    >
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
                    </motion.div>

                    {/* Security */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
                    >
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
                            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "96%" }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.4,
                                    }}
                                    className="h-3 rounded-full bg-gradient-to-r from-[#004f6e] to-[#ff5429]"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Permissions */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
                >
                    <h2 className="text-xl font-bold text-[#004f6e] mb-6">
                        Admin Permissions
                    </h2>

                    <motion.div
                        variants={permissionContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {permissions.map((permission) => (
                            <motion.span
                                key={permission}
                                variants={permissionItem}
                                whileHover={{
                                    scale: 1.08,
                                    y: -3,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                }}
                                className="px-4 py-2 rounded-full bg-[#004f6e]/10 text-[#004f6e] font-medium cursor-pointer hover:bg-[#004f6e] hover:text-white transition-colors duration-300"
                            >
                                {permission}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
                >
                    <h2 className="text-xl font-bold text-[#004f6e] mb-6">
                        Recent Activity
                    </h2>

                    <motion.div
                        variants={activityContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {[
                            "Logged into admin dashboard",
                            "Updated profile information",
                            "Approved a company account",
                            "Reviewed job applications",
                        ].map((activity) => (
                            <motion.div
                                key={activity}
                                variants={activityItem}
                                whileHover={{ x: 8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ActivityItem text={activity} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
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