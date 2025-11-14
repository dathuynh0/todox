import AddData from "@/components/AddData";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import TodoPagination from "@/components/TodoPagination";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [listTodo, setListTodo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTodo();
  }, [listTodo]);

  //goi api
  const fetchTodo = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/todox");
      setListTodo(data.data);
    } catch (error) {
      console.error("Lỗi khi gọi api, ", error);
    }
  };

  const itemPerPage = 4;
  const totalPage = Math.ceil(listTodo.length / itemPerPage);

  const showTodoX = () => {
    const indexStart = (currentPage - 1) * itemPerPage;
    const indexEnd = indexStart + itemPerPage;
    return listTodo.slice(indexStart, indexEnd);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto">
      <div className="w-full h-screen flex flex-col justify-center max-w-2xl mx-auto space-y-6">
        <Header />
        <AddData />
        <TodoList filteredTodo={showTodoX()} />
        <TodoPagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default HomePage;
