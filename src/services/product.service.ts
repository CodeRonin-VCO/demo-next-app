import { Product, ProductListItem } from "@/@types/product";

// ?Remarque de construction fichier : juste mettre des throw error dans chaque méthode pour voir si ça passe avant de coder tous le code

const productService = {
    getById: async (id: number): Promise<Product> => {
        const res = await fetch(`http://localhost:4224/products/${id}`);

        if (!res.ok) {
            throw new Error("Product not found");
        }

        const data = await res.json();

        return data;
    },
    getAll: async (): Promise<ProductListItem[]> => {
        const res = await fetch(`http://localhost:4224/products`);

        if (!res.ok) {
            throw new Error("Product not found");
        }

        const data = await res.json();

        return data;
    },
}

export default productService;