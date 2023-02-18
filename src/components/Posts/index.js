import Post from "./Post";
import './styles.scss';

export default function Posts({ posts, onPostLike, onPostDislike }) {
    // sum of likes and dislikes
    let totalLikes = 0;
    let totalDislikes = 0;
    posts.forEach((post) => {
        totalLikes += post.likes;
        totalDislikes += post.dislikes;
    });

    return (
        <main className="post-list">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    onPostLike={onPostLike}
                    onPostDislike={onPostDislike}
                    {...post}
                />
            ))}

            <div className="total-rate">
                Total Likes: {totalLikes}| Total Dislikes: {totalDislikes}
            </div>
        </main>
    );
}
