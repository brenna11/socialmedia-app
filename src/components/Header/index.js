import { appName } from "../../includes/variable";
import { RiMickeyLine } from "react-icons/ri";
import './styles.scss';

export default function Header() {
    return (
        <header className="main">
            <h1>{appName}</h1>
            <RiMickeyLine />
        </header>
    );
}
