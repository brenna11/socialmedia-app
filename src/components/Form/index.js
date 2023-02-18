import { useState, useRef } from "react";
import { categories, moreStatus } from "../../includes/variable";
import './styles.scss';

export default function Form({ onAddPost }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [promote, setPromote] = useState(true);
    const [status, setStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState([]);
    const [pic, setPic] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const inputFile = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        // hide success message
        setShowSuccess(false);

        const validate = [];
        if (title === "") {
            validate.push("title is required");
        }
        if (description === "") {
            validate.push("description is required");
        }
        if (category === "") {
            validate.push("please select a category");
        }
        if (status === "") {
            validate.push("please select a status");
        }
        if (pic === "") {
            validate.push("please select a picture");
        }

        setErrorMsg(validate);
        if (validate.length === 0) {
            // valid
            onAddPost(title, description, category, promote, status, pic);
            // show form success
            setShowSuccess(true);
            // clear form
            setTitle("");
            setDescription("");
            setCategory("");
            setPromote(true);
            setStatus("");
            setPic("");
            inputFile.current.value = "";
        }
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    const picHandler = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            setPic(e.target.result);
        };
    };

    return (
        <form className="form-component" onSubmit={formSubmitHandler}>
            {showSuccess && (
                <div className="success-message">
                    Form successfully submitted!
                </div>
            )}

            {errorMsg.length > 0 && (
                <div className="form-validate">
                    Invalid data
                    <ul>
                        {errorMsg.map((err, index) => (
                            <li key={index}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* title */}
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={100}
                        placeholder="enter title here"
                    />
                </label>
            </div>
            {/* description */}
            <div>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={500}
                        placeholder="write description here"
                    />
                </label>
            </div>
            {/* category */}
            <div>
                <label>
                    Category:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">select</option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.text}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            {/* promote */}
            <div className="promote-field">
                <label>
                    <input
                        type="checkbox"
                        checked={promote}
                        onChange={(e) => setPromote(e.target.checked)}
                    />Promote
                </label>
            </div>
            {/* status */}
            <div className="status-field">
                Status:
                {moreStatus.map((item) => (
                    <label key={item.id}>
                        <input
                            type="radio"
                            value={item.id}
                            checked={status === item.id}
                            onChange={statusHandler}
                        />
                        {item.text}
                    </label>
                ))}
            </div>
            {/* pic */}
            <fieldset>
                <legend>Picture:</legend>
                <label>
                    Select a pic:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={picHandler}
                        ref={inputFile}
                    />
                </label>
                {pic !== "" && <img src={pic} width={200} alt="preview" />}
            </fieldset>
            <button>Send</button>
        </form>
    );
}
