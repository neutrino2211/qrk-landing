import type { PropsWithChildren } from "react";

export function Headshot({
  imageSrc,
  children,
  name,
}: { imageSrc: string; name: string } & PropsWithChildren) {
  return (
    <div className="flex w-full justify-between py-4">
      <div className="inline border-b-2 p-4 md:border-r-2 md:border-b-0">
        <img src={imageSrc} className="h-48 min-w-48" />
      </div>
      <div className="inline p-4">
        <h1 className="pb-2 text-2xl font-bold">{name}</h1>
        {children}
      </div>
    </div>
  );
}
