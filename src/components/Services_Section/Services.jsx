import servicesImage from '../../assets/peb.jpg';
import './Services.css';
import Secundary_Btns from '../UI/Buttons/Secundary_Bts';
import ServiceCard from '../UI/Card/ServiceCard';
function Services(props) {
    return (
        <>
            <section id={props.id} className="services-section">
                <div className="services-container">
                    <div className="service-card">
                        <h1>Services</h1>
                        <h2>Helping bussines standout with brand identity packaging that captivates and convets effectively </h2>
                        <div className="buttons-container">
                            <Secundary_Btns text="Portraits in Urban Settings" />
                            <Secundary_Btns text="Street Photography Workshops" />
                            <Secundary_Btns text="Photo Books" />
                            <Secundary_Btns text="NFT Photography" />
                            <Secundary_Btns text="Real Estate Photography" />
                        </div>
                    </div>
                    <div className="services-image">
                        <img src={servicesImage} alt="Serviços" />
                    </div>
                </div>
                <div className="cards-wrapper">
                    <ServiceCard title="Street Photography" subtitle="Authentic, unposed moments captured in the heart of the city.
                    Experience urban life through a candid and creative lens."/>

                    <ServiceCard title="Night Photography" subtitle="City lights, neon signs, and the magic of the night captured beautifully.
                    Bring the urban nightscape to life with dramatic long-exposure shots."/>

                    <ServiceCard title="Lifestyle Photography" subtitle="Stylish, natural shots of people living and moving through the city.
                    Perfect for personal branding, influencers, or creative projects."/>

                    <ServiceCard title="Cityscape Photography" subtitle="Breathtaking views of urban skylines and iconic landmarks.
                    Showcasing the city's energy from unique perspectives."/>

                </div>
            </section>
        </>
    );
}

export default Services;