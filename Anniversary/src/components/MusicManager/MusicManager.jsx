import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./MusicManager.css";

// Which music should play on which page
const PAGE_PLAYLISTS = {
  password: [],
  intro: [],
  wrapped: [
    "/music/Aap Jaisa Koi Meri Zindagi Mein Aaye.mp3",
    "/music/Tumi Na Thakle.mp3",
  ],
  photos: ["/music/Hoyni Alap.mp3",
    "/music/Baynankhoka.mp3",
    "/music/Ki Naame Deke Bolbo Tomake.mp3",
    "/music/Hoyto Tomari Janya.mp3"
  ],
  contract: ["/music/Bhalobasabasi Pachchhena.mp3"],
  finale: ["/music/Amar Bhindeshi Tara.mp3"],
};

/*
|--------------------------------------------------------------------------
| SETTINGS
|--------------------------------------------------------------------------
*/

const NORMAL_VOLUME = 0.35;
const FADE_DURATION = 800;
const FADE_STEPS = 20;


/*
|--------------------------------------------------------------------------
| MUSIC MANAGER
|--------------------------------------------------------------------------
*/

export default function MusicManager({ currentPage }) {
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isChangingSong, setIsChangingSong] = useState(false);
  const playlist = PAGE_PLAYLISTS[currentPage] || [];
  const currentSong = playlist[songIndex];


  /*
  |--------------------------------------------------------------------------
  | Clear existing fade
  |--------------------------------------------------------------------------
  */

  const clearFade = () => {
    if (fadeTimerRef.current) {
      clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  };


  /*
  |--------------------------------------------------------------------------
  | Fade OUT
  |--------------------------------------------------------------------------
  */

  const fadeOut = (audio) => {
    return new Promise((resolve) => {
      if (!audio || audio.paused || audio.volume <= 0) {
        resolve();
        return;
      }

      clearFade();
      const startingVolume = audio.volume;
      let step = 0;
      const stepTime = FADE_DURATION / FADE_STEPS;

      fadeTimerRef.current = setInterval(() => {
        step++;
        const progress = step / FADE_STEPS;
        audio.volume = Math.max(
          0,
          startingVolume * (1 - progress)
        );

        if (step >= FADE_STEPS) {
          clearFade();
          audio.pause();
          audio.currentTime = 0;
          resolve();
        }
      }, stepTime);
    });
  };


  /*
  |--------------------------------------------------------------------------
  | Fade IN
  |--------------------------------------------------------------------------
  */

  const fadeIn = (audio) => {
    if (!audio || isMuted) return;

    clearFade();

    audio.volume = 0;

    let step = 0;

    const stepTime = FADE_DURATION / FADE_STEPS;

    fadeTimerRef.current = setInterval(() => {
      step++;

      const progress = step / FADE_STEPS;

      audio.volume = Math.min(
        NORMAL_VOLUME,
        NORMAL_VOLUME * progress
      );

      if (step >= FADE_STEPS) {
        clearFade();
      }
    }, stepTime);
  };


  /*
  |--------------------------------------------------------------------------
  | PLAY CURRENT SONG
  |--------------------------------------------------------------------------
  */

  const playCurrentSong = async () => {
    const audio = audioRef.current;

    if (!audio || !currentSong) {
      setIsPlaying(false);
      return;
    }

    clearFade();
    audio.src = currentSong;
    audio.load();
    audio.volume = isMuted ? 0 : 0;

    try {
      await audio.play();
      setIsPlaying(true);
      if (!isMuted) {
        fadeIn(audio);
      }
    } catch (error) {
      /*
      Browser blocked autoplay.

      The music button can be pressed by the user
      to start playback manually.
      */

      setIsPlaying(false);
    }
  };


  /*
  |--------------------------------------------------------------------------
  | CHANGE SONG
  |--------------------------------------------------------------------------
  */

  const changeSong = async (newIndex) => {
    const audio = audioRef.current;

    if (!audio) return;
    setIsChangingSong(true);
    await fadeOut(audio);
    setSongIndex(newIndex);
    setIsChangingSong(false);
  };


  /*
  |--------------------------------------------------------------------------
  | WHEN PAGE CHANGES
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();

    /*
    Reset playlist when entering a new page
    */

    setSongIndex(0);

    /*
    Stop whatever was playing before
    */

    audio.pause();
    audio.currentTime = 0;

    /*
    Pages without music
    */

    if (!playlist.length) {
      audio.removeAttribute("src");
      setIsPlaying(false);
      return;
    }

    /*
    Small timeout allows React to update
    songIndex before playing.
    */

    const timeout = setTimeout(() => {
      playCurrentSong();
    }, 50);

    return () => {
      clearTimeout(timeout);
      clearFade();
    };

  }, [currentPage]);


  /*
  |--------------------------------------------------------------------------
  | WHEN SONG INDEX CHANGES
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    /*
    Don't run on pages without music
    */

    if (!playlist.length) return;

    /*
    Don't replay the first song unnecessarily
    when the page itself changes.
    */

    if (songIndex === 0 && !audioRef.current?.src) {
      return;
    }

    const timeout = setTimeout(() => {
      playCurrentSong();
    }, 50);

    return () => clearTimeout(timeout);

  }, [songIndex]);


  /*
  |--------------------------------------------------------------------------
  | WHEN SONG FINISHES
  |--------------------------------------------------------------------------
  */

  const handleSongEnded = async () => {
    if (!playlist.length) return;

    /*
    More songs remaining
    */

    if (songIndex < playlist.length - 1) {
      await changeSong(songIndex + 1);
      return;
    }

    /*
    Last song finished.

    Start playlist again from the beginning.
    */

    await changeSong(0);
  };


  /*
  |--------------------------------------------------------------------------
  | MUSIC BUTTON
  |--------------------------------------------------------------------------
  */

  const handleMusicClick = async () => {
    const audio = audioRef.current;

    if (!audio || !playlist.length) return;

    /*
    If music is currently playing → turn it off
    */

    if (!audio.paused) {
      clearFade();
      await fadeOut(audio);
      setIsMuted(true);
      setIsPlaying(false);
      return;
    }

    /*
    Otherwise start music
    */

    setIsMuted(false);

    try {
      audio.volume = 0;
      await audio.play();
      setIsPlaying(true);
      fadeIn(audio);
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  };


  /*
  |--------------------------------------------------------------------------
  | NO MUSIC ON THIS PAGE
  |--------------------------------------------------------------------------
  */

  if (!playlist.length) {
    return <audio ref={audioRef} />;
  }


  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={handleSongEnded}
        preload="auto"
      />

      <button
        type="button"
        className={`music-toggle ${
          isPlaying && !isMuted
            ? "music-playing"
            : ""
        }`}
        onClick={handleMusicClick}
        aria-label={
          isPlaying && !isMuted
            ? "Turn music off"
            : "Turn music on"
        }
      >
        {isPlaying && !isMuted ? (
          <Volume2
            size={18}
            strokeWidth={1.7}
          />
        ) : (
          <VolumeX
            size={18}
            strokeWidth={1.7}
          />
        )}

        <span>
          {isChangingSong
            ? "Changing..."
            : isPlaying && !isMuted
              ? "Music"
              : "Music off"}
        </span>
      </button>
    </>
  );
}