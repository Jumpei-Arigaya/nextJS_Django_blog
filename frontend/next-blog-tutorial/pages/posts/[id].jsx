import { getAllPostsData, getAllPostsId, getPostData } from "../../lib/posts";
import { useRouter } from 'next/router'

const PostData = ({ post }) => {
    const router = useRouter();
    if (router.isFallback || !post) {
        return <div>Loading...</div>
    }

    const onClickHander = () => {
        getAllPostsData();
        console.log(post)
    }

    return (
        <div className="space-y-5 w-full">
            <div className="flex justify-center flex-col items-center mb-5">
                <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
                <p className="mb-3">{post.created_at}</p>
                <div className="boreder w-1/4"></div>
            </div>
            <p className="whitespace-pre-wrap">{post.content}</p>
        </div>
    );
}

export default PostData;

export const getStaticPaths = async () => {
    const paths = await getAllPostsId();
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
        revalidate: 3,
    };
};
