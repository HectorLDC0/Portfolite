import { useState, useEffect, useRef } from 'react';
import './TestimonialCarousel.css';


const testimonials = [
  {
    id: 1,
    name: "Mark Anderson",
    position: "CEO, TechNew",
    rating: 5,
    text: "Exceptional work! Delivered the project ahead of schedule and with superior quality than expected. I strongly recommend for any web project.."
  },
  {
    id: 2,
    name: "Tomas clark",
    position: "Marketing director, Inova Digital",
    rating: 5,
    text: "Excellent professional, attentive and creative. The website developed for our company exceeded all expectations and increased our conversions by 40%."
  },
  {
    id: 3,
    name: "Jhoe Doe",
    position: "Proprietária, Café Aroma",
    rating: 4,
    text: "Excellent collaboration! Perfectly understood our needs and delivered clean, well-structured code."
  },
  {
    id: 4,
    name: "Francis Bacon",
    position: "CTO, Startup Hub",
    rating: 5,
    text: "Very satisfied with the final result. Intuitive interface and modern design, exactly what we needed for our online presence."
  },
  {
    id: 5,
    name: "Anderson Matt",
    position: "Designer, Visual Studio",
    rating: 5,
    text: "Impressive technical knowledge combined with excellent communication. Managed to transform complex concepts into simple and efficient solutions."
  }
];

function TestimonialCarousel() {
  const carouselRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Função para criar a animação de deslocamento contínuo
  useEffect(() => {
    if (!isInitialized && carouselRef.current) {
      // Duplicamos os itens para criar o efeito de loop infinito
      const originalItems = [...carouselRef.current.children];
      originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        carouselRef.current.appendChild(clone);
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Renderiza estrelas com base na avaliação
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="star">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="testimonial-container">
      <div
        ref={carouselRef}
        className="carousel-track"
        onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
        onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-name">{testimonial.name}</div>
              <div className="testimonial-position">{testimonial.position}</div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            <div className="testimonial-content">"{testimonial.text}"</div>
          </div>
        ))}
      </div>

      <div className='statistics'>
        <div>
          <h1>180+</h1>
          <h2>Projects completed</h2>
        </div>
        <div>
          <h1>98%</h1>
          <h2>Client satisfaction rate</h2>
        </div>
        <div>
          <h1>5+</h1>
          <h1>Years of experience</h1>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;