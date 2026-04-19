import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
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
            }}
          >
            Meidän tarinamme
          </span>
          <h2 style={{ fontSize: "36px" }}>100 % Kotimaista Käsityötä</h2>
          <p>
            Jokainen HEHKUWERKS-valaisin saa alkunsa puhtaasta suomalaisesta
            puusta – joko tammesta, koivusta tai männystä. Valmistamme jokaisen
            osan omalla verstaallamme intohimolla ja tarkkuudella.
          </p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link href="/mallisto">
            <button
              className="btn-view"
              style={{ width: "auto", padding: "15px 50px", cursor: "pointer" }}
            >
              Tutustu Mallistoon
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
