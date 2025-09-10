export type ProductVat = 6 | 12 | 21;

export type Product = {
    id: number,
    name: string,
    description: string | null,
    price: number,
    isFood: boolean,
    vat: ProductVat,
    stock: number
}
// Permet de ne pas copier coller et retirer les éléments qui nous gêne mais simplement faire une omission des champs du modèles qu'on ne veut pas
export type ProductListItem = Omit<Product, "description" | "stock">;