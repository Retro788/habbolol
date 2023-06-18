import { useState } from 'react'
import { Track } from '../types/track'

const DEFAULT_VOLUME = 0.5
const DEFAULT_TRACK_INDEX = 0
const DEFAULT_PLAYING = false

const initialTracks: Track[] = [
  {
    title: 'lofi hip hop radio 📚 - beats to relax/study to',
    host: 'LofiGirl',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
  },
  {
    title: 'synthwave radio 🌌 - beats to chill/game to',
    host: 'LofiGirl',
    url: 'https://www.youtube.com/watch?v=MVPTGNGiI-4&ab_channel=LofiGirl',
  },
]

export const useRadio = () => {
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME)
  const [isPlaying, setIsPlaying] = useState<boolean>(DEFAULT_PLAYING)
  const [trackIndex, setTrackIndex] = useState<number>(DEFAULT_TRACK_INDEX)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tracks, setTracks] = useState<Track[]>(initialTracks)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    trackIndex === tracks.length - 1
      ? setTrackIndex(0)
      : setTrackIndex(trackIndex + 1)
  }

  const prevTrack = () => {
    trackIndex === 0
      ? setTrackIndex(tracks.length - 1)
      : setTrackIndex(trackIndex - 1)
  }

  const getCurrentTrack = () => tracks[trackIndex]

  const shuffleTrack = () => {
    const newTrackIndex = Math.floor(Math.random() * tracks.length)
    setTrackIndex(newTrackIndex)
  }

  return {
    volume,
    isPlaying,
    getCurrentTrack,
    setVolume,
    togglePlay,
    nextTrack,
    prevTrack,
    shuffleTrack,
  }
}
