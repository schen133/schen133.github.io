import { create } from "zustand";

const useFeatureStore = create((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature) => set({ inViewFeature: feature }),
}));

export default useFeatureStore;
