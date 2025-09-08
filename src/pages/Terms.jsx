import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGavel, FaShieldAlt, FaUserLock, FaCreditCard, FaFileContract } from 'react-icons/fa';

const TermsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const TermsTitle = styled.h1`
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

const TermsSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 1rem;
    color: #d4af37;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TermsText = styled.div`
  color: #333;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  h3 {
    font-size: 1.3rem;
    color: #1a365d;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const Terms = () => {
  return (
    <TermsContainer>
      <TermsTitle
        as={motion.h1}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Términos y Condiciones
      </TermsTitle>
      
      <TermsSection
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>
          <FaGavel />
          Condiciones Generales
        </SectionTitle>
        <TermsText>
          <p>
            Bienvenido a los términos y condiciones de Hotel Causas. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos y condiciones, no debe utilizar nuestros servicios.
          </p>
          <p>
            Hotel Causas se reserva el derecho de modificar estos términos en cualquier momento. Es su responsabilidad revisar periódicamente los cambios en estos términos. El uso continuado de nuestros servicios después de la publicación de los cambios constituirá su aceptación de dichos cambios.
          </p>
        </TermsText>
      </TermsSection>
      
      <TermsSection
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SectionTitle>
          <FaShieldAlt />
          Política de Privacidad
        </SectionTitle>
        <TermsText>
          <p>
            En Hotel Causas, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Recopilamos información personal únicamente con su consentimiento y para mejorar su experiencia con nosotros.
          </p>
          <h3>Recopilación de Datos</h3>
          <p>
            Podemos recopilar la siguiente información personal:
          </p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Información de contacto, incluyendo dirección de correo electrónico y número de teléfono</li>
            <li>Información demográfica como código postal, preferencias e intereses</li>
            <li>Datos de tarjetas de crédito para procesar reservas y pagos</li>
            <li>Otra información relevante para encuestas de clientes y/o ofertas</li>
          </ul>
          <h3>Uso de la Información</h3>
          <p>
            La información que recopilamos se utiliza para:
          </p>
          <ul>
            <li>Procesar reservas y proporcionar los servicios solicitados</li>
            <li>Mejorar nuestros productos y servicios</li>
            <li>Enviar comunicaciones promocionales que creemos pueden ser de su interés</li>
            <li>Contactarlo para fines de investigación de mercado</li>
          </ul>
        </TermsText>
      </TermsSection>
      
      <TermsSection
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle>
          <FaUserLock />
          Seguridad de Datos
        </SectionTitle>
        <TermsText>
          <p>
            Estamos comprometidos con garantizar que su información esté segura. Para evitar el acceso o divulgación no autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.
          </p>
          <p>
            Sus datos personales no serán vendidos, intercambiados, transferidos o entregados a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o para proporcionar los servicios solicitados.
          </p>
        </TermsText>
      </TermsSection>
      
      <TermsSection
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <SectionTitle>
          <FaCreditCard />
          Política de Reservas y Pagos
        </SectionTitle>
        <TermsText>
          <h3>Reservas</h3>
          <p>
            Las reservas están sujetas a disponibilidad y serán confirmadas una vez recibido el pago o garantía correspondiente. Hotel Causas se reserva el derecho de cancelar o modificar las reservas en caso de fraude o error en la información proporcionada.
          </p>
          <h3>Pagos</h3>
          <p>
            Aceptamos pagos mediante tarjetas de crédito (Visa, MasterCard, American Express) y transferencias bancarias. Para garantizar su reserva, podemos requerir un depósito o el cargo completo de la estancia, dependiendo de las condiciones específicas de la tarifa seleccionada.
          </p>
          <h3>Cancelaciones y Modificaciones</h3>
          <p>
            Las políticas de cancelación y modificación varían según el tipo de tarifa seleccionada:
          </p>
          <ul>
            <li>Tarifa Flexible: Cancelación sin cargo hasta 24 horas antes de la fecha de llegada.</li>
            <li>Tarifa Estándar: Cancelación sin cargo hasta 72 horas antes de la fecha de llegada.</li>
            <li>Tarifa No Reembolsable: No permite cancelaciones ni modificaciones. El importe total será cargado en el momento de la reserva.</li>
          </ul>
          <p>
            En caso de no presentarse (no-show), se cargará el importe total de la reserva.
          </p>
        </TermsText>
      </TermsSection>
      
      <TermsSection
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SectionTitle>
          <FaFileContract />
          Condiciones de Alojamiento
        </SectionTitle>
        <TermsText>
          <h3>Check-in y Check-out</h3>
          <p>
            El horario de check-in es a partir de las 15:00 horas y el check-out hasta las 12:00 horas. El early check-in y late check-out están sujetos a disponibilidad y pueden generar cargos adicionales.
          </p>
          <h3>Política de Niños</h3>
          <p>
            Los niños menores de 12 años pueden alojarse gratuitamente compartiendo cama con sus padres. Las cunas están disponibles bajo petición y sujetas a disponibilidad. Se aplicarán cargos adicionales por camas supletorias.
          </p>
          <h3>Mascotas</h3>
          <p>
            No se permiten mascotas en el hotel, excepto perros guía para personas con discapacidad visual.
          </p>
          <h3>Prohibición de Fumar</h3>
          <p>
            Hotel Causas es un establecimiento libre de humo. Está prohibido fumar en todas las habitaciones y áreas comunes interiores. Se aplicará un cargo de limpieza especial a los huéspedes que fumen en áreas no designadas.
          </p>
        </TermsText>
      </TermsSection>
    </TermsContainer>
  );
};

export default Terms;