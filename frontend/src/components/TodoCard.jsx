import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";

const TodoCard = ({ item }) => {
  const [pen, setPen] = useState(false);
  const [updateTodoName, setUpdateTodoName] = useState(item.name || "");

  //update
  const updateTodo = async () => {
    try {
      setPen(false);
      await axios.put(`http://localhost:8080/api/todox/${item._id}`, {
        name: updateTodoName,
      });
      toast.success(`Tên đã thay đổi thành ${updateTodoName}`);
    } catch (error) {
      console.error("Thay đổi thất bại, ", error);
      toast.error("Sủa thất bại");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      updateTodo();
    }
  };

  // xóa
  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/todox/${item._id}`);
      toast.success("Đã xóa thành công");
    } catch (error) {
      console.error("Xóa thất bại, ", error);
      toast.error("Xóa thất bại");
    }
  };

  const toggleComplete = async () => {
    try {
      if (item.status === "active") {
        await axios.put(`http://localhost:8080/api/todox/${item._id}`, {
          status: "complete",
        });
        toast.success("Chinh sua thanh cong");
      }
    } catch (error) {
      console.error("Chinh sua thất bại, ", error);
      toast.error("Chinh sua thất bại");
    }
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-400 rounded-2xl flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={() => {
            toggleComplete();
          }}
          variant="ghost"
          size="icon"
          className={`border border-black rounded-full cursor-pointer ${
            item.status === "complete" ? "bg-white" : ""
          }`}
        ></Button>

        <div>
          {pen ? (
            <Input
              type="text"
              placeholder="Nhập dữ liệu cần chỉnh sửa"
              className="text-white"
              value={updateTodoName}
              onChange={(e) => setUpdateTodoName(e.target.value)}
              onBlur={() => {
                setPen(false);
                setUpdateTodoName(item.name);
              }}
              onKeyPress={handleKeyPress}
            />
          ) : (
            <h3
              className={`text-xl text-white ${
                item.status === "complete" ? "line-through" : ""
              }`}
            >
              {item.name}
            </h3>
          )}
          <span
            className={`text-sm text-white ${
              item.status === "complete" ? "line-through" : ""
            }`}
          >
            {item.status}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => {
            setPen(!pen);
            setUpdateTodoName(item.name);
          }}
          variant="outline"
          size="icon"
          className="text-red-500 bg-white cursor-pointer"
        >
          <Pen />
        </Button>
        <Button
          onClick={deleteTodo}
          variant="outline"
          size="icon"
          className="text-black bg-white cursor-pointer"
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
