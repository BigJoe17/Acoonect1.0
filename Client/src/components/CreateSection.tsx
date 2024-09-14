import React, { useState } from "react";

const CreateSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
    }
  };

  const handleTextSubmit = () => {
    console.log(`Submitted text: ${textInput}`);
    setTextInput("");
    setSelectedOption(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Large Plus Icon */}
      <button
        className="bg-blue-500 text-white rounded-full w-24 h-24 text-5xl flex items-center justify-center shadow-md hover:bg-blue-600 transition"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Options: Video, Picture, Text */}
            {!selectedOption && (
              <div className="flex flex-col space-y-4">
                <button
                  className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200"
                  onClick={() => handleOptionClick("video")}
                >
                  Upload Video
                </button>
                <button
                  className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200"
                  onClick={() => handleOptionClick("picture")}
                >
                  Upload Picture
                </button>
                <button
                  className="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200"
                  onClick={() => handleOptionClick("text")}
                >
                  Write Text
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Upload Video */}
            {selectedOption === "video" && (
              <div className="flex flex-col space-y-4">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileInput}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Done
                </button>
              </div>
            )}

            {/* Upload Picture */}
            {selectedOption === "picture" && (
              <div className="flex flex-col space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Done
                </button>
              </div>
            )}

            {/* Text Input */}
            {selectedOption === "text" && (
              <div className="flex flex-col space-y-4">
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Write your text here..."
                  className="p-4 border rounded-md w-full"
                  rows={4}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={handleTextSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateSection;
