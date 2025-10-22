import CursorFollow from "@/components/cursor-follow";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <>
      <CursorFollow />
      <div className="my-auto mt-[40vh] w-full">
        <h1 className="my-4 text-center text-6xl leading-tight md:text-8xl">
          LIBERATE THE HUMAN
        </h1>
      </div>
    </>
  );
}
