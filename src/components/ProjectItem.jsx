import { Link } from "react-router-dom";
import CIcon from "../assets/C.svg";
import CSSIcon from "../assets/CSS.svg";
import FigmaIcon from "../assets/Figma.svg";
import GithubIcon from "../assets/Github-Light.svg";
import HTMLIcon from "../assets/HTML.svg";
import JavaIcon from "../assets/Java-Dark.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import PythonIcon from "../assets/Python-Light.svg";
import ReactLightIcon from "../assets/React-Light.svg";
import SupabaseIcon from "../assets/Supabase-Dark.svg";
import ViteIcon from "../assets/Vite-Light.svg";
import IllustratorIcon from "../assets/Illustrator.svg";
import PhotoshopIcon from "../assets/Photoshop.svg";
import FlutterIcon from "../assets/Flutter-Light.svg";

const stackIconMap = {
  React: ReactLightIcon,
  Vite: ViteIcon,
  Supabase: SupabaseIcon,
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  Java: JavaIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  C: CIcon,
  Figma: FigmaIcon,
  Illustrator: IllustratorIcon,
  Photoshop: PhotoshopIcon,
  GitHub: GithubIcon,
  Flutter: FlutterIcon,
};

export default function ProjectItem({
  id,
  tittle,
  intent,
  period,
  role,
  goal,
  feachers,
  stack,
  image,
}) {
  return (
    <Link to={`/project/${id}`} className="project-card-link">
      <article className="project-card">
        {image && (
          <img
            src={image}
            alt={`${tittle} 미리보기`}
            className="project-image"
            loading="lazy"
          />
        )}
        <h2>{tittle}</h2>
        <p style={{ color: "gray" }}>{intent}</p>

        <p style={{ color: "gray", fontSize: "12px" }}>{period}</p>

        {Array.isArray(stack) && stack.length > 0 ? (
          <ul className="project-stack">
            {stack.map((tech, idx) => {
              const normalizedTech = typeof tech === "string" ? tech.trim() : "";
              const iconSrc = stackIconMap[normalizedTech];

              if (!iconSrc) {
                return (
                  <li
                    className="project-stack-item project-stack-text"
                    key={`${normalizedTech || "stack"}-${idx}`}
                    aria-label={normalizedTech}
                  >
                    {normalizedTech || "-"}
                  </li>
                );
              }

              return (
                <li className="project-stack-item" key={`${normalizedTech}-${idx}`}>
                  <img
                    src={iconSrc}
                    alt={`${normalizedTech} 아이콘`}
                    aria-hidden="true"
                    className="project-stack-icon"
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>-</p>
        )}
      </article>
    </Link>
  );
}
