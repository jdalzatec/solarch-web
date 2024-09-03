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
    typeOfBuilding: "",
    setTypeOfBuilding: (typeOfBuilding) => {
      set({
        typeOfBuilding,
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
    setRoofData: (roofIndex, data) => {
      set((state) => {
        const roofsData = { ...state.roofsData };
        roofsData[roofIndex] = data;
        return { roofsData };
      });
    },
    getLastStepIndex: () => {
      return get().numberOfFacades + get().numberOfRoofs + 2;
    },
    getData: () => {
      return {
        city: get().city,
        country: get().country,
        typeOfBuilding: get().typeOfBuilding,
        facades: Object.values(get().facadesData),
        roofs: Object.values(get().roofsData),
      };
    },
  };
});

export default useNewQuoteStore;
