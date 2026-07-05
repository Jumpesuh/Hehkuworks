"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-content">
        {/* CSS-LOGOTOTEUTUS */}
        <Link
          href="/"
          className="logo-container"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Valonsäteet (7 kappaletta kuten kuvassa) */}
          <div className="sun-rays">
            <span className="ray ray-1"></span>
            <span className="ray ray-2"></span>
            <span className="ray ray-3"></span>
            <span className="ray ray-4"></span>
            <span className="ray ray-5"></span>
            <span className="ray ray-6"></span>
            <span className="ray ray-7"></span>
          </div>
          {/* Tekstiosiot */}
          <div className="logo-text-hehku">HEHKU</div>
          <div className="logo-text-works">WORKS</div>
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
