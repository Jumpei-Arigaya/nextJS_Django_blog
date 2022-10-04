import Link from "next/link";



const Post = ({ post }) => {
    return (
        <div>
            <Link href={`posts/${post.id}`}>
                <div className="p-4 cursor-pointer sm:w-1/2 lg:h-1/4">
                    <img alt="post" className="object-cover" src={post.image} />
                    <div className="text-center my-4">
                        <p>{post.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Post
