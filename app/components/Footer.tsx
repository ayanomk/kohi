export default function Footer() {
    return (
        <footer className="bg-secondary ">
            <div className="flex justify-between p-5">
                <div className="w-1/2">
                    <img src="/logo_transparent.png" alt="logo of cafe kohi" className="w-2/3 mb-3 rounded-md" />
                    <p>TEL: 0450 123 456</p>
                </div>
                <div className="flex flex-row self-end w-1/4 justify-end">
                    <img src="/instagram-stroke-rounded.svg" className="w-1/3" />
                    <img src="/facebook-01-stroke-rounded.svg" className="w-1/3" />
                </div>
            </div>
            <p className="text-center mb-2">&copy; 2026 KōHi. All rights reserved.</p>
        </footer>
    );
}