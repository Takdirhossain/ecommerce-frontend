import Navbar from "@/components/common/Navbar";
import Products from "@/components/home/Products";
import HorizontalRow from "@/components/common/HorizontalRow";
import { FlashSale } from "@/components/home/FlashSale";
import Category from "@/components/home/Category";
import Footer from "@/components/common/Footer";
import { API_URL } from "@/config/config";
import axios from "axios";
import Hero from "@/components/home/Hero";

async function fetchProducts() {
  try {
    const [newArrivalsRes, bestSellerRes, onSaleRes] = await Promise.all([
      axios.get(`${API_URL}/products?type=new-arrival&limit=10`, { next: { revalidate: 60 } }),
      axios.get(`${API_URL}/products?type=best-selling&limit=10`, { next: { revalidate: 60 } }),
      axios.get(`${API_URL}/products?type=special-offer&limit=10`, { next: { revalidate: 60 } }),
    ]);

    return {
      "new-arrival": newArrivalsRes.data || [],
      "best-selling": bestSellerRes.data || [],
      "special-offer": onSaleRes.data || [],
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      "new-arrival": [],
      "best-selling": [],
      "special-offer": [],
    };
  }
}
async function fetchCategories() {
  try {
    const response = await axios.get(`${API_URL}/categories`, { next: { revalidate: 60 } });
    return response.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function generateMetadata() {
  return {
    title: "ProSlider – Shop New Arrivals, Best Sellers & Deals",
    description: "Discover trending fashion and top deals. Explore our New Arrivals, Best Sellers, and On Sale collections.",
    alternates: {
      canonical: "https://yourdomain.com/",
    },
    openGraph: {
      title: "ProSlider – Shop New Arrivals, Best Sellers & Deals",
      description: "Discover trending fashion and top deals.",
      url: "https://yourdomain.com/",
      siteName: "ProSlider",
      type: "website",
    },
  };
}

export default async function Home() {
  const productsByType = await fetchProducts();
  const categories = await fetchCategories();
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Products productsByType={productsByType} />
      <div className="w-full mt-20">
        <HorizontalRow />
      </div>
      {/* <FlashSale /> */}
      <HorizontalRow />
      <Category categories={categories?.data} />
      <Footer />
    </>
  );
}
