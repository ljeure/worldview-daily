// quizData.js - Contains data for 7 days of quizzes
const quizData = {
  // Day 1 (Monday): Uses same format as Life Expectancy quiz, with placeholder data
  1: {
    title: "Global Carbon Emissions",
    description: "Test your knowledge about carbon emissions worldwide.",
    // Keeping the same slider quiz format
    sliderMin: 40,
    sliderMax: 90,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2003,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 73.2,
      "Africa": 63.8,
      "China": 78.0,
      "Europe": 79.1,
      "United States": 79.3
    },
    historicalAnswers: {
      "World": 67.4,
      "Africa": 54.8,
      "China": 73.4,
      "Europe": 73.7,
      "United States": 77.1
    },
    additionalContent: {
      title: "Understanding Life Expectancy Changes",
      text: "Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.\n\nChina has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), reflecting broad improvements in public health and living standards worldwide.\n\nThe United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare spending. This slower progress reflects challenges including the opioid crisis, increasing \"deaths of despair,\" and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years."
    }
  },
  
  // Day 2 (Tuesday): Life Expectancy (your existing implementation's data)
  3: {
    title: "Global CO₂ Emissions per Capita",
    description: "Test your knowledge about CO₂ emissions per capita worldwide. As a reference, the global CO₂ emissions per capita in 2023 are approximately 4.7 metric tons.",
    sliderMin: 0,
    sliderMax: 42,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2000,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 4.7,
      "Africa": 1.0,
      "China": 8.4,
      "Europe": 6.7,
      "United States": 14.3
    },
    historicalAnswers: {
      "World": 4.1,
      "Africa": 1.1,
      "China": 2.9,
      "Europe": 8.4,
      "United States": 21.4
    },
    additionalContent: { title: "Understanding CO₂ Emissions Trends", text: "Between 2000 and 2023, the United States reduced its per capita CO₂ emissions from 21.4 to 14.3 metric tons. This decline is attributed to a shift from coal to natural gas and renewables, improved energy efficiency, and changes in industrial activities. Conversely, China's per capita emissions rose from 2.9 to 8.4 metric tons, driven by rapid industrialization, urbanization, and increased coal consumption. Europe's moderate decrease from 8.4 to 6.7 metric tons reflects energy efficiency improvements, a transition to cleaner energy sources, and environmental policies. The global average increased modestly from 4.1 to 4.7 metric tons, highlighting the varying emission trends across regions." }
  },
  
  // Day 3 (Wednesday): Template with placeholder data
  7: {
    title: "Internet Access",
    description: "Test your knowledge of global internet access.",
    sliderMin: 40,
    sliderMax: 90,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2003,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 73.2,
      "Africa": 63.8,
      "China": 78.0,
      "Europe": 79.1,
      "United States": 79.3
    },
    historicalAnswers: {
      "World": 67.4,
      "Africa": 54.8,
      "China": 73.4,
      "Europe": 73.7,
      "United States": 77.1
    },
    additionalContent: {
      title: "Understanding Life Expectancy Changes",
      text: "Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.\n\nChina has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), reflecting broad improvements in public health and living standards worldwide.\n\nThe United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare spending. This slower progress reflects challenges including the opioid crisis, increasing \"deaths of despair,\" and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years."
    }
  },
  
  // Day 4 (Thursday): Template with placeholder data
  4: {
    title: "Global Economy",
    description: "Test your knowledge of global economic indicators.",
    sliderMin: 40,
    sliderMax: 90,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2003,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 73.2,
      "Africa": 63.8,
      "China": 78.0,
      "Europe": 79.1,
      "United States": 79.3
    },
    historicalAnswers: {
      "World": 67.4,
      "Africa": 54.8,
      "China": 73.4,
      "Europe": 73.7,
      "United States": 77.1
    },
    additionalContent: {
      title: "Understanding Life Expectancy Changes",
      text: "Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.\n\nChina has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), reflecting broad improvements in public health and living standards worldwide.\n\nThe United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare spending. This slower progress reflects challenges including the opioid crisis, increasing \"deaths of despair,\" and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years."
    }
  },
  
  // Day 5 (Friday): Template with placeholder data
  5: {
    title: "Education Levels",
    description: "Test your knowledge of global education statistics.",
    sliderMin: 40,
    sliderMax: 90,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2003,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 73.2,
      "Africa": 63.8,
      "China": 78.0,
      "Europe": 79.1,
      "United States": 79.3
    },
    historicalAnswers: {
      "World": 67.4,
      "Africa": 54.8,
      "China": 73.4,
      "Europe": 73.7,
      "United States": 77.1
    },
    additionalContent: {
      title: "Understanding Life Expectancy Changes",
      text: "Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.\n\nChina has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), reflecting broad improvements in public health and living standards worldwide.\n\nThe United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare spending. This slower progress reflects challenges including the opioid crisis, increasing \"deaths of despair,\" and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years."
    }
  },
  
  // Day 6 (Saturday): Template with placeholder data
  6: {
    title: "Renewable Energy",
    description: "Test your knowledge of global renewable energy adoption.",
    sliderMin: 40,
    sliderMax: 90,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2003,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 73.2,
      "Africa": 63.8,
      "China": 78.0,
      "Europe": 79.1,
      "United States": 79.3
    },
    historicalAnswers: {
      "World": 67.4,
      "Africa": 54.8,
      "China": 73.4,
      "Europe": 73.7,
      "United States": 77.1
    },
    additionalContent: {
      title: "Understanding Life Expectancy Changes",
      text: "Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.\n\nChina has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), reflecting broad improvements in public health and living standards worldwide.\n\nThe United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare spending. This slower progress reflects challenges including the opioid crisis, increasing \"deaths of despair,\" and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years."
    }
  },
  
  // Day 7 (Sunday): Template with placeholder data
  7: {
    title: "Global Health Indicators",
    description: "Test your knowledge of global health statistics.",
    sliderMin: 40,
    sliderMax: 90,
    sliderStep: 0.1,
    currentYear: 2023,
    historicalYear: 2003,
    regions: ["World", "Africa", "China", "Europe", "United States"],
    currentAnswers: {
      "World": 73.2,
      "Africa": 63.8,
      "China": 78.0,
      "Europe": 79.1,
      "United States": 79.3
    },
    historicalAnswers: {
      "World": 67.4,
      "Africa": 54.8,
      "China": 73.4,
      "Europe": 73.7,
      "United States": 77.1
    },
    additionalContent: {
      title: "Understanding Life Expectancy Changes",
      text: "Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.\n\nChina has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), reflecting broad improvements in public health and living standards worldwide.\n\nThe United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare spending. This slower progress reflects challenges including the opioid crisis, increasing \"deaths of despair,\" and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years."
    }
  }
};

// Make the quiz data globally available
window.quizData = quizData;
