import { create } from "zustand";

const useNewQuoteStore = create((set, get) => {
  return {
    city: "",
    setCity: (city) => {
      set({
        city,
      });
    },
    country: "",
    setCountry: (country) => {
      set({
        country,
      });
    },
    activeStep: 0,
    setActiveStep: (activeStep) => {
      set({
        activeStep,
      });
    },
    nextStep: () => {
      set((state) => ({ activeStep: state.activeStep + 1 }));
    },
    prevStep: () => {
      set((state) => ({ activeStep: state.activeStep - 1 }));
    },
    numberOfFacades: 4,
    setNumberOfFacades: (numberOfFacades) => {
      set({ numberOfFacades });
    },
    facadesData: {},
    setFacadeData: (facadeIndex, data) => {
      set((state) => {
        const facadesData = { ...state.facadesData };
        facadesData[facadeIndex] = data;
        return { facadesData };
      });
    },
    numberOfRoofs: 1,
    setNumberOfRoofs: (numberOfRoofs) => {
      set({ numberOfRoofs });
    },
    roofsData: {},
    reset: () => {
      set({
        activeStep: 0,
        numberOfFacades: 4,
        facadesData: {},
        numberOfRoofs: 1,
        roofsData: {},
        city: "",
        country: "",
      });
    },
    getLastStepIndex: () => {
      return get().numberOfFacades + get().numberOfRoofs + 2;
    },
  };
});

export default useNewQuoteStore;
