export default function MallistoPage() {
  return (
    <main>
      <div className="container" style={{ padding: "60px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Valaisinmallisto
        </h2>

        {/* Tuotegridi, johon upotetaan suoraan Holvin antamat iFramet */}
        <div className="product-grid">
          {/* Tuote 1: Loiste Kattokruunu */}
          <div className="holvi-card">
            <iframe
              style={{ width: "px", height: "360px" }}
              src="https://holvi.com/shop/HEHKUWORKS/product/507fae44351eda452df7341963ceb7c2/embedded/"
              allow="payment"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
