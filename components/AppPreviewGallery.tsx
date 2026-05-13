import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function AppPreviewGallery() {
  return (
    <section
      className="section app-preview-section"
      id="app-preview"
      aria-labelledby="app-preview-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">App preview</p>
          <h2 id="app-preview-title">A clean mobile view of every renewal.</h2>
          <p>
            From quick totals to exact renewal dates, the app keeps the most
            important subscription details close at hand.
          </p>
        </div>

        <div className="app-preview-track" aria-label="SubReminder app preview gallery">
          {siteConfig.assets.appPreviews.map((preview) => (
            <figure className="app-preview-frame" key={preview.title}>
              <div className="app-preview-img-wrap">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={preview.width}
                  height={preview.height}
                  sizes="(max-width: 720px) 74vw, (max-width: 1040px) 260px, 220px"
                />
              </div>
              <figcaption>{preview.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
