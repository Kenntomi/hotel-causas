import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHotel, FaHistory, FaAward, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const MapSection = styled.section`
  margin-bottom: 4rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const AboutTitle = styled.h1`
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

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const AboutIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 2rem;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutHeading = styled.h2`
  font-size: 1.8rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const AboutParagraph = styled.p`
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const HistoryTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #d4af37;
  }
  
  @media (max-width: 768px) {
    &:before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  
  &:nth-child(odd) {
    margin-left: auto;
    
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      left: -15px;
      width: 15px;
      height: 2px;
      background-color: #d4af37;
    }
  }
  
  &:nth-child(even) {
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      right: -15px;
      width: 15px;
      height: 2px;
      background-color: #d4af37;
    }
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-left: 50px;
    
    &:nth-child(odd), &:nth-child(even) {
      &:before {
        left: -30px;
        right: auto;
      }
    }
  }
`;

const TimelineYear = styled.div`
  position: absolute;
  top: 12px;
  width: 40px;
  height: 40px;
  background-color: #1a365d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  
  ${TimelineItem}:nth-child(odd) & {
    left: -65px;
  }
  
  ${TimelineItem}:nth-child(even) & {
    right: -65px;
  }
  
  @media (max-width: 768px) {
    ${TimelineItem}:nth-child(odd) &, ${TimelineItem}:nth-child(even) & {
      left: -65px;
    }
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`;

const TimelineText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const TeamSection = styled.div`
  margin-top: 4rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberImage = styled.div`
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`;

const MemberPosition = styled.p`
  color: #d4af37;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #555;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ValuesSection = styled.div`
  margin-top: 4rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a365d;
  margin-bottom: 1rem;
`;

const ValueText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      position: 'Director General',
      bio: 'Con más de 20 años de experiencia en la industria hotelera, Carlos ha liderado el Hotel Causas desde su fundación con una visión de excelencia y servicio personalizado.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'María Rodríguez',
      position: 'Directora de Operaciones',
      bio: 'María supervisa todas las operaciones diarias del hotel, asegurando que cada huésped reciba una experiencia excepcional durante su estancia.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Javier Torres',
      position: 'Chef Ejecutivo',
      bio: 'Reconocido internacionalmente, el Chef Javier combina técnicas culinarias tradicionales con innovación para crear experiencias gastronómicas únicas.',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Ana Gómez',
      position: 'Directora de Eventos',
      bio: 'Ana tiene un talento especial para transformar cualquier ocasión en un evento memorable, desde bodas elegantes hasta conferencias corporativas.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <AboutContainer>
      <AboutTitle>Sobre Nosotros</AboutTitle>
      
      <MapSection>
        <AboutHeading style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestra Ubicación</AboutHeading>
        <MapContainer>
          <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.964216410929!2d-77.03404868582222!3d-12.046654991455207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f0bda5ccbd31eb!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses!2spe!4v1623784521234!5m2!1ses!2spe" allowFullScreen loading="lazy" />
        </MapContainer>
      </MapSection>
      
      <AboutSection>
        <AboutIntro>
          <AboutImage />
          <AboutText>
            <AboutHeading>Hotel Causas: Tradición y Excelencia</AboutHeading>
            <AboutParagraph>
              Fundado en 2005, Hotel Causas se ha convertido en sinónimo de lujo y hospitalidad excepcional en el corazón de Perú. Nuestra misión es proporcionar a nuestros huéspedes una experiencia inolvidable que combine el confort moderno con la rica tradición cultural peruana.
            </AboutParagraph>
            <AboutParagraph>
              Nos enorgullece ofrecer un servicio personalizado que anticipa y supera las expectativas de nuestros huéspedes, creando momentos memorables y conexiones genuinas que perduran mucho después de su estancia.
            </AboutParagraph>
          </AboutText>
        </AboutIntro>
      </AboutSection>
      
      <AboutSection>
        <AboutHeading style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestra Historia</AboutHeading>
        <HistoryTimeline>
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TimelineYear>2005</TimelineYear>
            <TimelineTitle>Fundación</TimelineTitle>
            <TimelineText>
              Hotel Causas abre sus puertas con la visión de convertirse en un referente de hospitalidad de lujo en Perú, combinando la arquitectura colonial con comodidades modernas.
            </TimelineText>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TimelineYear>2010</TimelineYear>
            <TimelineTitle>Primera Expansión</TimelineTitle>
            <TimelineText>
              Tras el éxito inicial, se completa la primera expansión, añadiendo nuevas suites de lujo y el galardonado restaurante "Sabores de Perú".
            </TimelineText>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TimelineYear>2015</TimelineYear>
            <TimelineTitle>Reconocimiento Internacional</TimelineTitle>
            <TimelineText>
              Hotel Causas recibe su primer reconocimiento internacional como "Mejor Hotel Boutique de Sudamérica", consolidando su reputación en la industria hotelera global.
            </TimelineText>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <TimelineYear>2020</TimelineYear>
            <TimelineTitle>Renovación y Modernización</TimelineTitle>
            <TimelineText>
              Se completa una renovación completa, incorporando tecnología de vanguardia y prácticas sostenibles, manteniendo la esencia y el encanto que caracterizan al Hotel Causas.
            </TimelineText>
          </TimelineItem>
        </HistoryTimeline>
      </AboutSection>
      
      <ValuesSection>
        <AboutHeading style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestros Valores</AboutHeading>
        <ValuesGrid>
          <ValueCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FaHotel />
            </ValueIcon>
            <ValueTitle>Excelencia</ValueTitle>
            <ValueText>
              Nos esforzamos por la excelencia en cada detalle, desde la calidad de nuestras habitaciones hasta el servicio personalizado que ofrecemos a cada huésped.
            </ValueText>
          </ValueCard>
          
          <ValueCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FaUsers />
            </ValueIcon>
            <ValueTitle>Hospitalidad</ValueTitle>
            <ValueText>
              Creemos en la hospitalidad genuina que hace que cada huésped se sienta como en casa, creando experiencias memorables y conexiones duraderas.
            </ValueText>
          </ValueCard>
          
          <ValueCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FaHistory />
            </ValueIcon>
            <ValueTitle>Tradición</ValueTitle>
            <ValueText>
              Honramos la rica tradición cultural peruana, integrándola en nuestra arquitectura, gastronomía y experiencia general del huésped.
            </ValueText>
          </ValueCard>
          
          <ValueCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FaAward />
            </ValueIcon>
            <ValueTitle>Innovación</ValueTitle>
            <ValueText>
              Buscamos constantemente formas innovadoras de mejorar la experiencia de nuestros huéspedes, combinando lo mejor de la tradición con las comodidades modernas.
            </ValueText>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
      
      <TeamSection>
        <AboutHeading style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestro Equipo</AboutHeading>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MemberImage image={member.image} />
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
                <MemberBio>{member.bio}</MemberBio>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;