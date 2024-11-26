import { create } from "zustand";
import { ChampionType } from "../types/Champion";

interface ChampionStoreType {
  selectedChampion: ChampionType | null;
  setSelectedChampion: (champion: ChampionType) => void;
}

const useChampionStore = create<ChampionStoreType>((set) => ({
  selectedChampion: null,
  setSelectedChampion: (champion) => set({ selectedChampion: champion }),
}));

export default useChampionStore;
