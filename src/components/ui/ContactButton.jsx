import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaTimes, FaUser, FaPhone, FaComment } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d4af37;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b8971f;
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37;
  }
`;

const ModalTitle = styled.h2`
  color: #1a365d;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  font-family: 'Playfair Display', serif;

  span {
    color: #d4af37;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px 12px 40px;
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

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const TextareaIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
  color: #999;
`;

const SubmitButton = styled.button`
  background-color: #d4af37;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b8971f;
    transform: translateY(-2px);
  }
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem 0;
`;

const ThankYouTitle = styled.h3`
  color: #1a365d;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ThankYouText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form after a delay to allow close animation
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Show thank you message
    setFormSubmitted(true);
  };

  return (
    <>
      <FloatingButton
        onClick={handleOpenModal}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FaEnvelope />
      </FloatingButton>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <ModalContainer
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleCloseModal}>
                <FaTimes />
              </CloseButton>

              {!formSubmitted ? (
                <>
                  <ModalTitle>
                    Contáctanos <span>Ahora</span>
                  </ModalTitle>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <InputIcon>
                        <FaUser />
                      </InputIcon>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputIcon>
                        <FaEnvelope />
                      </InputIcon>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <InputIcon>
                        <FaPhone />
                      </InputIcon>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextareaIcon>
                        <FaComment />
                      </TextareaIcon>
                      <Textarea
                        name="message"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
                  </Form>
                </>
              ) : (
                <ThankYouMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ThankYouTitle>¡Gracias por contactarnos!</ThankYouTitle>
                  <ThankYouText>
                    Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo lo antes posible.
                  </ThankYouText>
                  <SubmitButton onClick={handleCloseModal}>Cerrar</SubmitButton>
                </ThankYouMessage>
              )}
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;