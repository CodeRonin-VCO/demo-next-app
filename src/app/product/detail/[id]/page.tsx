import { notFound } from "next/navigation.js";

type DetailProductPageProps = {
    params: Promise<{
        id: string //! comme c'est un paramètre, ce sera toujours un string
    }>;
};

export default async function DetailProductPage({ params }: DetailProductPageProps) {
    const detailId = parseInt((await params).id);

    if (isNaN(detailId) || detailId < 0 || detailId > 100) {
        // Fais la page 404 automatiquement (méthode de next.js)
        notFound();
    };

    return (
        <>
            <h2 className="text-2xl">Détails des produits</h2>
        </>
    )
}