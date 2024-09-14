import React, { useState } from 'react';
import { FaHome, FaUsers, FaBook, FaEnvelope, FaUser, FaSignOutAlt } from 'react-icons/fa';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('activity');
  const [isOwner, setIsOwner] = useState<boolean>(true); // Assume logged in as owner for edit functionality
  const [activity, setActivity] = useState<string[]>([
    'Attended Machine Learning Conference - Presented research on AI techniques',
    'Published Research Paper - Focused on deep learning and neural networks',
  ]);
  const [about, setAbout] = useState<string>(
    'Isabella is a PhD student in Computer Science at Stanford University. She is passionate about artificial intelligence and machine learning.'
  );
  const [projects, setProjects] = useState<string[]>([
    'Project A - A web-based platform for real-time collaboration using React and Node.js.',
    'Project B - A mobile application for personal finance management built with Flutter and Firebase.',
  ]);
  const [social, setSocial] = useState<string[]>([
    'GitHub - github.com/isabella',
    'LinkedIn - linkedin.com/in/isabella',
  ]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAddActivity = () => {
    const newActivity = prompt('Enter new activity:');
    if (newActivity) setActivity([...activity, newActivity]);
  };

  const handleEditAbout = () => {
    const newAbout = prompt('Edit About section:', about);
    if (newAbout) setAbout(newAbout);
  };

  const handleAddProject = () => {
    const newProject = prompt('Enter new project:');
    if (newProject) setProjects([...projects, newProject]);
  };

  const handleAddSocial = () => {
    const newSocial = prompt('Enter new social link:');
    if (newSocial) setSocial([...social, newSocial]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafb]">
      {/* Top Dashboard Navigation Bar */}
      <header className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-900">Acoonect</h1>
          <nav className="space-x-6 text-gray-600 flex items-center">
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <FaHome size={20} />
              <span>Feed</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <FaUsers size={20} />
              <span>Servers</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <FaBook size={20} />
              <span>Resources</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <FaEnvelope size={20} />
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <FaUser size={20} />
              <span>Profile</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOwner(false)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2"
          >
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Profile Section */}
      <main className="flex flex-col items-center p-6 bg-[#f8fafb]">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img className="w-24 h-24 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Profile" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">Isabella Rodriguez</h2>
          <p className="text-sm text-gray-500">PhD Student in Computer Science at Stanford University</p>
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">Connect</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Message</button>
          </div>
          <p className="mt-2 text-gray-500">1,500 followers • 50 views today</p>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 w-full max-w-3xl">
          <nav className="flex justify-center space-x-10 border-b border-gray-200">
            <button
              onClick={() => handleTabChange('activity')}
              className={`pb-2 ${activeTab === 'activity' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Activity
            </button>
            <button
              onClick={() => handleTabChange('about')}
              className={`pb-2 ${activeTab === 'about' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              About
            </button>
            <button
              onClick={() => handleTabChange('projects')}
              className={`pb-2 ${activeTab === 'projects' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Projects
            </button>
            <button
              onClick={() => handleTabChange('social')}
              className={`pb-2 ${activeTab === 'social' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Social
            </button>
          </nav>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'activity' && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <ul className="mt-4 space-y-4">
                  {activity.map((item, index) => (
                    <li key={index} className="p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-600 text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleAddActivity}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Activity
                </button>
              </div>
            )}
            {activeTab === 'about' && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900">About Isabella</h2>
                <p className="text-gray-600 text-sm mt-2">{about}</p>
                <button
                  onClick={handleEditAbout}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Edit About
                </button>
              </div>
            )}
            {activeTab === 'projects' && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
                <ul className="mt-4 space-y-4">
                  {projects.map((project, index) => (
                    <li key={index} className="p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-600 text-sm">{project}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleAddProject}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Project
                </button>
              </div>
            )}
            {activeTab === 'social' && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900">Social Links</h2>
                <ul className="mt-4 space-y-4">
                  {social.map((link, index) => (
                    <li key={index} className="p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-600 text-sm">{link}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleAddSocial}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Social Link
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
