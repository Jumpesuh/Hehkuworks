"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % product.images.length);
  };

  const prevImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  return (
    <div className="product-card">
      <div className="slider-wrapper">
        <button className="slider-arrow prev" onClick={prevImg}>
          &#10094;
        </button>
        <Link href={`/tuote/${product.id}`}>
          <img
            src={product.images[currentImg]}
            alt={product.name}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        </Link>
        <button className="slider-arrow next" onClick={nextImg}>
          &#10095;
        </button>
        <div className="slider-dots">
          {product.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentImg ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
      <div className="card-info">
        <h3>{product.name}</h3>
        <p>{product.price.toFixed(2).replace(".", ",")} €</p>
        <Link href={`/tuote/${product.id}`}>
          <button className="btn-view">Katso yksityiskohdat</button>
        </Link>
      </div>
    </div>
  );
}
