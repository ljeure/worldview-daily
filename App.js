// app.js - Main application logic for Worldview Daily Quiz

// Determine which day's quiz to show
const getDayOfWeek = () => {
  // Get current date
  const now = new Date();
  // Get day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = now.getDay();
  // Map Sunday (0) to day 7, otherwise use the day number
  return dayOfWeek === 0 ? 7 : dayOfWeek;
};

// Main app component that loads the quiz for the current day
const WorldviewDaily = () => {
  const [currentDay, setCurrentDay] = React.useState(null);
  const [quizLoaded, setQuizLoaded] = React.useState(false);

  React.useEffect(() => {
    // Get the day of the week (or use override for testing)
    // Uncomment the next line and set a number 1-7 to test a specific day
    const dayNumber = 6; // manually set day number
    // const dayNumber = getDayOfWeek();
    setCurrentDay(dayNumber);
    setQuizLoaded(true);
  }, []);

  if (!quizLoaded) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2">Worldview Daily</h1>
        <p>Loading today's quiz...</p>
      </div>
    );
  }

  // Make sure quizData is loaded and the current day exists
  if (!window.quizData || !window.quizData[currentDay]) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2">Worldview Daily</h1>
        <p className="text-red-500">Error: Could not load quiz data for day {currentDay}.</p>
      </div>
    );
  }

  // Load the appropriate quiz data for today
  const quizData = window.quizData[currentDay];
  
  // Create a modified version of the LifeExpectancyQuiz component
  // to use the data-driven approach
  return <DailyQuiz quizData={quizData} day={currentDay} />;
};

// Component for the daily quiz using the slider format
const DailyQuiz = ({ quizData, day }) => {
  // Configuration from quiz data
  const sliderMin = quizData.sliderMin || 0;
  const sliderMax = quizData.sliderMax || 90;
  const sliderStep = quizData.sliderStep || 0.1;
  const regions = quizData.regions || [];
  const currentYear = quizData.currentYear || new Date().getFullYear();
  const historicalYear = quizData.historicalYear || (currentYear - 20);
  
  // Initialize guesses for all regions to be the middle of the slider range
  const initialGuesses = {};
  regions.forEach(region => {
    initialGuesses[`current${region.replace(/\s+/g, '')}`] = .5 * (sliderMax - sliderMin) + sliderMin;
    initialGuesses[`historical${region.replace(/\s+/g, '')}`] = .5 * (sliderMax - sliderMin) + sliderMin;
  });
  
  // User's guesses
  const [guesses, setGuesses] = React.useState(initialGuesses);
  
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
  
  // Calculate total score (out of 100)
  const calculateTotalScore = () => {
    let total = 0;
    let questionCount = 0;
    
    // Score current year guesses
    regions.forEach(region => {
      const regionKey = region.replace(/\s+/g, '');
      const guessKey = `current${regionKey}`;
      const actualValue = quizData.currentAnswers[region];
      
      if (guesses[guessKey] !== undefined && actualValue !== undefined) {
        total += calculateScore(guesses[guessKey], actualValue);
        questionCount++;
      }
    });
    
    // Score historical year guesses
    regions.forEach(region => {
      const regionKey = region.replace(/\s+/g, '');
      const guessKey = `historical${regionKey}`;
      const actualValue = quizData.historicalAnswers[region];
      
      if (guesses[guessKey] !== undefined && actualValue !== undefined) {
        total += calculateScore(guesses[guessKey], actualValue);
        questionCount++;
      }
    });
    
    // Convert to score out of 100
    return questionCount > 0 ? Math.round((total / (questionCount)) * 10) : 0;
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
    setGuesses(initialGuesses);
  };
  
  // Format numbers with one decimal place
  const formatNumber = (num) => {
    return num.toFixed(1);
  };

// Define the start date (April 20, 2025)
const startDate = new Date('2025-04-20');

// Get the current date
const currentDate = new Date();

// Calculate the difference in milliseconds
const timeDifference = currentDate - startDate;

// Convert milliseconds to days and add 1 to start counting from Day 1
const dayNumber = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

// Output the current day number
console.log(`Day ${dayNumber}`);
  
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Worldview Daily</h1>
        <p className="text-gray-600">{quizData.tagline}</p>
        <p className="text-gray-600">{quizData.description}</p>
        <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          Day {dayNumber}: {quizData.title}
        </div>
      </div>
      
      <div>
        {/* Current Year Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Current {quizData.title} ({currentYear}, {quizData.units})</h2>
          
          <div className="space-y-6">
            {regions.map(region => (
              <div key={`current-${region}`} className="mb-4 p-3 border border-gray-100 rounded-lg">
                <label className="block mb-2 font-medium">{region}</label>
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  step={sliderStep}
                  name={`current${region.replace(/\s+/g, '')}`}
                  value={guesses[`current${region.replace(/\s+/g, '')}`]}
                  onChange={handleSliderChange}
                  className="w-full"
                  disabled={submitted}
                />
                <div className="flex justify-between text-sm">
                  <span>{sliderMin} {quizData.units}</span>
                  <span className="font-medium">Your guess: {formatNumber(guesses[`current${region.replace(/\s+/g, '')}`])} {quizData.units}</span>
                  <span>{sliderMax} {quizData.units}</span>
                </div>
                {submitted && (
                  <div className="mt-2">
                    <span className="font-medium text-blue-600">
                      Actual: {formatNumber(quizData.currentAnswers[region])} {quizData.units}
                    </span>
                    <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                      {calculateScore(guesses[`current${region.replace(/\s+/g, '')}`], quizData.currentAnswers[region])}/10 points
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Historical Year Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Historical {quizData.title} ({historicalYear}, {quizData.units})</h2>
          
          <div className="space-y-6">
            {regions.map(region => (
              <div key={`historical-${region}`} className="mb-4 p-3 border border-gray-100 rounded-lg">
                <label className="block mb-2 font-medium">{region}</label>
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  step={sliderStep}
                  name={`historical${region.replace(/\s+/g, '')}`}
                  value={guesses[`historical${region.replace(/\s+/g, '')}`]}
                  onChange={handleSliderChange}
                  className="w-full"
                  disabled={submitted}
                />
                <div className="flex justify-between text-sm">
                  <span>{sliderMin} {quizData.units}</span>
                  <span className="font-medium">Your guess: {formatNumber(guesses[`historical${region.replace(/\s+/g, '')}`])} {quizData.units}</span>
                  <span>{sliderMax} {quizData.units}</span>
                </div>
                {submitted && (
                  <div className="mt-2">
                    <span className="font-medium text-blue-600">
                      Actual: {formatNumber(quizData.historicalAnswers[region])} {quizData.units}
                    </span>
                    <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100">
                      {calculateScore(guesses[`historical${region.replace(/\s+/g, '')}`], quizData.historicalAnswers[region])}/10 points
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Results and Submit/Reset Section */}
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
              <h3 className="font-bold text-lg mb-2">{quizData.additionalContent.title}</h3>
              <p className="mb-2">
                {quizData.additionalContent.text}
                {quizData.additionalContent.source}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-left">
              <p>Data source: {quizData.title} dataset ({historicalYear}-{currentYear})</p>
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

// Render the app
ReactDOM.render(<WorldviewDaily />, document.getElementById('root'));
