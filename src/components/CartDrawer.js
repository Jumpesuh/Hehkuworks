"use client";
import { useCart } from "@/store/useCart";

export default function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeFromCart } = useCart();

  // Lasketaan kokonaissumma
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Taustan himmennys - saa 'active' luokan CSS:stä */}
      <div
        className={`cart-overlay ${isCartOpen ? "active" : ""}`}
        onClick={toggleCart}
      />

      {/* Sivusta liukuva paneeli - saa 'active' luokan CSS:stä */}
      <div className={`cart-drawer ${isCartOpen ? "active" : ""}`}>
        <div
          className="cart-header"
          style={{
            padding: "30px",
            borderBottom: "1px solid #e0c9a6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "20px" }}>Ostoskori</h2>
          <button
            onClick={toggleCart}
            style={{
              background: "none",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
              color: "#3e2723",
            }}
          >
            &times;
          </button>
        </div>

        <div
          className="cart-items"
          style={{ padding: "30px", flexGrow: 1, overflowY: "auto" }}
        >
          {cart.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#888",
                fontStyle: "italic",
                marginTop: "40px",
              }}
            >
              Ostoskorisi on tyhjä.
            </p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <div className="cart-item-title">{item.name}</div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    {item.size} | {item.color}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="cart-item-price">
                    {item.price.toFixed(2).replace(".", ",")} €
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#999",
                      cursor: "pointer",
                      fontSize: "12px",
                      textDecoration: "underline",
                      padding: 0,
                      marginTop: "5px",
                    }}
                  >
                    Poista
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div
          className="cart-footer"
          style={{
            padding: "30px",
            background: "white",
            borderTop: "1px solid #e0c9a6",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <span>Yhteensä:</span>
            <span>{total.toFixed(2).replace(".", ",")} €</span>
          </div>
          <button
            className="btn-view"
            style={{ padding: "15px", cursor: "pointer" }}
            onClick={() => alert("Siirrytään kassalle...")}
          >
            Siirry kassalle
          </button>
        </div>
      </div>
    </>
  );
}
