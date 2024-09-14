import React from 'react';

interface Profile {
  id: number;
  name: string;
  semester: string;
}

// Dummy profiles
const profiles: Profile[] = [
  { id: 1, name: 'Alice Johnson', semester: 'Semester 5' },
  { id: 2, name: 'Bob Smith', semester: 'Semester 3' },
  { id: 3, name: 'Charlie Brown', semester: 'Semester 2' },
  { id: 4, name: 'Diana Prince', semester: 'Semester 4' },
  { id: 5, name: 'Eve Davis', semester: 'Semester 6' },
  { id: 6, name: 'Frank Thompson', semester: 'Semester 1' },
  { id: 7, name: 'Grace Lee', semester: 'Semester 5' },
];

const DisconnectedSection: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
        >
          <div className="mb-4">
            <img
              src={`https://via.placeholder.com/100?text=${profile.name[0]}`}
              alt={profile.name}
              className="rounded-full w-24 h-24"
            />
          </div>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="text-gray-500">{profile.semester}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition">
            Connect
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisconnectedSection;

  