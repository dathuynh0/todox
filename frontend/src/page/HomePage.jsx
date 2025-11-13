import AddData from "@/components/AddData";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [listTodo, setListTodo] = useState([]);

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

  return (
    <div className="container mx-auto">
      <div className="w-full h-screen flex flex-col justify-center max-w-2xl mx-auto space-y-6">
        <Header />
        <AddData />
        <TodoList filteredTodo={listTodo} />
      </div>
    </div>
  );
};

export default HomePage;
