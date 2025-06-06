import CursorFollow from "@/components/cursor-follow";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <>
      <CursorFollow/>
      <div className="my-auto w-full mt-[40vh]">
        <h1 className="text-8xl my-4 text-center leading-tight">LIBERATE THE HUMAN</h1>
      </div>
    </>
  );
}