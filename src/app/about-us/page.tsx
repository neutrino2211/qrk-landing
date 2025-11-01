import MissionStatement from "@/content/mission.mdx";

export default function TeamPage() {
  return (
    <>
      <div className="container mx-auto my-auto mt-16">
        <div className="pt-24">
          <h1 className="mb-16 text-center text-6xl font-light md:text-8xl">
            WHO ARE WE?
          </h1>
          <MissionStatement />
        </div>
      </div>
    </>
  );
}
