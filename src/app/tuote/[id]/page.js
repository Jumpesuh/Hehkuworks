"use client";
import { useState, use } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/store/useCart";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export default function ProductPage({ params }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const { addToCart, toggleCart } = useCart();

  const [imgIndex, setImgIndex] = useState(0);
  const [sizeExtra, setSizeExtra] = useState(0);
  const [color, setColor] = useState("Luonnollinen Tammi");

  if (!product) return <div className="container">Tuotetta ei löytynyt.</div>;

  const nextImg = () =>
    setImgIndex((prev) => (prev + 1) % product.images.length);
  const prevImg = () =>
    setImgIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );

  return (
    <main>
      <Header />
      <CartDrawer />
      <div className="container" style={{ padding: "40px 0" }}>
        <button
          onClick={() => window.history.back()}
          style={{
            cursor: "pointer",
            marginBottom: "20px",
            background: "none",
            border: "none",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          ← Takaisin
        </button>
        <div className="product-layout">
          <div>
            <div className="slider-wrapper">
              <button className="slider-arrow prev" onClick={prevImg}>
                &#10094;
              </button>
              <img
                src={product.images[imgIndex]}
                className="main-image"
                alt={product.name}
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
              <button className="slider-arrow next" onClick={nextImg}>
                &#10095;
              </button>
              <div className="slider-dots">
                {product.images.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === imgIndex ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
            <div className="sp-thumbnails">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`sp-thumbnail ${imgIndex === i ? "active-thumb" : ""}`}
                  onClick={() => setImgIndex(i)}
                />
              ))}
            </div>
          </div>
          <div>
            <h1>{product.name}</h1>
            <div className="price">
              {(product.price + sizeExtra).toFixed(2).replace(".", ",")} €
            </div>
            <p>{product.description}</p>
            <label>Koko:</label>
            <select onChange={(e) => setSizeExtra(Number(e.target.value))}>
              <option value="0">Standard (35 cm)</option>
              <option value="45">Grand (55 cm) + 45,00 €</option>
            </select>
            <label>Puulaji:</label>
            <select onChange={(e) => setColor(e.target.value)}>
              <option value="Luonnollinen Tammi">Luonnollinen Tammi</option>
              <option value="Tumma Pähkinä">Tumma Pähkinä</option>
            </select>
            <button
              className="btn-view"
              style={{ marginTop: "20px" }}
              onClick={() => {
                addToCart({
                  ...product,
                  price: product.price + sizeExtra,
                  color,
                  size: sizeExtra > 0 ? "Grand" : "Standard",
                });
                toggleCart();
              }}
            >
              Lisää Ostoskoriin
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
