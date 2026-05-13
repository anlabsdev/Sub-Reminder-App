import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DownloadRouter } from "@/components/DownloadRouter";

export const metadata: Metadata = {
  title: "Download SubReminder",
  description:
    "Download SubReminder for Android from Google Play or scan the QR code from desktop.",
};

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main className="download-page-main">
        <DownloadRouter />
      </main>
      <Footer />
    </>
  );
}
