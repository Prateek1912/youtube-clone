import React from 'react'

const commentsData = [
  {
    name: "Prateek Joshi",
    text: "Very Nice Video. Keep up the good work !!!",
    replies: [
      {
        name: "Prateek Joshi",
        text: "Very Nice Video. Keep up the good work !!!",
        replies: [],
      },
    ],
  },
  {
    name: "Prateek Joshi",
    text: "Very Nice Video. Keep up the good work !!!",
    replies: [
      {
        name: "Prateek Joshi",
        text: "Very Nice Video. Keep up the good work !!!",
        replies: [
          {
            name: "Prateek Joshi",
            text: "Very Nice Video. Keep up the good work !!!",
            replies: [
              {
                name: "Prateek Joshi",
                text: "Very Nice Video. Keep up the good work !!!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Prateek Joshi",
    text: "Very Nice Video. Keep up the good work !!!",
    replies: [
      {
        name: "Prateek Joshi",
        text: "Very Nice Video. Keep up the good work !!!",
        replies: [
          {
            name: "Prateek Joshi",
            text: "Very Nice Video. Keep up the good work !!!",
            replies: [
              {
                name: "Prateek Joshi",
                text: "Very Nice Video. Keep up the good work !!!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Prateek Joshi",
    text: "Very Nice Video. Keep up the good work !!!",
    replies: [
      {
        name: "Prateek Joshi",
        text: "Very Nice Video. Keep up the good work !!!",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
    const { name, text} = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" // Replace with a profile image path
          alt="User Avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        <div className='px-3'>
          <p className='font-bold'>{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
      <div key={index}>
          <Comment data={comment} />
          <div className='pl-5 border border-l-black'>
              <CommentsList comments={comment.replies}/>
          </div>
      </div>
    ));
}

export const CommentsContainer = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}
