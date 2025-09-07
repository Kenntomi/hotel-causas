import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaTripadvisor, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a365d;
  color: #fff;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #d4af37;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 2px;
    background-color: #d4af37;
  }
  
  @media (max-width: 768px) {
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #e2e8f0;
`;

const FooterLink = styled(Link)`
  color: #e2e8f0;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  display: block;
  
  &:hover {
    color: #d4af37;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #d4af37;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  color: #d4af37;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #a0aec0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Hotel Causas</FooterTitle>
          <FooterText>
            Disfrute de una experiencia única en nuestro lujoso hotel, donde la elegancia se encuentra con la comodidad y el servicio excepcional.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://tripadvisor.com" target="_blank" aria-label="TripAdvisor">
              <FaTripadvisor />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/habitaciones">Habitaciones</FooterLink>
          <FooterLink to="/servicios">Servicios</FooterLink>
          <FooterLink to="/galeria">Galería</FooterLink>
          <FooterLink to="/nosotros">Nosotros</FooterLink>
          <FooterLink to="/contacto">Contacto</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Servicios</FooterTitle>
          <FooterLink to="/servicios">Restaurante Gourmet</FooterLink>
          <FooterLink to="/servicios">Spa & Bienestar</FooterLink>
          <FooterLink to="/servicios">Piscina Infinity</FooterLink>
          <FooterLink to="/servicios">Gimnasio Completo</FooterLink>
          <FooterLink to="/servicios">Salones para Eventos</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <FooterText>
              <a href="https://maps.google.com/?q=-12.046374,-77.042793" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'underline' }}>
                Av. Javier Prado 2345, San Isidro, Lima
              </a>
            </FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <FooterText>+51 987 654 321</FooterText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <FooterText>info@hotelcausas.com</FooterText>
          </ContactItem>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Hotel Causas. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;