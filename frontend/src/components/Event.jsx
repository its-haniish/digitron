import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Event = () => {
  const baseUrl = import.meta.env.VITE_BASEURLEVENT;
  const { id } = useParams(); // assuming your route has something like /:id

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/event/${id}`);
      setData(response.data.event);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [baseUrl, id]);

  

  return (
    <div className="">
      <header className="mt-20 py-6">
        <h1 className="text-4xl font-bold lg:px-28 text-center lg:text-start">
          About This Event
        </h1>
      </header>

      <div className="container mx-auto px-4 w-full">
        {loading && <div className="text-center">Loading event...</div>}
        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}
        {data ? (
          <main className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-full md:w-3/6 w-5/6 mb-10 lg:h-[20%] object-cover object-center rounded-2xl"
                alt="hero"
                src={data.eventPoster}
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {data.eventName}
                </h1>
                <p className="mb-8 leading-relaxed">
                  {data.eventDescription || ""}
                </p>
                <div className="flex justify-center">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScp6XKVnG5kdUPqY-dL59r4mnyjP8rNS-O7rZmzWH5gOxdCDw/viewform" target="_blank" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">
                    Register Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold mb-5">Event Rules :-</h1>
              <div className="">
                {data.eventRules.map((rule, index) => (
                  <h1 key={index} className="text-xl leading-9">
                    🎯 {rule}
                  </h1>
                ))}
              </div>
            </div>

            <div className="">
              <h1 className="text-3xl font-bold mt-10 mb-5">
                Featured Competitions :-
              </h1>
              <div className="lg:w-full container flex gap-5 md:justify-center lg:justify-start shrink-0 flex-wrap">
                {data.competitions.map((competition) => (
                  <div
                    key={competition._id}
                    className="mb-10 overflow-hidden rounded-lg border-2 bg-white shadow-1 md:w-80 lg:w-96 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
                  >
                    <img
                      src={competition.competitionPoster}
                      alt={competition.competitionName}
                      className="w-full"
                    />
                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                      <h3>
                        <span className="mb-4 block text-xl font-semibold text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                          {competition.competitionName}
                        </span>
                      </h3>
                      <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {competition.competitionDescription}
                      </p>

                      {/* Using Link to pass the competition data via state */}
                      <Link
                        to={`/compitition/${competition._id}`}
                        state={{ competition }}
                        className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color hover:bg-black hover:text-white transition-all ease-in-out duration-300 border-dark-3 dark:text-dark-6"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <div className="">
                <h1 className="text-3xl font-bold mb-5">Organizers :-</h1>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                  {data.organizers.map((member) => (
                    <div key={member._id} className="flex flex-col items-center">
                      <div className="relative group">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                          <img
                            src={member.organizerImage}
                            alt={member.organizerName}
                            className="w-full h-full object-cover text-center"
                          />
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {member.organizerName}
                      </h3>

                      <button className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                        {member.organizerPhone}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        ) : (
          !loading && (
            <div className="text-center text-xl">
              No events available at the moment.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Event;
