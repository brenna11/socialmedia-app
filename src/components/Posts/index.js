import Post from "./Post";
import './styles.scss';
import { useSelector } from "react-redux";

export default function Posts({ showOnlyPromoted }) {
    let posts = useSelector((state) => state.post.posts);
    const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

    if (showOnlyPromoted) {
        posts = posts.filter((post) => post.promote);
    }

    // sum of likes and dislikes
    let totalLikes = 0;
    let totalDislikes = 0;
    posts.forEach((post) => {
        totalLikes += post.likes;
        totalDislikes += post.dislikes;
    });

    return (
        <div className="post-list full-width">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    {...post}
                />
            ))}

            {(allowLikes || allowDislikes)&& !showOnlyPromoted && (
                <div className="total-rate">
                    {allowLikes && (
                       <>Total Likes: {totalLikes} </>
                    )}
                    {allowLikes && allowDislikes && (
                        <> | </>
                    )}
                    {allowDislikes && (
                        <>Total Dislikes: {totalDislikes}</>
                    )}
                </div>
            )}
        </div>
    );
}
