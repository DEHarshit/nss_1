import React from 'react';
import TeamMember from './TeamMember';
import './input.css'
const Team = () => {
  const team = [
    {
      position: "President",
      members: [

        {
          name: "Rajkumar",
          photo: "./demo.jpg",
          message: "I am the President.",
          email: "raj@example.com",
        },
        {
          name: "Rajendran",
          photo: "./demo.jpg",
          message: "I am the President.",
          email: "raj@example.com",
        },
        {
          name: "Rajendran",
          photo: "./demo.jpg",
          message: "I am the President.",
          email: "raj@example.com",
        },
        {
          name: "Rajendran",
          photo: "./demo.jpg",
          message: "I am the President.",
          email: "raj@example.com",
        },
        // Add more members
      ],
    },
    {
      position: "Vice President",
      members: [
        {
          name: "Raj",
          photo: "./demo.jpg",
          message: "I am the Vice President.",
          email: "raja@example.com",
        },
        {
          name: "Raj",
          photo: "./demo.jpg",
          message: "I am the Vice President.",
          email: "raja@example.com",
        },
        // Add more members
      ],
    },

    // Add more positions and members
  ];

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      {team.map((group, index) => (
        <div key={index} className="grid gap-14 mb-12">
          <h1 className="text-5xl text-black-300 text-center font-custom">{group.position}</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {group.members.map((member, idx) => (
              <TeamMember key={idx} member={{ ...member, position: group.position }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Team;
