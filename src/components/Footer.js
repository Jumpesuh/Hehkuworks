export default function Footer() {
  return (
    <footer id="yhteystiedot">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h3 style={{ color: "white" }}>HEHKUWORKS</h3>
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
              Puusepänkatu 5, Hollola
              <br />
              info@hehkuworks.fi
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
        <div className="footer-bottom">
          &copy; 2026 HEHKUWORKS Oy - Kaikki oikeudet pidätetään.
        </div>
      </div>
    </footer>
  );
}
