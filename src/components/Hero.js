"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Suomalaista Puuta",
    text: "Käsityönä valmistetut valaisimet Pohjolan puusta.",
    img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Aitoa Tunnelmaa",
    text: "Luonnonläheinen valo jokaiseen kotiin.",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
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
          <div className="hero-overlay">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
