import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface Hijri {
  date: string
  format: string
  day: string
  weekday: Weekday
  month: Month
  year: string
  designation: Designation
  holidays: any[]
  adjustedHolidays: any[]
  method: string
}

export interface Weekday {
  en: string
  ar: string
}

export interface Month {
  number: number
  en: string
  ar: string
  days: number
}

export interface Designation {
  abbreviated: string
  expanded: string
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

  const response = await fetch(apiUrl); 

  const data = await response.json();
  return data.data.hijri as Hijri;
}
