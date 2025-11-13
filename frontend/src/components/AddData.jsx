import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

const AddData = () => {
  return (
    <Card className="p-6">
      <div className="p-4 gap-3 flex items-center">
        <Input
          className="border h-12 text-base"
          type="text"
          placeholder="Nhập gì đó cần làm..."
        />

        <Button variant="outline" className="h-12 bg-amber-200 cursor-pointer">
          <Plus />
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddData;
