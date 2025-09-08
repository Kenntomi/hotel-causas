// Configuración de EmailJS

export const EMAILJS_CONFIG = {
  serviceId: 'service_hotelcausas', // Reemplazar con tu Service ID de EmailJS
  templateIds: {
    booking: 'template_booking', // Reemplazar con tu Template ID para reservas
    contact: 'template_contact' // Reemplazar con tu Template ID para contacto
  },
  userId: 'user_XXXXXXXXXXXXXXXX' // Reemplazar con tu User ID de EmailJS
};

// Instrucciones para configurar EmailJS:
// 1. Crear una cuenta en https://www.emailjs.com/
// 2. Crear un servicio de correo electrónico (Gmail, Outlook, etc.)
// 3. Crear plantillas para reservas y contacto
// 4. Reemplazar los IDs anteriores con los proporcionados por EmailJS