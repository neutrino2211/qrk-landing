import MissionStatement from "@/content/mission.mdx";

export default async function TeamPage() {
  return (
    <>
      <div className="container mx-auto mt-16">
        <div className="pt-24">
          <h1 className="mb-4 text-4xl font-light md:text-6xl">WHO ARE WE?</h1>
          <MissionStatement />
        </div>
      </div>
    </>
  );
}
