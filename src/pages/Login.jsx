import { useState } from "react";
import Button from "../components/buttons/Buttons";
import AllinputFields from "../components/inputs/AllinputFields";
import { AtSign, User, Lock, Sparkles, Check, ArrowRight, Zap, Shield, Cpu } from "lucide-react";

export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreement: false,
    });

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    console.log(formData)

    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="relative min-h-screen  overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1cbcec]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1cbcec]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
            </div>

            <header className="relative z-50 flex items-center justify-between p-8 backdrop-blur-sm ">
                <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="relative">
                        <img
                            src="/img/logo.png"
                            alt="Logo"
                            className="relative z-10 w-14 h-14 border-2 border-[#1cbcec]/30 rounded-full transition-all duration-300 group-hover:border-[#1cbcec] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#1cbcec]/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white tracking-tight">
                            AETHER<span className="text-[#1cbcec] ml-1">.AI</span>
                        </p>
                        <p className="text-xs text-[#526c77]">Next-Gen Intelligence</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Button
                        buttonText={"Sign In"}
                        variant={"primary"}
                        icon={<Zap className="w-4 h-4" />}
                        className="group"
                    />
                </div>
            </header>
            <div className="relative z-40 container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <section className="space-y-8 animate-fade-in">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#2f5f6f]/10 border border-[#102126]/30 backdrop-blur-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1cbcec] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1cbcec]"></span>
                            </span>
                            <p className="text-sm font-medium text-[#1cbcec]">Limited Beta Access</p>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                                <span className="block">Transcend the</span>
                                <span className="block text-[#1cbcec] relative">
                                    Infinite.
                                    <Sparkles className="absolute -top-6 -right-12 w-8 h-8 text-[#1cbcec] animate-pulse" />
                                </span>
                            </h1>

                            <p className="text-[#8a9ca8] text-xl leading-relaxed max-w-xl">
                                Deploy hyper-intelligent agents with neural-link precision.
                                Experience the next evolution of autonomous computation.
                            </p>
                        </div>

                        {/* Enhanced Stats */}
                        <div className="flex gap-12 pt-4">
                            {[
                                { value: "12ms", label: "Latency Response", icon: Zap },
                                { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
                                { value: "Zero", label: "Config Setup", icon: Cpu },
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="group cursor-default">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Icon className="w-5 h-5 text-[#1cbcec] group-hover:scale-110 transition-transform" />
                                            <span className="text-2xl font-bold text-white tracking-wider">
                                                {stat.value}
                                            </span>
                                        </div>
                                        <span className="text-sm text-[#6b7b85] group-hover:text-[#8a9ca8] transition-colors">
                                            {stat.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Testimonial/Trust Badge */}
                        <div className="flex items-center gap-4 pt-6 border-t border-[#1cbcec]/10">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0b1114] bg-gradient-to-br from-[#1cbcec] to-[#0e7a9e]"></div>
                                ))}
                            </div>
                            <p className="text-sm text-[#6b7b85]">
                                <span className="text-white font-semibold">1,000+</span> developers joined beta
                            </p>
                        </div>
                    </section>
                    <section className="relative animate-slide-up">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#1cbcec] to-[#0e7a9e] rounded-3xl opacity-20 blur-xl"></div>

                        <div className="relative bg-[#0e151a] backdrop-blur-xl border border-[#1cbcec]/20 rounded-3xl p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        Create Account
                                    </h2>
                                    <p className="text-[#8a9ca8]">
                                        Initialize your core profile to begin
                                    </p>
                                </div>

                            </div>

                            <form className="space-y-6"  onSubmit={(e) => e.preventDefault()}>
                                <AllinputFields
                                    name="name"
                                    label="FULL NAME"
                                    placeholder="John Doe"
                                    icon={<User className="w-5 h-5" />}
                                    value={formData.name}
                                    onChange={handleOnChange}
                                />

                                <AllinputFields
                                    name="email"
                                    label="EMAIL ADDRESS"
                                    placeholder="john@example.com"
                                    icon={<AtSign className="w-5 h-5" />}
                                    type="email"
                                    value={formData.email}
                                    onChange={handleOnChange}
                                />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <AllinputFields
                                        name="password"
                                        label="PASSWORD"
                                        placeholder="Create password"
                                        icon={<Lock className="w-5 h-5" />}
                                        type="password"
                                        value={formData.password}
                                        onChange={handleOnChange}
                                    />

                                    <AllinputFields
                                        name="confirmPassword"
                                        label="CONFIRM PASSWORD"
                                        placeholder="Confirm password"
                                        icon={<Lock className="w-5 h-5" />}
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex gap-1 h-1">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className={`flex-1 h-full rounded-full transition-all duration-300 ${i <= 2 ? 'bg-[#1cbcec]' : 'bg-[#1cbcec]/20'
                                                    }`}
                                            ></div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-[#6b7b85]">
                                        Password strength: <span className="text-[#1cbcec]">Medium</span>
                                    </p>
                                </div>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={formData.agreement}
                                            onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                                        />
                                        <div className="w-5 h-5 border-2 border-[#2a3a42] rounded bg-[#0e151a] peer-checked:border-[#1cbcec] peer-checked:bg-[#1cbcec] transition-all duration-200 group-hover:border-[#1cbcec]/50"></div>
                                        <Check className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-sm text-[#8a9ca8]">
                                        I agree to the{' '}
                                        <a href="#" className="text-[#1cbcec] hover:underline">Terms of Service</a>
                                        {' '}and{' '}
                                        <a href="#" className="text-[#1cbcec] hover:underline">Privacy Policy</a>
                                    </span>
                                </label>

                                <Button
                                    buttonText={"Create Account"}
                                    variant={"primary"}
                                    icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                    className="w-full py-4 text-lg font-semibold group"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                />
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#1cbcec]/10"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-[#0e151a] text-[#6b7b85]">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#2a3a42] rounded-xl text-[#8a9ca8] hover:border-[#1cbcec] hover:text-white transition-all duration-300 group">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        <span className="text-sm">Google</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#2a3a42] rounded-xl text-[#8a9ca8] hover:border-[#1cbcec] hover:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                        <span className="text-sm">GitHub</span>
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-center text-sm text-[#6b7b85]">
                                Already have an account?{' '}
                                <a href="#" className="text-[#1cbcec] font-medium hover:underline">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="relative z-40 text-center py-4 text-xs text-[#526c77] border-t border-[#1cbcec]/10">
                © 2024 AETHER.AI - Next Generation AI Platform. All rights reserved.
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                }
            `}</style>
        </main>
    );
}