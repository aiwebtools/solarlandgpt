
import { useEffect, useRef } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title = "YouTube video player" }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Ensure iframe has loaded before attempting to interact with it
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    // Create a load event handler to set up video once iframe is loaded
    const handleIframeLoad = () => {
      try {
        // Try to set quality and unmute the video
        if (iframe.contentWindow) {
          // Note: Direct API access like this may not work due to same-origin policy
          // The YouTube API parameters in the URL are more reliable
          console.log('YouTube iframe loaded');
        }
      } catch (error) {
        console.error('Error interacting with YouTube iframe:', error);
      }
    };
    
    iframe.addEventListener('load', handleIframeLoad);
    
    return () => {
      iframe.removeEventListener('load', handleIframeLoad);
    };
  }, [videoId]);
  
  return (
    <div className="w-full h-0 pb-[56.25%] relative rounded-xl overflow-hidden shadow-2xl">
      <iframe
        ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&fs=1&modestbranding=1&vq=hd1080`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
