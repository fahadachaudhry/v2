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
    name: "Skills & Courses",
    path: "/v2/skills",
    component: <Course />
  },
];

export default {
  getRoutes: () => {
    return routes;
  }
}