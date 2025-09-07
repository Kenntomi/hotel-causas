import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWifi, FaSwimmingPool, FaUtensils, FaCocktail, FaCar, FaSpa, FaDumbbell, FaConciergeBell } from 'react-icons/fa';

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a365d;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;

  span {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  background-color: #1a365d;
  color: #d4af37;
  font-size: 2.5rem;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a365d;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const PremiumSection = styled.div`
  background-color: #f9f9f9;
  padding: 3rem 2rem;
  border-radius: 10px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PremiumTitle = styled.h2`
  font-size: 2rem;
  color: #1a365d;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;

  span {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PremiumList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PremiumItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const PremiumIcon = styled.div`
  color: #d4af37;
  font-size: 1.5rem;
  margin-right: 1rem;
  min-width: 30px;
`;

const PremiumText = styled.p`
  color: #333;
  font-weight: 500;
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const ContactButton = styled(motion.button)`
  background-color: #d4af37;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b8971f;
    transform: translateY(-2px);
  }
`;

const services = [
  {
    icon: <FaWifi />,
    title: 'Wi-Fi Gratuito',
    description: 'Conexión de alta velocidad en todas las áreas del hotel para que siempre estés conectado.'
  },
  {
    icon: <FaSwimmingPool />,
    title: 'Piscina Climatizada',
    description: 'Disfruta de nuestra piscina climatizada con vistas panorámicas a la ciudad.'
  },
  {
    icon: <FaUtensils />,
    title: 'Restaurante Gourmet',
    description: 'Nuestro restaurante ofrece lo mejor de la gastronomía peruana e internacional con ingredientes locales.'
  },
  {
    icon: <FaCocktail />,
    title: 'Bar & Lounge',
    description: 'Relájate en nuestro elegante bar con una selección de cócteles exclusivos y vistas espectaculares.'
  },
  {
    icon: <FaCar />,
    title: 'Servicio de Transporte',
    description: 'Ofrecemos servicio de transporte desde y hacia el aeropuerto, así como tours por la ciudad.'
  },
  {
    icon: <FaSpa />,
    title: 'Spa & Bienestar',
    description: 'Nuestro spa ofrece tratamientos rejuvenecedores y masajes para una experiencia de relajación completa.'
  },
  {
    icon: <FaDumbbell />,
    title: 'Gimnasio Completo',
    description: 'Mantén tu rutina de ejercicios en nuestro gimnasio equipado con tecnología de última generación.'
  },
  {
    icon: <FaConciergeBell />,
    title: 'Servicio de Concierge',
    description: 'Nuestro equipo de concierge está disponible 24/7 para atender todas tus necesidades durante tu estancia.'
  }
];

const premiumServices = [
  { icon: <FaConciergeBell />, text: 'Servicio de habitaciones 24/7' },
  { icon: <FaCar />, text: 'Traslados en vehículos de lujo' },
  { icon: <FaUtensils />, text: 'Desayuno gourmet incluido' },
  { icon: <FaSpa />, text: 'Acceso prioritario al spa' },
  { icon: <FaCocktail />, text: 'Cóctel de bienvenida' },
  { icon: <FaWifi />, text: 'Wi-Fi premium de alta velocidad' }
];

const Services = () => {
  return (
    <ServicesContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>
          Nuestros <span>Servicios</span>
        </Title>
        <Subtitle>
          En Hotel Causas nos esforzamos por ofrecer una experiencia excepcional. Descubre todos los servicios que tenemos para hacer de tu estancia un momento inolvidable.
        </Subtitle>
      </motion.div>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <PremiumSection>
          <PremiumTitle>
            Servicios <span>Premium</span>
          </PremiumTitle>
          <PremiumList>
            {premiumServices.map((item, index) => (
              <PremiumItem key={index}>
                <PremiumIcon>{item.icon}</PremiumIcon>
                <PremiumText>{item.text}</PremiumText>
              </PremiumItem>
            ))}
          </PremiumList>
        </PremiumSection>
      </motion.div>

      <ContactSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Subtitle>
            ¿Necesitas un servicio personalizado? Nuestro equipo está listo para atender tus requerimientos especiales.
          </Subtitle>
          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </ContactButton>
        </motion.div>
      </ContactSection>
    </ServicesContainer>
  );
};

export default Services;