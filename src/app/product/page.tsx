import PriceStyle from "@/components/price-style/price-style";
import productService from "@/services/product.service";
// import productData from "@/data/product-data.json";
import Link from "next/link.js";



export default async function ProductPage() {
    const products = await productService.getAll();

    return (
        <>
            <h1 className="text-4xl text-center mt-10 mb-10">Liste des produits</h1>
            <ul className="text-center">
                {products.map((pr) => (
                    <li key={pr.id}>
                        <Link href={`/product/detail/${pr.id}`}>{pr.name} | <PriceStyle value={pr.price} vat={pr.vat}/> | {pr.isFood ? "🍜" : "♾️"}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}