import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata = {
  title: "Hehkuworks",
  description: "Uniikit valaisimet suomalaisesta puusta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body suppressHydrationWarning>
        <Header />
        <CartDrawer />

        {/* children on se sisältö, joka vaihtuu (etusivu, mallisto, tuote) */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
