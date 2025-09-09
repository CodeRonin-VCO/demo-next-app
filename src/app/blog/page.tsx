import blogData from "@/data/blog-data.json";
import Link from "next/link.js";

export default function BlogPage() {
    

    return (
        <>
            <h1 className="text-4xl">Page de blog</h1>

            <ul>
                {blogData.map((blog) => (
                    <li key={blog.slug}>
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}