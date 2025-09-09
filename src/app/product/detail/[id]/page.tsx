import { notFound } from "next/navigation.js";

type DetailProductPageProps = {
    params: Promise<{
        id: string
    }>;
};

export default async function DetailProductPage({ params }: DetailProductPageProps) {
    const demoId = parseInt((await params).id);

    if (isNaN(demoId) || demoId < 0 || demoId > 100) {
        // Fais la page 404 automatiquement (méthode de next.js)
        notFound();
    };

    return (
        <>
            <h2 className="text-2xl">Détails des produits</h2>
        </>
    )
}