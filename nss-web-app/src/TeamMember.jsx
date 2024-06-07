import React, { useState } from 'react';
import './input.css';
const TeamMember = ({ member }) => {
  const [showModal, setShowModal] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };
  return (
    <div className="p-4 relative flex flex-col items-center ">
      <div className=" w-full mb-16">
        <div className="absolute top-16 left-1/3 transform -translate-x-1/4 -translate-y-1/2  z-20">
          <div className="rounded-lg overflow-hidden border-1 shadow-photo">
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: '180px', height: '220px' }}
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden relative pt-16 pb-8 w-full text-center z-10 mt-8">
        <div className="p-4">
          <h2 style={{ fontFamily: 'Roboto', }} className="text-lg font-semibold text-gray-800">{member.name}</h2>
          <p className="text-gray-500">{member.position}</p>
          <button
            onClick={handleButtonClick}
            className={`mt-4 w-full px-4 py-2 bg-indigo-500 text-white rounded-full transition  hover:bg-blue-500 ${buttonClicked ? 'border-4 border-blue-200' : ''}`}
          >
            Know More
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50 slide-down-animation">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900 rounded-full"
            >
              &times;
            </button>
            <div className="relative">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mb-4 mx-auto rounded-full object-cover absolute left-1/2 transform -translate-x-1/2 -top-16 border-4 border-white shadow-lg scale-110 transition-transform duration-500 ease-in-out hover:scale-125 animate-zoomOut"
              />
            </div>
            <div className="mt-16 text-center">
              <h2 style={{ fontFamily: 'Roboto', }} className="text-xl font-semibold text-gray-800">{member.name}</h2>
              <p className="mb-4 text-gray-600">{member.message}</p>
              <div className="flex justify-center">
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                >
                  <img
    src="./mail.png" className="w-8 h-8" />
                 
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TeamMember;
