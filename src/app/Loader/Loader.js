import Image from "next/image";
import { loader } from "../../../public/Images/page";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black fixed top-0 left-0 z-[999999]">
      <Image
        src={loader}
        alt="Loading..."
        width={100}
        height={100}
      />
    </div>
  );
}
