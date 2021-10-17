import React from 'react'
import getProfileData from "../data";
import { MdChevronRight } from "react-icons/md";

function Experiences() {
  const profileData = getProfileData();
  return (
    <div>
      {
        profileData.experiences?.map((p) => (
          <div className="relative pb-5 grid lg:grid-cols-5 px-5 md:px-1 border-l border-solid border-gray-200">
            <div className="w-2 h-2 bg-gray-200 rounded-full absolute top-2 -ml-1 left-0"></div>
            <div className="pl-5">
              <h1 className="text-gray-900">{p.position}</h1>
              <p className="text-sm text-gray-500 italic">{p.companyName}</p>
              <p className="text-xs text-gray-500 mb-3">{p.startDate} - {p.endDate}</p>
            </div>
            <div className="pl-5 lg:col-span-3 mb-3">
              <p className="text-gray-500 text-sm">{p.summary}</p>
            </div>
            <div className="pl-5 lg:text-center">
              <a href={p.website} className="text-sm bg-gray-700 hover:bg-gray-900 text-white pl-5 pr-4 py-1 rounded-full transition-colors">
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
  )
}

export default Experiences
