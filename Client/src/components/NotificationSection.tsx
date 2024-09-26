// import React from 'react';
import { FaThumbsUp, FaCommentDots } from "react-icons/fa";

// Define types
interface Comment {
  id: number;
  name: string;
  text: string;
  time: string;
}

// Dummy data for likes and comments
const likesCount = 123;
const commentsCount = 45;

const comments: Comment[] = [
  {
    id: 1,
    name: "Alice",
    text: "Great post! Really enjoyed it.",
    time: "10:15 AM",
  },
  { id: 2, name: "Bob", text: "I totally agree with you.", time: "10:20 AM" },
  {
    id: 3,
    name: "Charlie",
    text: "Interesting perspective.",
    time: "10:25 AM",
  },
  { id: 4, name: "Diana", text: "Thanks for sharing this.", time: "10:30 AM" },
  {
    id: 5,
    name: "Eve",
    text: "Looking forward to more posts like this.",
    time: "10:35 AM",
  },
];

const NotificationsSection = () => {
  return (
    <div className="flex flex-col p-6 space-y-6 bg-white rounded-lg shadow-md">
      {/* Notifications Header */}
      <h2 className="text-2xl font-semibold mb-4">Post Notifications</h2>

      {/* Likes and Comments Summary */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg shadow-sm">
          <FaThumbsUp size={24} className="text-blue-500" />
          <div className="flex flex-col">
            <span className="text-lg font-medium">Likes</span>
            <span className="text-gray-600">
              {likesCount} people liked this post
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg shadow-sm">
          <FaCommentDots size={24} className="text-green-500" />
          <div className="flex flex-col">
            <span className="text-lg font-medium">Comments</span>
            <span className="text-gray-600">
              {commentsCount} people commented on this post
            </span>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="flex flex-col space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <img
              src={`https://via.placeholder.com/40?text=${comment.name.charAt(
                0
              )}`}
              alt={comment.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium">{comment.name}</span>
              <p className="text-gray-700">{comment.text}</p>
              <span className="text-xs text-gray-400 mt-1">{comment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
