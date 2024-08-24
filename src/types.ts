export enum FilterType {
  Genre = "genre",
  Tempo = "tempo",
  Mood = "mood",
  Store = "store",
}

export type Track = {
  id: number;
  title: string;
  description: string;
  coverSlug: string;
  bpm: number;
  fullLengthSec: number;
  genres: string[];
  edits: TrackEdit[];
};

export type TrackEdit = {
  type: string;
  audioSources: Array<{ url: string; type: string }>;
  storeLinks: {
    audioJungle: string;
  };
};
