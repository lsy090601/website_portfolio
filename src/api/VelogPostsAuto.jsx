import { useVelogPosts } from "./useVelogPosts";
import Masonry from "react-masonry-css";
import VelogItem from "../components/VelogItem";
import "../components/VelogItem.css"; // 스타일 확실하게 적용

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

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

export default function VelogPostsAuto() {
  const { pageItems, loading, error, page, totalPages, nextPage } = useVelogPosts(10);

  if (loading) return <p>불러오는 중...</p>;
  if (error)
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>블로그 로드 실패: {error}</p>
        <p>
          배포환경에서 RSS 프록시가 차단될 수 있어 빌드 시 데이터를 생성중입니다. 잠시 후 새로고침해주세요.
        </p>
        <a
          href="https://velog.io/@int_1sy/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="more-velog"
        >
          벨로그 바로가기
        </a>
      </div>
    );
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="project-masonry"
        columnClassName="project-masonry-column"
      >
        {pageItems.map((post) => (
          <VelogItem
            key={post.url}
            title={post.title}
            intent={post.description}
            period={post.date}
            image={post.thumbnail}
            url={post.url}
          />
        ))}
      </Masonry>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a
          href="https://velog.io/@int_1sy/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="more-velog"
        >
          <StarIcon aria-hidden="true" focusable="false" className="icon" />
          벨로그 더 보러 가기
          <StarIcon aria-hidden="true" focusable="false" className="icon" />
        </a>
      </div>
    </>
  );
}
