import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_DB);
    console.log("Ket noi voi CSDL thanh cong");
  } catch (error) {
    console.error("Loi khi ket noi voi CSDL");
    process.exit(1);
  }
};

export default connectionDB;
