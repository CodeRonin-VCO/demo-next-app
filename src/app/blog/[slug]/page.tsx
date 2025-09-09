type BlogSlugPageProps = {
    params: Promise<{
        slug: string
    }>;
};

export default async function BlogSlugPage({ params }:BlogSlugPageProps) {
    const blogSlug = (await params).slug;

    return (
        <>
            <h2 className="text-2xl">Blog : slug page</h2>
        </>
    )
}