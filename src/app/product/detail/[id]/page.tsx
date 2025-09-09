import { notFound, redirect } from "next/navigation.js";
// import productData from "@/data/product-data.json";
import PriceStyle from "@/components/price-style/price-style";
import productService from "@/services/product.service";


type DetailProductPageProps = {
    params: Promise<{
        id: string //! comme c'est un paramètre, ce sera toujours un string
    }>;
};

export default async function DetailProductPage({ params }: DetailProductPageProps) {
    const detailId = parseInt((await params).id);
    const products = await productService.getById(detailId).catch(() => notFound());

    // if (isNaN(detailId) || detailId < 0 || detailId > 100) {
    //     // Fais la page 404 automatiquement (méthode de next.js)
    //     notFound();
    // };

    // const detailProduct = productData.find(pr => pr.id === detailId);
    // if(!detailProduct) {
    //     redirect("/product");
    // }

    return (
        <>
            <h2 className="text-2xl w-fit pt-5 ml-5">Détails du produit:</h2>
            <div className="border w-fit p-5 ml-20 mt-5">
                <h3>{products.name}</h3>
                <p>{products.description ?? "Aucune description"}</p>
                <p>TVA: <strong><PriceStyle value={products.price} vat={products.vat}/></strong></p>
                <p>HTVA: <strong><PriceStyle value={products.price} /></strong></p>
                <p>{products.isFood ? "Nourriture" : "Objet"}</p>
            </div>
        </>
    )
}