import Course from "./components/course";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const routes = [
  {
    name: "Projects",
    path: "/v2/projects",
    component: <Projects />
  },
  {
    name: "Experience",
    path: "/v2/experience",
    component: <Experiences />
  },
  {
    name: "Certifications",
    path: "/v2/certifications",
    component: <Course />
  },
  {
    name: "Skills",
    path: "/v2/skills",
    component: <Projects />
  },
];

export default {
  getRoutes: () => {
    return routes;
  }
}