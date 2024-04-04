import { Airplay } from "lucide-react";
import HeroSection from "../landing/hero-section";

const skillset = [
  {
    icon: <Airplay />,
    name: "Reactjs",
  },

  {
    icon: <Airplay />,
    name: "Reactjs",
  },

  {
    icon: <Airplay />,
    name: "Reactjs",
  },

  {
    icon: <Airplay />,
    name: "Reactjs",
  },

  {
    icon: <Airplay />,
    name: "Reactjs",
  },

  {
    icon: <Airplay />,
    name: "Reactjs",
  },
];

const SkillSection = () => {
  return (
    <ul className="flex gap-6">
      {skillset.map((skills, index) => (
        <li className="flex flex-col justify-center items-center" key={index}>
          <div className="flex flex-col">{skills.icon}</div>
          <div className="flex ">{skills.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default SkillSection;
