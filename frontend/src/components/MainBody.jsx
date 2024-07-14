import React from 'react';
import { motion } from 'framer-motion';
import headerImage from '../images/header.jpg';
import bodyImage from '../images/img2.gif';

// Import these fonts in your index.css or App.css
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap');

function MainBody() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8, type: 'spring', stiffness: 120 } },
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 1, duration: 0.6 } },
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        style={{
          width: '80%',
          maxWidth: '1000px',
          backgroundColor: 'rgba(75, 0, 130, 0.9)',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
        variants={contentVariants}
      >
        <motion.h1
          style={{
            fontSize: '36px',
            border: '2px solid #6A0DAD',
            padding: '20px',
            borderRadius: '12px',
            fontFamily: "'Poppins', sans-serif",
            textAlign: 'center',
            marginBottom: '30px',
            backgroundColor: '#9370DB',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          variants={titleVariants}
        >
          <img src={bodyImage} alt="" style={{width: '80px', marginRight: '20px', maxWidth: '100%', height: 'auto'}} />
          <span>Relevance</span>
        </motion.h1>
        <motion.p
          style={{
            border: '2px solid #6A0DAD',
            padding: '25px',
            backgroundColor: 'rgba(147, 112, 219, 0.8)',
            borderRadius: '12px',
            fontFamily: "'Roboto', sans-serif",
            color: 'white',
            lineHeight: '1.8',
            fontSize: '18px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
          variants={contentVariants}
        >
          Implementing a Comment Toxicity Detection model for social media offers significant advantages for the public. Firstly, it enhances user experience by automatically filtering out harmful or abusive content, fostering a safer and more inclusive online environment. This protection is especially vital for vulnerable groups who are often targets of online harassment. Secondly,
          <b style={{color: '#FFD700', fontWeight: 'bold'}}> it helps maintain the platform's reputation, attracting a more diverse and engaged user base. By reducing the prevalence of toxic comments, users can focus on meaningful interactions, leading to healthier and more productive discussions.</b> Additionally, it assists moderators by identifying and addressing toxic behavior promptly, reducing their workload and allowing for more efficient content management. Overall, a comment toxicity detection model not only improves the quality of discourse but also promotes mental well-being by mitigating the negative impacts of online toxicity.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default MainBody;