import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilson Tunggala | Data Science & Engineering",
  description: "Wilson Pranajaya Tunggala — Data Science student at BINUS University. Explore streaming pipelines, machine learning projects, research, and cloud deployment.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
