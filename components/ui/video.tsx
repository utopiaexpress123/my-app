import { AiService } from "../component/ai-service"
export function Video() {
    return (
      <video width="360" height="640" autoplay muted loop preload="auto">
        <source src="/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }