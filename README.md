# Hotel Causas

Sitio web para el Hotel Causas, un hotel de lujo en Lima, Perú. El sitio incluye páginas de inicio, sobre nosotros, habitaciones, servicios, galería y reservas.

## Características

- Diseño responsive para todos los dispositivos
- Animaciones fluidas con Framer Motion
- Sistema de reservas funcional
- Integración con Google Maps
- Galería de imágenes
- Información detallada sobre habitaciones y servicios

## Tecnologías utilizadas

- React
- Vite
- Styled Components
- Framer Motion
- React Router
- React Icons
- EmailJS (para envío de correos electrónicos)

## Desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/Kenntomi/hotel-causas.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Despliegue en Vercel

Este proyecto está configurado para ser desplegado fácilmente en Vercel:

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
2. Conecta tu cuenta de GitHub con Vercel
3. Importa este repositorio en Vercel
4. Vercel detectará automáticamente que es un proyecto de Vite y lo configurará correctamente
5. Haz clic en "Deploy" y ¡listo!

El archivo `vercel.json` incluido en el repositorio asegura que las rutas de React Router funcionen correctamente en producción.

## Configuración de EmailJS

Este proyecto utiliza EmailJS para el envío de correos electrónicos desde los formularios de contacto y reserva. Para configurarlo:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de correo electrónico (Gmail, Outlook, etc.)
3. Crea dos plantillas:
   - Una para el formulario de contacto (`template_contact`)
   - Una para el formulario de reserva (`template_booking`)
4. Actualiza el archivo `src/config/emailjs.js` con tus credenciales:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'tu_service_id',
  templateIds: {
    booking: 'tu_template_id_reserva',
    contact: 'tu_template_id_contacto'
  },
  userId: 'tu_user_id'
};
```
