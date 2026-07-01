"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        // console.log("Sign In Attempt:", { email });

        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            // TODO: Replace with your actual sign-in logic
            const { data, error: authError } = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (authError) {
                setError(authError.message || "Invalid email or password.");
            } else {
                setSuccess("Successfully signed in! Welcome back.");
                toast.success('Successfully signed in! Welcome back.')
            }
        } catch (err) {
            setError(`${err}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 font-sans text-slate-700">
            {/* Top Header Section */}
            <header className="mb-8 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-semibold text-[#11698e] leading-tight mb-3">
                    Welcome back to HireZen
                </h1>
                <p className="font-bold text-[15px] text-slate-900 mb-3">
                    Sign in to access thousands of remote and flexible jobs
                </p>
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
                    Continue your journey to find better opportunities with the most trusted remote job platform.
                </p>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

                {/* Sign In Form */}
                <div className="lg:col-span-2 bg-[#f4f4f6] border border-slate-200 rounded-2xl p-5 md:p-8 lg:p-10">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="text-3xl">☀️</span>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#11698e]">
                            Sign In to Your Account
                        </h2>
                    </div>

                    <form onSubmit={handleSignin} className="space-y-6 max-w-2xl mx-auto">
                        
                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700">
                                Email Address <span className="text-[#3881f5]">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700">
                                Password <span className="text-[#3881f5]">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={isVisible ? "text" : "password"}
                                    required
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#11698e] focus:ring-2 focus:ring-[#11698e]/20 bg-white text-base pr-20"
                                />
                                <button
                                    type="button"
                                    onClick={toggleVisibility}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#11698e] hover:text-[#0e5a7a]"
                                >
                                    {isVisible ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Error & Success */}
                        {error && (
                            <div className="p-4 text-sm font-medium rounded-xl border border-red-200 bg-red-50 text-[#3881f5]">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="p-4 text-sm font-medium rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                                {success}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                isLoading={isLoading}
                                isDisabled={isLoading}
                                className="w-full py-7 bg-[#3881f5] text-white font-bold text-lg rounded-2xl shadow-md transition duration-200"
                            >
                                Sign In
                            </Button>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-center">
                            <Link href="/forgot-password" className="text-sm text-[#11698e] hover:underline">
                                Forgot your password?
                            </Link>
                        </div>

                        {/* Terms */}
                        <p className="text-xs text-slate-600 leading-relaxed text-center">
                            By signing in, you agree to our{" "}
                            <Link href="#" className="text-[#11698e] underline">Terms of Use</Link> and{" "}
                            <Link href="#" className="text-[#11698e] underline">Privacy Policy</Link>.
                        </p>

                        {/* Sign Up Link */}
                        <div className="text-center text-sm text-slate-600 pt-6 border-t border-slate-200">
                            Don't have an account?{" "}
                            <Link href="/signup" className="font-medium text-[#11698e] hover:underline">
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Benefits Sidebar */}
                <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-white space-y-6">
                    <h3 className="text-2xl font-bold text-[#11698e] text-center pb-4 border-b">
                        Why HireZen?
                    </h3>

                    {[
                        { emoji: "💼", title: "Remote and Flexible Jobs", desc: "Biggest hand-screened database of remote jobs" },
                        { emoji: "🛡️", title: "Ad-Free, Scam-Free", desc: "Trusted employers from around the world" },
                        { emoji: "💡", title: "Job Search Resources", desc: "Checklists, guides & expert webinars" },
                        { emoji: "⭐", title: "Special Savings", desc: "Discounts on 60+ useful tools & services" },
                        { emoji: "😊", title: "Great Service", desc: "Friendly support team always ready to help" },
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