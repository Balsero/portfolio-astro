import { useCallback, useEffect, useRef, useState } from 'react';
import { FaMusic } from 'react-icons/fa';

const musicTracks = [
  '/audio/Clave%20Roja.mp3',
  '/audio/Clave%20Negra.mp3',
  '/audio/Cita%20en%20Sombra.mp3',
  '/audio/Noche%20en%20Sigilo.mp3',
];

const backgroundVolume = 0.18;

function pickRandomTrack(previousTrack) {
  if (musicTracks.length === 1) return musicTracks[0];

  const availableTracks = musicTracks.filter((track) => track !== previousTrack);
  return availableTracks[Math.floor(Math.random() * availableTracks.length)];
}

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackBlocked, setPlaybackBlocked] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(musicTracks[0]);

  useEffect(() => {
    setCurrentTrack(pickRandomTrack(null));
  }, []);

  const playCurrentTrack = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    audio.muted = false;
    audio.volume = backgroundVolume;
    try {
      await audio.play();
      setPlaybackBlocked(false);
      return true;
    } catch {
      setPlaybackBlocked(true);
      return false;
    }
  }, []);

  const rotateTrack = useCallback(() => {
    setCurrentTrack((previousTrack) => pickRandomTrack(previousTrack));
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;
    audio.volume = backgroundVolume;
    if (!isMuted) {
      playCurrentTrack();
    } else {
      setPlaybackBlocked(false);
      audio.pause();
    }
  }, [isMuted, playCurrentTrack]);

  useEffect(() => {
    if (!isMuted) {
      playCurrentTrack();
    }
  }, [currentTrack, isMuted, playCurrentTrack]);

  useEffect(() => {
    if (!playbackBlocked || isMuted) return undefined;

    const unlockPlayback = () => {
      playCurrentTrack();
    };

    window.addEventListener('pointerdown', unlockPlayback, { capture: true });
    window.addEventListener('keydown', unlockPlayback, { capture: true });
    window.addEventListener('touchstart', unlockPlayback, { capture: true });

    return () => {
      window.removeEventListener('pointerdown', unlockPlayback, { capture: true });
      window.removeEventListener('keydown', unlockPlayback, { capture: true });
      window.removeEventListener('touchstart', unlockPlayback, { capture: true });
    };
  }, [isMuted, playbackBlocked, playCurrentTrack]);

  const handleToggle = () => {
    setIsMuted((muted) => !muted);
  };

  return (
    <>
      <button
        className={`music-toggle${isMuted ? ' muted' : ' active'}`}
        onClick={handleToggle}
        type="button"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        aria-pressed={!isMuted}
        title={isMuted ? 'Unmute music' : 'Mute music'}
      >
        <FaMusic aria-hidden="true" />
      </button>
      <audio
        ref={audioRef}
        src={currentTrack}
        muted={isMuted}
        preload="auto"
        onEnded={rotateTrack}
      />
    </>
  );
}
