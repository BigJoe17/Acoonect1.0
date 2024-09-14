import React, { useState } from 'react';

// Define types
interface Message {
  id: number;
  text: string;
  time: string;
  sender: boolean;
}

type Chats = Record<number, Message[]>;

interface Person {
  id: number;
  name: string;
  avatar: string;
}

// Dummy data for the people in the sidebar
const people: Person[] = [
  { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/40' },
  { id: 4, name: 'Diana', avatar: 'https://via.placeholder.com/40' },
];

// Dummy data for messages per person
const chats: Chats = {
  1: [
    { id: 1, text: 'Hello, Alice!', time: '10:30 AM', sender: false },
    { id: 2, text: 'Hey! How are you?', time: '10:32 AM', sender: true },
  ],
  2: [
    { id: 1, text: 'Hi Bob!', time: '11:00 AM', sender: false },
    { id: 2, text: 'Hello! What’s up?', time: '11:05 AM', sender: true },
  ],
  3: [
    { id: 1, text: 'Hey Charlie!', time: '09:15 AM', sender: false },
    { id: 2, text: 'Yo! Long time!', time: '09:20 AM', sender: true },
  ],
  4: [
    { id: 1, text: 'Hello Diana!', time: '03:45 PM', sender: false },
    { id: 2, text: 'Hey, how are things?', time: '03:50 PM', sender: true },
  ],
};

// Track unread messages
const initialUnreadCounts: Record<number, number> = {
  1: chats[1].filter(msg => !msg.sender).length,
  2: chats[2].filter(msg => !msg.sender).length,
  3: chats[3].filter(msg => !msg.sender).length,
  4: chats[4].filter(msg => !msg.sender).length,
};

// Chat Messages Component
const ChatMessages: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="relative flex flex-col p-6 space-y-4 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-center space-x-2 ${
            message.sender ? 'justify-end' : ''
          }`}
        >
          {!message.sender && (
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          )}
          <div className="flex flex-col">
            <div
              className={`${
                message.sender
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-blue-500 text-white'
              } rounded-lg px-4 py-2 max-w-xs`}
            >
              {message.text}
            </div>
            <span className="text-xs text-gray-400 mt-1">
              {message.time}
            </span>
          </div>
          {message.sender && (
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Message Input Bar Component (Messenger style)
const MessageInputBar: React.FC<{ onSendMessage: (msg: string) => void }> = ({
  onSendMessage,
}) => {
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex items-center px-4 py-2 shadow-md w-full max-w-3xl mt-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        className="flex-grow px-4 py-2 bg-transparent outline-none text-gray-700"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white rounded-full px-4 py-2 shadow-md hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

// Sidebar Component (WhatsApp style)
const Sidebar: React.FC<{ onSelectPerson: (id: number) => void, unreadCounts: Record<number, number>, selectedPerson: number }> = ({
  onSelectPerson,
  unreadCounts,
  selectedPerson,
}) => {
  return (
    <div className="w-1/4 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      {people.map((person) => (
        <div
          key={person.id}
          className={`flex items-center p-2 cursor-pointer border-b border-gray-300 ${person.id === selectedPerson ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
          onClick={() => onSelectPerson(person.id)}
        >
          <div className="relative mr-4">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-12 h-12 rounded-full"
            />
            {person.id !== selectedPerson && unreadCounts[person.id] > 0 && (
              <span className="absolute -left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {unreadCounts[person.id]}
              </span>
            )}
          </div>
          <div className="flex-grow">
            <span className="text-lg font-medium">{person.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Chat Room Component
const ChatRoom: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<number>(1); // Default to Alice
  const [unreadCounts, setUnreadCounts] = useState<Record<number, number>>(initialUnreadCounts);

  const handleSelectPerson = (id: number) => {
    setSelectedPerson(id);
    // Reset unread count when the profile is opened
    setUnreadCounts((prev) => ({ ...prev, [id]: 0 }));
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: chats[selectedPerson].length + 1,
      text,
      time: new Date().toLocaleTimeString(),
      sender: true,
    };

    chats[selectedPerson].push(newMessage); // Update the chat for the selected person
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        onSelectPerson={handleSelectPerson}
        unreadCounts={unreadCounts}
        selectedPerson={selectedPerson}
      />

      {/* Chat Section */}
      <div className="w-3/4 bg-blue-50 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-lg font-bold">
            {people.find((person) => person.id === selectedPerson)?.name}
          </h1>
        </header>

        <main className="flex-1 p-6 space-y-6 flex flex-col justify-end">
          <ChatMessages messages={chats[selectedPerson]} />
        </main>

        <footer className="p-4">
          <MessageInputBar onSendMessage={handleSendMessage} />
        </footer>
      </div>
    </div>
  );
};

export default ChatRoom;
