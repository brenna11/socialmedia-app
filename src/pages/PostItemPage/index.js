import PageContainer from '../../components/PageContainer';
import { useParams, Link } from 'react-router-dom';
import * as database from '../../database';
import PageNotFound from '../PageNotFound';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import './styles.scss';

export default function PostItemPage() {
   const params = useParams();
   const [post, setPost] = useState(null); 
   const [isLoading, setIsLoading] = useState(true);

   // load post from db
   useEffect(() => { 
      (async () => {
         const loadedPost = await database.loadById(params.id);
         setPost(loadedPost);
         setIsLoading(false);
      })();
   }, []);

   if (isLoading) {
      return <Loading />
   }

   if (!post) {
      return <PageNotFound />
   }
   
   return (
      <PageContainer title={post.title} className='post-item-page'>
         <div className='picture'>
            <img src={post.pic} alt={post.title} />
         </div>
         <div className='description'>
            {post.description}
         </div>
         <Link to='/posts' className='back-link'>Back</Link>
      </PageContainer>
   );
}