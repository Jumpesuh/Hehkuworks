"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/store/useCart";

export default function Header() {
  const { cart, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-content">
        <Link href="/" className="logo">
          HEHKU<span>WERKS</span>
        </Link>

        <nav className={isMenuOpen ? "active" : ""}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Etusivu
              </Link>
            </li>
            <li>
              <Link href="/mallisto" onClick={() => setIsMenuOpen(false)}>
                Mallisto
              </Link>
            </li>
            <li>
              <a href="#footer" onClick={() => setIsMenuOpen(false)}>
                Yhteystiedot
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <button className="cart-btn" onClick={toggleCart}>
            Kori ({cart.length})
          </button>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
