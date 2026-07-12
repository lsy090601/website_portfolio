import "../styles/sections/Career.css";
import useScrollAnimation from "../hooks/useScrollAnimation";
const StarIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 273 273"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M109.397 15.7707C121.257 -5.25677 151.54 -5.25677 163.4 15.7707L192.918 68.1066C195.696 73.0305 199.766 77.1012 204.69 79.8784L257.026 109.397C278.054 121.257 278.054 151.54 257.026 163.4L204.69 192.918C199.766 195.696 195.696 199.766 192.918 204.69L163.4 257.026C151.54 278.054 121.257 278.054 109.397 257.026L79.8784 204.69C77.1012 199.766 73.0305 195.696 68.1066 192.918L15.7707 163.4C-5.25677 151.54 -5.25677 121.257 15.7707 109.397L68.1066 79.8784C73.0305 77.1012 77.1012 73.0305 79.8784 68.1066L109.397 15.7707Z"
      fill="currentColor"
    />
  </svg>
);

const careerData = [
  {
    period: "2025.12",
    title: "2025 테크폴리오 경진대회 우수상",
    subtitle: "React를 활용한 나만의 포트폴리오 웹사이트 제작",
    description:
      "React를 활용하여 나만의 포트폴리오 웹사이트를 직접 기획하고 개발하여 우수상을 수상했습니다. 단순히 프로젝트를 나열하는 것이 아니라, 나의 성장 과정과 기술 역량을 효과적으로 전달할 수 있도록 UI/UX를 설계하고 GitHub를 통해 배포까지 진행했습니다. 이를 통해 React 기반 프론트엔드 개발 능력과 사용자 중심의 웹 서비스 설계 역량을 한층 성장시킬 수 있었습니다.",
    isAward: true,
  },
  {
    period: "2025.03 -",
    title: "미림마이스터고등학교 재학",
    subtitle: "뉴미디어소프트웨어과 1학년 2반",
    description:
      "프론트엔드 개발자로 성장하기 위해 미림마이스터고에서 기초 프로그래밍부터 실전 프로젝트까지 단계적인 교육을 경험하며, 개발 역량을 탄탄히 다져가고 있습니다.",
    isexp: true,
  },
  {
    period: "2025.03 - 07",
    title: "1-2반 부반장 임명",
    subtitle: "학급 운영 및 소통 담당",
    description:
      "다양한 학급 활동에서 쌓은 리더십 경험을 바탕으로, 학급 행사 준비와 의견 조율, 교사-학생 간 소통을 지원하며 안정적인 학급 분위기 형성과 자율 운영에 기여했습니다.",
    isexp: true,
  },
  {
    period: "2025.03 -",
    title: "전공 자율 동아리 ‘앱앤미’",
    subtitle: "교내·외 공모전 및 실전 프로젝트 중심 동아리 활동",
    description:
      "앱·웹 개발 중심 동아리에서 해커톤, 공모전, 외부 교육 프로그램에 참여하며 실전 개발 역량과 협업 능력을 키웠습니다. 프론트엔드 중심으로 다양한 프로젝트를 직접 기획하고 구현했습니다.",
    isexp: true,
  },
  {
    period: "2025.05 - 06",
    title: "SW 동행 교육 로보틱스 분과 동상",
    subtitle: "UN SDGs 기반 온라인 교육 플랫폼 제작 활동",
    description:
      "SDGs 중 ‘양질의 교육’과 ‘불평등 해소’를 주제로, 교육 접근성이 낮은 지역을 위한 온라인 교육 플랫폼을 기획·제작하며 개발의 사회적 역할을 고민한 의미 있는 프로젝트였습니다.",
    isAward: true,
  },

  {
    period: "2025.04 - 07",
    title: "AI 지니어스 과정 수료",
    subtitle: "생성형 AI 및 파이썬 기초·활용 과정",
    description:
      "프롬프트 엔지니어링, 파이썬 기반 데이터 처리, 생성형 AI 도구 활용을 중심으로 한 3개월 과정 수료. AI 기반 프로젝트 기획 및 기능 설계 경험을 확장했습니다.",
    isexp: true,
  },
  {
    period: "2025.04 - 06",
    title: "ESG SCHOOL 수료",
    subtitle: "음성 인식·자연어 처리 기반 기술 교육",
    description:
      "음성 인식 모델 구조 및 환경 기반 AI의 활용 사례를 학습하며, AI와 지속가능성의 연계성을 경험했습니다.",
    isexp: true,
  },
  {
    period: "2025.05 - 06",
    title: "창업 아이템 경진대회 참가",
    subtitle: "AI 기반 스마트 헬스케어 의자",
    description:
      "센서와 AI를 결합해 사용자의 앉은 자세를 실시간 분석하고 교정해주는 헬스케어 의자를 개발. 문제 분석·아이디어 구체화·UI 설계 등 전반적인 제품 기획 과정을 경험했습니다.",
    isexp: true,
  },
  {
    period: "2025.06",
    title: "창의 아이디어 경진대회 참가",
    subtitle: "원터치 수납형 바퀴 캐리어",
    description:
      "일상에서 느낀 불편을 해결하기 위한 아이디어로, 넓은 수납 구조와 편의성을 확보한 캐리어를 기획하며 생활형 제품 개발 경험을 쌓았습니다.",
    isexp: true,
  },

  {
    period: "2025.07 -",
    title: "소프트웨어 챌린지",
    subtitle: "야생동물 보호 학습 앱 'EcoMong' 개발",
    description:
      "멸종위기 야생동물의 정보를 제공하고, 사용자가 생태 지식을 자연스럽게 학습할 수 있는 앱을 기획하며 UX 구조화 및 UI 흐름 설계를 직접 진행하였습니다.",
    isexp: true,
  },
  {
    period: "2025.08 - 09",
    title: "마음 챙김 공모전",
    subtitle: "청소년 자살 예방 인포그래픽 제작",
    description:
      "청소년 정신건강 문제를 주제로 한 인포그래픽을 직접 제작하여 정보 전달의 시각화 방식과 공공 캠페인 디자인을 경험했습니다.",
    isexp: true,
  },
  {
    period: "2025.08 - 11",
    title: "교내 자바 프로젝트",
    subtitle: "심리 진단 테스트 및 위로 콘텐츠 제공 프로그램 'MindComma' 개발",
    description:
      "자바 기반 심리 테스트 프로그램을 개발하며 파일 입출력, 클래스 설계, 예외 처리 등 객체지향 프로그래밍 기반의 실전 경험을 쌓았습니다.",
    isexp: true,
  },
  {
    period: "2025.10",
    title: "초록우산 감사편지 공모전 장려상",
    isAward: true,
  },

  {
    period: "2025.10.25",
    title: "교내해커톤 2등",
    subtitle: "논리적 말하기 역량 강화를 위한 디지털 웹앱 개발",
    description:
      "디지털세대의 말하기 습관 문제를 해결하기 위한 웹앱을 제작하였으며, 이를 위해 사용자 분석부터 핵심 기능 설계, 정보 구조 구성, UI 디자인 시안 제작, 프론트엔드 구현까지 전 과정에 직접 참여했습니다.",
    isAward: true,
  },
  {
    period: "2025.11",
    title: "LG CNS AI 지니어스 소프트웨어 챌린지 우수상",
    subtitle: "AI 기반 헬멧 착용 감지 안전관리 모델 개선 및 시스템 통합 개발",
    description:
      "YOLO 기반 객체 인식으로 전동 킥보드 이용자의 헬멧 착용 여부를 실시간 감지하는 웹앱을 개발하고, 다양한 환경에서도 안정적인 판별이 가능하도록 모델 성능을 개선했습니다.",
    isAward: true,
  },
  {
    period: "2025.11.03 - 24",
    title: "칭찬 시스템 웹사이트 제작",
    subtitle: "세계여행 콘셉트의 칭찬·마일리지 서비스 개발",
    description:
      "사용자가 ‘여행하듯’ 칭찬을 주고받는 인터랙티브 웹사이트 개발. React 기반 프론트엔드, 국가별 스탬프 시스템 등 감성적 UI/UX 설계에 집중했습니다.",
    // isexp: true,
  },
  {
    period: "2025.11.26",
    title: "동아리 발표회",
    subtitle: "7개월간 준비한 맛집 추천 웹사이트 프로젝트 발표",
    description:
      "React + Supabase 기반 우리만의 맛집을 공유하는 웹사이트를 완성하여 발표. 지도 기반 검색을 포함한 실전형 프로젝트였습니다.",
    // isexp: true,
  },
  {
    period: "2025.09 - 11",
    title: "테크폴리오 경진대회 참여",
    subtitle: "React를 활용한 나만의 웹사이트 포트폴리오 제작",
    description:
      "약 3개월 동안 포트폴리오를 기획하고 제작하며 프로젝트를 체계적으로 정리하는 방법을 익혔습니다. 개발 과정뿐만 아니라 디자인, 사용자 경험, 배포까지 직접 경험하며 하나의 완성도 높은 웹 서비스를 제작하는 과정을 경험했습니다. 또한 자신의 강점과 성장 과정을 효과적으로 표현하는 방법을 고민하며 자기 브랜딩의 중요성도 배울 수 있었습니다.",
    isexp: true,
  },
  {
    period: "2025.11",
    title: "일본 글로벌 인턴쉽 참여",
    subtitle: "일본만의 교육 환경과 IT 문화를 직접 경험하고 교류함",
    description:
      "일본 글로벌 인턴십 프로그램에 참여하여 해외의 교육 환경과 IT 문화를 직접 경험했습니다. 다양한 국적의 학생들과 교류하며 글로벌 협업 능력과 의사소통 역량을 향상시켰으며, 서로 다른 문화와 개발 방식의 차이를 이해하는 뜻깊은 시간을 보냈습니다. 이를 통해 글로벌 개발자로 성장하기 위한 시야를 넓힐 수 있었습니다.",
    isexp: true,
  },
  {
    period: "2026.03 -",
    title: "2026 소프트웨어 챌린지 본선 진출",
    subtitle: "AI와 공공데이터를 활용한 물가 비교 서비스 기획 및 개발",
    description:
      "AI와 공공데이터를 활용한 PriceX 서비스를 기획하여 소프트웨어 챌린지 본선에 진출했습니다. 한국소비자원 참가격 데이터를 기반으로 식재료 가격을 비교하고, AI가 합리적인 구매 시점과 최적의 구매 장소를 추천하는 서비스를 개발하고 있습니다. React Native, FastAPI, PostgreSQL, LLM 등을 활용해 프론트엔드와 백엔드 개발, 서버 배포를 담당하며 실제 소비 문제를 해결하는 AI 기반 서비스를 구현하고 있습니다.",
    isexp: true,
  },
  {
    period: "2026.04 - 07",
    title: "2026 호주 글로벌 1차 사전교육 참여",
    subtitle: "글로벌 사전 교육 참여",
    description:
      "호주 글로벌 프로그램 참가를 위한 사전교육에 참여하여 호주의 문화와 생활 방식, 현지에서 자주 사용하는 영어 표현과 슬랭을 학습했습니다. 또한 다양한 상황을 주제로 영어 대화를 연습하고 팀원들과 함께 상황극 대본을 작성하여 발표하며 실전 의사소통 능력을 향상시켰습니다.",
    isexp: true,
  },
  {
    period: "2026.04.24",
    title: "2026 월드 IT쇼 관람",
    subtitle: "국내 최대 규모의 ICT 전시회인 월드 IT 쇼 관람",
    description:
      "코엑스에서 개최된 국내 최대 규모의 ICT 전시회인 월드 IT 쇼를 관람하며 AI, 로봇, 모빌리티, XR, 클라우드 등 다양한 최신 기술을 직접 체험했습니다. 여러 기업의 기술과 서비스를 살펴보며 앞으로의 IT 산업 트렌드를 이해할 수 있었고, 개발자로서 새로운 아이디어를 얻는 계기가 되었습니다.",
    isexp: true,
  },
  {
    period: "2026.03 - 07",
    title: "2-4반 회장 임명",
    subtitle: "학급 운영 및 소통 담당",
    description:
      "학급 회장으로 활동하며 학급 행사와 다양한 학교 활동을 주도적으로 이끌었습니다. 친구들과 선생님 사이에서 원활한 소통을 담당하며 책임감과 리더십을 기를 수 있었고, 다양한 의견을 조율하고 협업하는 경험을 통해 문제 해결 능력과 의사소통 역량을 향상시켰습니다.",
    isexp: true,
  },
  {
    period: "2026.04 - 07",
    title: "AI 지니어스 과정 수료",
    subtitle: "인공지능 과정 수료",
    description:
      "AI 지니어스 교육과정을 수료하며 인공지능의 기초 개념을 학습했습니다. 다양한 실습을 통해 프로그래밍 역량을 키웠으며, 데이터 처리와 AI 기술이 실제 서비스에 어떻게 활용되는지 이해하는 경험을 쌓았습니다. 이를 바탕으로 AI와 웹 개발을 융합한 프로젝트에 대한 관심도 더욱 커졌습니다.",
    isexp: true,
  },
  {
    period: "2026.06 - 07",
    title: "하인슈타인 참여",
    subtitle: "AI 기반 주거 안전 서비스 'ZIPUP'을 기획",
    description:
      "하인슈타인 프로그램에 참여하여 UN 지속가능발전목표(SDGs)를 학습하고, 사회적 약자의 정보 접근성 향상이라는 주제를 바탕으로 AI 기반 주거 안전 서비스 'ZIPUP'을 기획했습니다. 지방에서 상경한 청소년과 사회초년생이 부동산 계약 과정에서 겪는 정보 격차와 전세사기 위험에 주목하여, AI를 활용해 계약서의 위험 요소를 분석하고 어려운 법률 용어를 쉽게 설명해 주는 서비스를 설계했습니다.\n\n디자인 씽킹을 기반으로 문제를 정의하고 사용자 중심의 해결 방안을 도출하는 과정을 경험했으며, 팀원들과 함께 아이디어를 구체화하여 AI 활용 방식, 핵심 기능, 기술 스택, 사회적 기여 효과까지 포함한 프로젝트 기획서를 작성했습니다. 특히 SDGs 1번(빈곤 퇴치), 10번(불평등 감소), 11번(지속가능한 도시와 공동체)와 연계하여 기술을 통해 사회문제를 해결하는 방법을 고민하며 서비스 기획 역량과 문제 해결 능력을 향상시켰습니다.",
    isexp: true,
  },
];

