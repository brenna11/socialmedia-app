import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Settings from "./components/Settings";

export default function App() {
 
    // const addPostHandler = (title, description, category, promote, status, pic) => {
    //     const updatedPosts = [...posts];
    //     updatedPosts.push({
    //         id: uuid(),
    //         title,
    //         description,
    //         category,
    //         promote,
    //         status,
    //         pic,
    //         likes: 0,
    //         dislikes: 0,
    //     });
    //     setPosts(updatedPosts);
    // };

    // // update like number
    // const onPostLike = (id) => {
    //     const updatedPosts = [...posts];
    //     updatedPosts.forEach((post) => {
    //         if (post.id === id) {
    //             post.likes++;
    //         }
    //     });
    //     setPosts(updatedPosts);
    // };

    // // update dislike number
    // const onPostDislike = (id) => {
    //     const updatedPosts = [...posts];
    //     updatedPosts.forEach((post) => {
    //         if (post.id === id) {
    //             post.dislikes++;
    //         }
    //     });
    //     setPosts(updatedPosts);
    // };

    return (
        <>
            <Header />
            <Posts/>
            <Form/>
            <Settings />
            <Footer />
        </>
    );
}