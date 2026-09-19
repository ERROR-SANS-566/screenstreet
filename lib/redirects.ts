// config/redirects.ts
import type { NextConfig } from "next";

export const redirects: NonNullable<NextConfig["redirects"]> = async () => {
  return [
    {
      source: "/",
      destination: "/ru",
      permanent: false,
    },
  ];
};