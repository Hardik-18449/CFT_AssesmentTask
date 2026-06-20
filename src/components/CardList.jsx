
import { usePost } from "../context/PostContext";
import "./CardList.css";
import Card from "./Cards";

function CardList({ currentPage }) {
  const { posts, removePost } = usePost();

  const cardsPerPage = 6;

  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentCards = posts.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="card-grid">
      {currentCards.map((post) => (
        <Card
          key={post.id}
          post={post}
          removePost={removePost}
        />
      ))}
    </div>
  );
}

export default CardList;