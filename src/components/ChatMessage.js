import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ChatMessage = ({name,message}) => {

  return (
    <div className="flex my-2">
      {/* Avatar */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" // Replace with a profile image path
        alt="User Avatar"
        className="w-8 h-8 ml-2 rounded-full cursor-pointer"
      />
      <div className="font-semibold ml-2">{name}</div>
      {/* Message */}

      <div className="text-gray-700 ml-2">{message}</div>
    </div>
  );
}

export default ChatMessage