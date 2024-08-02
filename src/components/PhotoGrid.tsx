import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface PhotoGridProps {
  customer: {
    name: string;
    title: string;
    address: string;
    photos: string[];
  } | null;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customer }) => {

  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  const fetchImages = async () => {
    console.log("hii", new Date());
    
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: 'nature', per_page: 9, page: randomPage },
        headers: {
          'Authorization': 'PIC3ZrOOeoIN9aFG5c4drdojXMrom57gqlMMMhEs1eaa6qjCGSpcSh47'
        }
      });

      const newPhotos = response.data.photos.map((photo: any) => photo.src.medium);
      setCurrentPhotos(newPhotos);
    } catch (error) {
      console.error('Error:', error);
    }
  };

     
  
  useEffect(() => {
    console.log("hii");
    
    const fetchInitialImages = async () => {
      await fetchImages();
    };

    fetchInitialImages()
    

    const interval = setInterval(fetchImages, 10000);

    return () => clearInterval(interval);
   
  }, [customer]);
  
  if (!customer){
    return <p>hehhe</p>
  }


  return (
    <div className="grid grid-cols-3 gap-8 mr-5 mb-6">
      {currentPhotos.map((photo, index) => (
        <div key={index} className="p-2">
          <img
            src={photo}
            alt="Random"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
