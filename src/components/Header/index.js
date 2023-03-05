import { appName } from "../../includes/variable";
import { CgImage } from "react-icons/cg";
import './styles.scss';

export default function Header() {
    return (
        <header className="main">
             <CgImage />
            <h1>{appName}</h1>
        </header>
    );
}
