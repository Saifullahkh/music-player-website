"use client";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import trendingSongs from "../../../data/trendingSongs"
import { 
  Play, 
  Pause, 
  Heart, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2,
  MoreHorizontal,
  ListMusic
} from "lucide-react";
import Link from "next/link";

export default function SongPage() {
  const { id } = useParams();
  const song = trendingSongs.find((s) => s.id === Number(id));

  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: repeat all, 2: repeat one
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);

  // Setup audio and visualization
  useEffect(() => {
    if (!song) return;

    const audioObj = new Audio(song.audio || "/assets/sample.mp3");
    audioObj.volume = volume;
    setAudio(audioObj);

    // Setup audio visualization
    const setupVisualizer = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
      const source = audioContextRef.current.createMediaElementSource(audioObj);
      analyserRef.current = audioContextRef.current.createAnalyser();
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
      
      analyserRef.current.fftSize = 256;
      const bufferLength = analyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);
    };

    const updateTime = () => setCurrentTime(audioObj.currentTime);
    const setDur = () => setDuration(audioObj.duration);

    audioObj.addEventListener("timeupdate", updateTime);
    audioObj.addEventListener("loadedmetadata", setDur);
    audioObj.addEventListener("canplay", setupVisualizer);
    audioObj.addEventListener("ended", handleSongEnd);

    return () => {
      audioObj.pause();
      audioObj.removeEventListener("timeupdate", updateTime);
      audioObj.removeEventListener("loadedmetadata", setDur);
      audioObj.removeEventListener("canplay", setupVisualizer);
      audioObj.removeEventListener("ended", handleSongEnd);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [song]);

  // Handle song end based on repeat mode
  const handleSongEnd = () => {
    if (repeatMode === 2) {
      // Repeat one song
      audio.currentTime = 0;
      audio.play();
    } else {
      setIsPlaying(false);
      // In a real app, you would play the next song based on the queue
    }
  };

  // Animation for audio visualization
  useEffect(() => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      
      if (!analyserRef.current || !dataArrayRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw more sophisticated audio visualization
      const barWidth = (width / dataArrayRef.current.length) * 2.5;
      let x = 0;
      
      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const barHeight = (dataArrayRef.current[i] / 255) * height;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
        gradient.addColorStop(0, '#ec4899');
        gradient.addColorStop(1, '#06b6d4');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
    };
    
    if (isPlaying) {
      draw();
    } else {
      ctx.clearRect(0, 0, width, height);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audio) return;
    
    // Resume AudioContext if it was suspended
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    if (!audio || !duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleRepeat = () => {
    setRepeatMode((repeatMode + 1) % 3);
  };

  if (!song) return <div className="text-white p-10">Song not found</div>;

  return (
    <div className="min-h-screen rounded-sm bg-gradient-to-b from-pink-900 via-purple-900 to-black flex flex-col items-center text-white px-4 py-6 relative">
      
      {/* Header with back button and menu */}
      <div className="w-full flex justify-between items-center mb-8">
        <Link
          href="/albums"
          className="text-white/70 hover:text-white transition-colors"
        >
          <Image
            src="/assets/Vector.png"
            width={33}
            height={33}
            alt="back"
          />
        </Link>

        <h1 className="text-cyan-300 text-lg font-medium">Now Playing</h1>
        <button 
          className={` ${isLiked ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart size={33} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Album Art with vinyl record effect */}
      <div className="relative w-72 h-72 mb-8">
        <div className={`absolute inset-0 rounded-full bg-black/20 border-4 border-cyan-300/10 ${isPlaying ? 'animate-spin-slow' : ''}`} style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-4 rounded-full bg-black/30 border border-cyan-300/5"></div>
        <div className="absolute inset-8 rounded-full bg-black/40 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-cyan-300/10"></div>
        </div>
        <div className="absolute inset-10 rounded-full overflow-hidden shadow-2xl">
          <Image
            src={song.image}
            alt={song.title}
            width={280}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Song Info */}
      <div className="text-center w-full mb-5">
        <h2 className="text-2xl font-bold truncate">{song.title}</h2>
        <p className="text-pink-300 truncate">{song.artist}</p>
        {song.album && <p className="text-white/60 text-sm mt-1">from {song.album}</p>}
      </div>

      {/* Audio Visualizer */}
      <div className="w-full h-24 mb-6">
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={96}
          className="w-full h-full"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div 
          className="w-full h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="h-1 bg-gradient-to-r from-pink-500 to-cyan-400 relative"
            style={{
              width: duration ? `${(currentTime / duration) * 100}%` : "0%",
            }}
          >
            <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="w-full max-w-md flex items-center justify-between mb-8">
        <button 
          className={`p-2 rounded-full ${isShuffled ? 'text-cyan-300' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setIsShuffled(!isShuffled)}
        >
          <Shuffle size={20} />
        </button>
        
        <button className="text-gray-400 hover:text-white">
          <SkipBack size={28} />
        </button>
        
        <button 
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg  transition-all"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause size={28} className="text-white" />
          ) : (
            <Play size={28} className="text-white ml-1" />
          )}
        </button>
        
        <button className="text-gray-400 hover:text-white">
          <SkipForward size={28} />
        </button>
        
        <button 
          className={`p-2 rounded-full ${repeatMode > 0 ? 'text-cyan-300' : 'text-gray-400 hover:text-white'}`}
          onClick={toggleRepeat}
        >
          <Repeat size={20} />
          {repeatMode === 2 && <span className="absolute -top-1 -right-1 text-xs">1</span>}
        </button>
      </div>

      

      {/* Lyrics section (placeholder) */}
      <div className="w-full max-w-md bg-black/20 rounded-xl p-4 mb-6">
        <p className="text-center text-gray-400 text-sm">
          Lyrics available with premium
        </p>
      </div>

     
    </div>
  );
}