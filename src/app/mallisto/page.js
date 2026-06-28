import Link from "next/link";

export default function MallistoPage() {
  return (
    <main>
      <div className="container" style={{ padding: "60px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Valaisinmallisto
        </h2>

        <div className="product-grid">
          {/* Kortti 1: Vieno */}
          <Link href="/mallisto/vieno" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>Vieno</h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>

          {/* Kortti 2: Säde */}
          <Link href="/mallisto/säde" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>Säde</h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>

          {/* Kortti 3: Kero */}
          <Link href="/mallisto/kero" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>Kero</h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>

          {/* Kortti 4: Kaio */}
          <Link href="/mallisto/kaio" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>Kaio</h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>

          {/* Kortti 5: Kide */}
          <Link href="/mallisto/kide" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>Kide</h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>

          {/* Kortti 6: Sora */}
          <Link href="/mallisto/sora" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>Sora</h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>

          {/* Kortti 7: Maininki */}
          <Link href="/mallisto/maininki" className="mallisto-linkki-kortti">
            <div
              style={{
                padding: "40px",
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#3e2723" }}>
                Maininki
              </h3>
              <p style={{ color: "#a67c52", margin: "0 0 20px 0" }}>
                Puu | Musta | Custom
              </p>
              <span
                className="btn-view"
                style={{ display: "block", width: "auto" }}
              >
                Katso ja tilaa
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
