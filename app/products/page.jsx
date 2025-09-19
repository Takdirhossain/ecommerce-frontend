import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductsGrid } from "@/components/products/ProductsGrid";

export default function ProductsPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-neutral-50">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* <ProductsGrid /> */}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
