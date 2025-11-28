import { useState } from "react";
import "../styles/sections/Skills.css";
import SkillTooltip from "../components/feedback/Tooltips/SkillTooltip";
import useScrollAnimation from "../hooks/useScrollAnimation";

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
import flutterIcon from "../assets/Flutter-Light.svg";
import post from "../assets/PostgreSQL-Light.svg";

const categories = ["전체", "프론트엔드", "백엔드", "디자인", "배포·협업"];

const skills = [
  // 프론트엔드
  { name: "HTML", icon: HTMLIcon, category: "프론트엔드" },
  { name: "CSS", icon: CSSIcon, category: "프론트엔드" },
  { name: "JavaScript", icon: JavaScriptIcon, category: "프론트엔드" },
  { name: "React", icon: ReactLightIcon, category: "프론트엔드" },
  { name: "Vite", icon: ViteIcon, category: "프론트엔드" },
  { name: "Flutter", icon: flutterIcon, category: "프론트엔드" },

  // 백엔드
  { name: "Java", icon: JavaIcon, category: "백엔드" },
  { name: "Python", icon: PythonIcon, category: "백엔드" },
  { name: "C", icon: CIcon, category: "백엔드" },
  { name: "Supabase", icon: SupabaseIcon, category: "백엔드" },
  { name: "PostgreSQL", icon: post, category: "백엔드" },

  // 디자인
  { name: "Figma", icon: FigmaIcon, category: "디자인" },
  { name: "Illustrator", icon: IllustratorIcon, category: "디자인" },
  { name: "Photoshop", icon: PhotoshopIcon, category: "디자인" },

  // 배포 & 협업
  { name: "GitHub", icon: GithubIcon, category: "배포·협업" },
];

/* 📌 컴포넌트 */
export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section className="skills-section" id="skills">
      <div
        ref={titleRef}
        className={`scroll-animate ${titleVisible ? "visible" : ""}`}
      >
        <h1 className="skills-title">기술 스택 & 도구</h1>
        <p>
          학습 과정과 프로젝트에서 직접 사용해본 기술들입니다.<br></br>
          <br />각 기술의 기본 원리를 이해하고, 간단한 기능 구현에 활용할 수
          있습니다.
        </p>
      </div>
      {/* 카테고리 버튼 */}
      <div className="skills-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`skills-tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* 스킬 카드 그리드 */}
      <div
        ref={gridRef}
        className={`skills-grid scroll-animate-scale ${gridVisible ? "visible" : ""}`}
      >
        {skills.map((skill, idx) => {
          const isActive =
            selectedCategory === "전체" || selectedCategory === skill.category;
          const tooltipProps = isActive
            ? {
                "data-tooltip-id": "skill-tooltip",
                "data-tooltip-content": skill.name,
              }
            : {};

          return (
            <div
              key={idx}
              className={`skill-card ${isActive ? "" : "fade-out"}`}
              {...tooltipProps}
            >
              <img className="skill-icon" src={skill.icon} alt={skill.name} />
              {/* <span className="skill-name">{skill.name}</span> */}
            </div>
          );
        })}
      </div>

      <SkillTooltip id="skill-tooltip" place="bottom" offset={12} />
    </section>
  );
}
