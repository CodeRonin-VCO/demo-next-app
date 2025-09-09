

// export async function GetBook() {

import { Book } from "@/@types/book.js";

    
// }
// ? ou

const bookService = {
    getById: async (id: number): Promise<Book> => {
        const response = await fetch(`http://localhost:4224/books/${id}`);

        if (!response.ok) {
            throw new Error("Book not found !")
        }

        const data = await response.json();

        // Ca s'appelle du mapping
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            author: data.author,
            nbPage: data.nbPage,
            releaseYear: data["année_de_sortie"]
        }
    }
}

export default bookService;