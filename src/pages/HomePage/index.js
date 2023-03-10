import PageContainer from "../../components/PageContainer";
import Posts from '../../components/Posts';

export default function HomePage() {
   return (
      <PageContainer title='Welcome to My App'>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctorconsequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.</p>
       <p><strong> Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </strong></p>
         <h2>Promoted Posts:</h2>
         <Posts showOnlyPromoted={true} />
       </PageContainer>
   );
}