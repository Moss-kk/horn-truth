export const site = {
  name: "Horn Truth",
  tagline: "by Yonas Tibebu",
  author: "Yonas Tibebu",
  description:
    "Horn Truth is the writing home of Yonas Tibebu, an Ethiopian writer on the Horn of Africa, the Nile and the Red Sea.",
  shortDescription:
    "Essays and reporting on the Horn of Africa, the Nile and the Red Sea, by Yonas Tibebu.",
  xHandle: "yonast98",
  xUrl: "https://x.com/yonast98",
  supportUrl: "#support",
  locale: "en_US",
  language: "en",
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://horntruth.vercel.app";
}
