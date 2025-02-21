import React from 'react';
import { useLocation } from 'react-router-dom';

const Compition = () => {
  const location = useLocation();
  const { competition } = location.state || {};

  
  if (!competition) {
    return (
      <div className="text-center mt-10">
        <h1>No competition data found.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">
        {competition.competitionName}
      </h1>
      <img
        src={competition.competitionPoster}
        alt={competition.competitionName}
        className="w-full mb-4 rounded-lg object-cover"
      />
      <p className="text-lg text-gray-700 mb-4">
        {competition.competitionDescription}
      </p>

      <div className="">
        <h1 className="text-3xl font-bold mb-5">Competition Rules :-</h1>
        <div className="">
          {competition.competitionRules.map((rule) => (
            <div key={rule._id} className="mb-2">
              <h1 className="text-xl leading-9">
                🎯 {rule.ruleTitle} - {rule.rulePoints} Points
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compition;
