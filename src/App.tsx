import getProfileData from "./data";
import { BiLock } from "react-icons/bi";
import avatar from "./assets/avatar.png";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import routesList from './routes';

function App() {
  const profileData = getProfileData();
  const routes = routesList.getRoutes();
  
  if (profileData) {
    return (
      <div className="relative">
        <div className="w-full overflow-hidden hidden md:block lg:block" style={{ height: "200px" }}>
          <img src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1129&q=80" alt="Cover" className="h-full w-full object-cover" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="md:p-10 lg:p-10">
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
          <div className="lg:col-span-3 relative">
            <Topbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/projects" />;
                }}
              />
              <Route
                exact
                path="/v2"
                render={() => {
                  return <Redirect to="/projects" />;
                }}
              />
              {
               routes.map((r) => (
                 <Route path={r.path}>{r.component}</Route>
               ))
              }
            </Switch>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default App;
