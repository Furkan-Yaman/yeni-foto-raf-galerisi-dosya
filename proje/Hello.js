import React, { useState } from 'react';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState('');

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newPhoto = {
        id: photos.length + 1,
        title: title,
        imageUrl: reader.result,
      };
      setPhotos([...photos, newPhoto]);
    };
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1>Meram fotoğraf galerisi</h1>
      <div>
        <input type="text" placeholder="Enter title" value={title} onChange={handleTitleChange} />
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      </div>
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.imageUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
