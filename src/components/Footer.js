export default function Footer() {
  return (
    <footer
      id="yhteystiedot"
      style={{
        background: "#3e2723",
        color: "#e0c9a6",
        padding: "80px 0 40px 0",
        marginTop: "100px",
      }}
    >
      <div className="container">
        <div
          className="footer-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "50px",
          }}
        >
          <div>
            <h3 style={{ color: "white" }}>HEHKUWERKS</h3>
            <p>
              Aitoa suomalaista käsityötä vuodesta 2024. Jokainen valaisin on
              lupaus laadusta ja luonnon kunnioituksesta.
            </p>
          </div>
          <div>
            <h3>Yhteystiedot</h3>
            <p>
              Verstas & Showroom:
              <br />
              Puusepänkatu 5, Lahti
              <br />
              info@hehkuwerks.fi
            </p>
          </div>
          <div>
            <h3>Asiakaspalvelu</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a href="#">Tietosuojaseloste</a>
              </li>
              <li>
                <a href="#">Toimitusehdot</a>
              </li>
              <li>
                <a href="#">Y-tunnus: 3456789-0</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="footer-bottom"
          style={{
            marginTop: "60px",
            paddingTop: "20px",
            borderTop: "1px solid #5d4037",
            textAlign: "center",
            fontSize: "12px",
            opacity: 0.7,
          }}
        >
          &copy; 2026 HEHKUWERKS Oy - Kaikki oikeudet pidätetään.
        </div>
      </div>
    </footer>
  );
}
