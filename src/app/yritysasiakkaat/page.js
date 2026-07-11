import Link from "next/link";

export default function Yritysasiakkaat() {
  return (
    <main>
      <div
        className="container"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span
            style={{
              color: "#a67c52",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "20px",
            }}
          >
            B2B - HehkuWorks
          </span>
          <h1 style={{ fontSize: "42px", marginTop: "10px", marginBottom: "20px" }}>
            Ratkaisuja yrityksille
          </h1>
          
          <p style={{ color: "#555", fontSize: "20px", lineHeight: "1.6", marginBottom: "20px" }}>
            HehkuWorks tarjoaa kotimaisia ja ekologisia valaistusratkaisuja myös yritysten tarpeisiin. 
            Olipa kyseessä toimiston aulatila, ravintola, hotelli tai asiakastila, puiset vanerivalaisimemme 
            luovat tilaan lämpimän, rauhallisen ja kutsuvan tunnelman. Luonnollinen puu parantaa myös tilan akustiikkaa ja viihtyisyyttä.
          </p>

          <div style={{ textAlign: "left", margin: "40px auto", maxWidth: "500px", backgroundColor: "#fcfaf8", padding: "30px", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#333" }}>Mitä tarjoamme yrityksille?</h3>
            <ul style={{ color: "#555", fontSize: "20px", lineHeight: "1.6", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}><strong>Suuremmat tilauserät:</strong> Valaisinkokonaisuudet toimistoihin ja julkitiloihin.</li>
              <li style={{ marginBottom: "10px" }}><strong>Räätälöinti:</strong> Mahdollisuus toteuttaa yksilöllisiä ratkaisuja tai kustomointeja brändinne mukaisesti.</li>
              <li style={{ marginBottom: "10px" }}><strong>Liikelahjat:</strong> Arvokas ja kotimainen käsityönä valmistettu lahja yhteistyökumppaneille tai henkilöstölle.</li>
            </ul>
          </div>

          <h2 style={{ fontSize: "32px", marginTop: "40px", marginBottom: "15px" }}>
            Ota yhteyttä ja pyydä tarjous
          </h2>
          <p style={{ color: "#555", fontSize: "20px", lineHeight: "1.6", marginBottom: "30px" }}>
            Kerro meille tarpeistanne, niin suunnitellaan yhdessä teidän tiloihinne sopiva kokonaisuus. 
            Tavoitat meidät parhaiten sähköpostitse osoitteesta:
          </p>

          <a 
            href="mailto:yritysasiakkaat@hehkuworks.fi"
            style={{ 
              display: "inline-block",
              fontSize: "20px", 
              fontWeight: "bold", 
              color: "#a67c52", 
              textDecoration: "none",
              border: "2px solid #a67c52",
              padding: "15px 30px",
              borderRadius: "5px",
              transition: "all 0.3s ease"
            }}
          >
            yritysasiakkaat@hehkuworks.fi
          </a>

          <div style={{ marginTop: "50px" }}>
            
          </div>
        </div>
      </div>
    </main>
  );
}