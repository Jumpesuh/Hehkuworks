export default function Footer() {
  return (
    <footer id="yhteystiedot">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h3 style={{ color: "white" }}>HEHKUWORKS</h3>
            <p>
              Aitoa suomalaista käsityötä vuodesta 2026. Jokainen valaisin on
              lupaus laadusta ja luonnon kunnioituksesta.
            </p>
          </div>
          <div>
            <h3>Yhteystiedot</h3>
            <p>
              Tehdas:
              <br />
              Sannaksentie 36 B, Kirkkonummi
              <br />
              Asiakaspalvelu@hehkuworks.fi
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
                <a href="#">Y-tunnus: 3618786-6</a>
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
