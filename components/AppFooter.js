import Link from "next/link";
import { FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

const year = new Date().getFullYear();

export function Footer (){
    return (
        <footer className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0 py-4 px-2 md:px-8 lg:px-16">
            <div>
                <p className="text-4xl text-gry-800 font-bold">Bills Limited</p>
                <p className="text-xs text-gray-600">&copy; {year} Bills Limited</p>
            </div>

            <div>
                <p className="text-md text-gray-700">Head Office</p>
                <p className="text-sm text-gray-700">Ladoke Akintola Street, Victria Island, Lagos, Nigeria</p>
            </div>

            <div>
                <ul className="flex lg:items-center gap-4">
                    <li><Link href="#"><FaXTwitter className="text-md"/> </Link></li>
                    <li><Link href="#"><FaYoutube className="text-md"/> </Link></li>
                    <li><Link href="#"><FaTiktok className="text-md"/> </Link></li>
                </ul>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#" className="text-sm text-gray-600">Terms of use</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">privacy policy</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">bug county</Link></li>
                </ul>
            </div>
        </footer>
    )
}