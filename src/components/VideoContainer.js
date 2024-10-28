import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {

  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
    }
    getVideos();
  }
    , []);
  
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v="+ video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}
