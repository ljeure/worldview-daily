// import React, { useState, useEffect } from 'react';

const GDPQuiz = () => {
  // Current GDP per capita (2023 data in USD)
  const currentAnswers = {
    US: 76398,
    China: 12720,
    SubSaharanAfrica: 1760,
    India: 2610,
    Europe: 38234 // Average for EU
  };
  
  // GDP per capita from 2003 in 2023 inflation-adjusted USD
  const historicalAnswers = {
    US: 63967,
    China: 2076,
    SubSaharanAfrica: 945,
    India: 911,
    Europe: 34249
  };
  
  // Slider configuration
  const sliderMax = 115000; // 1.5x the maximum value
  
  // User's guesses
  const [guesses, setGuesses] = React.useState({
    currentUS: 38333,
    currentChina: 38333,
    currentSubSaharanAfrica: 38333,
    currentIndia: 38333,
    currentEurope: 38333,
    historicalUS: 38333,
    historicalChina: 38333,
    historicalSubSaharanAfrica: 38333,
    historicalIndia: 38333,
    historicalEurope: 38333
  });
  
  // State to track if quiz is submitted
  const [submitted, setSubmitted] = React.useState(false);
  // State to track score
  const [totalScore, setTotalScore] = React.useState(0);
  
  // Calculate scores
  const calculateScore = (guess, actual) => {
    const percentDiff = Math.abs((guess - actual) / actual) * 100;
    
    if (percentDiff <= 10) return 10; // Within 10%
    if (percentDiff <= 20) return 8;  // Within 20%
    if (percentDiff <= 30) return 6;  // Within 30%
    if (percentDiff <= 40) return 4;  // Within 40%
    if (percentDiff <= 50) return 2;  // Within 50%
    return 0;                         // More than 50% off
  };
  
  // Total possible score is 100 (10 questions × 10 points each)
  const calculateTotalScore = () => {
    let total = 0;
    total += calculateScore(guesses.currentUS, currentAnswers.US);
    total += calculateScore(guesses.currentChina, currentAnswers.China);
    total += calculateScore(guesses.currentSubSaharanAfrica, currentAnswers.SubSaharanAfrica);
    total += calculateScore(guesses.currentIndia, currentAnswers.India);
    total += calculateScore(guesses.currentEurope, currentAnswers.Europe);
    total += calculateScore(guesses.historicalUS, historicalAnswers.US);
    total += calculateScore(guesses.historicalChina, historicalAnswers.China);
    total += calculateScore(guesses.historicalSubSaharanAfrica, historicalAnswers.SubSaharanAfrica);
    total += calculateScore(guesses.historicalIndia, historicalAnswers.India);
    total += calculateScore(guesses.historicalEurope, historicalAnswers.Europe);
    return total;
  };
  
  // Update the total score whenever submission state changes
  React.useEffect(() => {
    if (submitted) {
      setTotalScore(calculateTotalScore());
    }
  }, [submitted]);
  
  // Handle slider changes
  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setGuesses({
      ...guesses,
      [name]: parseInt(value)
    });
  };
  
  // Handle form submission
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  // Reset quiz
  const handleReset = () => {
    setSubmitted(false);
    setTotalScore(0);
    setGuesses({
      currentUS: 38333,
      currentChina: 38333,
      currentSubSaharanAfrica: 38333,
      currentIndia: 38333,
      currentEurope: 38333,
      historicalUS: 38333,
      historicalChina: 38333,
      historicalSubSaharanAfrica: 38333,
      historicalIndia: 38333,
      historicalEurope: 38333
    });
  };
  
  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Worldview Daily</h1>
        <p className="text-gray-600">Sharpen your sense of the world every day.</p>
        <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          Day 1: GDP Per Capita
        </div>
      </div>
      
      <div>
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Current GDP Per Capita (2023, USD)</h2>
          
          <div className="space-y-6">
            {/* United States */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">United States</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={100}
                name="currentUS"
                value={guesses.currentUS}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.currentUS)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(currentAnswers.US)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentUS, currentAnswers.US)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* China */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">China</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={100}
                name="currentChina"
                value={guesses.currentChina}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.currentChina)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(currentAnswers.China)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentChina, currentAnswers.China)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Sub-Saharan Africa */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Sub-Saharan Africa</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={100}
                name="currentSubSaharanAfrica"
                value={guesses.currentSubSaharanAfrica}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.currentSubSaharanAfrica)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(currentAnswers.SubSaharanAfrica)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentSubSaharanAfrica, currentAnswers.SubSaharanAfrica)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* India */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">India</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="currentIndia"
                value={guesses.currentIndia}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.currentIndia)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(currentAnswers.India)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentIndia, currentAnswers.India)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Europe */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Europe (EU average)</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="currentEurope"
                value={guesses.currentEurope}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.currentEurope)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(currentAnswers.Europe)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentEurope, currentAnswers.Europe)}/10 points
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">GDP Per Capita 20 Years Ago (2003, in 2023 inflation-adjusted USD)</h2>
          
          <div className="space-y-6">
            {/* United States (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">United States</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="historicalUS"
                value={guesses.historicalUS}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.historicalUS)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(historicalAnswers.US)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalUS, historicalAnswers.US)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* China (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">China</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="historicalChina"
                value={guesses.historicalChina}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.historicalChina)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(historicalAnswers.China)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalChina, historicalAnswers.China)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Sub-Saharan Africa (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Sub-Saharan Africa</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="historicalSubSaharanAfrica"
                value={guesses.historicalSubSaharanAfrica}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.historicalSubSaharanAfrica)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(historicalAnswers.SubSaharanAfrica)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalSubSaharanAfrica, historicalAnswers.SubSaharanAfrica)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* India (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">India</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="historicalIndia"
                value={guesses.historicalIndia}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.historicalIndia)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(historicalAnswers.India)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalIndia, historicalAnswers.India)}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Europe (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Europe (EU average)</label>
              <input
                type="range"
                min="0"
                max={sliderMax}
                step={500}
                name="historicalEurope"
                value={guesses.historicalEurope}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span className="font-medium">Your guess: ${formatNumber(guesses.historicalEurope)}</span>
                <span>${formatNumber(sliderMax)}</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: ${formatNumber(historicalAnswers.Europe)}
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalEurope, historicalAnswers.Europe)}/10 points
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {submitted ? (
          <div className="mt-6 text-center">
            <div className="text-xl font-bold mb-4">
              Your Score: {totalScore}/100
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${totalScore}%` }}
              ></div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-left">
              <h3 className="font-bold text-lg mb-2">Understanding GDP Per Capita Differences</h3>
              <p className="mb-2">
                The stark GDP disparities reveal structural economic differences beyond simple development stages. 
                Advanced economies maintain their lead through innovation ecosystems, capital markets depth, and institutional resilience, 
                though their growth rates have moderated. China's extraordinary 6x real growth over 20 years represents the most 
                remarkable economic transformation in modern history, while India has nearly tripled its per capita GDP through 
                service sector expansion and gradual economic reforms despite persistent infrastructure challenges.
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-left">
              <p>Data sources: World Bank, IMF World Economic Outlook</p>
              <p>Note: Historical figures are adjusted for inflation to 2023 dollars.</p>
              <p>Come back tomorrow for a new quiz!>
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Submit Answers
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<GDPQuiz />, document.getElementById('root'));
