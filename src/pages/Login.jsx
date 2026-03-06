import Button from "../components/buttons/Buttons";
import AllinputFields from "../components/inputs/AllinputFields";

export default function Login() {
    return (
        <main className="relative">
            <section className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src="../public/img/logo.png" alt="Logo " className="border border-gray-300 rounded-full" />
                    <p className="text-3xl font-semibold text-white">
                        <span className="">AETHER</span>
                        <span className="text-[#1cbcec]">.AI</span>
                    </p>
                </div>
                <div>
                    <Button buttonText={"Sign In"} variant={"primary"} />
                </div>
            </section>
            <section className="px-12 py-16 flex flex-col space-y-7 max-w-4xl">
                <div className="flex items-center  space-x-4 border p-4 rounded-full bg-[#1cbcec]/20 border-[#1cbcec]  ">
                    <p className="text-2xl bg-[#1cbcec] rounded-full h-4 w-4"></p>
                    <p className="text-xl text-[#1cbcec]">Join the closed beta</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="flex gap-2 tracking-wide flex-col text-7xl text-white font-bold cursor-vertical-text">
                        <span >Transcend the</span>
                        <span className="text-[#1cbcec]">Infinite.</span>
                    </p>
                    <p className="text-[#526c77] text-xl text-wrap">Deploy hyper-intelligent agents with neural-link precision. <br />
                        Experience the next evolution of autonomous computation.</p>
                </div>
                <div className="flex">
                    <p className="flex flex-col  text-[#dfdee8]">
                        <span className="tracking-widest text-2xl">12ms</span>
                        <span className="text-xs">
                            Latency Response
                        </span>
                    </p>
                    <p className="flex flex-col text-[#dfdee8]">
                        <span lassName="tracking-widest text-2xl"> 99.9%</span>
                        <span className="text-xs">Uptime Guarantee</span>
                    </p>
                    <p className="flex flex-col text-[#dfdee8]">
                        <span className="tracking-widest text-2xl">Zero</span>
                        <span className="text-xs">
                            Config Setup
                        </span>
                    </p>
                </div>
            </section>
            <section className="absolute ">
                <AllinputFields
                    label="Username"
                    placeholder="Enter username"
                    
                    onChange={(e) => setUsername(e.target.value)}
                />
            </section>
        </main>
    )
}