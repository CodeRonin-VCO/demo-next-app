import { notFound } from "next/navigation.js";

// Dans le typage, ce ne sont pas de vrai objet, on peut donc mettre des ; partout.
type DemoDetailPageProps = {
    params: Promise<{
        id: string
    }>;
};

// Particularité de next, on peut rendre la fonction async
export default async function DemoDetailPage({ params }: DemoDetailPageProps) {
    // On doit faire un await de params pour pouvoir récupérer l'id
    const demoId = parseInt((await params).id);

    if (isNaN(demoId) || demoId < 0 || demoId > 100) {
        // Fais la page 404 automatiquement (méthode de next.js)
        notFound();
    };

    return (
        <>
            <h1 className="text-4xl">Page détail</h1>
            <h2 className="text-2xl">L'id est : {demoId}</h2>
        </>
    )
}