export default function Career() {
  const awardItems = careerData.filter((item) => item.isAward).reverse();
  const expItems = careerData.filter((item) => item.isexp).reverse();
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: awardRef, isVisible: awardVisible } = useScrollAnimation();
  const { ref: expRef, isVisible: expVisible } = useScrollAnimation();

  return (
    <section className="career-section" id="career">
      <div
        ref={headerRef}
        className={`scroll-animate ${headerVisible ? "visible" : ""}`}
      >
        <div className="career-header">
          <h1 className="career-h1">수상 및 활동</h1>
        </div>
        <div className="career-exp">
          <p>다양한 경험과 프로젝트를 통해 </p>
          <p>매일매일 조금씩 성장하고 있습니다.</p>
        </div>
      </div>
      <div className="career-divider">
        <div className="career-divider-line left" />
        <p className="career-divider-label">수상</p>
        <div className="career-divider-line right" />
      </div>

      <div
        ref={awardRef}
        className={`career-list-wrap scroll-animate ${awardVisible ? "visible" : ""}`}
      >
        <div className="career-list">
          {awardItems.map((item, index) => (
            <div className="career-item" key={index}>
              {/* 왼쪽 날짜 */}
              <div className="career-period">{item.period}</div>

              {/* 오른쪽 내용 */}
              <div className="career-content">
                <h3 className="career-title">{item.title}</h3>
                {item.subtitle && (
                  <p className="career-subtitle">{item.subtitle}</p>
                )}
                <details>
                  <summary className="career-summary">
                    <StarIcon
                      aria-hidden="true"
                      focusable="false"
                      className="career-summary-icon"
                    />
                    <span>자세히 보기</span>
                  </summary>
                  <div className="career-divider-small">
                    {item.description && (
                      <p className="career-description">{item.description}</p>
                    )}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="career-divider">
        <div className="career-divider-line left" />
        <p className="career-divider-label">활동</p>
        <div className="career-divider-line right" />
      </div>

      <div
        ref={expRef}
        className={`career-list-wrap scroll-animate ${expVisible ? "visible" : ""}`}
      >
        <div className="career-list">
          {expItems.map((item, index) => (
            <div className="career-item" key={index}>
              {/* 왼쪽 날짜 */}
              <div className="career-period">{item.period}</div>

              {/* 오른쪽 내용 */}
              <div className="career-content">
                <h3 className="career-title">{item.title}</h3>
                {item.subtitle && (
                  <p className="career-subtitle">{item.subtitle}</p>
                )}
                <details>
                  <summary className="career-summary">
                    <StarIcon
                      aria-hidden="true"
                      focusable="false"
                      className="career-summary-icon"
                    />
                    <span>자세히 보기</span>
                  </summary>
                  <div className="career-divider-small">
                    {item.description && (
                      <p className="career-description">{item.description}</p>
                    )}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
