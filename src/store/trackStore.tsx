import { Track } from '@root/models/track'
import { RootStore } from '@store/rootStore'
import { makeAutoObservable, runInAction } from 'mobx'

export class TrackStore {
  rootStore: RootStore
  tracks: Track[] = []
  trackIndex = 0

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
    this.loadTracks()
  }

  get currentTrack(): Track {
    return this.tracks[this.trackIndex]
  }

  setCurrentTrack = (trackId: string) => {
    const track = this.tracks.find((track) => track.id === trackId) as Track
    this.trackIndex = this.tracks.indexOf(track)
    this.rootStore.uiStore.closeTrackSelector()
  }

  nextTrack = () => {
    this.trackIndex === this.tracks.length - 1
      ? (this.trackIndex = 0)
      : (this.trackIndex += 1)
  }

  previousTrack = () => {
    this.trackIndex === 0
      ? (this.trackIndex = this.tracks.length - 1)
      : (this.trackIndex -= 1)
  }

  shuffleTrack = () => {
    this.trackIndex = Math.floor(Math.random() * this.tracks.length)
  }

  loadTracks = async () => {
    const response = await fetch('/tracks.json')
    const data = await response.json()

    runInAction(() => {
      this.tracks = data
    })
  }
}
