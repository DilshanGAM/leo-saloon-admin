import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[750px] h-[750px] bg-pink-500 relative">
      <div className="w-[650px] h-[650px] bg-yellow-500 flex justify-center items-center">
        
        <div className="w-[120px] h-[120px] bg-red-500 " > </div>
        <div className="w-[120px] h-[120px] bg-blue-500" > </div>
        <div className="w-[120px] h-[120px] bg-green-500 fixed bottom-[5px] right-[5px]" > </div>
        <div className="w-[120px] h-[120px] bg-purple-500 absolute bottom-[5px] right-[5px]" > </div>
        <div className="w-[120px] h-[120px] bg-white" > </div>

      </div>
    </div>
  );
}