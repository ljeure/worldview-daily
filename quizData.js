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
    source: "Source: https://ourworldindata.org/child-mortality-big-problem-in-brief"
  }
},

6: {
  title: "Global Internet Access",
  tagline: "Sharpen your sense of the historical and current state of the world.",
  description: "What percent of people use the internet, now vs in 2000? For reference, the global average in 2022 was 64%.",
  units: "percent",
  sliderMin: 0,
  sliderMax: 100,
  sliderStep: 1,
  currentYear: 2022,
  historicalYear: 2000,
  regions: ["World", "China", "United States", "Latin America and Caribbean", "Sub-Saharan Africa"],
  currentAnswers: {
    "World": 64.4,
    "China": 75.6,
    "United States": 97.1,
    "Latin America and Caribbean": 77.6,
    "Sub-Saharan Africa": 33.6
  },
  historicalAnswers: {
    "World": 6.7,
    "China": 1.8,
    "United States": 43.1,
    "Latin America and Caribbean": 3.9,
    "Sub-Saharan Africa": 0.5
  },
  additionalContent: {
    title: "Understanding the Rise of Internet Access",
    text: "In just over two decades, global internet access expanded nearly tenfold, transforming how people work, learn, and communicate. This growth was driven by mobile technology, declining device and data costs, and massive investment in digital infrastructure. China’s internet boom was fueled by government-backed expansion and smartphone adoption. Sub-Saharan Africa, while still lagging, made enormous strides via mobile-first access. Latin America and the Caribbean saw rapid uptake as mobile networks expanded beyond cities. Meanwhile, the U.S. reached near-universal connectivity through broadband and mobile saturation.",
    source: "Source: https://ourworldindata.org/grapher/share-of-individuals-using-the-internet"
  }
}



};

// Make the quiz data globally available
window.quizData = quizData;
