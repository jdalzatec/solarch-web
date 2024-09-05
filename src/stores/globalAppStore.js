import { create } from "zustand";

const useGlobalAppStore = create((set) => {
  return {
    loading: false,
    setLoading: (loading) => {
      set({
        loading,
      });
    },
  };
});

export default useGlobalAppStore;
