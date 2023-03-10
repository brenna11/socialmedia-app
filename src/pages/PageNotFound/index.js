import PageContainer from "../../components/PageContainer";
import { Link } from 'react-router-dom';

export default function PageNotFound() {
   return (
      <PageContainer title='Page Not Found'>
         <p>404 error.</p>
         <ul>
            <li>
               <Link to='/'>Click here</Link> to go to the initial page.
            </li>
         </ul>
      </PageContainer>
   );
}