'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={`fixed top-0 w-full h-14 ${isScrolled ? "bg-yellow-700/95" : "bg-transparent"} duration-500`}>
            <Link href='/' className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl p-2">KoHi</Link>
            <Link href='/' className="absolute right-0 top-1/2 -translate-y-1/2 p-2">menu</Link>
        </nav>
    );
}