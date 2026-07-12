const products = [
  {
    name: "ECOSUIT",
    description: "Professional cleaner for suits and structured garments."
  },
  {
    name: "Wool & Delicate Wash",
    description: "Specially formulated for wool, cashmere and delicate fabrics."
  },
  {
    name: "SilkCare",
    description: "Premium care solution for silk garments."
  },
  {
    name: "Coming Soon",
    description: "More innovative fabric care products are under development."
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container">

        <h2 className="text-5xl font-bold mb-12">

          Featured Products

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <div className="h-56 bg-gray-200 flex items-center justify-center">

                Product Image

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">

                  {product.name}

                </h3>

                <p className="mt-4 text-gray-600">

                  {product.description}

                </p>

                <button className="btn-primary mt-6">

                  View Product

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
