import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import boxImage from '../images/boxImage.jpg';
import backgroundImage from '../images/background.png'; 
import modelPicture from '../images/modelPicture.png'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: 'rgba(245, 245, 245, 0.8)', // Semi-transparent white
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.2 } },
};

const MotionContainer = motion(Container);
const MotionCard = motion(Card);

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingY: 4,
        }}
      >
        <MotionContainer
          maxWidth="md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionCard variants={cardVariants}>
            <CardMedia
              component="img"
              height="300"
              image={boxImage}
              alt="About Image"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ padding: 4,borderRadius: '10px' }}>
              <Typography variant="h3" component="div" gutterBottom color="primary">
                About Comment Toxicity Detection
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                This project aims to detect toxic comments using advanced machine learning models. By analyzing user-generated content, our system identifies toxic, obscene, and hate speech, providing a safer and more inclusive online environment for all users.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Our goal is to empower communities and platforms to maintain healthy discussions by efficiently filtering out harmful content. We believe in promoting respectful communication and making the internet a better place for everyone to engage in meaningful conversations.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                By leveraging cutting-edge natural language processing techniques, we strive to continuously improve the accuracy and effectiveness of our toxicity detection system. Our commitment to creating a positive online experience drives us to innovate and adapt to the ever-changing landscape of digital communication.
              </Typography>
              <br />
              <Typography variant="h3" component="div" gutterBottom color="primary">
                Tech Stacks Used
              </Typography>
              <Typography variant="h4" component="div" gutterBottom color="purple">
                  Machine Learning
                </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                This project aims to detect toxic comments using advanced machine learning models like <b>Bidirectional LSTM</b>. By analyzing user-generated content, our system identifies toxic, obscene, and hate speech, providing a safer and more inclusive online environment for all users. <br />
                It uses a variety of other libraries and modules to make the machine learning model: <br />
                <ul style={{ listStyleType: 'circle' }}>
                  <li><b>OS module</b> - To handle file related tasks</li>
                  <li><b>Pandas library</b> - Used for analyzing, exploring and manipulating data of a dataset</li>
                  <li><b>Numpy Library</b> - Python library used for working with arrays</li>
                  <li><b>Tensorflow Library</b> - Library used to training deep neural networks</li>
                </ul>
                <div>
                <Typography variant="h5" component="div" gutterBottom color="primary">
                  ML Model
                </Typography>
                  <img src={modelPicture} alt="Model" />
                </div>
              </Typography>
              <Typography variant="h4" component="div" gutterBottom color="purple">
                  Web Interfaces using React
                </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                For Web Interfaces our project uses <b>React as a Frontend</b> for its good browser compatibility and excellent UI manipulative features. <br />
                1. <b>Component-Based Architecture</b>: React's web interface is built using a component-based architecture, which allows developers to create reusable and modular components. This promotes efficient development, easier maintenance, and a clear separation of concerns within the application. <br />

                2. <b>Virtual DOM for Efficient Updates</b>: React utilizes a virtual DOM to optimize rendering performance. When the state of an application changes, React updates the virtual DOM first, then efficiently reconciles these changes with the real DOM, minimizing costly direct DOM manipulations and improving overall application performance. <br />

                3. <b>JSX Syntax for Readable Code</b>: React's web interface leverages JSX, a syntax extension that combines JavaScript with HTML-like elements. This allows developers to write components in a declarative and intuitive manner, making the code more readable and easier to debug. JSX also supports embedding JavaScript expressions, enhancing the flexibility of the UI design.
              </Typography>
              <Typography variant="h4" component="div" gutterBottom color="purple">
                  Deployment using Netlify
                </Typography>
              <Typography variant="body1" color="text.secondary">
              Netlify is a popular deployment service that simplifies the process of deploying and managing modern web projects. It offers continuous deployment from Git, automated builds, and an intuitive interface. With features like custom domains, serverless functions, and form handling, Netlify provides a robust platform for developers to host and scale websites effortlessly.
              </Typography>
              <div>
              </div>
            </CardContent>
          </MotionCard>
        </MotionContainer>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}