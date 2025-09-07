import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RoomsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const RoomsTitle = styled.h1`
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

const RoomsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const RoomCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:nth-child(even) {
    direction: rtl;
  }
  
  &:nth-child(even) > div {
    direction: ltr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const RoomImage = styled.div`
  height: 100%;
  min-height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const RoomInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RoomName = styled.h2`
  font-size: 1.8rem;
  color: #1a365d;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const RoomDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const RoomFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
`;

const RoomFeature = styled.li`
  display: flex;
  align-items: center;
  color: #555;
  
  svg {
    margin-right: 0.5rem;
    color: #d4af37;
  }
`;

const RoomPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #d4af37;
  margin-bottom: 1.5rem;
`;

const BookButton = styled.a`
  padding: 0.8rem 2rem;
  background-color: #1a365d;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  
  &:hover {
    background-color: #d4af37;
    transform: translateY(-3px);
    color: white;
  }
`;

const Rooms = () => {
  // Sample rooms data
  const roomsData = [
    {
      id: 1,
      name: 'Habitación Deluxe',
      description: 'Nuestra habitación Deluxe ofrece el equilibrio perfecto entre elegancia y comodidad. Con una amplia cama king-size, área de estar y un lujoso baño con bañera de hidromasaje, esta habitación es ideal para aquellos que buscan una experiencia superior.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: 'S/ 550',
      features: [
        'Cama King-size',
        'Baño con hidromasaje',
        'Wi-Fi gratuito',
        'TV de pantalla plana',
        'Minibar',
        'Caja fuerte',
        'Aire acondicionado',
        'Servicio a la habitación'
      ]
    },
    {
      id: 2,
      name: 'Suite Junior',
      description: 'Experimente un nivel superior de lujo en nuestra Suite Junior. Con una espaciosa sala de estar separada, dormitorio elegante y una terraza privada con vistas panorámicas, esta suite ofrece un ambiente sofisticado para su estancia.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: 'S/ 950',
      features: [
        'Cama King-size',
        'Sala de estar separada',
        'Terraza privada',
        'Baño de mármol',
        'Wi-Fi gratuito',
        'TV de pantalla plana',
        'Minibar premium',
        'Servicio de mayordomo'
      ]
    },
    {
      id: 3,
      name: 'Suite Presidencial',
      description: 'Nuestra Suite Presidencial representa la cúspide del lujo y la exclusividad. Con un diseño exquisito, amplios espacios que incluyen sala de estar, comedor y dormitorio principal, además de un jacuzzi privado y servicio de mayordomo las 24 horas, esta suite ofrece una experiencia incomparable.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: 'S/ 1650',
      features: [
        'Dormitorio principal',
        'Sala de estar y comedor',
        'Jacuzzi privado',
        'Terraza panorámica',
        'Baños de mármol',
        'Mayordomo 24 horas',
        'Minibar premium',
        'Amenidades exclusivas'
      ]
    },
    {
      id: 4,
      name: 'Habitación Familiar',
      description: 'Diseñada pensando en las familias, nuestra Habitación Familiar ofrece espacio y comodidad para todos. Con dos dormitorios conectados, un amplio baño y todas las comodidades necesarias, es la opción perfecta para unas vacaciones familiares inolvidables.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      price: 'S/ 750',
      features: [
        'Dos dormitorios',
        'Cama King y dos camas individuales',
        'Baño familiar',
        'TV de pantalla plana',
        'Wi-Fi gratuito',
        'Minibar',
        'Juegos para niños',
        'Servicio a la habitación'
      ]
    }
  ];

  return (
    <RoomsContainer>
      <RoomsTitle>Nuestras Habitaciones</RoomsTitle>
      
      <RoomsList>
        {roomsData.map((room, index) => (
          <RoomCard
            key={room.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RoomImage image={room.image} />
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDescription>{room.description}</RoomDescription>
              <RoomFeatures>
                {room.features.map((feature, i) => (
                  <RoomFeature key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                    </svg>
                    {feature}
                  </RoomFeature>
                ))}
              </RoomFeatures>
              <RoomPrice>Desde {room.price} / noche</RoomPrice>
              <BookButton href="/reservar">Reservar Ahora</BookButton>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomsList>
    </RoomsContainer>
  );
};

export default Rooms;