import TuoteClient from "./TuoteClient";

const TUOTETIEDOT = {
  vieno: {
    nimi: "Vieno",
    kuvaus: "",
    korkeus: "33 cm",
    halkaisija: "34 cm",
    kuvat: [
      "/images/Vieno_puu.jpg",
      "/images/Vieno_puu_valo.jpg",
      "/images/Vieno_musta.jpg",
      "/images/Vieno_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "716f7476ed352eaadaed732d69684ebb",
        hinta: "379 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "d7e9b7c93999f279f666f5e489550b59",
        hinta: "409 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  sade: {
    nimi: "Säde",
    kuvaus: "",
    korkeus: "32 cm",
    halkaisija: "34 cm",
    kuvat: [
      "/images/Sade_puu.jpg",
      "/images/Sade_puu_valo.jpg",
      "/images/Sade_musta.jpg",
      "/images/Sade_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "5561a5587bdd795a6ff4bf4c521c7d12",
        hinta: "379 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "19e0e85f892126b844c983eb86c1757d",
        hinta: "409 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  kero: {
    nimi: "Kero",
    kuvaus: "",
    korkeus: "33 cm",
    halkaisija: "34 cm",
    kuvat: [
      "/images/Kero_puu.jpg",
      "/images/Kero_puu_valo.jpg",
      "/images/Kero_musta.jpg",
      "/images/Kero_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "6c2d7150b17cabf0827f507d1ba34791",
        hinta: "349 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "df577b633bcee8dc657bc758ac095106",
        hinta: "379 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  kaio: {
    nimi: "Kaio",
    kuvaus: "",
    korkeus: "36 cm",
    halkaisija: "27 cm",
    kuvat: [
      "/images/Kaio_puu.jpg",
      "/images/Kaio_puu_valo.jpg",
      "/images/Kaio_musta.jpg",
      "/images/Kaio_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "ae32fb3fb23ef0b58019c83378590308",
        hinta: "349 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "a8b9e53bb6835b8c501053d537e86c9f",
        hinta: "379 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  kide: {
    nimi: "Kide",
    kuvaus: "",
    korkeus: "21 cm",
    halkaisija: "23 cm",
    kuvat: [
      "/images/Kide_puu.jpg",
      "/images/Kide_puu_valo.jpg",
      "/images/Kide_musta.jpg",
      "/images/Kide_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "1016c4561000aabcef6a2c567a56bd75",
        hinta: "299 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "15a12b0791ad8e17715970aed9866fcd",
        hinta: "329 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  sora: {
    nimi: "Sora",
    kuvaus: "",
    korkeus: "21 cm",
    halkaisija: "23 cm",
    kuvat: [
      "/images/Sora_puu.jpg",
      "/images/Sora_puu_valo.jpg",
      "/images/Sora_musta.jpg",
      "/images/Sora_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "2c603313e04e0afe779b45b73f05ee63",
        hinta: "289 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "a466bdddd151b5b204a10a78502a1b81",
        hinta: "319 €",
        kuvaIndeksi: 2,
      },
    ],
  },
  maininki: {
    nimi: "Maininki",
    kuvaus: "",
    korkeus: "37 cm",
    halkaisija: "21 cm",
    kuvat: [
      "/images/Maininki_puu.jpg",
      "/images/Maininki_puu_valo.jpg",
      "/images/Maininki_musta.jpg",
      "/images/Maininki_musta_valo.jpg",
    ],
    variantit: [
      {
        vari: "Puu",
        iframeId: "507fae44351eda452df7341963ceb7c2",
        hinta: "349 €",
        kuvaIndeksi: 0,
      },
      {
        vari: "Musta",
        iframeId: "dae95df372be75608f8beb53d3577f4b",
        hinta: "379 €",
        kuvaIndeksi: 2,
      },
    ],
  },
};

// Generoidaan reitit serverillä build-vaiheessa
export function generateStaticParams() {
  return Object.keys(TUOTETIEDOT).map((id) => ({
    id: id,
  }));
}

// Serverikomponentti voi olla async uusimmissa Next.js -versioissa
export default async function TuoteSivu({ params }) {
  // Odotetaan parametrien ratkeamista (Next.js 15+ vaatimus)
  const resolvedParams = await params;
  const tuoteId = resolvedParams.id ? resolvedParams.id.toLowerCase() : "";
  const tuote = TUOTETIEDOT[tuoteId];

  // Passataan oikea tuote Client-komponentille
  return <TuoteClient tuote={tuote} />;
}
