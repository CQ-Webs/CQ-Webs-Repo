"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Packs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const packData = [
    {
      id: 'pack1',
      title: 'Digital prescence',
      mostSold: false,
      features: [
        'Diseño web personalizado (hasta 5 secciones)',
        'Diseño digital (PDF o imágenes)',
        'Información de contacto, ubicación y horario',
        'Mapa de Google integrado',
        'Diseño responsive (móvil/tablet)',
        'Integración con WhatsApp',
        '1 año de hosting + dominio .com o .es',
        'Soporte por 15 días después de la entrega'
      ]
    },
    {
      id: 'pack2',
      title: 'Connected restaurant',
      mostSold: true,
      features: [
        'Menú digital interactivo y editable',
        'Sistema de reservas en línea o por WhatsApp',
        'Galería de imágenes profesional',
        'Formulario de contacto personalizado',
        'Integración con redes sociales',
        'Soporte por 30 días',
        'Optimización básica para buscadores (SEO)'
      ]
    },
    {
      id: 'pack3',
      title: 'Gastronomía Digital',
      mostSold: false,
      features: [
        'Diseño visual premium y animaciones ligeras',
        'Blog o sección de novedades',
        'Motor de reservas avanzado con confirmación automática',
        'Reseñas de Google en vivo integradas',
        'Optimización SEO avanzada (para destacar en Google)',
        '3 meses de soporte y mantenimiento técnico',
        'Panel administrativo para editar contenidos'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="w-screen bg-black text-white py-20 px-4">
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-center mb-16"
        >
          What works the best for you?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:w-[80%] w-full m-auto">
          {packData.map((pack) => (
            <motion.div 
              key={pack.id}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center mb-2">
                <h3 className="text-xl md:text-4xl font-light">{pack.title}</h3>
              </div>
              
              {pack.mostSold && (
                <p className="text-green-500 text-sm mb-2">Most sold</p>
              )}
              
              <div className="w-full h-px bg-white/30 my-4"></div>
              
              <div className="mb-6">
                <p className="mb-2 font-light text-xl">Incluye:</p>
                <ul className="space-y-2 list-disc list-outside">
                  {pack.features.map((feature, index) => (
                    <li key={index} className="ml-6 items-start list-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <p className="text-xs text-gray-400 mb-4">Contrato por un año (Pago único)</p>
                <button className="border border-white py-2 px-6 w-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Packs;