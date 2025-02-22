  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
import SingleCard from './Card';
import Loader from './Loader';

  const Events = () => {

    const baseUrl = import.meta.env.VITE_BASEURLEVENT;

    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

    const fetchEvents = async() => {
      try {
        await axios.get(`${baseUrl}/events`).then(response => setdata(response.data.events))
        

        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
  
    }

    // console.log(data);




    useEffect(() => {
      fetchEvents();

    }, [baseUrl])
    

    
    return (
      <div>
              <header className="mt-20 py-6 ">
            <h1 className="text-4xl font-bold text-center">Upcoming Events</h1>
        </header>

        <main className="container mx-auto px-10 w-full">  
        {loading && <Loader/>}
        {error && <div className="text-center text-red-500">Error: {error}</div>}
        {data && data.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((event) => (
                   <section key={event._id} className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20  w-full lg:pt-[120px]">
                   <div className="container w-full">
                     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                       <SingleCard
                         image={event.eventPoster}
                         CardTitle={event.eventName}
                         btnHref={`/event/${event._id}`}
                         CardDescription={event.eventDescription.slice(0, 101) + '...'}
                         Button="View Details"
                       />
                     </div>
                   </div>
                 </section>
           
            ))}
          </div>
        ) : (
          !loading && <div className="text-center text-xl">No events available at the moment.</div>
        )}
      </main>


      </div>
    )
  }

  export default Events