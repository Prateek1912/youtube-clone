import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { CommentsContainer } from './CommentsContainer';
import LiveChat from './LiveChat';

export const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])
  
  return (
    <div className="px-20 mt-20 flex flex-col w-full">
      <div className="flex">
        <iframe
          className="rounded-lg"
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className='w-96'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
}
