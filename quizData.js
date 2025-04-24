const quizData = {

// day 3 wednesday - literacy
3: {
  title: "Global Literacy Rates",
  description: "Test your knowledge about literacy rates worldwide.",
  sliderMin: 0,
  sliderMax: 100,
  sliderStep: 0.1,
  currentYear: 2020,
  historicalYear: 2000,
  units: "percent",
  regions: ["World", "Sub-Saharan Africa", "China", "Europe and Central Asia", "Mexico"],
  currentAnswers: {
    "World": 87,
    "Sub-Saharan Africa": 68,
    "China": 97,
    "Europe and Central Asia": 99,
    "Mexico": 95
  },
  historicalAnswers: {
    "World": 81,
    "Sub-Saharan Africa": 57,
    "China": 91,
    "Europe and Central Asia": 97,
    "Mexico": 91
  },
  additionalContent: {
    title: "Understanding Changes in Literacy Rates",
    text: "Between 2000 and 2020, global literacy rates improved from 81% to 87%, reflecting steady progress in education access and quality. Sub-Saharan Africa saw a notable increase from 57% to 68%, driven by expanded primary education and international development efforts. China's literacy rate rose from 91% to 97%, continuing its long-term investment in universal education. Mexico improved from 91% to 95%, while Europe and Central Asia, already high in 2000 at 97%, reached near-universal literacy at 99%."
  }
},

5: {
  title: "Global Child Mortality",
  tagline: "Sharpen your sense of the historical and current state of the world.",
  description: "What percent of children died under the age of 5, now vs in 1950? For reference, the global average in 1950 was 23%.",
  units: "percent",
  sliderMin: 0,
  sliderMax: 40,
  sliderStep: 0.1,
  currentYear: 2023,
  historicalYear: 1950,
  regions: ["World", "Asia", "Africa", "Europe", "Northern America"],
  currentAnswers: {
    "World": 4,
    "Asia": 3,
    "Africa": 6,
    "Europe": 0.4,
    "Northern America": 0.6
  },
  historicalAnswers: {
    "World": 23,
    "Asia": 25,
    "Africa": 33,
    "Europe": 11,
    "Northern America": 4
  },
  additionalContent: {
    title: "Understanding the Decline in Child Mortality",
    text: "The dramatic drop in child mortality since 1950 is one of the most important global health achievements of the past century. Advances in vaccination, oral rehydration therapy, antibiotics, maternal education, and access to skilled birth attendants have saved millions of young lives. International efforts like expanded immunization programs, improved nutrition, and better water and sanitation infrastructure have played key roles, especially in lower-income regions. While progress has been uneven, every region in the world has seen gains thanks to targeted, scalable interventions in public health.",
    source: "https://ourworldindata.org/child-mortality-big-problem-in-brief"
  }
}


};

// Make the quiz data globally available
window.quizData = quizData;
