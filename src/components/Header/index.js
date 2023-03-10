import { appName } from "../../includes/variable";
import { CgImage } from "react-icons/cg";
import './styles.scss';
import MainMenu from "../MainMenu";

export default function Header() {
    return (
        <>
            <header className="main">
                <CgImage />
                <div>{appName}</div>
            </header>
            <MainMenu />
        </>
    );
}
