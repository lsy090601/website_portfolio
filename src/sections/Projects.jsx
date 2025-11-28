import "../styles/sections/Project.css";

import Masonry from "react-masonry-css";
import useScrollAnimation from "../hooks/useScrollAnimation";

import Rogram from "../assets/ro_sam.png";
import Tr from "../assets/tr_sam.png";
import MindComma from "../assets/mc_sam.png";
import EcoMong from "../assets/Eco_sam.png";
import Mz from "../assets/mz.png";
import StampMarble from "../assets/SM_sam.png";
import M4Eat from "../assets/m4_sam.png";
import respeak from "../assets/re_sam.png";
import sra from "../assets/sra_sam.png";
import ProjectItem from "../components/ProjectItem";
import info from "../assets/Frame 2.jpg";


export default function Projects() {
  const projects = [
  {
    id: 1,
    tittle: "로그램 (ROGRAM)",
    intent: "온라인 로봇 제어 학습 플랫폼",
    period: "2025.05 (약 1개월)",
    role: "3인 팀 / 기획 및 발표",
    goal: "교육 격차 해소를 위한 온라인 로봇 실습 교육 플랫폼 개발",
    feachers:
      "멀티스레드 기반 로봇 제어 / 센서 데이터 실시간 처리 / 예제 코드 제공",
    stack: ["React"],
    image: Rogram,
  },
  {
    id: 2,
    tittle: "포스처온 (Postureon)",
    intent: "자세 분석 기반 스마트 헬스케어 의자",
    period: "2025.05 - 06 (약 2개월)",
    role: "1인 팀 / 기획 및 자료 조사",
    goal: "센서 기반 실시간 자세 교정 및 AI 건강 관리 기능 설계",
    feachers:
      "무게·각도 센서 기반 자세 분석 / AI 교정 알림 / 앱 연동 스트레칭 기능",
  },
  {
    id: 3,
    tittle: "원터치 수납형 캐리어",
    intent: "실사용 문제를 해결한 스마트 캐리어",
    period: "2025.05 - 06 (약 2개월)",
    role: "2인 팀 / 제품 기획·구조 설계",
    goal: "수하물 파손 및 불편 개선을 위한 실용적 캐리어 구조 설계",
    feachers:
      "원터치 바퀴 수납 / 무게 센서 내장 / 직관적 디스플레이 UI 설계"
  },
  {
    id: 4,
    tittle: "타래 (Tarae)",
    intent: "음성 기반 택시 호출 서비스",
    period: "2025.07.30 - 31",
    role: "3인 팀 / 기획 및 데이터 수집",
    goal: "고령자·디지털 소외 계층의 이동권 보장을 위한 앱 개발",
    feachers:
      "음성 인식 호출 / 지도 기반 위치 인식 / 직관적 UX 설계",
    stack: ["Flutter"],
    image: Tr,
  },
  {
    id: 5,
    tittle: "MindComma",
    intent: "청소년 감정 자가진단 프로그램",
    period: "2025.08 - 11",
    role: "1인 팀 / 기획 및 개발",
    goal: "청소년의 감정을 데이터 기반으로 진단하고 위로 제공",
    feachers:
      "설문 기반 감정 분석 / 위험 감정 자동 감지 / 위로 메시지 제공",
    stack: ["Java"],
    image: MindComma,
  },
  {
    id: 6,
    tittle: "EcoMong",
    intent: "환경 학습 & 생태 게이미피케이션 서비스",
    period: "2025.07",
    role: "2인 팀 / 기획 및 발표",
    goal: "생활 속 생태계를 이해하고 친환경 습관 형성",
    feachers:
      "위치 기반 생태 탐색 / 캐릭터 수집 / 동물 종 분석 AI",
    stack: ["React"],
    image: EcoMong,
  },
  {
    id: 7,
    tittle: "청소년 자살예방 인포그래픽",
    intent: "데이터 기반 마음 건강 시각화 프로젝트",
    period: "2025.08 - 09",
    role: "2인 팀 / 기획 및 디자인",
    goal: "청소년의 마음 인식 개선 및 도움 요청 장려",
    feachers:
      "데이터 시각화 / 통계 기반 메시지 구성 / 감정 인지 인포그래픽",
    stack: ["Figma", "Illustrator"],
    image: info,
  },
  {
    id: 8,
    tittle: "맛집지도 MZ",
    intent: "취향 기반 맛집 공유 웹서비스",
    period: "2025.04 - 11",
    role: "7인 팀 / 프론트엔드 및 기획",
    goal: "실제 배포 가능한 풀스택 맛집 웹앱",
    feachers:
      "필터링 / 맛집 등록 / 리뷰 작성 / 위치 기반 탐색",
    stack: ["React", "Supabase", "Vite"],
    image: Mz,
  },
  {
    id: 9,
    tittle: "M4Eat",
    intent: "상황별 추천 기반 맛집 검색 웹앱",
    period: "2025.06 - 진행중",
    role: "3인 팀 / 풀스택 개발",
    goal: "일상 속 쉽게 맛집을 찾는 웹앱 제공",
    feachers:
      "날씨·날짜 기반 메뉴 추천 / 위치 기반 탐색 / 영수증 리뷰 인증",
    stack: ["React", "Supabase", "PostgreSQL"],
    image: M4Eat,
  },
  {
    id: 10,
    tittle: "Stamp Marble",
    intent: "칭찬 기반 세계여행 게이미피케이션",
    period: "2025.10 - 11",
    role: "5인 팀 / 기획",
    goal: "도장을 통한 긍정적 행동 강화 시스템 구축",
    feachers:
      "도장 발급 / 대륙·국가 패스포트 / 마일리지 국가 해금",
    stack: ["React", "Supabase"],
    image: StampMarble,
  },
  {
    id: 11,
    tittle: "SRA (Safe Ride AI)",
    intent: "AI 기반 헬멧 착용 감지 시스템",
    period: "2025.08 - 11",
    role: "4인 팀 / 기획 및 FE 보조",
    goal: "전동 킥보드 안전 강화를 위한 AI 감지 솔루션",
    feachers:
      "얼굴 인식 / 헬멧 감지 / 면허증 확인 / QR 기반 인증",
    stack: ["HTML", "javaScript", "Python"],
    image: sra,
  },
  {
    id: 12,
    tittle: "RE:Speak",
    intent: "사용자가 즐기면서 논리성을 성장시킬 수 있는 토론 앱",
    period: "2025.10.30 - 31",
    role: "5인팀 / 기획 및 프론트엔드",
    goal: "토론을 통한 논리적 사고력 향상",
    feachers:
      "AI 토론 분석 / 레벨 시스템 / 실시간 매칭 / 음성 인식 STT",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

  const breakpointColumns = {
    default: 3,
    1387: 2,
    907: 1,
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section className="career-section" id="career">
      <div
        ref={headerRef}
        className={`scroll-animate ${headerVisible ? "visible" : ""}`}
      >
        <div className="career-header">
          <h1 className="career-h1">프로젝트</h1>
        </div>
        <div className="career-exp">
          <p>화면을 설계하는 단계부터, 기능 구현·테스트·배포까지 </p>
          <p>모든 과정을 직접 경험하며 실전 개발 역량을 다지고 있습니다.</p>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>

      <div
        ref={gridRef}
        className={`scroll-animate-scale ${gridVisible ? "visible" : ""}`}
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className="project-masonry"
          columnClassName="project-masonry-column"
        >
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              tittle={project.tittle}
              intent={project.intent}
              period={project.period}
              role={project.role}
              goal={project.goal}
              feachers={project.feachers}
              stack={project.stack}
              image={project.image}
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
}
