import React, { useState, useEffect } from 'react';

const WorldviewDailyQuiz = ({ quizData }) => {
  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Handle selecting an answer
  const handleAnswerSelect = (questionId, answerId) => {
    if (quizSubmitted) return;
    
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerId
    });
  };

  // Handle submitting the quiz
  const handleSubmit = () => {
    // Calculate score
    let correctAnswers = 0;
    currentQuiz.questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const calculatedScore = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  // Handle resetting the quiz
  const handleReset = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  // Navigation for questions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isAnswered = userAnswers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{quizData.title}</h1>
        <p className="text-gray-600">Sharpen your sense of the world every day.</p>
        <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          Day {quizData.dayNumber}: {quizData.topic}
        </div>
        <div className="mt-2 text-sm text-gray-500">{quizData.date}</div>
      </div>

      {!quizSubmitted ? (
        <div className="mb-6">
          {/* Question navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goToPrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-3 py-1 rounded-md ${currentQuestionIndex === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-500 text-white'}`}
            >
              Previous
            </button>
            <div className="text-sm">
              Question {currentQuestionIndex + 1} of {quizData.questions.length}
            </div>
            <button 
              onClick={goToNextQuestion}
              disabled={currentQuestionIndex === quizData.questions.length - 1}
              className={`px-3 py-1 rounded-md ${currentQuestionIndex === quizData.questions.length - 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-500 text-white'}`}
            >
              Next
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-4">{currentQuestion.question}</h2>
            
            {/* Multiple choice options */}
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <div 
                  key={option.id}
                  onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                  className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors
                    ${userAnswers[currentQuestion.id] === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3
                      ${userAnswers[currentQuestion.id] === option.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                      {option.id.toUpperCase()}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={goToPrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-md ${currentQuestionIndex === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-800'}`}
            >
              Previous
            </button>
            
            {isLastQuestion ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(userAnswers).length < quizData.questions.length}
                className={`px-6 py-2 rounded-md ${
                  Object.keys(userAnswers).length < quizData.questions.length
                  ? 'bg-gray-200 text-gray-500'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={goToNextQuestion}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            )}
          </div>
          
          {/* Question count indicator */}
          <div className="flex justify-center mt-6">
            {quizData.questions.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center cursor-pointer
                  ${currentQuestionIndex === index 
                    ? 'bg-blue-500 text-white' 
                    : userAnswers[quizData.questions[index].id] !== undefined
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

        </div>
      ) : (
        <div className="mt-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-3">Quiz Completed!</h2>
            <div className="text-xl font-bold mb-4">
              Your Score: {score}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mb-4">
              You answered {Object.values(userAnswers).filter((answer, index) => 
                answer === quizData.questions[index].correctAnswer
              ).length} out of {quizData.questions.length} questions correctly.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 mb-6"
            >
              Try Again
            </button>
          </div>
          
          <div className="space-y-8">
            {quizData.questions.map((question, index) => (
              <div key={question.id} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Question {index + 1}: {question.question}</h3>
                <div className="space-y-2 mb-3">
                  {question.options.map(option => (
                    <div 
                      key={option.id}
                      className={`p-3 rounded-lg ${
                        option.id === question.correctAnswer
                          ? 'bg-green-100 border border-green-300'
                          : option.id === userAnswers[question.id] && option.id !== question.correctAnswer
                            ? 'bg-red-100 border border-red-300'
                            : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                          option.id === question.correctAnswer
                            ? 'bg-green-500 text-white'
                            : option.id === userAnswers[question.id] && option.id !== question.correctAnswer
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-200'
                        }`}>
                          {option.id.toUpperCase()}
                        </div>
                        <span>{option.text}</span>
                        {option.id === question.correctAnswer && (
                          <span className="ml-auto text-green-600 font-medium">Correct Answer</span>
                        )}
                        {option.id === userAnswers[question.id] && option.id !== question.correctAnswer && (
                          <span className="ml-auto text-red-600 font-medium">Your Answer</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="font-medium text-blue-800">Explanation:</p>
                  <p className="text-gray-700">{question.explanation}</p>
                  <p className="text-xs text-gray-500 mt-1">Source: {question.source}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-left">
            <div dangerouslySetInnerHTML={{ __html: quizData.summaryText }} />
          </div>
          
          <div className="mt-4 text-sm text-gray-600 text-left">
            <p>Come back tomorrow for a new quiz!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldviewDailyQuiz;
