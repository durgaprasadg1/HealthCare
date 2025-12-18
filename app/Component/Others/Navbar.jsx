"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex sticky justify-between items-center px-10 py-3 text-white bg-linear-to-br from-[#154b85] to-[#3b73b9]">
      <div className="text-xl font-semibold">
        GrameenCare<span className="text-blue-300">+</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm">
        <Link href="/" className="hover:text-blue-200">Home</Link>
        <Link href="/about" className="hover:text-blue-200">About Us</Link>
        <Link href="/contact" className="hover:text-blue-200">Contact Us</Link>
        <Link href="/how-it-works" className="hover:text-blue-200">How It Works</Link>
        
      </div>
      
      <div className="flex gap-2">
        <Link href="/register">
          <Button className="bg-[#0b468a] hover:bg-[#0b2a4d] w-full">
            Create Account
          </Button>
        </Link>

        <Link href="/auth/login">
          <Button className="bg-white text-blue-700 hover:opacity-90 hover:text-white w-full">
            Sign In
          </Button>
        </Link>
      </div>
      
      

    </nav>
  );
}
