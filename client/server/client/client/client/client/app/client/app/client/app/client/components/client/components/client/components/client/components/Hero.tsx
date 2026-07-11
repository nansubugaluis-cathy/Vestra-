"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-r from-green-50 to-white pt-32"
    >
      <div className="container">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl font-bold max-w-3xl"
        >
          Professional Fabric Care.
          <br />
          Engineered for Excellence.
        </motion.h1>

        <motion.p

          initial={{ opacity:0 }}

          animate={{ opacity:1 }}

          transition={{ delay:.3 }}

          className="mt-8 text-xl max-w-3xl leading-9"
        >
          VESTRA develops premium cleaning solutions
          engineered for professional garment care,
          advanced fabric protection and exceptional
          cleaning performance.
        </motion.p>

        <div className="flex gap-5 mt-12">

          <button className="btn-primary">
            Explore Products
          </button>

          <button className="btn-outline">
            Become a Distributor
          </button>

        </div>

      </div>

    </section>
  );
}
