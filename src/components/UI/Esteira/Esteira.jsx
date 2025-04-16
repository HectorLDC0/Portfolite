import React, { useEffect, useRef } from 'react';
import './Esteira.css';

const WordCarousel = ({ words = ["React", "JavaScript", "Animação", "Carrossel", "Desenvolvimento", "Frontend"] }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    
    // Clone os primeiros itens para criar o efeito de loop infinito
    const items = carousel.querySelectorAll('.word-item');
    const clonedItems = Array.from(items).map(item => {
      const clone = item.cloneNode(true);
      return clone;
    });
    
    clonedItems.forEach(item => {
      carousel.appendChild(item);
    });

    // Inicia a animação
    carousel.classList.add('animate');
    
    // Reinicia a animação quando terminar
    carousel.addEventListener('animationend', () => {
      carousel.classList.remove('animate');
      // Pequeno delay para resetar a posição sem que seja percebido
      setTimeout(() => {
        carousel.style.transform = 'translateX(0)';
        setTimeout(() => {
          carousel.classList.add('animate');
        }, 10);
      }, 10);
    });
    
    return () => {
      carousel.removeEventListener('animationend', () => {});
    };
  }, []);

  return (
    <div className="word-carousel-container">
      <div className="word-carousel-gradient-left"></div>
      <div className="word-carousel-wrapper">
        <div className="word-carousel" ref={carouselRef}>
          {words.map((word, index) => (
            <div className="word-item" key={index}>
              {word}
            </div>
          ))}
        </div>
      </div>
      <div className="word-carousel-gradient-right"></div>
    </div>
  );
};

export default WordCarousel;