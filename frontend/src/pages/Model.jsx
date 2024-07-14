import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import './Model.css';
import Navigation from '../components/Navigation'
import ImplementVideo from '../images/demo.mp4'
import BackgroundImage from '../images/background.png'

const Model = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2, 
        duration: 0.7 
      } 
    },
  };

  const videoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5, 
        duration: 0.5 
      } 
    },
  };

  const infoVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.7, 
        duration: 0.5 
      } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.9, 
        duration: 0.5 
      } 
    },
  };

  return (
    <>
      <Navigation />
      <div className="page-wrapper" style={{backgroundImage: `url(${BackgroundImage})`}}>
        <motion.div
          className="model-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="model-title" 
            variants={titleVariants}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#2c3e50',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            ML Model Implementation
          </motion.h1>

          <div className="content-wrapper">
            <motion.div className="video-container" variants={videoVariants}>
              <ReactPlayer
                url={ImplementVideo}
                playing={isVideoPlaying}
                controls={true}
                width="100%"
                height="100%"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
            </motion.div>

            <motion.div className="info-container" variants={infoVariants}>
              <motion.h2 
                variants={textVariants}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#34495e',
                }}
              >
                About the Model
              </motion.h2>
              <motion.p 
                variants={textVariants}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: '#7f8c8d',
                  lineHeight: '1.6',
                }}
              >
                This video demonstrates the implementation of our cutting-edge machine learning model.
                Watch as we walk through the process step-by-step, explaining key concepts and
                showcasing the model's capabilities.
              </motion.p>
              <motion.a
                className="learn-more-btn"
                whileHover={{ scale: 1.05, backgroundColor: '#2980b9' }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1yPMciZxVCOdUG5pH1dSZKECuvt8HbY4N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginTop: '20px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                Learn More
              </motion.a>
              <motion.a
                className="learn-more-btn"
                whileHover={{ scale: 1.05, backgroundColor: '#2980b9' }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1yPMciZxVCOdUG5pH1dSZKECuvt8HbY4N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginTop: '20px',
                  marginLeft: "20px",
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                Implementation
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Model;