export default function Button({ buttonText, variant, onClick }) {
    const buttonStyles = {
        primary: "border border-[#1cbcec] text-[#1cbcec] px-6 py-1.5 rounded-full hover:bg-[#1cbcec] hover:text-black transition duration-300",
        secondary: "bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300",
    };
    return (
        <main>
            <section>
                <button className={buttonStyles[variant]} onClick={onClick}>
                    {buttonText}
                </button>
            </section>
        </main>
    )
}