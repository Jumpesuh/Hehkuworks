"use client";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

export default function TuoteClient({ tuote }) {
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      <Link
        href="/mallisto"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          marginLeft: "15px", // TÄMÄ LISÄTTY: Työntää linkkiä irti reunasta
          color: "#a67c52",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        ← Takaisin mallistoon
      </Link>

      <div className="tuotesivu-layout">
        <div
          className="tuotesivu-media karuselli-container"
          style={{ width: "100%", maxWidth: "450px", position: "relative" }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={false}
            pagination={{ clickable: true }} 
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

          {/* Tietokoneen sivunuolet (Mobiilissa piilossa CSS:n avulla) */}
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

        <div className="tuotesivu-info" style={{ maxWidth: "550px" }}>
          <span
            style={{
              color: "#a67c52",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "16px",
            }}
          >
            HEHKU WORKS Mallisto
          </span>

          <h1
            style={{
              margin: "10px 0 20px 0",
              fontSize: "32px",
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
                fontSize: "20px",
                lineHeight: "1.8",
              }}
            >
              {tuote.kuvaus}
            </p>
          )}

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

          <div
            style={{
              marginBottom: "35px",
              marginTop: tuote.kuvaus ? "0" : "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                marginBottom: "15px",
                color: "#3e2723",
              }}
            >
              Valitse väri / viimeistely:
            </h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
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

          <div style={{ marginBottom: "35px", width: "100%" }}>
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
                    textAlign: "left"
                  }}
                >
                  <div>
                    <strong>Tyyppi:</strong> Riippuvalaisin
                  </div>
                  <div>
                    <strong>Lampun kanta:</strong> E27
                  </div>
                  <div>
                    <strong>Halkaisija:</strong> {tuote.halkaisija}
                  </div>
                  <div>
                    <strong>Max. teho:</strong> 15W LED
                  </div>
                  <div>
                    <strong>Korkeus:</strong> {tuote.korkeus}
                  </div>
                  <div>
                    <strong>IP-luokka:</strong> IP20
                  </div>
                  <div>
                    <strong>Johdon pituus:</strong> 80 cm
                  </div>
                  <div>
                    <strong>Takuu:</strong> 1 vuosi
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    fontSize: "16px",
                    color: "#888",
                    fontStyle: "italic",
                    textAlign: "center"
                  }}
                >
                  * Valonlähde ei sisälly pakkaukseen.
                </div>
              </div>
            </div>
          </div>

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