import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "HEHKUWORKS | Kotimaista Käsityötä",
  description: "Käsityönä valmistetut valaisimet Pohjolan puusta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
