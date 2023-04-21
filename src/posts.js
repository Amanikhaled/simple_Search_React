import App from "./App";

function Posts({ posts }) {
    return (
        <ol>
            {posts.map(post => (
                <li key={post.id}>
                    User Name: {post.userId},
                    Full Name: {post.title},
                    User Email: {post.body}
                </li>
            ))}
        </ol>
    );
}
export default Posts;