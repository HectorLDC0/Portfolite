import "./Hero.css";
import trainVideo from "../../assets/train.mp4";
import Esteira from "../UI/Esteira/Esteira";
import Button from "../UI/Buttons/Button";

function Main() {
    return (
        <>
            <div className="hero-container">
                <video autoPlay loop muted className="background-video">
                    <source src={trainVideo} type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="hero-wrapper">
                    <h1 className="hero-title">Branding that you <br /> need Indeed</h1>
                    <h3 className="hero-subtitle">Elevate your brand with custom identity and package design. Showcase your<br /> story through bold visuals and strategic design solutions.</h3>
                    <Button />
                </div>
                <Esteira />
            </div>
        </>
    );
}

export default Main;
