

export default function ProductAddPage() {
    

    return (
        <>
            <h2 className="text-2xl text-center mt-10 mb-5">Ajouter des produits</h2>
            <form action="" className="m-auto w-2xl flex flex-col border-2 rounded-lg p-20">
                <label htmlFor="name">Nom du produit:</label>
                <input type="text" id="name" name="name" className="border rounded-md mb-5"/>

                <label htmlFor="desc">Description du produit:</label>
                <input type="text" id="desc" name="desc" className="border rounded-md mb-5"/>

                <label htmlFor="price">Prix du produit:</label>
                <input type="text" id="price" name="price" className="border rounded-md mb-5"/>

                <label htmlFor="isFood">Nourriture? (si oui, indiquer "true", sinon "false"):</label>
                <input type="text" id="isFood" name="isFood" className="border rounded-md mb-5"/>

                <label htmlFor="vat">TVA du produit:</label>
                <input type="text" id="vat" name="vat" className="border rounded-md mb-5"/>

                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" className="border rounded-md mb-5"/>

                <button type="submit" className="border w-fit p-5 self-center rounded-4xl bg-sky-500 hover:bg-sky-700 hover:text-blue-50">Ajouter nouveau produit</button>

            </form>
        </>
    )
}