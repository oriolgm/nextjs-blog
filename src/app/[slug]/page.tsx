import getPost from "@/services/getPost";
import MarkdownPreview from "@/components/markdownPreview";
import getPosts from "@/services/getPosts";

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
    const post = getPost(slug);

    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">{post.title}</h1>
            <div>{post.author}</div>
            <div>{post.category}</div>
            <div>{post.date}</div>
            <MarkdownPreview source={post.content} />
        </div>
    );
};

export async function generateStaticParams() {
    const posts = getPosts();

    return posts.map(post => { slug: post.slug });
}

export default PostPage;