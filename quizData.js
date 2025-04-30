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
},

7: {
  title: "Importance of Religion",
  tagline: "Sharpen your sense of the of the world.",
  description: "What percent of people say religion is very important or rather important in their lives, now vs in 2004?",
  units: "percent",
  sliderMin: 0,
  sliderMax: 100,
  sliderStep: 1,
  currentYear: 2022,
  historicalYear: 2004,
  regions: ["China", "United States", "Indonesia", "Bangladesh", "Mexico"],
  currentAnswers: {
    "China": 13,
    "United States": 61,
    "Indonesia": 100,
    "Bangladesh": 99,
    "Mexico": 75
  },
  historicalAnswers: {
    "China": 9,
    "United States": 82,
    "Indonesia": 100,
    "Bangladesh": 98,
    "Mexico": 88
  },
  additionalContent: {
    title: "Understanding Trends in Religious Importance",
    text: "Views on religion have remained deeply rooted in some regions and shifted in others. In countries like Bangladesh and Indonesia, religion has stayed central to life for nearly the entire population. In contrast, Mexico and the United States have seen notable declines over time, reflecting broader trends of secularization, especially among younger generations. China, already one of the least religious societies in 2004, has remained low, shaped by cultural, political, and historical factors that have long suppressed organized religion.",
    source: "Source: https://ourworldindata.org/grapher/how-important-religion-is-in-your-life?tab=table&time=2004&showSelectionOnlyInTable=1&country=MEX~CHN~USA~"

  }
},

8: {
  title: "Average Weekly Working Hours",
  tagline: "Sharpen your sense of the historical and current state of the world.",
  description: "How many hours per week did people work on average, now vs. in 1970?",
  units: "hours/week",
  sliderMin: 20,
  sliderMax: 50,
  sliderStep: 1,
  currentYear: 2017,
  historicalYear: 1970,
  regions: ["China", "India", "United States", "Brazil", "Germany"],
  currentAnswers: {
    "China": 42,
    "India": 41,
    "United States": 34,
    "Brazil": 33,
    "Germany": 26
  },
  historicalAnswers: {
    "China": 38,
    "India": 40,
    "United States": 36,
    "Brazil": 41,
    "Germany": 38
  },
  additionalContent: {
    title: "Understanding Changes in Working Hours",
    text: "Working hours have shifted significantly over the past decades, influenced by economic development, labor policies, and cultural factors. Germany experienced a substantial decrease in weekly working hours, dropping from 38 hours in 1970 to 26 hours in 2017, reflecting strong labor protections, a focus on work-life balance, and increased productivity. Brazil also saw a notable reduction, from 41 to 33 hours/week, due to labor reforms and economic changes. In contrast, China's average weekly working hours increased from 38 to 42, driven by rapid industrialization and economic growth. India's working hours saw a slight increase, from 40 to 41, indicating steady economic activity. The United States experienced a modest decline, from 36 to 34 hours/week, influenced by shifts in labor markets and productivity gains.",
    source: "Source: https://ourworldindata.org/grapher/annual-working-hours-per-worker"
  }
},

9: {
  title: "College Enrollment Rates",
  tagline: "Sharpen your sense of the historical and current state of the world.",
  description: "What percent of young people are enrolled in post-secondary education now vs in 1980?",
  units: "percent",
  sliderMin: 0,
  sliderMax: 100,
  sliderStep: 1,
  currentYear: 2022,
  historicalYear: 1980,
  regions: ["China", "India", "United States", "European Union", "Latin America and Caribbean"],
  currentAnswers: {
    "China": 72,
    "India": 33,
    "United States": 79,
    "European Union": 77,
    "Latin America and Caribbean": 56
  },
  historicalAnswers: {
    "China": 1,
    "India": 5,
    "United States": 55,
    "European Union": 24,
    "Latin America and Caribbean": 13
  },
  additionalContent: {
    title: "Understanding Changes in College Enrollment",
    text: "Global access to higher education has expanded dramatically since 1980. China has undergone the most staggering transformation, driven by massive investment in education infrastructure and national policies prioritizing human capital development. India has seen steady but slower growth, reflecting both progress and persistent challenges in access. The United States and European Union already had relatively high enrollment rates, but both have still improved further. Latin America has made major strides, fueled by economic growth and expanded access to secondary education.",
    source: "Source: https://ourworldindata.org/grapher/primary-secondary-enrollment-completion-rates?tab=table&country=~USA"
  }
},

10: {
  title: "Access to Clean Drinking Water",
  tagline: "Sharpen your sense of the historical and current state of the world.",
  description: "What percent of people had access to clean drinking water in 2022 vs in 2000? For reference, global access has steadily improved, but large gaps remain.",
  units: "percent",
  sliderMin: 0,
  sliderMax: 100,
  sliderStep: 1,
  currentYear: 2022,
  historicalYear: 2000,
  regions: ["World", "Sub-Saharan Africa", "Latin America and Caribbean", "Europe", "Pakistan"],
  currentAnswers: {
    "World": 73,
    "Sub-Saharan Africa": 31,
    "Latin America and Caribbean": 75,
    "Europe": 92,
    "Pakistan": 51
  },
  historicalAnswers: {
    "World": 61,
    "Sub-Saharan Africa": 17,
    "Latin America and Caribbean": 71,
    "Europe": 86,
    "Pakistan": 35
  },
  additionalContent: {
    title: "Understanding Changes in Access to Drinking Water",
    text: "Global access to clean drinking water has improved significantly since 2000. Major efforts in infrastructure investment, sanitation programs, and health education campaigns have driven gains in regions like Latin America and South Asia. Sub-Saharan Africa has made progress, but access remains limited in many rural areas. Developed regions like Europe have seen marginal improvements from already high levels. Continued progress will require expanded investment and focus on rural and underserved communities.",
    source: "Source: https://ourworldindata.org/clean-water-sanitation"
  }
},

11: {
  title: "Life Expectancy",
  tagline: "Sharpen your sense of the historical and current state of the world.",
  description: "How long do people live on average, now vs in 2003?",
  units: "years",
  sliderMin: 40,
  sliderMax: 90,
  sliderStep: 0.1,
  currentYear: 2023,
  historicalYear: 2003,
  regions: ["China", "India", "United States", "World", "Africa", "Europe"],
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
    text: "Life expectancy has risen globally over the past two decades, thanks to reductions in child mortality, better healthcare access, and disease control. Africa made the biggest leap, gaining nearly 9 years, largely due to improved treatment and prevention of HIV/AIDS and malaria. China and Europe also saw solid gains, reflecting sustained investment in public health. In contrast, the United States experienced slower progress due to factors like opioid-related deaths and chronic disease. Still, nearly all regions now enjoy longer lives than they did in 2003.",
    source: "Source: https://ourworldindata.org/life-expectancy"
  }
}




};

// Make the quiz data globally available
window.quizData = quizData;


// additional questions to add
// hours weekly 1950 vs now