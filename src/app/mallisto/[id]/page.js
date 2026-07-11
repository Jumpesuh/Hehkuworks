"use client";
import { useState, use } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image"; 
import "swiper/css";
import "swiper/css/navigation";

const TUOTETIEDOT = {
  vieno: {
    nimi: "Vieno",
    kuvaus: "",
    korkeus: "33 cm",
    halkaisija: "34 cm",
    kuvat: [
      "/images/Vieno_puu.jpg",
      "/images/Vieno_puu_valo.jpg",
      "/images/Vieno_musta.jpg",
      "/images/Vieno_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "716f7476ed352eaadaed732d69684ebb",
        hinta: "379 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "d7e9b7c93999f279f666f5e489550b59",
        hinta: "409 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  sade: {
    nimi: "Säde",
    kuvaus: "",
    korkeus: "32 cm",
    halkaisija: "34 cm",
    kuvat: [
      "/images/Sade_puu.jpg",
      "/images/Sade_puu_valo.jpg",
      "/images/Sade_musta.jpg",
      "/images/Sade_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "5561a5587bdd795a6ff4bf4c521c7d12",
        hinta: "379 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "19e0e85f892126b844c983eb86c1757d",
        hinta: "409 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  kero: {
    nimi: "Kero",
    kuvaus: "",
    korkeus: "33 cm",
    halkaisija: "34 cm",
    kuvat: [
      "/images/Kero_puu.jpg",
      "/images/Kero_puu_valo.jpg",
      "/images/Kero_musta.jpg",
      "/images/Kero_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "6c2d7150b17cabf0827f507d1ba34791",
        hinta: "349 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "df577b633bcee8dc657bc758ac095106",
        hinta: "379 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  kaio: {
    nimi: "Kaio",
    kuvaus: "",
    korkeus: "36 cm",
    halkaisija: "27 cm",
    kuvat: [
      "/images/Kaio_puu.jpg",
      "/images/Kaio_puu_valo.jpg",
      "/images/Kaio_musta.jpg",
      "/images/Kaio_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "ae32fb3fb23ef0b58019c83378590308",
        hinta: "349 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "a8b9e53bb6835b8c501053d537e86c9f",
        hinta: "379 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  kide: {
    nimi: "Kide",
    kuvaus: "",
    korkeus: "21 cm",
    halkaisija: "23 cm",
    kuvat: [
      "/images/Kide_puu.jpg",
      "/images/Kide_puu_valo.jpg",
      "/images/Kide_musta.jpg",
      "/images/Kide_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "1016c4561000aabcef6a2c567a56bd75",
        hinta: "299 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "15a12b0791ad8e17715970aed9866fcd",
        hinta: "329 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  sora: {
    nimi: "Sora",
    kuvaus: "",
    korkeus: "21 cm",
    halkaisija: "23 cm",
    kuvat: [
      "/images/Sora_puu.jpg",
      "/images/Sora_puu_valo.jpg",
      "/images/Sora_musta.jpg",
      "/images/Sora_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "2c603313e04e0afe779b45b73f05ee63",
        hinta: "289 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "a466bdddd151b5b204a10a78502a1b81",
        hinta: "319 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  maininki: {
    nimi: "Maininki",
    kuvaus: "",
    korkeus: "37 cm",
    halkaisija: "21 cm",
    kuvat: [
      "/images/Maininki_puu.jpg",
      "/images/Maininki_puu_valo.jpg",
      "/images/Maininki_musta.jpg",
      "/images/Maininki_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "507fae44351eda452df7341963ceb7c2",
        hinta: "349 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "dae95df372be75608f8beb53d3577f4b",
        hinta: "379 €",
        kuvaIndeksi: 2,
      },
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
  const [teknisetAuki, setTeknisetAuki] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

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

  const vaihdaVariantti = (variantti) => {
    setValittuVariantti(variantti);
    if (swiperInstance) {
      swiperInstance.slideToLoop(variantti.kuvaIndeksi, 400); 
    }
  };

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      {/* GLOBAALIT TYYLIT TUOTESIVULLE (Sinisen välkynnän poisto & nuolien tyylit) */}
      <style jsx global>{`
        a, button, .swiper-wrapper, .swiper-slide, .mySwiper {
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }
        
        .custom-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: transparent; 
          border: none;
          width: 70px; 
          height: 90px; 
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff; 
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); 
          font-size: 50px; 
          pointer-events: auto; 
          opacity: 0; 
          transition: all 0.3s ease; 
        }

        .karuselli-container:hover .custom-nav-arrow {
          opacity: 1;
        }

        .custom-nav-arrow:hover {
          background: rgba(0, 0, 0, 0.25); 
          color: #ffffff;
        }
      `}</style>

      {/* PALUULINKKI */}
      <Link
        href="/mallisto"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          color: "#a67c52",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        ← Takaisin mallistoon
      </Link>

      <div className="tuotesivu-layout">
        {/* VASEN PUOLI: KUVASARJA - Lisätty 'karuselli-container' ja 'position: relative' */}
        <div
          className="tuotesivu-media karuselli-container"
          style={{ width: "100%", maxWidth: "450px", position: "relative" }}
        >
          <Swiper
            modules={[Navigation]}
            navigation={false} // Otetaan oletusnuolet pois käytöstä
            loop={tuote.kuvat.length > 1}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              const nykyinenIndeksi = swiper.realIndex;
              if (nykyinenIndeksi >= 2) {
                setValittuVariantti(tuote.variantit[1]); 
              } else {
                setValittuVariantti(tuote.variantit[0]); 
              }
            }}
            className="mySwiper"
            style={{
              width: "100%",
              borderRadius: "4px",
              background: "white",
              border: "1px solid #eee",
            }}
          >
            {tuote.kuvat.map((kuvaUrl, index) => (
              <SwiperSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={kuvaUrl}
                  alt={`${tuote.nimi} tuotekuva ${index + 1}`}
                  width={600}
                  height={600}
                  sizes="(max-width: 450px) 100vw, 450px"
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

          {/* OMAT SUURET NAVIGOINTINAPIT */}
          {tuote.kuvat.length > 1 && (
            <>
              <button
                className="custom-nav-arrow"
                onClick={(e) => {
                  e.preventDefault();
                  swiperInstance?.slidePrev();
                }}
                style={{ left: "5px" }}
                aria-label="Edellinen kuva"
              >
                ‹
              </button>
              <button
                className="custom-nav-arrow"
                onClick={(e) => {
                  e.preventDefault();
                  swiperInstance?.slideNext();
                }}
                style={{ right: "5px" }}
                aria-label="Seuraava kuva"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* OIKEA PUOLI: TUOTTEEN TIEDOT */}
        <div className="tuotesivu-info" style={{ maxWidth: "550px" }}>
          {/* YLÄOTSIKKO */}
          <span
            style={{
              color: "#a67c52",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "16px",
            }}
          >
            HEHKUWORKS Mallisto
          </span>
          
          {/* PÄÄOTSIKKO */}
          <h1
            style={{
              margin: "10px 0 20px 0",
              fontSize: "32px",
              color: "#3e2723",
            }}
          >
            {tuote.nimi}
          </h1>

          {/* TUOTEKUVAUS */}
          {tuote.kuvaus && (
            <p
              style={{
                color: "#555",
                marginBottom: "30px",
                fontSize: "20px",
                lineHeight: "1.8",
              }}
            >
              {tuote.kuvaus}
            </p>
          )}

          {/* HINTA */}
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "var(--primary-color)",
              margin: "10px 0 25px 0",
            }}
          >
            {aktiivinenVariantti.hinta}
          </p>

          {/* VÄRIN VALINTA */}
          <div
            style={{
              marginBottom: "35px",
              marginTop: tuote.kuvaus ? "0" : "20px",
            }}
          >
            {/* VÄRIVALINTA OTSIKKO */}
            <h3
              style={{
                fontSize: "16px",
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
                  onClick={() => vaihdaVariantti(variantti)}
                  className={`vari-nappi ${aktiivinenVariantti.vari === variantti.vari ? "valittu" : ""}`}
                >
                  {variantti.vari}
                </button>
              ))}
            </div>
          </div>

          {/* TEKNISET TIEDOT */}
          <div style={{ marginBottom: "35px" }}>
            <div
              onClick={() => setTeknisetAuki(!teknisetAuki)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                userSelect: "none",
                padding: "5px 0",
              }}
              className="simppeli-dropdown-otsikko"
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "var(--primary-color)",
                  letterSpacing: "0.05em",
                  fontSize: "16px",
                }}
              >
                TEKNISET TIEDOT
              </span>
              <span
                style={{
                  transform: teknisetAuki ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  color: "var(--accent-color)",
                  fontSize: "12px",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </div>

            <div className={`dropdown-wrapper ${teknisetAuki ? "auki" : ""}`}>
              <div className="dropdown-sisalto">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px 20px",
                    fontSize: "16px",
                    color: "var(--text-color)",
                  }}
                >
                  <div><strong>Tyyppi:</strong> Riippuvalaisin</div>
                  <div><strong>Lampun kanta:</strong> E27</div>
                  <div><strong>Halkaisija:</strong> {tuote.halkaisija}</div>
                  <div><strong>Max. teho:</strong> 15W LED</div>
                  <div><strong>Korkeus:</strong> {tuote.korkeus}</div>
                  <div><strong>IP-luokka:</strong> IP20</div>
                  <div><strong>Johdon pituus:</strong> 80 cm</div>
                  <div><strong>Takuu:</strong> 1 vuosi</div>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    fontSize: "16px",
                    color: "#888",
                    fontStyle: "italic",
                  }}
                >
                  * Valonlähde ei sisälly pakkaukseen.
                </div>
              </div>
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
              SIIRRY TILAAMAAN HOLVI-KAUPPAAN →
            </a>
            <p
              style={{
                fontSize: "16px",
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