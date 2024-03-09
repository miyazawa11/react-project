import Image from "next/image";
import EditArea from "./components/EditArea"
import InputArea from "./components/InputArea";
import ResultArea from "./components/ResultArea";
import DetailArea from "./components/DetailArea";

export default function Home() {
  return (
    <div className=" container">
        <InputArea />
      <div className="flex ">
        <EditArea />
        <ResultArea />
        </div>
    </div>
  );
}
