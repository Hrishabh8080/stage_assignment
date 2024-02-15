import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { getAllData } from '../CallApi';
import "./CaruosalData.scss"
const CaruosalData = () => {
  const [data, setData] = useState([]);
  const [rootUrl, setRootUrl] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllData();
        setData(data.carousel);
        setRootUrl(data.rootUrl);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  console.log(data, rootUrl);
  return (
    <Carousel className='CaruosalData' autoplay speed={2000} easing='linear'>
      {data && data.map(item => {
        let imageUrl;
        if (screenWidth > 1024) {
          imageUrl = rootUrl + "/" + item.ratio2;
        } else if (screenWidth > 768) {
          imageUrl = rootUrl + "/" + item.ratio3;
        } else {
          imageUrl = rootUrl + "/" + item.ratio1;
        }
        return <div className='imageContainer'> <img src={imageUrl} alt='screen' /></div>;
      })}
    </Carousel>
  )
}

export default CaruosalData