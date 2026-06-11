export interface Channel {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: string;
  country: 'az' | 'tr';
  isHd?: boolean;
}

export type Theme = 'dark' | 'light';

export interface PlaybackState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number; // 0 to 1
  isFullscreen: boolean;
  isLive: boolean; // Is currently at live edge
  currentTime: number;
  duration: number; // Useful if stream has dvr
  seekableStart: number;
  seekableEnd: number;
}
