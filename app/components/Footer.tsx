export default function Footer() {
    return (
        <footer className="bg-secondary flex flex-col items-center">
            <div className="flex justify-between items-end p-5 w-full max-w-6xl mx:auto">
                <div className="w-1/2 md:w-2/5 lg:w-1/3">
                    <img src="/logo_transparent.png" alt="logo of cafe kohi" className="w-full max-w-[120px] mb-3 rounded-md" />
                    <p>TEL: 0450 123 456</p>
                </div>
                <div className="flex flex-row self-end w-auto">
                    <img src="/instagram-stroke-rounded.svg" className="w-8 h-8" />
                    <img src="/facebook-01-stroke-rounded.svg" className="w-8 h-8" />
                </div>
            </div>
            <p className="text-center mb-2">&copy; 2026 KōHi. All rights reserved.</p>
        </footer>
    );
}