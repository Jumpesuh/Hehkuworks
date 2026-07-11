"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Suomalaista Puuta",
    text: "Käsityönä valmistetut valaisimet Pohjolan puusta.",
    // KORJAUS: Lisätty kauttaviiva (/) polun alkuun
    img: "/images/koivukuva.png", 
  },
  {
    title: "Aitoa Tunnelmaa",
    text: "Luonnonläheinen valo jokaiseen kotiin.",
    // KORJAUS: Lisätty kauttaviiva (/) polun alkuun
    img: "/images/lamppu.png", 
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.img})`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === current ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div className="hero-overlay" style={{ textAlign: "center" }}>
            {/* OTSIKKO */}
            <h2 style={{ fontSize: "32px", margin: "0 0 15px 0" }}>
              {slide.title}
            </h2>
            
            {/* NORMI TEKSTI */}
            <p style={{ fontSize: "20px", margin: 0 }}>
              {slide.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}