import PriceStyle from "@/components/price-style/price-style";
import productData from "@/data/product-data.json";
import Link from "next/link.js";

export default function ProductPage() {

    
    return (
        <>
            <h1 className="text-4xl text-center mt-10 mb-10">Liste des produits</h1>
            <ul className="text-center">
                {productData.map((pr) => (
                    <li key={pr.id}>
                        <Link href={`/product/detail/${pr.id}`}>{pr.name} | <PriceStyle value={pr.price} vat={pr.vat}/> | {pr.isFood ? "🍜" : "♾️"}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}