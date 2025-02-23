import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";

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
      {loading && <Loader/>}

        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}
        {data ? (
          <main className="text-gray-600 body-font">
            <div className="container mx-auto   flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-[80%] md:w-3/6 w-5/6 mb-10 lg:h-[20%] h-[30%] object-cover object-center rounded-2xl"
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
              <a target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLScp6XKVnG5kdUPqY-dL59r4mnyjP8rNS-O7rZmzWH5gOxdCDw/viewform"  className="registerbtn w-44">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width="36px"
    height="36px"
  >
    <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
    <path
      fill="#e53935"
      d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
    ></path>
    <path
      fill="#b71c1c"
      d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
    ></path>
    <path
      fill="#212121"
      d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
    ></path>
    <path
      fill="#01579b"
      d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
    ></path>
    <path
      fill="#212121"
      d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
    ></path>
    <path
      fill="#81d4fa"
      d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
    ></path>
    <path
      fill="#212121"
      d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
    ></path>
    <path
      fill="#e1f5fe"
      d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
    ></path>
  </svg>
  <span className="now">now!</span>
  <span className="play">Join</span>
</a>

              </div>
    
              </div>
            </div>
            <div classNameName="mx-10">
              <h1 className="text-3xl font-bold  mb-5">Event Rules :-</h1>
              <div className="">
                {data.eventRules.map((rule, index) => (
                  <h1 key={index} className="text-xl  leading-9">
                    🎯 {rule}
                  </h1>
                ))}
              </div>
            </div>

            <div className="flex items-center flex-col">
              <h1 className="text-3xl w-full font-bold my-10 ">
                Featured Competitions :-
              </h1>
              <div className="lg:w-full  w-full container flex justify-center lg:justify-start gap-5  shrink-0 flex-wrap">
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
                <h1 className="text-3xl font-bold mb-5  ">Organizers :-</h1>
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
                       +91 {member.organizerPhone}
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
