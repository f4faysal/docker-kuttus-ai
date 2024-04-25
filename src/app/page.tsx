import Home from "@/components/global/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | kuttusAi",
  description: "kuttus Ai is a web app that allows you to shorten URLs.",
};

export default function Root() {
  return <Home />;
}
