import getProfileData from "./data";
import { BiLock } from "react-icons/bi";
import avatar from "./assets/avatar.png";
import cover from "./assets/cover.png";
function App() {
  const profileData = getProfileData();

  // const projectImages = [
  //   "https://images.unsplash.com/photo-1581345331996-2496ba69a92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80",
  //   "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  //   "https://images.unsplash.com/photo-1577084381380-3b9ea4153664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
  //   "https://images.unsplash.com/photo-1577083165350-16c9f88b4a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80",
  //   "https://images.unsplash.com/photo-1613947327443-5e7ba688df4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  // ];

  // const getRandomIntInclusive = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };
if(profileData){
  return (
    <div>
      <div className="w-full overflow-hidden hidden md:block lg:block" style={{height: "200px"}}>
        <img src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1129&q=80" alt="Cover" className="h-full w-full object-cover" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative md:p-10 lg:p-10">
          <div className="p-5 sticky top-0 left-0 md:-mt-32 lg:-mt-32 bg-white rounded md:shadow lg:shadow">
            <div className="text-center">
              <img
                src={avatar}
                alt="avatar"
                className="mb-2 rounded-full w-20 h-20 object-cover mx-auto"
              />
              <p className="text-xl font-bold pb-2">{profileData.name}</p>
              <p className="text-sm italic text-gray-600 pb-5">
                {profileData.intro}
              </p>
              <p className="text-sm mb-5">{profileData.bio}</p>
              <p className="text-sm text-gray-500 mb-5">
                {profileData.location}
              </p>
              {/* <button className="bg-gray-600 hover:bg-gray-800 transition-colors w-full rounded-full text-white h-10 my-1">
                <span className="font-medium">LinkedIn</span>
              </button> */}
              <a href={`mailto:${profileData.email}`}>
                <button className="bg-gray-100 hover:bg-gray-200 transition-colors w-full rounded-full text-gray-600 h-10 my-1">
                  <span className="font-medium">Say Hi 👋🏼</span>
                </button>
              </a>
            </div>
            <div className="text-sm py-5 text-gray-500 mb-5">
              <div className="flex">
                <p className="w-1/2 text-left">Students</p>
                <p className="w-1/2 text-right">
                  {profileData.students?.length}
                </p>
              </div>
              <div className="flex">
                <p className="w-1/2 text-left">Projects</p>
                <p className="w-1/2 text-right">
                  {profileData.projects?.length}
                </p>
              </div>
              <div className="flex">
                <p className="w-1/2 text-left">Cources</p>
                <p className="w-1/2 text-right">
                  {profileData.certifications?.length}
                </p>
              </div>
              <div className="flex">
                <p className="w-1/2 text-left">Honors & Awards</p>
                <p className="w-1/2 text-right">{profileData.awards.length}</p>
              </div>
            </div>
            <div className="flex justify-between">
              {profileData.socials.map((social) => (
                <a href={social.url}>
                  <button className="my-1 text-gray-500">
                    <span>{social.icon}</span>
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3 relative">
          <header className="text-gray-600 body-font sticky top-0 bg-white bg-opacity-80 z-50">
            <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
              <nav className="flex flex-wrap items-center text-base">
                <a
                  href="http://shahzadafahad.com"
                  className="font-bold mr-5 text-sm bg-black text-white px-2 py-1 transition-colors rounded-full"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="font-bold mr-5 text-sm hover:bg-black hover:text-white px-2 py-1 transition-colors rounded-full"
                >
                  Experience
                  <BiLock className="inline -mt-1 ml-2" />
                </a>
                <a
                  href="#"
                  className="font-bold mr-5 text-sm hover:bg-black hover:text-white px-2 py-1 transition-colors rounded-full"
                >
                  Certifications
                  <BiLock className="inline -mt-1 ml-2" />
                </a>
                <a
                  href="#"
                  className="font-bold mr-5 text-sm hover:bg-black hover:text-white px-2 py-1 transition-colors rounded-full"
                >
                  Skills
                  <BiLock className="inline -mt-1 ml-2" />
                </a>
              </nav>
            </div>
          </header>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                {profileData.projects?.map((project, index) => (
                  <div className="w-full md:w-full lg:w-1/3 p-5">
                    <div className="relative">
                      <div
                        className={`bg-gradient-to-t from-gray-800 hover:from-gray-900 via-transparent to-transparent text-white w-full h-full absolute transition-colors cursor-pointer`}
                      >
                        <div className="absolute bottom-4 left-4">
                          <h1 className="font-bold text-sm">{project.name}</h1>
                          <p className="text-sm">{project.companyName}</p>
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              className={`mr-2 text-xs text-gray-300 font-bold`}
                            >
                              {tagIndex !== 0 && project.tags.length > 0 && (
                                <span className="mr-2">{"/"}</span>
                              )}
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img
                        className="h-52 w-full object-cover rounded"
                        src={project.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
return <></>;
}

export default App;
