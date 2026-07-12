import Link from "next/link";

export default function Footer() {

return (

<footer className="bg-black text-white py-20">

<div className="container grid md:grid-cols-4 gap-10">

<div>

<h2 className="text-3xl font-bold">

VESTRA

</h2>

<p className="mt-5">

Professional Fabric Care.

</p>

</div>

<div>

<h3 className="font-bold mb-4">

Quick Links

</h3>

<ul className="space-y-3">

<li><Link href="/">Home</Link></li>

<li><Link href="/about">About</Link></li>

<li><Link href="/products">Products</Link></li>

<li><Link href="/contact">Contact</Link></li>

</ul>

</div>

<div>

<h3 className="font-bold mb-4">

Contact

</h3>

<p>

+256707128442

</p>

<p>

vestradetergent@gmail.com

</p>

</div>

<div>

<h3 className="font-bold mb-4">

Newsletter

</h3>

<input
type="email"
placeholder="Enter Email"
className="w-full p-3 rounded text-black"
/>

<button className="btn-primary mt-4 w-full">

Subscribe

</button>

</div>

</div>

<div className="text-center mt-12">

© 2026 VESTRA. All Rights Reserved.

</div>

</footer>

)

}
