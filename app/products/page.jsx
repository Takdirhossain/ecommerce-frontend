import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import { ProductFilters } from "@/components/products/ProductFilters"
import { API_URL } from "@/config/config"

export const revalidate = 60 // ISR: regenerate every 60 seconds

export default async function ProductsPage({ searchParams }) {
  const categoryParam = searchParams?.categories // comma-separated
  const brandParam = searchParams?.brands
  const minPrice = searchParams?.minPrice
  const maxPrice = searchParams?.maxPrice

  const params = new URLSearchParams()
  if (categoryParam) params.set("categories", categoryParam)
  if (brandParam) params.set("brands", brandParam)
  if (minPrice) params.set("minPrice", minPrice)
  if (maxPrice) params.set("maxPrice", maxPrice)

  const res = await fetch(`${API_URL}/products/all?${params.toString()}`, {
    next: { revalidate: 60 }
  })
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
