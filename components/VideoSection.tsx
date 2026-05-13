"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  // Replace this URL with your actual marketing video URL (YouTube embed, Vimeo, or local mp4)
  const videoUrl = "";

  return (
    <section
      className="section video-section"
      id="video"
      aria-labelledby="video-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">See it in action</p>
          <h2 id="video-title">Watch how SubReminder works.</h2>
          <p>
            A quick walkthrough of how SubReminder helps you track every
            subscription, set reminders, and stay ahead of renewal dates.
          </p>
        </div>

        <div className="video-container">
          {playing && videoUrl ? (
            <iframe
              src={videoUrl}
              title="SubReminder marketing video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="video-placeholder"
              onClick={() => videoUrl && setPlaying(true)}
              role="button"
              tabIndex={0}
              aria-label="Play marketing video"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  videoUrl && setPlaying(true);
                }
              }}
            >
              <div className="video-placeholder-inner">
                <button className="video-play-btn" type="button">
                  <Play aria-hidden="true" />
                </button>
                <span className="video-placeholder-text">
                  {videoUrl
                    ? "Click to play"
                    : "Marketing video coming soon"}
                </span>
              </div>
            </div>
          )}
        </div>

        <p className="video-caption">
          Track subscriptions, get timely reminders, and never miss a renewal again.
        </p>
      </div>
    </section>
  );
}
