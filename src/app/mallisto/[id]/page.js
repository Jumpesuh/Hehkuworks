"use client";
import { useState, use } from "react";
import Link from "next/link";

// Määritellään tuotteet pienillä kirjaimilla avaimissa, jotta ne täsmäävät urliin suoraan!
const TUOTETIEDOT = {
  vieno: {
    nimi: "Vieno",
    kuvaus: "Jotai hasua Vieno",
    variantit: [
      { vari: "Puu", iframeId: "716f7476ed352eaadaed732d69684ebb" },
      { vari: "Musta", iframeId: "d7e9b7c93999f279f666f5e489550b59" },
      { vari: "Custom", iframeId: "f9bd0779b93d1c552ea5190e41111d47" },
    ],
  },
  sade: {
    nimi: "Säde",
    kuvaus: "Jotai hasua Säde",
    variantit: [
      { vari: "Puu", iframeId: "5561a5587bdd795a6ff4bf4c521c7d12" },
      { vari: "Musta", iframeId: "19e0e85f892126b844c983eb86c1757d" },
      { vari: "Custom", iframeId: "79a4e17ad6d62852b0d397b68554b927" },
    ],
  },
  kero: {
    nimi: "Kero",
    kuvaus: "Jotai hasua Kero",
    variantit: [
      { vari: "Puu", iframeId: "6c2d7150b17cabf0827f507d1ba34791" },
      { vari: "Musta", iframeId: "df577b633bcee8dc657bc758ac095106" },
      { vari: "Custom", iframeId: "812d50910866b59f5bc0f2349c7c79cf" },
    ],
  },
  kaio: {
    nimi: "Kaio",
    kuvaus: "Jotai hasua Kaio",
    variantit: [
      { vari: "Puu", iframeId: "ae32fb3fb23ef0b58019c83378590308" },
      { vari: "Musta", iframeId: "a8b9e53bb6835b8c501053d537e86c9f" },
      { vari: "Custom", iframeId: "e1b9bb36ab30c23fbb536da62786a85f" },
    ],
  },
  kide: {
    nimi: "Kide",
    kuvaus: "Jotai hasua Kide ",
    variantit: [
      { vari: "Puu", iframeId: "1016c4561000aabcef6a2c567a56bd75" },
      { vari: "Musta", iframeId: "15a12b0791ad8e17715970aed9866fcd" },
      { vari: "Custom", iframeId: "0b9b792f5ac309a0f1a9c8861fa10eef" },
    ],
  },
  sora: {
    nimi: "Sora",
    kuvaus: "Jotai hasua Sora",
    variantit: [
      { vari: "Puu", iframeId: "2c603313e04e0afe779b45b73f05ee63" },
      { vari: "Musta", iframeId: "a466bdddd151b5b204a10a78502a1b81" },
      { vari: "Custom", iframeId: "96c08a7effa4eac9020e8222596dddf7" },
    ],
  },
  maininki: {
    nimi: "Maininki",
    kuvaus: "Jotai hasua Maininki",
    variantit: [
      { vari: "Puu", iframeId: "507fae44351eda452df7341963ceb7c2" },
      { vari: "Musta", iframeId: "dae95df372be75608f8beb53d3577f4b" },
      { vari: "Custom", iframeId: "990575631722a584a304f39a0585c5b6" },
    ],
  },
};

export default function TuoteSivu({ params: paramsPromise }) {
  const params = use(paramsPromise);

  // Muutetaan urlissa oleva id varmuuden vuoksi kokonaan pieniksi kirjaimiksi
  const tuoteId = params.id ? params.id.toLowerCase() : "";

  const tuote = TUOTETIEDOT[tuoteId];

  // Oletustila variantille (alustetaan vasta kun tiedetään, että tuote on olemassa)
  const [valittuVariantti, setValittuVariantti] = useState(null);

  // Jos tuote vaihtuu lennosta tai sivu ladataan, asetetaan oletusvariantti
  if (tuote && !valittuVariantti) {
    setValittuVariantti(tuote.variantit[0]);
  }

  if (!tuote) {
    return (
      <div
        className="container"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <h2>Tuotetta ei löytynyt</h2>
        <Link
          href="/mallisto"
          style={{ color: "#a67c52", textDecoration: "underline" }}
        >
          Palaa mallistoon
        </Link>
      </div>
    );
  }

  // Varmistetaan, että variantti on ehtinyt latautua ennen renderöintiä
  const aktiivinenVariantti = valittuVariantti || tuote.variantit[0];

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <Link
        href="/mallisto"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          color: "#a67c52",
          fontWeight: "bold",
        }}
      >
        ← Takaisin mallistoon
      </Link>

      <div className="tuotesivu-layout">
        {/* Vasen puoli: Holvin iFrame (Korkeus pidetty 500px, jotta mahtuu kokonaan) */}
        <div className="tuotesivu-media">
          <div className="single-holvi-card" style={{ width: "300px" }}>
            <iframe
              key={aktiivinenVariantti.iframeId}
              style={{ width: "300px", height: "500px", border: "none" }}
              src={`https://holvi.com/shop/HEHKUWORKS/product/${aktiivinenVariantti.iframeId}/embedded/`}
              frameBorder="0"
              allow="payment"
            ></iframe>
          </div>
        </div>

        {/* Oikea puoli: Tuotteen tiedot ja värin valinta */}
        <div className="tuotesivu-info">
          <span
            style={{
              color: "#a67c52",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            HEHKUWORKS Mallisto
          </span>
          <h1 style={{ margin: "10px 0 20px 0", fontSize: "32px" }}>
            {tuote.nimi}
          </h1>
          <p style={{ color: "#555", marginBottom: "30px" }}>{tuote.kuvaus}</p>

          {/* VÄRIN VALINTA */}
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "14px", marginBottom: "10px" }}>
              Valitse väri / viimeistely:
            </h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {tuote.variantit.map((variantti) => (
                <button
                  key={variantti.vari}
                  onClick={() => setValittuVariantti(variantti)}
                  className={`vari-nappi ${aktiivinenVariantti.vari === variantti.vari ? "valittu" : ""}`}
                >
                  {variantti.vari}
                </button>
              ))}
            </div>
          </div>

          <p style={{ fontSize: "13px", color: "#888", marginTop: "20px" }}>
            * Tilaus ja maksu suoritetaan suojatusti Holvi-palvelussa upotetun
            kortin kautta.
          </p>
        </div>
      </div>
    </main>
  );
}
