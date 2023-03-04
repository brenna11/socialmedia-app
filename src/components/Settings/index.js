import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllowLikes, toggleAllowDislikes } from '../../redux/settingsSlice';


export default function Settings() {
   const settings = useSelector((state) => state.settings);
   const dispatch = useDispatch();

   const allowLikesClickHandler = () => {
      dispatch(toggleAllowLikes());
   }

   const allowDislikesClickHandler = () => { 
      dispatch(toggleAllowDislikes());
   }

   return (
      <div className="settings-component">
         <h1>Settings</h1>

         <div className="field">
            <label>
               <input 
                  type="checkbox" 
                  checked={settings.allowLikes}
                  onChange={allowLikesClickHandler}
               />
               Allow Likes
            </label>
         </div>
         <div className="field">
            <label>
               <input 
                  type="checkbox" 
                  checked={settings.allowDislikes}
                  onChange={allowDislikesClickHandler}
               />
               Allow Dislikes
            </label>
         </div>
      </div>
   );
}