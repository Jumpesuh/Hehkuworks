"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const MALLISTO_TUOTTEET = [
  {
    id: "maininki",
    nimi: "Maininki",
    hinta: "Alkaen 349 €",
    kuvat: [
      "/images/Maininki_puu.jpg",
      "/images/Maininki_puu_valo.jpg",
      "/images/Maininki_musta.jpg",
      "/images/Maininki_musta_valo.jpg",
    ],
  },
  {
    id: "vieno",
    nimi: "Vieno",
    hinta: "Alkaen 379 €",
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
    hinta: "Alkaen 379 €",
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
    hinta: "Alkaen 349 €",
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
    hinta: "Alkaen 349 €",
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
    hinta: "Alkaen 299 €",
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
    hinta: "Alkaen 289 €",
    kuvat: [
      "/images/Sora_puu.jpg",
      "/images/Sora_puu_valo.jpg",
      "/images/Sora_musta.jpg",
      "/images/Sora_musta_valo.jpg",
    ],
  }
];

// OMA KOMPONENTTI YKSITTÄISELLE TUOTEKORTILLE
function Tuotekortti({ tuote }) {
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        {tuote.kuvat.length > 0 ? (
          <div style={{ position: "relative" }}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination]}
              navigation={false}
              pagination={{ clickable: true }}
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
                  <Link 
                    href={`/mallisto/${tuote.id}`} 
                    style={{ display: "block", width: "100%" }}
                    aria-label={`Siirry tuotteeseen ${tuote.nimi}`}
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
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

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
            }}
          >
            Ei kuvia lisätty
          </div>
        )}
      </div>

      <Link
        href={`/mallisto/${tuote.id}`}
        style={{
          display: "block",
          padding: "25px",
          textDecoration: "none",
        }}
      >
        {/* Otsikkoa pienennetty hieman (32px -> 26px) ja lisätty harvennusta */}
        <h3 style={{ margin: "0 0 5px 0", color: "#3e2723", fontSize: "26px", letterSpacing: "1px" }}>
          {tuote.nimi}
        </h3>

        {/* Väritekstiä pienennetty (16px -> 14px) */}
        <p
          style={{
            color: "#a67c52",
            margin: "0 0 10px 0",
            fontSize: "14px",
          }}
        >
          Puu | Musta
        </p>

        {/* Hintatekstiä pienennetty (22px -> 18px) */}
        <p
          style={{
            color: "#3e2723",
            margin: "0 0 20px 0",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {tuote.hinta}
        </p>

        {/* Painikkeen tekstiä pienennetty (16px -> 14px) */}
        <span
          className="btn-view"
          style={{
            display: "block",
            width: "auto",
            fontSize: "14px",
          }}
        >
          Katso ja tilaa
        </span>
      </Link>
    </div>
  );
}

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

        /* Navigointinuolet tietokoneelle */
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

        .tuotekortti-container:hover .custom-nav-arrow {
          opacity: 1;
        }

        .custom-nav-arrow:hover {
          background: rgba(0, 0, 0, 0.25);
          color: #ffffff;
        }

        /* --- TÄSSÄ PALLOJEN SIISTINTÄ (Pienennetty & Väritetty) --- */
        .swiper-pagination-bullet {
          width: 6px !important;
          height: 6px !important;
          background-color: #e0c9a6 !important; /* Brändin vaalea puu */
          opacity: 0.6 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #a67c52 !important; /* Brändin tummempi korostus */
          opacity: 1 !important;
          transform: scale(1.3);
        }

        /* Nostetaan palloja hieman ylemmäs kuvasta */
        .swiper-pagination-bullets {
          bottom: 15px !important;
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