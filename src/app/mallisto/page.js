"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const MALLISTO_TUOTTEET = [
  {
    id: "vieno",
    nimi: "Vieno",
    kuvat: [
      "/images/Vieno_puu.jpg",
      "/images/Vieno_puu_valo.jpg",
      "/images/Vieno_musta.jpg",
      "/images/Vieno_musta_valo.jpg",
    ],
  },
  {
    id: "sade",
    nimi: "Säde",
    kuvat: [
      "/images/Sade_puu.jpg",
      "/images/Sade_puu_valo.jpg",
      "/images/Sade_musta.jpg",
      "/images/Sade_musta_valo.jpg",
    ],
  },
  {
    id: "kero",
    nimi: "Kero",
    kuvat: [
      "/images/Kero_puu.jpg",
      "/images/Kero_puu_valo.jpg",
      "/images/Kero_musta.jpg",
      "/images/Kero_musta_valo.jpg",
    ],
  },
  {
    id: "kaio",
    nimi: "Kaio",
    kuvat: [
      "/images/Kaio_puu.jpg",
      "/images/Kaio_puu_valo.jpg",
      "/images/Kaio_musta.jpg",
      "/images/Kaio_musta_valo.jpg",
    ],
  },
  {
    id: "kide",
    nimi: "Kide",
    kuvat: [
      "/images/Kide_puu.jpg",
      "/images/Kide_puu_valo.jpg",
      "/images/Kide_musta.jpg",
      "/images/Kide_musta_valo.jpg",
    ],
  },
  {
    id: "sora",
    nimi: "Sora",
    kuvat: [
      "/images/Sora_puu.jpg",
      "/images/Sora_puu_valo.jpg",
      "/images/Sora_musta.jpg",
      "/images/Sora_musta_valo.jpg",
    ],
  },
  {
    id: "maininki",
    nimi: "Maininki",
    kuvat: [
      "/images/Maininki_puu.jpg",
      "/images/Maininki_puu_valo.jpg",
      "/images/Maininki_musta.jpg",
      "/images/Maininki_musta_valo.jpg",
    ],
  },
];

// OMA KOMPONENTTI YKSITTÄISELLE TUOTEKORTILLE
function Tuotekortti({ tuote }) {
  // Nyt useRef on sallitusti komponentin ylätasolla
  const swiperRef = useRef(null);

  return (
    <div
      className="tuotekortti-container"
      style={{
        background: "white",
        border: "1px solid #eee",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* 1. KOKO KORTIN LINKKI */}
      <Link
        href={`/mallisto/${tuote.id}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "block",
          textDecoration: "none",
        }}
        aria-label={`Siirry tuotteeseen ${tuote.nimi}`}
      />

      {/* 2. KUVAKARUSELLI */}
      <div
        style={{
          position: "relative",
          width: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {tuote.kuvat.length > 0 ? (
          <div style={{ position: "relative" }}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={false}
              loop={tuote.kuvat.length > 1}
              className="mySwiper"
              style={{ width: "100%", height: "auto" }}
            >
              {tuote.kuvat.map((kuvaUrl, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={kuvaUrl}
                    alt={`${tuote.nimi} valaisinkuva ${index + 1}`}
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

            {/* 3. OMAT NAVIGOINTINAPIT */}
            {tuote.kuvat.length > 1 && (
              <>
                <button
                  className="custom-nav-arrow"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    swiperRef.current?.slidePrev();
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
                    e.stopPropagation();
                    swiperRef.current?.slideNext();
                  }}
                  style={{ right: "5px" }}
                  aria-label="Seuraava kuva"
                >
                  ›
                </button>
              </>
            )}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#aaa",
              fontSize: "14px",
              background: "#f5f5f5",
              pointerEvents: "none",
            }}
          >
            Ei kuvia lisätty
          </div>
        )}
      </div>

      {/* 4. TUOTTEEN TIEDOT */}
      <div
        style={{
          display: "block",
          padding: "25px",
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <h3 style={{ margin: "0 0 5px 0", color: "#3e2723", fontSize: "32px" }}>
          {tuote.nimi}
        </h3>

        <p
          style={{
            color: "#a67c52",
            margin: "0 0 15px 0",
            fontSize: "16px",
          }}
        >
          Puu | Musta
        </p>

        <span
          className="btn-view"
          style={{
            display: "block",
            width: "auto",
            fontSize: "16px",
            pointerEvents: "none",
          }}
        >
          Katso ja tilaa
        </span>
      </div>
    </div>
  );
}

// PÄÄKOMPONENTTI
export default function MallistoPage() {
  return (
    <main>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        a,
        button,
        .swiper-wrapper,
        .swiper-slide,
        .mySwiper {
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        /* OMIEN NUOLTEN TYYLIT JA HOVER-EFEKTIT */
        .custom-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: transparent;
          border: none;

          /* KLIKKAUSALUE */
          width: 70px;
          height: 90px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;

          /* VALKOINEN NUOLI & PEHMEÄ VARJO */
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          font-size: 50px;

          pointer-events: auto;
          opacity: 0;
          transition: all 0.3s ease;
        }

        /* 1. Nuolet esiin kun hiiri on MISTÄ TAHANSA KOHTAA KORTIN PÄÄLLÄ */
        .tuotekortti-container:hover .custom-nav-arrow {
          opacity: 1;
        }

        /* 2. Harmaa laatikko kun hiiri on itse nuolen päällä */
        .custom-nav-arrow:hover {
          background: rgba(0, 0, 0, 0.25);
          color: #ffffff;
        }
      `,
        }}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "32px",
          }}
        >
          Valaisinmallisto
        </h2>

        <div className="product-grid">
          {MALLISTO_TUOTTEET.map((tuote) => (
            <Tuotekortti key={tuote.id} tuote={tuote} />
          ))}
        </div>
      </div>
    </main>
  );
}
