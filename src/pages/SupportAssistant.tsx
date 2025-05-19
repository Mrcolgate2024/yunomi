import { MessageCircle, LifeBuoy, Clock, ThumbsUp, Play, Pause, X, Volume2, VolumeX } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';
import { useEffect, useRef, useState } from 'react';

const SupportAssistant = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';

    // Create custom element
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'UI5t7xo0ZI8QRn3EkA6J');

    // Append elements to the container
    if (widgetRef.current) {
      widgetRef.current.appendChild(widget);
      widgetRef.current.appendChild(script);
    }

    // Try to autoplay video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Unmute on user interaction
    const unmuteOnInteraction = () => {
      setIsMuted(false);
      if (videoRef.current) {
        videoRef.current.muted = false;
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }
      window.removeEventListener('click', unmuteOnInteraction);
      window.removeEventListener('mousemove', unmuteOnInteraction);
    };
    window.addEventListener('click', unmuteOnInteraction);
    window.addEventListener('mousemove', unmuteOnInteraction);

    if (videoRef.current) {
      videoRef.current.onplay = () => setIsPlaying(true);
      videoRef.current.onpause = () => setIsPlaying(false);
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
      window.removeEventListener('click', unmuteOnInteraction);
      window.removeEventListener('mousemove', unmuteOnInteraction);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleCloseVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div>
      <GenericAssistantPage
        title="Customer Support Assistant: Aiko"
        subtitle="Aiko enhances customer satisfaction through empathetic problem-solving, multilingual support, and actionable insights."
        imageSrc="/lovable-uploads/Aikoprofile.webp"
        previousPath="/assistant/marketing"
        previousLabel="Marketing Assistant"
        nextPath="/"
        nextLabel="Home"
        features={[
          {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Inquiry Management",
            description: "Deliver fast, consistent support by handling customer questions across multiple languages and channels."
          },
          {
            icon: <LifeBuoy className="w-6 h-6" />,
            title: "Issue Resolution",
            description: "Resolve customer problems efficiently with intelligent troubleshooting and seamless escalation to specialized agents or human support when needed."
          },
          {
            icon: <ThumbsUp className="w-6 h-6" />,
            title: "Customer Satisfaction",
            description: "Provide empathetic, proactive support around the clock to build lasting loyalty and drive repeat business."
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Insights and Feedback Collection",
            description: "Capture conversation data, customer feedback, and satisfaction ratings to continuously improve service quality and customer experiences."
          }
        ]}
        benefits={[
          { text: "Available 24x7 for global customer support" },
          { text: "Multilingual conversation handling across diverse markets" },
          { text: "Smart escalation to human agents and specialized virtual agents" },
          { text: "Automatic conversation transcription for compliance and quality assurance" },
          { text: "CRM and ticketing platform integration for seamless workflows" },
          { text: "Support performance analytics and reporting dashboards" }
        ]}
        testimonial={{
          quote: "Aiko has elevated our customer support function to new heights. Her combination of empathy, problem-solving abilities, multilingual flexibility, and follow-through has not only resolved customer issues more efficiently, but transformed many interactions into opportunities for deeper customer relationships.",
          name: "James Miller",
          position: "Customer Experience Manager",
          company: "Stellar Services Inc."
        }}
        imageOverlay={
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {showVideo ? (
              <div className="relative w-full h-full">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-row items-center gap-3">
                  <button
                    onClick={toggleMute}
                    className="bg-black bg-opacity-80 rounded-full p-2 text-white hover:bg-opacity-100 transition-colors shadow flex items-center justify-center border border-white"
                    style={{ width: 40, height: 40 }}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handlePlayPause}
                    className="bg-black bg-opacity-80 rounded-full p-2 text-white hover:bg-opacity-100 transition-colors shadow flex items-center justify-center border border-white"
                    style={{ width: 40, height: 40 }}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handleCloseVideo}
                    className="bg-black bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-100 transition-colors shadow flex items-center justify-center border border-white"
                    style={{ width: 32, height: 32 }}
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <video
                  ref={videoRef}
                  src="/Aiko_presentation.mp4"
                  controls={false}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted={isMuted}
                  onEnded={() => setShowVideo(false)}
                  playsInline
                />
              </div>
            ) : (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => {
                  setShowVideo(true);
                  setTimeout(() => {
                    if (videoRef.current) videoRef.current.play();
                  }, 0);
                }}
              >
                <Play className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
        }
      >
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="https://youtu.be/e_7IulBMF-Q?si=D8tl5JDuufHty_FB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yunomi-beige rounded-full flex items-center justify-center group-hover:bg-yunomi-brown group-hover:text-white transition-colors duration-300">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium group-hover:text-yunomi-brown transition-colors duration-300">Watch Aiko in Action</h3>
                <p className="text-gray-600 mt-1">See Aiko talk about skiing in Japan</p>
              </div>
            </div>
          </a>

          <a 
            href="https://akool.com/apps/streaming-avatar/share/aIqXgmreqJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yunomi-beige rounded-full flex items-center justify-center group-hover:bg-yunomi-brown group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium group-hover:text-yunomi-brown transition-colors duration-300">Chat with Aiko Live</h3>
                <p className="text-gray-600 mt-1">Experience Aiko's support capabilities firsthand</p>
              </div>
            </div>
          </a>
        </div>
      </GenericAssistantPage>
      <div ref={widgetRef} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }} />
    </div>
  );
};

export default SupportAssistant;
