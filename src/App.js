import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostFormPage from "./pages/PostFormPage";
import PostItemPage from "./pages/PostItemPage";
import PreferencesPage from "./pages/PreferencesPage";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUsIntroductionPage from "./pages/AboutUsPage/Introduction";
import AboutUsMissionPage from "./pages/AboutUsPage/Mission";
import AboutUsPrivacyPage from "./pages/AboutUsPage/Privacy";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage/>} />

                <Route path='/posts' element={<PostListPage/>} />
                <Route path='/posts/:id' element={<PostItemPage />} />
                <Route path='/posts/add' element={<PostFormPage />} />

                <Route path='/preferences' element={<PreferencesPage />} />

                <Route path='/about-us' element={<AboutUsPage/>}>
                    <Route path='' element={<AboutUsIntroductionPage />} />
                    <Route path='mission' element={<AboutUsMissionPage />} />
                    <Route path='privacy' element={<AboutUsPrivacyPage />} />
                </Route>

                <Route path='*' element={<PageNotFound/>} />
            </Routes>
            <Footer />
        </>
    );
}
