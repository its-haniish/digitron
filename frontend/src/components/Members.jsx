import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Members = () => {
  const baseUrl = import.meta.env.VITE_BASEURLMEMBERS;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/all`);
      console.log("API response:", response.data);
      // Assuming response.data.data is now an array of members
      setData(response.data.data);
    } catch (err) {
      console.error("Error fetching members:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (baseUrl) fetchEvents();
  }, [baseUrl]);

  return (
    <div className='select-none'>
      <header className="mt-20 py-6">
        <h1 className="text-4xl font-bold text-center mb-5">The Minds Behind Digitron</h1>
      </header>

      <main className="container mx-auto px-4 w-full">
      {loading && <Loader/>}

        {error && <div className="text-center text-red-500">Error: {error}</div>}
        {data && data.length ? (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((member) => (
              <div key={member._id} className="flex flex-col items-center">
                <div className="relative group">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                    <img
                      src={member.profilePic || '/default-image.png'}
                      alt={member.clubMemberName}
                      className="w-full h-full object-cover text-center"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.clubMemberName}
                </h3>
                <Link to={`/member/${member._id}`} className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  See bio
                </Link>
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center text-xl">
              No members available at the moment.
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default Members;
