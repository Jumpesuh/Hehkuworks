"use client";
import Link from "next/link";
// Tuodaan Swiper-komponentit ja niiden tyylit
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MALLISTO_TUOTTEET = [
  {
    id: "vieno",
    nimi: "Vieno",
    kuvat: ["/images/Vieno_puu.jpg", "/images/Vieno_puu_valo.jpg"],
  },
  {
    id: "sade",
    nimi: "Säde",
    kuvat: ["/images/Sade_puu.jpg", "/images/Sade_puu_valo.jpg"],
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
    kuvat: ["/images/Kaio_puu.jpg", "/images/Kaio_puu_valo.jpg"],
  },
  {
    id: "kide",
    nimi: "Kide",
    kuvat: ["/images/Kide_musta.jpg", "/images/Kide_musta_valo.jpg"],
  },
  {
    id: "sora",
    nimi: "Sora",
    kuvat: ["/images/Sora_puu.jpg", "/images/Sora_puu_valo.jpg"],
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

export default function MallistoPage() {
  return (
    <main>
      <div className="container" style={{ padding: "60px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Valaisinmallisto
        </h2>

        <div className="product-grid">
          {MALLISTO_TUOTTEET.map((tuote) => (
            <div
              key={tuote.id}
              className="mallisto-linkki-kortti tuotekortti-container"
              style={{
                background: "white",
                border: "1px solid #eee",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {/* KUVAKARUSELLI ALKAA */}
              <div style={{ position: "relative", width: "100%" }}>
                {tuote.kuvat.length > 0 ? (
                  <Swiper
                    modules={[Navigation]}
                    navigation={tuote.kuvat.length > 1} // Näytetään nuolet vain jos yli 1 kuva
                    loop={tuote.kuvat.length > 1} // PYÖRII IKUISESTI SAMAA RATAA YMPÄRI 🚀
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

              {/* TUOTTEEN TIEDOT & LINKKI */}
              <Link
                href={`/mallisto/${tuote.id}`}
                style={{
                  display: "block",
                  padding: "25px",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <h3 style={{ margin: "0 0 5px 0", color: "#3e2723" }}>
                  {tuote.nimi}
                </h3>
                <p
                  style={{
                    color: "#a67c52",
                    margin: "0 0 15px 0",
                    fontSize: "14px",
                  }}
                >
                  Puu | Musta | Custom
                </p>
                <span
                  className="btn-view"
                  style={{ display: "block", width: "auto" }}
                >
                  Katso ja tilaa
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
