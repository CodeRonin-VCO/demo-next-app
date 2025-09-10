import Link from "next/link.js";

const links = [
    { href: "/", name: "Page d'accueil", icon: "🛖" },
    { href: "/demo", name: "Page demo", icon: "😶‍🌫️" },
    { href: "/product", name: "Page produit", icon: "🧈" },
    { href: "/product/add", name: "Page ajouter produit", icon: "🅰️" },
    { href: "/blog", name: "Page blog", icon: "🗒️" },
];

export default function NavBar() {
    // Les balises <a> fonctionnent mais entrainent un refresh contrairement aux balises <Link> (contrairement à react où c'est "to=''" à la place de "href=''", next réutilise les attributs natifs)

    return (
        <ul className="flex gap-2 justify-end">
            {
                links.map(({ href, name, icon }) => (
                    <li key={href}>
                        <Link href={href} className="flex gap-1">
                            <span>{icon}</span>
                            <span className="hidden sm:block">{name}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}