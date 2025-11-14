import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const AddData = () => {
  const [newValue, setNewValue] = useState("");

  const addRef = useRef();

  const addTodo = async () => {
    try {
      await axios.post("http://localhost:8080/api/todox", {
        name: newValue,
      });

      setNewValue("");
      addRef.current.focus();
    } catch (error) {
      console.error("Them that bai: ", error);
      toast.error("Them that bai");
    }
  };

  return (
    <Card className="p-6">
      <div className="p-4 gap-3 flex items-center">
        <Input
          ref={addRef}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              addTodo();
            }
          }}
          className="border h-12"
          type="text"
          placeholder="Nhập gì đó cần làm..."
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />

        <Button
          onClick={addTodo}
          variant="outline"
          className="h-12 bg-amber-200 cursor-pointer"
        >
          <Plus />
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddData;
