export default function Footer() {
    return (
        <footer className="bg-secondary ">
            <div className="flex justify-between p-5 md:w-[90%] lg:w-[80%] mx-auto">
                <div className="w-1/2">
                    <img src="/logo_transparent.png" alt="logo of cafe kohi" className="w-full max-w-[120px] mb-3 rounded-md" />
                    <p>TEL: 0450 123 456</p>
                </div>
                <div className="flex flex-row self-end w-1/4 justify-end">
                    <img src="/instagram-stroke-rounded.svg" className="w-full max-w-[40px]" />
                    <img src="/facebook-01-stroke-rounded.svg" className="w-full max-w-[40px]" />
                </div>
            </div>
            <p className="text-center mb-2">&copy; 2026 KōHi. All rights reserved.</p>
        </footer>
    );
}