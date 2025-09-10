import { Product, ProductListItem } from "@/@types/product";

// ?Remarque de construction fichier : juste mettre des throw error dans chaque méthode pour voir si ça passe avant de coder tous le code

const productService = {
    getAll: async (): Promise<ProductListItem[]> => {
        const res = await fetch(`http://localhost:4224/products`);

        if (!res.ok) {
            throw new Error("Product not found");
        }

        const data = await res.json();

        return data;
    },
    getById: async (id: number): Promise<Product> => {
        const res = await fetch(`http://localhost:4224/products/${id}`);

        if (!res.ok) {
            throw new Error("Product not found");
        }

        const data = await res.json();

        return data;
    },
    getProductMostInStock: async (): Promise<ProductListItem[]> => {
        const res = await fetch(`http://localhost:4224/products?_sort=stock&_order=desc`);
        if (!res.ok) {
            throw new Error("Product not found");
        }
        const data: Product[] = await res.json();
        const maxStock = data[0].stock;
        const datas = data.filter(e => e.stock === maxStock);

        return datas;

    },
    getCountProduct: async (isFood: boolean): Promise<number> => {
        const res = await fetch(`http://localhost:4224/products?isFood=${isFood}`);
        const data: Product[] = await res.json();

        return data.length;
    },
    getOutOfStock : async (): Promise<ProductListItem[]> => {
        const res = await fetch(`http://localhost:4224/products?stock=0`);
        const data: Product[] = await res.json();

        return data;
    },
    add: async (product: Product): Promise<number> => {
        const res: Response = await fetch(`http://localhost:4224/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error("Failed to add product");
        }

        const data: Product = await res.json();

        return data.id;
    }
}

export default productService;