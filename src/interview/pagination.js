import React, { useEffect, useState } from "react";

function Pagination() {
  const styles = {
    active: {
      color: "blue",
      fontSize: "30px",
    },
    default: {
      color: "black",
      fontSize: "16px",
    },
  };
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const noOfTotalPages = Math.ceil(todos.length / todosPerPage);
  console.log(noOfTotalPages);
  const pages = [...Array(noOfTotalPages + 1).keys()].slice(1);
  console.log(pages);
  const lastIndexTodo = currentPage * todosPerPage;
  const firstIndexTodo = lastIndexTodo - todosPerPage;
  const visibleTodos = todos.slice(firstIndexTodo, lastIndexTodo);
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    };
    fetching();
  }, []);
  const prevpagehandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextpageHandler = () => {
    if (currentPage !== noOfTotalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <select onClick={(e) => setTodosPerPage(e.target.value)}>
        <option value={10}>10</option> <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={60}>60</option>
      </select>
      {visibleTodos.map((todo) => {
        return <h3>{todo.title}</h3>;
      })}
      <span onClick={prevpagehandler}>Prev</span>
      {pages.map((page) => {
        return (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            style={currentPage == page ? styles.active : styles.default}
          >{`${page} | `}</span>
        );
      })}
      <span onClick={nextpageHandler}>Next</span>
    </div>
  );
}

export default Pagination;
