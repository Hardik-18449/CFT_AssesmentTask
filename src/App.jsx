import { useState } from "react";
import CardList from "./components/CardList";
import Pagination from "./components/Pagination";
import { usePost } from "./context/PostContext"


function App() {
  const { loading } = usePost();

  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Posts</h1>

      <CardList currentPage={currentPage} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;