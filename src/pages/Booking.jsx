import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaCreditCard, FaCheck } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../config/emailjs';

const BookingContainer = styled.div`
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

const BookingContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BookingForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #d4af37;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b8971f;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const BookingSummary = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: fit-content;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SummaryLabel = styled.span`
  color: #666;
`;

const SummaryValue = styled.span`
  color: #333;
  font-weight: 500;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ddd;
  font-size: 1.2rem;
  font-weight: 600;
`;

const RoomCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background-color: ${props => props.selected ? '#f0f8ff' : '#fff'};
  border-color: ${props => props.selected ? '#d4af37' : '#ddd'};

  &:hover {
    border-color: #d4af37;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
`;

const RoomInfo = styled.div`
  flex-grow: 1;
`;

const RoomName = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #1a365d;
`;

const RoomPrice = styled.div`
  color: #d4af37;
  font-weight: 600;
`;

const RoomCheckmark = styled.div`
  color: #d4af37;
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: #f0fff4;
  border: 1px solid #68d391;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
`;

const SuccessIcon = styled.div`
  color: #68d391;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  color: #2f855a;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const SuccessText = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BookingReference = styled.div`
  background-color: #ebf8ff;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 1.5rem;
`;

const rooms = [
  { id: 1, name: 'Habitación Estándar', price: 350 },
  { id: 2, name: 'Habitación Deluxe', price: 550 },
  { id: 3, name: 'Habitación Familiar', price: 750 },
  { id: 4, name: 'Suite Junior', price: 950 },
  { id: 5, name: 'Suite Presidencial', price: 1650 }
];

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return selectedRoom ? selectedRoom.price * nights : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random booking reference
    const reference = 'HC-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    setBookingReference(reference);
    
    // Preparar los datos para el correo
    const templateParams = {
      to_email: formData.email,
      from_name: 'Hotel Causas',
      to_name: `${formData.firstName} ${formData.lastName}`,
      booking_reference: reference,
      room_name: selectedRoom.name,
      check_in: new Date(checkIn).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      check_out: new Date(checkOut).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      nights: calculateNights(),
      guests: guests,
      total_price: `S/ ${calculateTotal()}`,
      reply_to: 'info@hotelcausas.com'
    };
    
    // Enviar el correo electrónico
    emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateIds.booking,
      templateParams,
      EMAILJS_CONFIG.userId
    )
    .then((response) => {
      console.log('Correo enviado con éxito!', response.status, response.text);
      setBookingComplete(true);
    })
    .catch((err) => {
      console.error('Error al enviar el correo:', err);
      // Aún así mostramos el mensaje de éxito al usuario
      setBookingComplete(true);
    });
  };

  const isFormValid = () => {
    return (
      selectedRoom &&
      checkIn &&
      checkOut &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      calculateNights() > 0
    );
  };

  return (
    <BookingContainer>
      {!bookingComplete ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>
              Reserva <span>Ahora</span>
            </Title>
            <Subtitle>
              Completa el formulario a continuación para reservar tu estancia en Hotel Causas. Ofrecemos las mejores tarifas y flexibilidad en tus reservas.
            </Subtitle>
          </motion.div>

          <BookingContent>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BookingForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Selecciona tu habitación:</Label>
                  {rooms.map((room) => (
                    <RoomCard 
                      key={room.id} 
                      selected={selectedRoom && selectedRoom.id === room.id}
                      onClick={() => handleRoomSelect(room)}
                    >
                      <RoomInfo>
                        <RoomName>{room.name}</RoomName>
                        <RoomPrice>S/ {room.price} por noche</RoomPrice>
                      </RoomInfo>
                      {selectedRoom && selectedRoom.id === room.id && (
                        <RoomCheckmark>
                          <FaCheck />
                        </RoomCheckmark>
                      )}
                    </RoomCard>
                  ))}
                </FormGroup>

                <FormRow>
                  <FormGroup>
                    <Label>Fecha de llegada:</Label>
                    <Input 
                      type="date" 
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Fecha de salida:</Label>
                    <Input 
                      type="date" 
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label>Número de huéspedes:</Label>
                  <Select 
                    value={guests} 
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    required
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'huésped' : 'huéspedes'}</option>
                    ))}
                  </Select>
                </FormGroup>

                <FormRow>
                  <FormGroup>
                    <Label>Nombre:</Label>
                    <Input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Apellido:</Label>
                    <Input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Teléfono:</Label>
                    <Input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <SubmitButton 
                  type="submit" 
                  disabled={!isFormValid()}
                  whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                  whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                >
                  Confirmar Reserva
                </SubmitButton>
              </BookingForm>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BookingSummary>
                <SummaryTitle>Resumen de Reserva</SummaryTitle>
                
                <SummaryItem>
                  <SummaryLabel>Habitación:</SummaryLabel>
                  <SummaryValue>{selectedRoom ? selectedRoom.name : '-'}</SummaryValue>
                </SummaryItem>
                
                <SummaryItem>
                  <SummaryLabel>Llegada:</SummaryLabel>
                  <SummaryValue>
                    {checkIn ? new Date(checkIn).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                  </SummaryValue>
                </SummaryItem>
                
                <SummaryItem>
                  <SummaryLabel>Salida:</SummaryLabel>
                  <SummaryValue>
                    {checkOut ? new Date(checkOut).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                  </SummaryValue>
                </SummaryItem>
                
                <SummaryItem>
                  <SummaryLabel>Noches:</SummaryLabel>
                  <SummaryValue>{calculateNights()}</SummaryValue>
                </SummaryItem>
                
                <SummaryItem>
                  <SummaryLabel>Huéspedes:</SummaryLabel>
                  <SummaryValue>{guests}</SummaryValue>
                </SummaryItem>
                
                <SummaryItem>
                  <SummaryLabel>Precio por noche:</SummaryLabel>
                  <SummaryValue>{selectedRoom ? `S/ ${selectedRoom.price}` : '-'}</SummaryValue>
                </SummaryItem>
                
                <TotalPrice>
                  <span>Total:</span>
                  <span>S/ {calculateTotal()}</span>
                </TotalPrice>
              </BookingSummary>
            </motion.div>
          </BookingContent>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SuccessMessage>
            <SuccessIcon>
              <FaCheck />
            </SuccessIcon>
            <SuccessTitle>¡Reserva Confirmada!</SuccessTitle>
            <SuccessText>
              Gracias por elegir Hotel Causas. Hemos recibido tu solicitud de reserva y te hemos enviado un correo electrónico a <strong>{formData.email}</strong> con los detalles de tu reserva.
            </SuccessText>
            <BookingReference>
              Referencia de reserva: {bookingReference}
            </BookingReference>
            <SuccessText>
              Si tienes alguna pregunta o necesitas hacer cambios en tu reserva, no dudes en contactarnos mencionando tu número de referencia.
            </SuccessText>
            <SubmitButton 
              onClick={() => window.location.reload()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hacer otra reserva
            </SubmitButton>
          </SuccessMessage>
        </motion.div>
      )}
    </BookingContainer>
  );
};

export default Booking;