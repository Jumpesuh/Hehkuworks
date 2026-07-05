import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      <div
        className="container"
        style={{ padding: "80px 0", textAlign: "center" }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span
            style={{
              color: "#a67c52",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Meidän tarinamme
          </span>
          <h2 style={{ fontSize: "36px", marginTop: "10px" }}>
            100 % Kotimaista Käsityötä
          </h2>
          <p style={{ color: "#555" }}>
            HehkuWorks valmistaa suomalaisesta koivuvanerista käsin tehtyjä
            valaisimia. Tavoitteenamme on luoda tilaan turvallinen ja pehmeä
            ilmapiiri, joka auttaa rentoutumaan arjen keskellä. Pehmeä valo
            muuttaa huoneen hetkessä rauhalliseksi, kutsuvaksi ja pörröiseksi
            pakopaikaksi.
          </p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link href="/mallisto">
            <button
              className="btn-view"
              style={{ width: "auto", padding: "15px 50px" }}
            >
              Tutustu Mallistoon
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
