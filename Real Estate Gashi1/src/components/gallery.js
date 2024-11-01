import React from 'react';
import galleryImage1 from '../assets/images/gallery-1.jpg';
import galleryImage2 from '../assets/images/gallery-2.jpg';
import galleryImage3 from '../assets/images/gallery-3.jpg';

function Gallery() {
  return (
    <section className="gallery my-4">
      <h2 className="text-center">Galeria e Pronave</h2>
      <div className="row">
        {[galleryImage1, galleryImage2, galleryImage3].map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
