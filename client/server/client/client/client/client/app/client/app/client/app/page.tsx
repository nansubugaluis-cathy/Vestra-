export default function Home() {
  return (
    <main>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#f5f9f7"
        }}
      >

        <div className="container">

          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              maxWidth: "700px"
            }}
          >
            Professional Fabric Care.
            <br />
            Engineered for Excellence.
          </h1>

          <p
            style={{
              marginTop: "25px",
              maxWidth: "700px",
              lineHeight: 1.8,
              fontSize: "18px"
            }}
          >
            VESTRA is a premium fabric care brand dedicated to developing
            high-performance cleaning solutions that combine advanced chemistry,
            innovation, and exceptional garment care.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px"
            }}
          >

            <button className="btn-primary">
              Explore Products
            </button>

            <button className="btn-outline">
              Become a Distributor
            </button>

          </div>

        </div>

      </section>

    </main>
  );
      }
