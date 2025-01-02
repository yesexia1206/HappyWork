import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header id="topbar">
            <h1 className="logo">
                <a href="https://yesexia1206.github.io/HappyWork1/">
                    <img src="./images/logo.svg" alt="HappyWork快樂工作共享辦公室" title="HappyWork快樂工作共享辦公室" />
                    快樂工作共享辦公室
                </a>
            </h1>
            <nav className="topbar-nav">
                <ul className="menu">
                    <li><a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html">服務據點</a></li>
                    <li><a href="https://yesexia1206.github.io/HappyWork1/KF/location.html">共享方案</a></li>
                    <li><Link to=''>關於我們</Link></li>
                    <li><Link to='/memberCenter'>會員中心</Link></li>
                </ul>
            </nav>
        </header>
    )
}