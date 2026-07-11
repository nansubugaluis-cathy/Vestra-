"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container flex items-center justify-between py-5">

        <Link
          href="/"
          className="text-3xl font-bold text-green-700"
        >
          VESTRA
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/products">Products</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/login">Login</Link>

        </nav>

      </div>
    </header>
  );
}
