<<<<<<< HEAD
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineBell, AiOutlinePlus } from 'react-icons/ai';
import ChatRoom from './messages';
import NotificationsSection from '@/components/NotificationSection'; 
import { PostsSection } from '@/components/extra/usefulSections';

// Define a Tab type
type Tab = 'posts' | 'create' | 'notifications';

const PostPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('posts');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <PostsSection />
        );
      case 'create':
        return (
          <div>
            <h2 className="text-lg font-semibold">Create New Post</h2>
            <CreateComponent />
          </div>
        );
      case 'notifications':
        return <NotificationsSection />;
      default:
        return null;
    }
  };

=======
import { PostsSection } from "@/components/extra/usefulSections";

const Postpage = () => {
>>>>>>> 3dd9ebbff30acfd9d5da59933569afe02f95e070
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#f8fafb] p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h1 className="text-[#0e161b] text-base font-medium leading-normal">
                    University
                  </h1>
                  <p className="text-[#507a95] text-sm font-normal leading-normal">
                    Explore 1,000+ universities
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Tab - Posts */}
                  <div
                    onClick={() => handleTabClick('posts')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
                      activeTab === 'posts' ? 'bg-blue-500 text-white' : 'bg-[#e8eef3]'
                    } hover:bg-blue-300`}
                  >
                    <AiOutlineHome size={24} />
                    <p className="text-sm font-medium leading-normal">
                      Posts
                    </p>
                  </div>
                  {/* Tab - Create */}
                  <div
                    onClick={() => handleTabClick('create')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
                      activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-[#e8eef3]'
                    } hover:bg-blue-300`}
                  >
                    <AiOutlinePlus size={24} />
                    <p className="text-sm font-medium leading-normal">
                      Create
                    </p>
                  </div>
                  {/* Tab - Notifications */}
                  <div
                    onClick={() => handleTabClick('notifications')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
                      activeTab === 'notifications' ? 'bg-blue-500 text-white' : 'bg-[#e8eef3]'
                    } hover:bg-blue-300`}
                  >
                    <AiOutlineBell size={24} />
                    <p className="text-sm font-medium leading-normal">
                      Notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div className="layout-content-container flex flex-col max-w-[960px]">
            {/* Render the content based on the selected tab */}
            {renderContent()}
=======
          <div className="layout-content-container flex flex-col max-w-[960px]">
            <PostsSection />
>>>>>>> 3dd9ebbff30acfd9d5da59933569afe02f95e070
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for creating posts
const CreateComponent = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === 'Text') {
      setTextInput('');
    }
  };

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      alert(`Text submitted: ${textInput}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-blue-500 text-white rounded-full p-3 shadow-md hover:bg-blue-600 transition"
      >
        <AiOutlinePlus size={24} />
      </button>

      {showOptions && (
        <div className="flex flex-col mt-4 gap-2">
          <button
            onClick={() => handleOptionClick('Video')}
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
          >
            Video
          </button>
          <button
            onClick={() => handleOptionClick('Picture')}
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
          >
            Picture
          </button>
          <button
            onClick={() => handleOptionClick('Text')}
            className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
          >
            Text
          </button>
        </div>
      )}

      {selectedOption === 'Text' && (
        <div className="mt-4">
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Write your post..."
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleTextSubmit}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      )}

      {selectedOption === 'Video' && (
        <div className="mt-4">
          <input type="file" accept="video/*" onChange={handleFileChange} />
        </div>
      )}

      {selectedOption === 'Picture' && (
        <div className="mt-4">
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      )}
    </div>
  );
};

export default PostPage;
