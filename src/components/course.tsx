import React from 'react'
import getProfileData from "../data";
import { MdChevronRight } from "react-icons/md";

const ToTitleCase = (value: string) => {
  const str = value.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i += 1) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

function Course() {
  const profileData = getProfileData();
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2">
      <div className='mb-4 px-5 md:px-1'>
        <h1 className="font-bold text-gray-900 mb-1">Skills</h1>
        {
          Object.keys(profileData.skills!).map((s) => (
            <div className='mb-3 flex'>
              <h6 className=" w-1/3 text-black-900 mb-1 mr-3">{ToTitleCase(s)}</h6>
              <div className='flex w-2/3 flex-wrap'>
                {
                  (profileData.skills as any)[s].map((v: string) => (
                    <p className="cursor-pointer text-sm pb-1 pt-1 pl-2 pr-2 rounded-full hover:bg-yellow-400  bg-gray-300 mr-2 mb-1 text-gray-600 italic transition-colors">{v}</p>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className='mb-4 px-5 md:px-1'>
        <h1 className="font-bold text-gray-900 mb-1">Courses/Assessments</h1>
        {
          profileData.certifications?.map((c) => (
            <div className='mb-3 flex justify-between'>
              <div className='w-2/3 flex flex-wrap'>
                <h6 className="text-black-900 mb-1 mr-4">{c.name}</h6>
                <p className="text-sm text-gray-500 italic">{c.issuedBy}</p>
              </div>
              <div className='w-1/3'>
                <a href={c.verificationURL} className="float-right mr-2 text-sm bg-gray-700 hover:bg-gray-900 text-white pl-5 pr-4 py-1 rounded-full transition-colors">
                  <button>
                    Visit
                    <MdChevronRight className="inline ml-2 -mt-1" />
                  </button>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Course