import Course from "./components/course";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const routes = [
  {
    name: "Projects",
    path: "/projects",
    component: <Projects />
  },
  {
    name: "Experience",
    path: "/experience",
    component: <Experiences />
  },
  {
    name: "Certifications",
    path: "/certifications",
    component: <Course />
  },
  {
    name: "Skills",
    path: "/skills",
    component: <Projects />
  },
];

export default {
  getRoutes: () => {
    return routes;
  }
}