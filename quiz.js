// import React, { useState, useEffect } from 'react';

const LifeExpectancyQuiz = () => {
  // Current life expectancy (2023 data in years, from provided CSV)
  const currentAnswers = {
    "World": 73.2,
    "Africa": 63.8,
    "China": 78.0,
    "Europe": 79.1,
    "United States": 79.3
  };
  
  // Life expectancy from 2003 in years (from provided CSV)
  const historicalAnswers = {
    "World": 67.4,
    "Africa": 54.8,
    "China": 73.4,
    "Europe": 73.7,
    "United States": 77.1
  };
  
  // Slider configuration
  const sliderMax = 90; // Maximum life expectancy value
  
  // User's guesses
  const [guesses, setGuesses] = React.useState({
    currentUS: 75,
    currentChina: 75,
    currentNigeria: 75,
    currentIndia: 75,
    currentGermany: 75,
    historicalUS: 70,
    historicalChina: 70,
    historicalNigeria: 70,
    historicalIndia: 70,
    historicalGermany: 70
  });
  
  // State to track if quiz is submitted
  const [submitted, setSubmitted] = React.useState(false);
  // State to track score
  const [totalScore, setTotalScore] = React.useState(0);
  
  // Calculate scores
  const calculateScore = (guess, actual) => {
    const percentDiff = Math.abs((guess - actual) / actual) * 100;
    
    if (percentDiff <= 3) return 10;   // Within 3%
    if (percentDiff <= 6) return 8;    // Within 6%
    if (percentDiff <= 9) return 6;    // Within 9%
    if (percentDiff <= 12) return 4;   // Within 12%
    if (percentDiff <= 15) return 2;   // Within 15%
    return 0;                          // More than 15% off
  };
  
  // Total possible score is 100 (10 questions × 10 points each)
  const calculateTotalScore = () => {
    let total = 0;
    total += calculateScore(guesses.currentUS, currentAnswers["United States"]);
    total += calculateScore(guesses.currentChina, currentAnswers["China"]);
    total += calculateScore(guesses.currentNigeria, currentAnswers["Nigeria"]);
    total += calculateScore(guesses.currentIndia, currentAnswers["India"]);
    total += calculateScore(guesses.currentGermany, currentAnswers["Germany"]);
    total += calculateScore(guesses.historicalUS, historicalAnswers["United States"]);
    total += calculateScore(guesses.historicalChina, historicalAnswers["China"]);
    total += calculateScore(guesses.historicalNigeria, historicalAnswers["Nigeria"]);
    total += calculateScore(guesses.historicalIndia, historicalAnswers["India"]);
    total += calculateScore(guesses.historicalGermany, historicalAnswers["Germany"]);
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
      [name]: parseFloat(value)
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
      currentUS: 75,
      currentChina: 75,
      currentNigeria: 75,
      currentIndia: 75,
      currentGermany: 75,
      historicalUS: 70,
      historicalChina: 70,
      historicalNigeria: 70,
      historicalIndia: 70,
      historicalGermany: 70
    });
  };
  
  // Format numbers with one decimal place
  const formatNumber = (num) => {
    return num.toFixed(1);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Worldview Daily</h1>
        <p className="text-gray-600">Sharpen your sense of the world every day.</p>
        <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          Day 2: Life Expectancy
        </div>
      </div>
      
      <div>
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Current Life Expectancy (2023, years)</h2>
          
          <div className="space-y-6">
            {/* World */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">World</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="currentIndia"
                value={guesses.currentIndia}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.currentIndia)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(currentAnswers["World"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentIndia, currentAnswers["World"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Africa */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Africa</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="currentNigeria"
                value={guesses.currentNigeria}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.currentNigeria)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(currentAnswers["Africa"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentNigeria, currentAnswers["Africa"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* China */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">China</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="currentChina"
                value={guesses.currentChina}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.currentChina)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(currentAnswers["China"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentChina, currentAnswers["China"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Europe */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Europe</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="currentGermany"
                value={guesses.currentGermany}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.currentGermany)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(currentAnswers["Europe"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentGermany, currentAnswers["Europe"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* United States */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">United States</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="currentUS"
                value={guesses.currentUS}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.currentUS)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(currentAnswers["United States"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.currentUS, currentAnswers["United States"])}/10 points
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Life Expectancy 20 Years Ago (2003, years)</h2>
          
          <div className="space-y-6">
            {/* World (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">World</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="historicalIndia"
                value={guesses.historicalIndia}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.historicalIndia)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(historicalAnswers["World"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalIndia, historicalAnswers["World"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Africa (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Africa</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="historicalNigeria"
                value={guesses.historicalNigeria}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.historicalNigeria)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(historicalAnswers["Africa"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalNigeria, historicalAnswers["Africa"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* China (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">China</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="historicalChina"
                value={guesses.historicalChina}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.historicalChina)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(historicalAnswers["China"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalChina, historicalAnswers["China"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* Europe (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">Europe</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="historicalGermany"
                value={guesses.historicalGermany}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.historicalGermany)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(historicalAnswers["Europe"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalGermany, historicalAnswers["Europe"])}/10 points
                  </span>
                </div>
              )}
            </div>
            
            {/* United States (20 years ago) */}
            <div className="mb-4 p-3 border border-gray-100 rounded-lg">
              <label className="block mb-2 font-medium">United States</label>
              <input
                type="range"
                min="40"
                max={sliderMax}
                step="0.1"
                name="historicalUS"
                value={guesses.historicalUS}
                onChange={handleSliderChange}
                className="w-full"
                disabled={submitted}
              />
              <div className="flex justify-between text-sm">
                <span>40 years</span>
                <span className="font-medium">Your guess: {formatNumber(guesses.historicalUS)} years</span>
                <span>{sliderMax} years</span>
              </div>
              {submitted && (
                <div className="mt-2">
                  <span className="font-medium text-blue-600">
                    Actual: {formatNumber(historicalAnswers["United States"])} years
                  </span>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                    {calculateScore(guesses.historicalUS, historicalAnswers["United States"])}/10 points
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
              <h3 className="font-bold text-lg mb-2">Understanding Life Expectancy Changes</h3>
              <p className="mb-2">
                Life expectancy trends over the past 20 years (2003-2023) reveal important global patterns. The data shows significant 
                improvements across all regions, with the most dramatic gains in Africa, which increased by 9.0 years (from 54.8 to 63.8). 
                This remarkable progress can be attributed to improvements in healthcare access, reduced infectious disease mortality 
                (particularly HIV/AIDS and malaria), better childhood vaccination rates, and economic development.
              </p>
              <p className="mb-2">
                China has shown impressive gains of 4.6 years (from 73.4 to 78.0), while Europe saw an increase of 5.4 years (from 73.7 to 79.1), 
                despite already having relatively high life expectancy in 2003. The global average (World) has risen by 5.8 years (from 67.4 to 73.2), 
                reflecting broad improvements in public health and living standards worldwide.
              </p>
              <p className="mb-2">
                The United States has also experienced progress, adding 2.2 years to its life expectancy (from 77.1 to 79.3). However, 
                this increase is more modest compared to other regions, particularly considering the country's wealth and healthcare 
                spending. This slower progress reflects challenges including the opioid crisis, increasing "deaths of despair," 
                and impacts from the COVID-19 pandemic, which temporarily reversed gains before recovery in more recent years.
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-left">
              <p>Data source: Life expectancy dataset (2003-2023)</p>
              <p>Come back tomorrow for a new quiz!</p>
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
