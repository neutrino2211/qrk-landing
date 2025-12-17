import MissionStatement from "@/content/mission.mdx";

export default async function TeamPage() {
  return (
    <>
      <div className="container mx-auto mt-16 px-4 md:px-8 max-w-5xl">
        <div className="pt-24 pb-16">
          {/* Hero Section */}
          <div className="mb-16 space-y-6">
            <h1 className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
              WHO ARE WE?
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
          </div>

          {/* Mission Statement */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-h3:text-4xl prose-h3:mb-6 prose-h3:mt-12 prose-p:text-xl prose-p:leading-relaxed prose-p:text-foreground/90">
            <MissionStatement />
          </div>

          {/* Core Values */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <h3 className="text-2xl font-light">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pioneering technology solutions that prioritize human experience
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-light">Humanity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bringing back the human element in technology-driven solutions
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-light">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating meaningful change through thoughtful engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
