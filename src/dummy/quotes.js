export const QUOTES = [
  {
    id: "id1",
    created: "2021-09-01T00:00:00.000Z",
    info: {
      city: "New York",
      country: "USA",
      type: "residential",
      facades: [
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "standard" },
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "thin_film" },
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "thin_film" },
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "standard" },
      ],
      roofs: [{ width: 10, height: 20, material: "standard" }],
    },
    simulation: {
      location: {
        latitude: 40.7128,
        longitude: -74.006,
      },
      pricing: {
        materials: {
          standard: 100,
          thin_film: 200,
        },
        kwh: 0.1,
      },
      facades: [
        {
          number_of_panels: 4,
          efficiency: 1987,
          pricing: 100,
        },
        {
          number_of_panels: 4,
          efficiency: 1987,
          pricing: 102,
        },
        {
          number_of_panels: 4,
          efficiency: 1987,
          pricing: 104,
        },
        {
          number_of_panels: 4,
          efficiency: 1987,
          pricing: 106,
        },
      ],
      roofs: [
        {
          number_of_panels: 4,
          efficiency: 1987,
          pricing: 108,
        },
      ],
    },
  },
  {
    id: "id2",
    created: "2021-09-01T00:00:00.000Z",
    info: {
      city: "New York",
      country: "USA",
      type: "commercial",
      facades: [
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "standard" },
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "thin_film" },
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "standard" },
        { width: 10, height: 20, tilt: 0, azimuth: 0, material: "thin_film" },
      ],
      roofs: [{ width: 10, height: 20, material: "standard" }],
    },
    pricing: {
      materials: {
        standard: 100,
        thin_film: 200,
      },
      kwh: 0.1,
    },
    simulation: {
      location: {
        latitude: 40.7128,
        longitude: -74.006,
      },
      facades: [
        {
          number_of_panels: 4,
          pricing: 100,
          efficiency: 1987,
        },
        {
          number_of_panels: 4,
          pricing: 100,
          efficiency: 1987,
        },
        {
          number_of_panels: 4,
          pricing: 100,
          efficiency: 1987,
        },
        {
          number_of_panels: 4,
          pricing: 100,
          efficiency: 1987,
        },
      ],
      roofs: [
        {
          number_of_panels: 4,
          pricing: 100,
          efficiency: 1987,
        },
      ],
    },
  },
];
