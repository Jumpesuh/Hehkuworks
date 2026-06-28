"use client";
import { useState, use } from "react";
import Link from "next/link";

// Määritellään tuotteet pienillä kirjaimilla avaimissa, jotta ne täsmäävät urliin suoraan!
const TUOTETIEDOT = {
  vieno: {
    nimi: "Vieno",
    kuvaus: "Jotai hasua Vieno",
    variantit: [
      { vari: "Puu", iframeId: "" },
      { vari: "Musta", iframeId: "TÄHÄN_MUSTAN_VÄRIN_ID_HOLVISTA" },
      { vari: "Custom", iframeId: "TÄHÄN_CUSTOM_VÄRIN_ID_HOLVISTA" },
    ],
  },
  säde: {
    nimi: "Säde",
    kuvaus: "Jotai hasua Säde",
    variantit: [
      { vari: "Puu", iframeId: "TÄHÄN_AAMU_PUU_ID" },
      { vari: "Musta", iframeId: "TÄHÄN_AAMU_MUSTA_ID" },
      { vari: "Custom", iframeId: "TÄHÄN_AAMU_CUSTOM_ID" },
    ],
  },
  kero: {
    nimi: "Kero",
    kuvaus: "Jotai hasua Kero",
    variantit: [
      { vari: "Puu", iframeId: "507fae44351eda452df7341963ceb7c2" },
      { vari: "Musta", iframeId: "TÄHÄN_MUSTAN_VÄRIN_ID_HOLVISTA" },
      { vari: "Custom", iframeId: "TÄHÄN_CUSTOM_VÄRIN_ID_HOLVISTA" },
    ],
  },
  kaio: {
    nimi: "Kaio",
    kuvaus: "Jotai hasua Kaio",
    variantit: [
      { vari: "Puu", iframeId: "TÄHÄN_AAMU_PUU_ID" },
      { vari: "Musta", iframeId: "TÄHÄN_AAMU_MUSTA_ID" },
      { vari: "Custom", iframeId: "TÄHÄN_AAMU_CUSTOM_ID" },
    ],
  },
  kide: {
    nimi: "Kide",
    kuvaus: "Jotai hasua Kide ",
    variantit: [
      { vari: "Puu", iframeId: "507fae44351eda452df7341963ceb7c2" },
      { vari: "Musta", iframeId: "TÄHÄN_MUSTAN_VÄRIN_ID_HOLVISTA" },
      { vari: "Custom", iframeId: "TÄHÄN_CUSTOM_VÄRIN_ID_HOLVISTA" },
    ],
  },
  sora: {
    nimi: "Sora",
    kuvaus: "Jotai hasua Sora",
    variantit: [
      { vari: "Puu", iframeId: "TÄHÄN_AAMU_PUU_ID" },
      { vari: "Musta", iframeId: "TÄHÄN_AAMU_MUSTA_ID" },
      { vari: "Custom", iframeId: "TÄHÄN_AAMU_CUSTOM_ID" },
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
