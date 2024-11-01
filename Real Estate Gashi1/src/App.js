import React from 'react';
import Header from './components/Header';
import PropertyImage from './components/PropertyImage';
import Gallery from './components/Gallery';
import VideoBackground from './components/VideoBackground';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <div>
      <VideoBackground /> {/* Sfondi me video */}
      <Header />
      <main className="container my-4">
        <h1 className="text-center">Prona të Disponueshme</h1>
        <PropertyImage /> {/* Imazhi i pronës */}
        <Gallery /> {/* Galeria e pronave */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
