import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const GalleryTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a365d;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #d4af37;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryButton = styled.button`
  padding: 0.6rem 1.5rem;
  background-color: ${({ active }) => (active ? '#d4af37' : '#f0f0f0')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: none;
  border-radius: 30px;
  font-weight: ${({ active }) => (active ? '600' : '500')};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => (active ? '#b8971f' : '#e0e0e0')};
    transform: translateY(-2px);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 300px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const GalleryItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const GalleryItemCategory = styled.p`
  font-size: 0.9rem;
  color: #d4af37;
`;

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LightboxContent = styled(motion.div)`
  position: relative;
  width: 90%;
  max-width: 1000px;
  max-height: 80vh;
`;

const LightboxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LightboxClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const LightboxNavigation = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const LightboxButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(212, 175, 55, 0.7);
  }
`;

const LightboxCaption = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;
`;

const Gallery = () => {
  // Sample gallery data
  const galleryData = [
    {
      id: 1,
      title: 'Lobby Principal',
      category: 'interiores',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Habitación Deluxe',
      category: 'habitaciones',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Restaurante Gourmet',
      category: 'gastronomia',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Piscina Infinity',
      category: 'instalaciones',
      image: 'https://images.unsplash.com/photo-1576013551627-0ae1be1ad965?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Suite Presidencial',
      category: 'habitaciones',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Bar & Lounge',
      category: 'gastronomia',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Spa & Bienestar',
      category: 'instalaciones',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Salón de Eventos',
      category: 'eventos',
      image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      title: 'Gimnasio',
      category: 'instalaciones',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      title: 'Terraza Panorámica',
      category: 'exteriores',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      title: 'Jardines',
      category: 'exteriores',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      title: 'Sala de Conferencias',
      category: 'eventos',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  // Get unique categories
  const categories = ['todos', ...new Set(galleryData.map(item => item.category))];

  const [activeCategory, setActiveCategory] = useState('todos');
  const [filteredItems, setFilteredItems] = useState(galleryData);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0
  });

  // Filter gallery items when category changes
  useEffect(() => {
    if (activeCategory === 'todos') {
      setFilteredItems(galleryData);
    } else {
      setFilteredItems(galleryData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Open lightbox
  const openLightbox = (index) => {
    setLightbox({
      isOpen: true,
      currentIndex: index
    });
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
  };

  // Navigate to previous image
  const prevImage = () => {
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex - 1 + filteredItems.length) % filteredItems.length
    });
  };

  // Navigate to next image
  const nextImage = () => {
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % filteredItems.length
    });
  };

  return (
    <GalleryContainer>
      <GalleryTitle>Nuestra Galería</GalleryTitle>
      
      {/* Category Filter */}
      <CategoryFilter>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            active={activeCategory === category}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryButton>
        ))}
      </CategoryFilter>
      
      {/* Gallery Grid */}
      <GalleryGrid>
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              onClick={() => openLightbox(index)}
            >
              <GalleryImage src={item.image} alt={item.title} />
              <GalleryOverlay>
                <GalleryItemTitle>{item.title}</GalleryItemTitle>
                <GalleryItemCategory>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</GalleryItemCategory>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </AnimatePresence>
      </GalleryGrid>
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <LightboxContent
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <LightboxClose onClick={closeLightbox}>×</LightboxClose>
              <LightboxImage 
                src={filteredItems[lightbox.currentIndex].image} 
                alt={filteredItems[lightbox.currentIndex].title} 
              />
              <LightboxNavigation>
                <LightboxButton onClick={prevImage}>‹</LightboxButton>
                <LightboxButton onClick={nextImage}>›</LightboxButton>
              </LightboxNavigation>
              <LightboxCaption>
                <h3>{filteredItems[lightbox.currentIndex].title}</h3>
                <p>{filteredItems[lightbox.currentIndex].category.charAt(0).toUpperCase() + filteredItems[lightbox.currentIndex].category.slice(1)}</p>
              </LightboxCaption>
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;