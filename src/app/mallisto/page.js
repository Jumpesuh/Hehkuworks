import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { products } from "@/lib/products";

export default function MallistoPage() {
  return (
    <main>
      <CartDrawer />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Valaisinmallisto
        </h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
