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
    facadesData: {},
    setNumberOfFacades: (numberOfFacades) => {
      set({ numberOfFacades });
    },
    numberOfRoofs: 1,
    roofsData: {},
    setNumberOfRoofs: (numberOfRoofs) => {
      set({ numberOfRoofs });
    },
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
