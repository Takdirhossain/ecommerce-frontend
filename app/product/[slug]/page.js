import Navbar from "@/components/common/Navbar"
import ProductDetails from "@/components/details/details"
import { API_URL } from "@/config/config";
import axios from "axios";

async function fetchProduct(slug) {
    try {
      const response = await axios.get(`${API_URL}/product/${slug}`, { next: { revalidate: 60 } });
      return response.data || [];
    } catch (error) {
      console.error("Error fetching product:", error);
      return [];
    }
  }

export default async function ProductPage({ params }) {
    const product = await fetchProduct(params.slug);
    console.log(product)
    return (
        <>
         <Navbar />
         <ProductDetails product={product?.data}/>
        </>
    )
}