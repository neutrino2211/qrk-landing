import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
  method: string;
}

export interface Weekday {
  en: string;
  ar: string;
}

export interface Month {
  number: number;
  en: string;
  ar: string;
  days: number;
}

export interface Designation {
  abbreviated: string;
  expanded: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getHijriDate(date: Date) {
  const day = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const apiUrl = `https://api.aladhan.com/v1/gToH/${day.split("/").join("-")}?calendarMethod=HJCoSA`;

  try {
    const response = await fetch(apiUrl);

    const data = (await response.json()) as { data: { hijri: Hijri } };
    return data.data.hijri;
  } catch (error) {
    console.error("Error fetching hijri date:", error);
    return null;
  }
}
