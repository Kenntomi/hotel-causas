import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWifi, FaSwimmingPool, FaUtensils, FaSpa, FaCocktail, FaConciergeBell } from 'react-icons/fa';

const HomeContainer = styled.div`
  width: 100%;
`;

// Hero Section
const HeroSection = styled.section`
  height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: #d4af37;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b8971f;
    transform: translateY(-3px);
  }
`;

// About Section
const SectionContainer = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  color: #333;
`;

const AboutSubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a365d;
  font-family: 'Playfair Display', serif;
`;

const AboutDescription = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

// Features Section
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1a365d;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

// Rooms Preview Section
const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const RoomCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  padding: 1.5rem;
  background-color: white;
`;

const RoomTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1a365d;
`;

const RoomDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const RoomPrice = styled.p`
  font-weight: 700;
  color: #d4af37;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const RoomButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1a365d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #d4af37;
  }
`;

// Testimonials Section
const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 4rem;
    color: rgba(212, 175, 55, 0.2);
    font-family: Georgia, serif;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #555;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  color: #1a365d;
  margin-bottom: 0.2rem;
`;

const AuthorTitle = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenido a Hotel Causas
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Descubre el lujo y la comodidad en el corazón de la ciudad
        </HeroSubtitle>
        <HeroButton
          as="a"
          href="/reservar"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reservar Ahora
        </HeroButton>
      </HeroSection>

      {/* About Section */}
      <SectionContainer>
        <SectionTitle>Sobre Nosotros</SectionTitle>
        <AboutContent>
          <AboutImage src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Hotel Lobby" />
          <AboutText>
            <AboutSubtitle>Un Oasis de Lujo y Confort</AboutSubtitle>
            <AboutDescription>
              Hotel Causas es un establecimiento de lujo ubicado en el corazón de la ciudad, ofreciendo a nuestros huéspedes una experiencia única de hospitalidad y confort. Con más de 20 años de experiencia, nos hemos convertido en un referente de excelencia en el sector hotelero.
            </AboutDescription>
            <AboutDescription>
              Nuestras instalaciones de primer nivel, combinadas con un servicio personalizado y atento, garantizan una estancia inolvidable. Desde habitaciones elegantemente decoradas hasta servicios exclusivos, cada detalle ha sido cuidadosamente diseñado para superar sus expectativas.
            </AboutDescription>
            <AboutDescription>
              Ya sea que viaje por negocios o placer, Hotel Causas le ofrece el ambiente perfecto para relajarse, trabajar o disfrutar de la ciudad. ¡Le invitamos a descubrir la diferencia de hospedarse con nosotros!
            </AboutDescription>
          </AboutText>
        </AboutContent>
      </SectionContainer>

      {/* Features Section */}
      <SectionContainer style={{ backgroundColor: '#f9f9f9' }}>
        <SectionTitle>Nuestros Servicios</SectionTitle>
        <FeaturesGrid>
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeatureIcon>
              <FaWifi />
            </FeatureIcon>
            <FeatureTitle>Wi-Fi Gratuito</FeatureTitle>
            <FeatureDescription>
              Conexión de alta velocidad disponible en todas las áreas del hotel para mantenerle conectado durante su estancia.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureIcon>
              <FaSwimmingPool />
            </FeatureIcon>
            <FeatureTitle>Piscina Infinity</FeatureTitle>
            <FeatureDescription>
              Disfrute de nuestra espectacular piscina con vistas panorámicas a la ciudad, perfecta para relajarse.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureIcon>
              <FaUtensils />
            </FeatureIcon>
            <FeatureTitle>Restaurante Gourmet</FeatureTitle>
            <FeatureDescription>
              Nuestro restaurante ofrece una exquisita selección de platos internacionales y locales preparados por chefs de renombre.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FeatureIcon>
              <FaSpa />
            </FeatureIcon>
            <FeatureTitle>Spa & Bienestar</FeatureTitle>
            <FeatureDescription>
              Rejuvenezca cuerpo y mente en nuestro spa de lujo con tratamientos exclusivos y terapias relajantes.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FeatureIcon>
              <FaCocktail />
            </FeatureIcon>
            <FeatureTitle>Bar & Lounge</FeatureTitle>
            <FeatureDescription>
              Relájese en nuestro elegante bar con una amplia selección de cócteles premium y bebidas internacionales.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FeatureIcon>
              <FaConciergeBell />
            </FeatureIcon>
            <FeatureTitle>Servicio de Concierge</FeatureTitle>
            <FeatureDescription>
              Nuestro equipo de concierge está disponible las 24 horas para atender todas sus necesidades durante su estancia.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </SectionContainer>

      {/* Rooms Preview Section */}
      <SectionContainer>
        <SectionTitle>Nuestras Habitaciones</SectionTitle>
        <RoomsGrid>
          <RoomCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RoomImage src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Habitación Deluxe" />
            <RoomInfo>
              <RoomTitle>Habitación Deluxe</RoomTitle>
              <RoomDescription>
                Espaciosa habitación con cama king-size, vistas a la ciudad y baño de lujo con bañera de hidromasaje.
              </RoomDescription>
              <RoomPrice>Desde S/ 350 / noche</RoomPrice>
              <RoomButton as="a" href="/habitaciones">Ver Detalles</RoomButton>
            </RoomInfo>
          </RoomCard>
          
          <RoomCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RoomImage src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Suite Junior" />
            <RoomInfo>
              <RoomTitle>Suite Junior</RoomTitle>
              <RoomDescription>
                Elegante suite con sala de estar separada, amplio dormitorio y terraza privada con vistas panorámicas.
              </RoomDescription>
              <RoomPrice>Desde S/ 550 / noche</RoomPrice>
              <RoomButton as="a" href="/habitaciones">Ver Detalles</RoomButton>
            </RoomInfo>
          </RoomCard>
          
          <RoomCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RoomImage src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Suite Presidencial" />
            <RoomInfo>
              <RoomTitle>Suite Presidencial</RoomTitle>
              <RoomDescription>
                Nuestra suite más lujosa con sala de estar, comedor, jacuzzi privado y servicio de mayordomo las 24 horas.
              </RoomDescription>
              <RoomPrice>Desde S/ 950 / noche</RoomPrice>
              <RoomButton as="a" href="/habitaciones">Ver Detalles</RoomButton>
            </RoomInfo>
          </RoomCard>
        </RoomsGrid>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer style={{ backgroundColor: '#f9f9f9' }}>
        <SectionTitle>Lo Que Dicen Nuestros Huéspedes</SectionTitle>
        <TestimonialsContainer>
          <TestimonialCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialText>
              "Nuestra estancia en Hotel Causas fue simplemente perfecta. El personal fue extremadamente atento y las instalaciones son de primera clase. La habitación era espaciosa y la vista desde nuestra terraza era impresionante. ¡Definitivamente volveremos!"
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="María García" />
              <AuthorInfo>
                <AuthorName>María García</AuthorName>
                <AuthorTitle>Madrid, España</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TestimonialText>
              "Como viajero frecuente, puedo decir que Hotel Causas ofrece uno de los mejores servicios que he experimentado. La atención al detalle es excepcional, desde el check-in hasta el check-out. El restaurante del hotel sirve comida deliciosa y el spa es un oasis de tranquilidad."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Carlos Rodríguez" />
              <AuthorInfo>
                <AuthorName>Carlos Rodríguez</AuthorName>
                <AuthorTitle>Buenos Aires, Argentina</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsContainer>
      </SectionContainer>
    </HomeContainer>
  );
};

export default Home;