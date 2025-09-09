import { Product } from "@/@types/product";

const productService = {
    getById: async (id: number): Promise<Product> => {
        const res = await fetch(`http://localhost:4224/products/${id}`);

        if (!res.ok) {
            throw new Error("Product not found");
        }

        const data = await res.json();

        return {
            id: data.id,
            name: data.name,
            description: data.description,
            price: data.price,
            isFood: data.isFood,
            vat: data.vat,
            stock: data.stock
        }
    }
}

export default productService;