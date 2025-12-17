import CursorFollow from "@/components/cursor-follow";

export default function HomePage() {
  return (
    <>
      <CursorFollow />
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-fade-in-scale text-center space-y-8 px-4">
          <h1 className="text-6xl font-light tracking-tight leading-tight md:text-8xl lg:text-9xl">
            LIBERATE THE HUMAN
          </h1>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
