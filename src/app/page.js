"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; 

const MALLISTO = [
  { id: "vieno", nimi: "Vieno", kuva: "/images/Vieno_puu_valo.jpg" },
  { id: "sade", nimi: "Säde", kuva: "/images/Sade_puu_valo.jpg" },
  { id: "kero", nimi: "Kero", kuva: "/images/Kero_puu_valo.jpg" },
  { id: "kaio", nimi: "Kaio", kuva: "/images/Kaio_puu_valo.jpg" },
  { id: "kide", nimi: "Kide", kuva: "/images/Kide_puu_valo.jpg" },
  { id: "sora", nimi: "Sora", kuva: "/images/Sora_puu_valo.jpg" },
  { id: "maininki", nimi: "Maininki", kuva: "/images/Maininki_puu_valo.jpg" },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* PREMIUM "LOOKBOOK" -OSIO */}
      <div
        className="container"
        style={{ 
          padding: "80px 20px", // Hieman pienennetty ylä/alapadingia
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            // NÄMÄ ESTÄVÄT HARMAAKSI JUMIUTUMISEN SIVUVAIHDOISSA:
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 4500, 
              disableOnInteraction: false,
            }}
            speed={2000} 
            slidesPerView={1}
            allowTouchMove={true} 
          >
            {MALLISTO.map((tuote, index) => (
              <SwiperSlide key={index}>
                <div 
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {/* Pieni yläotsikko */}
                  <span
                    style={{
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      fontSize: "13px", // Pienennetty hieman
                      color: "#999",
                      marginBottom: "15px", // Pienennetty väliä
                      display: "block"
                    }}
                  >
                    Kokoelma
                  </span>

                  {/* PIENENNETTY KUVAIKKUNA */}
                  <div 
                    style={{ 
                      width: "100%", 
                      maxWidth: "450px", // PIENENNETTY (oli 600px)
                      height: "450px",   // PIENENNETTY (oli 650px)
                      overflow: "hidden",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.06)", 
                    }}
                  >
                    <img
                      src={tuote.kuva}
                      alt={`HehkuWorks ${tuote.nimi}`}
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover", 
                        display: "block" 
                      }}
                    />
                  </div>

                  {/* PIENENNETTY TYPOGRAFIA */}
                  <div style={{ marginTop: "30px" }}> {/* Pienennetty väliä */}
                    <h2 
                      style={{ 
                        fontSize: "40px", // PIENENNETTY (oli 52px)
                        fontWeight: "300", 
                        letterSpacing: "2px", 
                        margin: "0 0 12px 0", 
                        color: "#222" 
                      }}
                    >
                      {tuote.nimi}
                    </h2>
                    
                    <Link 
                      href={`/mallisto/${tuote.id}`} 
                      style={{ 
                        fontSize: "14px", // Pienennetty hieman
                        textTransform: "uppercase", 
                        letterSpacing: "2px", 
                        color: "#666", 
                        textDecoration: "none", 
                        borderBottom: "1px solid #999", 
                        paddingBottom: "4px",
                        transition: "color 0.3s ease"
                      }}
                    >
                      Tutustu tuotteeseen
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TARINA-OSIO */}
        <div style={{ maxWidth: "700px", margin: "60px auto 0 auto" }}>
          <span
            style={{
              color: "#a67c52",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "20px", 
            }}
          >
            Meidän tarinamme
          </span>
          <h2 style={{ fontSize: "42px", marginTop: "10px" }}>
            Kotimaista Käsityötä
          </h2>
          <p 
            style={{ 
              color: "#555", 
              fontSize: "20px", 
              lineHeight: "1.6" 
            }}
          >
            HehkuWorks valmistaa suomalaisesta koivuvanerista käsin tehtyjä
            valaisimia. Tavoitteenamme on luoda tilaan turvallinen ja pehmeä
            ilmapiiri, joka auttaa rentoutumaan arjen keskellä. Pehmeä valo
            muuttaa huoneen hetkessä rauhalliseksi, kutsuvaksi ja pörröiseksi
            pakopaikaksi.
          </p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link href="/mallisto">
            <button
              className="btn-view"
              style={{ width: "auto", padding: "15px 50px", fontSize: "16px" }}
            >
              Koko Mallisto
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}