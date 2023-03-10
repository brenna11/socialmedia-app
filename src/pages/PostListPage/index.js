import PageContainer from "../../components/PageContainer";
import Posts from '../../components/Posts';
import './styles.scss';
import { useNavigate } from "react-router-dom";

export default function PostListPage() {
   const navigate = useNavigate();

   const addPostClickHandler = () => {
      navigate('/posts/add');
   }

   return (
      <PageContainer title='Posts'>
         <Posts showOnlyPromoted={false}/>
         <div className='addPostBtnContainer'>
            <button onClick={addPostClickHandler}>
               Add Post
            </button>
         </div>
      </PageContainer>
   );
}