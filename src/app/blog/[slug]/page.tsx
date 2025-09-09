import blogData from "@/data/blog-data.json";
import { redirect } from "next/navigation.js";

type BlogSlugPageProps = {
    params: Promise<{
        slug: string
    }>;
};

export default async function BlogSlugPage({ params }:BlogSlugPageProps) {
    const blogSlug = (await params).slug;

    const post = blogData.find(blog => blog.slug === blogSlug);

    if (!post) {
        // Propre à next: faire une redirection
        redirect("/blog");
    }

    return (
        <>
            <h2 className="text-2xl">{post.title}</h2>
            <h3>{post.date}</h3>
            <p>{post.content}</p>
        </>
    )
}