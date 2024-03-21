"use client"
export function Video() {
    return (
        <video width="720" height="1408" autoPlay loop muted playsInline preload="none">
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    )
  }