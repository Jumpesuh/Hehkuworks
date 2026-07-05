"use client";
import { useState, use } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Tässä on nyt kaikki 4 kuvaa per valaisin asetettuna juuri antamiesi polkujen mukaan!
const TUOTETIEDOT = {
  vieno: {
    nimi: "Vieno",
    kuvaus: "",
    kuvat: [
      "/images/vieno/Vieno_puu.jpg",
      "/images/vieno/Vieno_puu_valo.jpg",
      "/images/vieno/Vieno_musta.jpg",
      "/images/vieno/Vieno_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "716f7476ed352eaadaed732d69684ebb" },
      { vari: "Musta", iframeId: "d7e9b7c93999f279f666f5e489550b59" },
    ],
  },
  sade: {
    nimi: "Säde",
    kuvaus: "",
    kuvat: [
      "/images/sade/Sade_puu.jpg",
      "/images/sade/Sade_puu_valo.jpg",
      "/images/sade/Sade_musta.jpg",
      "/images/sade/Sade_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "5561a5587bdd795a6ff4bf4c521c7d12" },
      { vari: "Musta", iframeId: "19e0e85f892126b844c983eb86c1757d" },
    ],
  },
  kero: {
    nimi: "Kero",
    kuvaus: "",
    kuvat: [
      "/images/kero/Kero_puu.jpg",
      "/images/kero/Kero_puu_valo.jpg",
      "/images/kero/Kero_musta.jpg",
      "/images/kero/Kero_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "6c2d7150b17cabf0827f507d1ba34791" },
      { vari: "Musta", iframeId: "df577b633bcee8dc657bc758ac095106" },
    ],
  },
  kaio: {
    nimi: "Kaio",
    kuvaus: "",
    kuvat: [
      "/images/kaio/Kaio_puu.jpg",
      "/images/kaio/Kaio_puu_valo.jpg",
      "/images/kaio/Kaio_musta.jpg",
      "/images/kaio/Kaio_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "ae32fb3fb23ef0b58019c83378590308" },
      { vari: "Musta", iframeId: "a8b9e53bb6835b8c501053d537e86c9f" },
    ],
  },
  kide: {
    nimi: "Kide",
    kuvaus: "",
    kuvat: [
      "/images/kide/Kide_puu.jpg",
      "/images/kide/Kide_puu_valo.jpg",
      "/images/kide/Kide_musta.jpg",
      "/images/kide/Kide_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "1016c4561000aabcef6a2c567a56bd75" },
      { vari: "Musta", iframeId: "15a12b0791ad8e17715970aed9866fcd" },
    ],
  },
  sora: {
    nimi: "Sora",
    kuvaus: "",
    kuvat: [
      "/images/sora/Sora_puu.jpg",
      "/images/sora/Sora_puu_valo.jpg",
      "/images/sora/Sora_musta.jpg",
      "/images/sora/Sora_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "2c603313e04e0afe779b45b73f05ee63" },
      { vari: "Musta", iframeId: "a466bdddd151b5b204a10a78502a1b81" },
    ],
  },
  maininki: {
    nimi: "Maininki",
    kuvaus: "",
    kuvat: [
      "/images/maininki/Maininki_puu.jpg",
      "/images/maininki/Maininki_puu_valo.jpg",
      "/images/maininki/Maininki_musta.jpg",
      "/images/maininki/Maininki_musta_valo.jpg",
    ],
    variantit: [
      { vari: "Puu", iframeId: "507fae44351eda452df7341963ceb7c2" },
      { vari: "Musta", iframeId: "dae95df372be75608f8beb53d3577f4b" },
    ],
  },
};

export default function TuoteSivu({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const tuoteId = params.id ? params.id.toLowerCase() : "";
  const tuote = TUOTETIEDOT[tuoteId];

  const [valittuVariantti, setValittuVariantti] = useState(
    tuote ? tuote.variantit[0] : null,
  );

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
        {/* VASEN PUOLI: KUVASARJA PÄIVITETYILLÄ 4 KUVALLA */}
        <div
          className="tuotesivu-media tuotekortti-container"
          style={{ width: "100%", maxWidth: "450px", position: "relative" }}
        >
          <Swiper
            modules={[Navigation]}
            navigation={tuote.kuvat.length > 1}
            loop={tuote.kuvat.length > 1}
            className="mySwiper"
            style={{
              width: "100%",
              borderRadius: "4px",
              background: "white",
              border: "1px solid #eee",
            }}
          >
            {tuote.kuvat.map((kuvaUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={kuvaUrl}
                  alt={`${tuote.nimi} tuotekuva ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* OIKEA PUOLI: Tuotteen tiedot */}
        <div className="tuotesivu-info" style={{ maxWidth: "550px" }}>
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
          <h1
            style={{
              margin: "10px 0 20px 0",
              fontSize: "36px",
              color: "#3e2723",
            }}
          >
            {tuote.nimi}
          </h1>

          {tuote.kuvaus && (
            <p
              style={{
                color: "#555",
                marginBottom: "30px",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              {tuote.kuvaus}
            </p>
          )}

          {/* VÄRIN VALINTA */}
          <div
            style={{
              marginBottom: "35px",
              marginTop: tuote.kuvaus ? "0" : "20px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                marginBottom: "15px",
                color: "#3e2723",
              }}
            >
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

          {/* TEKNISET TIEDOT */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #eee",
              padding: "20px",
              borderRadius: "4px",
              marginBottom: "40px",
              fontSize: "14px",
              color: "#444",
            }}
          >
            <h4
              style={{
                margin: "0 0 15px 0",
                color: "#3e2723",
                fontSize: "15px",
              }}
            >
              TEKNISET TIEDOT:
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 20px",
              }}
            >
              <div>
                <strong>Tyyppi:</strong> Riippuvalaisin
              </div>
              <div>
                <strong>Halkaisija:</strong> 34 cm
              </div>
              <div>
                <strong>Korkeus:</strong> 33 cm
              </div>
              <div>
                <strong>Lampun kanta:</strong> E27
              </div>
              <div>
                <strong>Johdon pituus:</strong> 80 cm
              </div>
              <div>
                <strong>Max. teho:</strong> 15W LED
              </div>
              <div>
                <strong>IP-luokka:</strong> IP20 (Kuivat tilat)
              </div>
              <div>
                <strong>Takuu:</strong> 1 vuosi
              </div>
            </div>
            <div style={{ marginTop: "12px", fontSize: "13px", color: "#888" }}>
              * Valonlähde ei sisälly pakkaukseen.
            </div>
          </div>

          {/* PAINIKE JOKA VIE SUORAAN HOLVIIN */}
          <div style={{ width: "100%" }}>
            <a
              href={`https://holvi.com/shop/HEHKUWORKS/product/${aktiivinenVariantti.iframeId}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view"
              style={{
                display: "block",
                textAlign: "center",
                padding: "18px 30px",
                fontSize: "14px",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(62, 39, 35, 0.15)",
              }}
            >
              SIIRRY TILAAMAAN HOLVI-KAUPPAAN ({aktiivinenVariantti.vari}) →
            </a>
            <p
              style={{
                fontSize: "12px",
                color: "#888",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              * Tilaus ja turvallinen maksunvälitys hoituu virallisen
              Holvi-verkkokauppamme kautta.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
