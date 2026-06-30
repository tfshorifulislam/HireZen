"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { signUp } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

export default function SignupPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("seeker");

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const router = useRouter()

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignup = async (e) => {
        e.preventDefault();

        console.log("Form Submitted Successfully! Data Received:", {
            firstName,
            lastName,
            fullName: `${firstName} ${lastName}`.trim(),
            email,
            confirmEmail,
            password,
            role
        });

        if (email !== confirmEmail) {
            setError("Emails do not match!");
            return;
        }

        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            const { data, error: authError } = await signUp.email({
                email,
                password,
                name: `${firstName} ${lastName}`.trim(),
                role,
            });

            if (authError) {
                setError(authError.message || "Something went wrong during signup.");
            } else {
                setSuccess("Account created successfully! Welcome.");
                setFirstName("");
                setLastName("");
                setEmail("");
                setConfirmEmail("");
                setPassword("");
                router.push('/')
            }
        } catch (err) {
            setError(`${err}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 font-sans text-slate-700">

            <header className="mb-8 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-semibold text-[#11698e] leading-tight mb-3">
                    Discover a faster, safer, and easier way to find the best remote and flexible jobs!
                </h1>
                <p className="font-bold text-[15px] text-slate-900 mb-3">
                    HireZen is a game-changing resource if you are interested in a remote or flexible job!
                </p>
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
                    As the leading, most trusted job service in these specialties, we offer many benefits to help{" "}
                    <a href="#" className="text-[#11698e] underline hover:text-cyan-800">
                        our members find great jobs
                    </a>{" "}
                    faster, easier, and more safely!
                </p>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

                {/* Signup Form */}
                <div className="lg:col-span-2 bg-[#f4f4f6] border border-slate-200 rounded-2xl p-5 md:p-8 lg:p-10">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="text-3xl">☀️</span>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#11698e]">
                            Sign Up Today to Start Your Job Search!
                        </h2>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6 max-w-2xl mx-auto">


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-slate-700">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700">
                                Confirm Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Confirm Email"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={isVisible ? "text" : "password"}
                                    required
                                    placeholder="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base pr-20"
                                />
                                <button
                                    type="button"
                                    onClick={toggleVisibility}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#11698e]"
                                >
                                    {isVisible ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-semibold text-slate-700">
                                I want to join as <span className="text-red-500">*</span>
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRole("seeker")}
                                    className={`p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center text-center
                                        ${role === "seeker"
                                            ? "border-[#11698e] bg-[#11698e]/5 shadow-sm"
                                            : "border-slate-200 hover:border-slate-300"}`}
                                >
                                    <div className="text-4xl mb-3">🔍</div>
                                    <h4 className="font-semibold text-lg">Job Seeker</h4>
                                    <p className="text-sm text-slate-500 mt-1">Looking for remote or flexible jobs</p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setRole("recruiter")}
                                    className={`p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center text-center
                                        ${role === "recruiter"
                                            ? "border-[#11698e] bg-[#11698e]/5 shadow-sm"
                                            : "border-slate-200 hover:border-slate-300"}`}
                                >
                                    <div className="text-4xl mb-3">🏢</div>
                                    <h4 className="font-semibold text-lg">Recruiter</h4>
                                    <p className="text-sm text-slate-500 mt-1">Hiring talent for my company</p>
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 text-sm font-medium rounded-xl border border-red-200 bg-red-50 text-red-700">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="p-4 text-sm font-medium rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                                {success}
                            </div>
                        )}

                        <div className="pt-4">
                            <Button
                                type="submit"
                                isLoading={isLoading}
                                isDisabled={isLoading}
                                className="w-full py-7 bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold text-lg rounded-2xl shadow-md transition duration-200"
                            >
                                Sign Up Today!
                            </Button>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed text-center">
                            By signing up, you agree to our{" "}
                            <Link href="#" className="text-[#11698e] underline">Terms of Use</Link> and{" "}
                            <Link href="#" className="text-[#11698e] underline">Privacy Policy</Link>.
                        </p>

                        <div className="text-center text-sm text-slate-600 pt-4 border-t border-slate-200">
                            Already have an account?{" "}
                            <Link href="/signin" className="font-medium text-[#11698e] hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-white space-y-6">
                    <h3 className="text-2xl font-bold text-[#11698e] text-center pb-4 border-b">
                        HireZen Benefits
                    </h3>

                    {[
                        { emoji: "💼", title: "Remote and Flexible Jobs", desc: "Biggest hand-screened database of remote jobs" },
                        { emoji: "🛡️", title: "Ad-Free, Scam-Free", desc: "Trusted employers from around the world" },
                        { emoji: "💡", title: "Job Search Resources", desc: "Checklists, guides & expert webinars" },
                        { emoji: "⭐", title: "Special Savings", desc: "Discounts on 60+ useful tools & services" },
                        { emoji: "😊", title: "Great Service", desc: "Friendly support team always ready to help" },
                        { emoji: "🏅", title: "Satisfaction Guaranteed", desc: "And much more!" }
                    ].map((item, i) => (
                        <div key={i} className="text-center pb-6 border-b last:border-none flex flex-col items-center">
                            <div className="text-3xl mb-3">{item.emoji}</div>
                            <h4 className="font-semibold text-[#11698e] mb-1.5">{item.title}</h4>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}