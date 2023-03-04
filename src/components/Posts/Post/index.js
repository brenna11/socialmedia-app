import { getCategory } from "../../../includes/variable";
import { getStatus } from "../../../includes/variable";
import './styles.scss';
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost } from '../../../redux/postSlice';

export default function Post({ id, title, description, category, promote, status, pic, likes, dislikes}) {
      const { allowLikes, allowDislikes } = useSelector((state) => state.settings)
      const dispatch = useDispatch();

      const likeClickHandler = () => {
           dispatch(likePost(id));
      }

      const dislikesClickHandler = () => {
          dispatch(dislikePost(id));
      }

      const promoteStyle = promote
            ? 'promote-yes'
            : 'promote-no';

      let rateClassName = 'rate';
      if (!allowLikes || !allowDislikes) {
            rateClassName += '  rate-single-button';
      }

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
                  {(allowLikes || allowDislikes) && (
                        <div className={rateClassName}>
                              {allowLikes && (
                                    <button
                                          className="post-like"
                                          onClick={likeClickHandler}
                                    >
                                          <BiLike /> {likes}
                                    </button>
                              )}
                              {allowDislikes && (
                                    <button
                                          className="post-dislike"
                                          onClick={dislikesClickHandler}
                                    >
                                          <BiDislike /> {dislikes}
                                    </button>
                              )}
                        </div>
                  )}
            </div>
      );
}
