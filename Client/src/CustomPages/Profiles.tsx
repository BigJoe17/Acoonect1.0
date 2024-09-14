// components/Profile.tsx
import React from "react";
import {
  FaBriefcase,
  FaHeart,
  FaRegEdit,
  FaUserGraduate,
} from "react-icons/fa"; // Icons for fields

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative">
            <img
              className="w-40 h-40 rounded-full border-4 border-purple-600"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition">
              <FaRegEdit />
            </button>
          </div>
          {/* Name and Bio */}
          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            Joshua Olugotun
          </h2>
          <p className="mt-2 text-gray-600 max-w-md text-center">
            Aspiring developer interested in AI, Web3, and connecting students
            worldwide.
          </p>

          {/* Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
            <ProfileSection
              icon={<FaUserGraduate />}
              title="Major"
              content="Computer Engineering"
            />
            <ProfileSection
              icon={<FaBriefcase />}
              title="Semester"
              content="6th"
            />
            <ProfileSection
              icon={<FaHeart />}
              title="Interests"
              content="AI, Web3, Blockchain"
            />
            <ProfileSection
              icon={<FaUserGraduate />}
              title="Bio"
              content="Building solutions to connect people"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProfileSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  icon,
  title,
  content,
}) => (
  <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white transition-all duration-300">
    <div className="text-3xl mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-gray-500">{content}</p>
    </div>
  </div>
);

export default Profile;
