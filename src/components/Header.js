"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-content">
        <Link href="/" className="logo">
          HEHKU<span>WORKS</span>
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
              <a href="#yhteystiedot" onClick={() => setIsMenuOpen(false)}>
                Yhteystiedot
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
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
