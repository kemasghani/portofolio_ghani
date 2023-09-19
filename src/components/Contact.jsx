import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import github from '../assets/icon/github.png'
import instagram from '../assets/icon/instagram.png'
import whatsapp from '../assets/icon/whatsapp.png'
import linkedin from '../assets/icon/linkedin.png'
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionsWrapper } from '../HOC';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex mt-7 gap-10">
          <img src={github} alt="github" className='cursor-pointer hover:opacity-60' onClick={() => window.open('https://github.com/kemasghani', '_blank')} />
          <img src={instagram} alt="instagram" className='cursor-pointer hover:opacity-60' onClick={() => window.open('https://www.instagram.com/ghani_kemas/', '_blank')} />
          <img src={whatsapp} alt="whatsapp" className='cursor-pointer hover:opacity-60' onClick={() => window.open('https://wa.me/6285217862489', '_blank')} />
          <img src={linkedin} alt="linkedin" className='cursor-pointer hover:opacity-60' onClick={() => window.open('https://www.linkedin.com/in/kemas-ghani-sampurna-9ab378219/', '_blank')} />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionsWrapper(Contact, 'contact');
