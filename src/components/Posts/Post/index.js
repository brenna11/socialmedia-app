import { getCategory } from "../../../includes/variable";
import { getStatus } from "../../../includes/variable";
import './styles.scss';
import { BiLike, BiDislike } from "react-icons/bi";

export default function Post({ id, title, description, category, promote, status, pic, likes, dislikes, onPostLike, onPostDislike }) {

      const likeClickHandler = () => {
            onPostLike(id);
      }

      const dislikesClickHandler = () => {
            onPostDislike(id);
      }

      const promoteStyle = promote
            ? 'promote-yes'
            : 'promote-no';

      return (
            <div className="post-component">
                  <h3>{title}</h3>
                  <div className="description">
                        <img src={pic} alt={title} />
                        <span>{description}</span>
                  </div>
                  <div className="post-info">
                        <div>
                              Category: 
                              <strong>{getCategory(category)}</strong>
                        </div>
                        <div>
                              Status: 
                              <strong>{getStatus(status)}</strong>
                        </div>
                        <div className={promoteStyle}>Promote:
                              <strong>{promote ? 'Yes' : 'No'}</strong>
                        </div>
                  </div>
                  <div className="post-rate">
                        <button 
                           className="post-like" 
                           onClick={likeClickHandler}
                        >
                              <BiLike /> {likes}
                        </button>
                        <button 
                           className="post-dislike" 
                           onClick={dislikesClickHandler}
                        >
                              <BiDislike /> {dislikes}
                        </button>
                  </div>
            </div>
      );
}
