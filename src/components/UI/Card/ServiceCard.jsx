import './ServiceCard.css';

function ServiceCard(service) {
    return (
        <div className="service-description">
            <h1>{service.title}</h1>
            <h3>{service.subtitle}</h3>
        </div>
    );
}

export default ServiceCard;