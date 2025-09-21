import Navbar from "@/components/common/Navbar";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { API_URL } from "@/config/config";
import axios from "axios";

async function fetchCategoryData(slug) {
  try {
    const response = await axios.get(`${API_URL}/category/${slug}`, { next: { revalidate: 60 } });
    return {
      products: response.data.products || [],
      categories: response.data.categories || [],
      brands: response.data.brands || [],
    };
  } catch (error) {
    console.error("Error fetching category data:", error);
    return { products: [], categories: [], brands: [] };
  }
}

export default async function CategoryPage({ params }) {
  const { products, categories, brands } = await fetchCategoryData(params.slug);

  return (
    <div className="min-h-screen bg-neutral-50">
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <Navbar />
      <ProductFilters
        categories={categories}
        brands={brands}
        slug={params.slug}
        initialProducts={products} 
      />
      </main>
    </div>
  );
}
