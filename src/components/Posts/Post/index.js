import { getCategory } from "../../../includes/variable";
import { getStatus } from "../../../includes/variable";
import './styles.scss';
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost, removePost } from '../../../redux/postSlice';
import { Link } from 'react-router-dom';
import * as database from '../../../database';

export default function Post({
      id,
      title,
      description,
      category,
      promote,
      status,
      pic,
      likes,
      dislikes
}) {
      const { allowLikes, allowDislikes } = useSelector((state) => state.settings)
      const dispatch = useDispatch();

      const likeClickHandler = async (event) => {
            event.preventDefault();
            dispatch(likePost(id));
            const data = { likes: likes + 1 };
            const updated = await database.update(id, data);
            if (!updated) {
                  alert('Failed to update likes');
                  // data = { likes: likes - 1 };
            }
      }

      const dislikesClickHandler = async (event) => {
            event.preventDefault();
            dispatch(dislikePost(id));
            const data = { dislikes: dislikes + 1 };
            const updated = await database.update(id, data);
            if (!updated) {
                  alert('Failed to update dislikes');
                  // data = { dislikes: dislikes - 1 }
            }
      }

      const removeClickHandler = async (event) => {
            event.preventDefault();

            // remove from redux
            dispatch(removePost(id));
            // remove from db
            const removed = await database.remove(id);
            if (!removed) {
                  alert('Failed to remove post');
            }
      }

      const promoteStyle = promote
            ? 'promote-yes'
            : 'promote-no';

      let rateClassName = 'rate';
      if (!allowLikes || !allowDislikes) {
            rateClassName += '  rate-single-button';
      }

      return (
            <Link to={'/posts/' + id} className="post-component">
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
                  <button className="remove-btn" onClick={removeClickHandler}>Remove</button>
            </Link>
      );
}
