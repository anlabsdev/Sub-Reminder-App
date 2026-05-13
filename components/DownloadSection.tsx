import Image from "next/image";
import Link from "next/link";
import { QrCode, ScanLine } from "lucide-react";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { siteConfig } from "@/lib/site-config";

export function DownloadSection() {
  return (
    <section
      className="section download-section"
      id="download"
      aria-labelledby="download-title"
    >
      <div className="container download-band">
        <div className="download-copy">
          <p className="section-kicker">Download</p>
          <h2 id="download-title">Scan to Download SubReminder</h2>
          <p>
            Open your phone camera, scan the QR code, and download SubReminder
            in seconds from Google Play.
          </p>
          <AppStoreButtons />
        </div>

        <div className="qr-panel" aria-label="QR code download area">
          <Link
            className="qr-card"
            href={siteConfig.appLinks.downloadPage}
            aria-label="Open SubReminder download page"
          >
            <Image
              src={siteConfig.assets.qrCode}
              alt="QR code linking to the SubReminder download page"
              width={360}
              height={360}
              unoptimized
            />
            <span>
              <ScanLine aria-hidden="true" />
              Scan with your phone
            </span>
          </Link>
          <div className="mini-phone">
            <QrCode aria-hidden="true" />
            <strong>Desktop friendly</strong>
            <span>One QR code points visitors to the right store page.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
