export const ORDER_CAPSULES = [
  {
    id: 0,
    title: "How do you drink your coffee?",
    options: [
      {
        id: 0,
        name: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
        value: "capsule",
        registerFor: "howDrink",
      },
      {
        id: 1,
        name: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
        value: "filter",
        registerFor: "howDrink",
      },
      {
        id: 2,
        name: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
        value: "espresso",
        registerFor: "howDrink",
      },
    ],
  },
  {
    id: 1,
    title: "What type of coffee?",
    options: [
      {
        id: 0,
        name: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
        value: "singleOrigin",
        registerFor: "coffeeType",
      },
      {
        id: 1,
        name: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
        value: "decaf",
        registerFor: "coffeeType",
      },
      {
        id: 2,
        name: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
        value: "blended",
        registerFor: "coffeeType",
      },
    ],
  },
  {
    id: 2,
    title: "How much would you like?",
    options: [
      {
        id: 0,
        name: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
        value: "250g",
        registerFor: "basisWeight",
      },
      {
        id: 1,
        name: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
        value: "500g",
        registerFor: "basisWeight",
      },
      {
        id: 2,
        name: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        value: "1000g",
        registerFor: "basisWeight",
      },
    ],
  },
  {
    id: 3,
    title: "Want us to grind them?",
    options: [
      {
        id: 0,
        name: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
        value: "wholebean",
        registerFor: "whatGrind",
      },
      {
        id: 1,
        name: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
        value: "filterGrind",
        registerFor: "whatGrind",
      },
      {
        id: 2,
        name: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
        value: "cafetiére",
        registerFor: "whatGrind",
      },
    ],
  },
  {
    id: 4,
    title: "How often should we deliver?",
    options: [
      {
        id: 0,
        name: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
        value: "everyWeek",
        registerFor: "deliver",
      },
      {
        id: 1,
        name: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
        value: "everyTwoWeeks",
        registerFor: "deliver",
      },
      {
        id: 2,
        name: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
        value: "everyMonth",
        registerFor: "deliver",
      },
    ],
  },
];

export const DefaultTitles = [
  {
    id: 1,
    name: "Preferences",
  },
  {
    id: 2,
    name: "Bean Type",
  },
  {
    id: 3,
    name: "Quantity",
  },
  {
    id: 4,
    name: "Grind Option",
  },
  {
    id: 5,
    name: "Deliveries",
  },
];
