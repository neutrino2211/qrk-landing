import type { PropsWithChildren } from "react";

export function Headshot({
  imageSrc,
  children,
  name,
}: { imageSrc: string; name: string } & PropsWithChildren) {
  return (
    <div className="w-full py-4 md:flex md:justify-between">
      <div className="block border-b-2 p-4 md:inline md:border-r-2 md:border-b-0">
        <img src={imageSrc} className="h-48 min-w-48" />
      </div>
      <br />
      <div className="block p-4 md:inline">
        <h1 className="pb-2 text-2xl font-bold">{name}</h1>
        {children}
      </div>
    </div>
  );
}
