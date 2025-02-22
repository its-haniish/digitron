import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Loader from './Loader';

const MemberBio = () => {
  const baseUrl = import.meta.env.VITE_BASEURLMEMBERS;
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      setData(response.data.data); // Fix: Use response.data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  
  useEffect(() => {
    fetchEvents();
  }, [id]); // Fix: Removed baseUrl from dependencies

  if (loading) return <Loader/>
  if (error) return <div>Error: {error}</div>;

  return (
    <div class="text-gray-600 body-font overflow-hidden  ">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-96 object-contain lg:object-cover  object-center rounded" src={data.profilePic}></img>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data.clubMemberName}</h1>
          <h2 class="text-sm title-font text-gray-900 font-semibold tracking-widest ">Email :- {data.clubMemberEmail}</h2>
          <h1 class="text-green-500 text-2xl title-font font-medium mb-1">{data.clubMemberPosition}</h1>


         
          <p class="leading-relaxed">{data.about}</p>

          <div className=' flex gap-5 mt-5'>
      {data.socialMediaLinks.github && (
        <a className='text-2xl hover:text-green-500' href={data.socialMediaLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub/>
        </a>
      )}
      {data.socialMediaLinks.instagram && (
        <a className='text-2xl hover:text-pink-400' href={data.socialMediaLinksinstagram} target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram/>
        </a>
      )}
      {data.socialMediaLinks.linkedin && (
        <a className='text-2xl hover:text-sky-600' href={data.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin/>
        </a>
      )}
      {data.socialMediaLinks.twitter && (
        <a className='text-2xl hover:text-black-100' href={data.socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaSquareXTwitter/>
        </a>
      )}
    </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MemberBio;
