import React, { useState } from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { PaddyFieldBackground } from './PaddyFieldBackground';

const RiceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How do you approach new experiences?",
      options: [
        { text: "I embrace them with enthusiasm and curiosity", value: "jasmine" },
        { text: "I prefer refined, sophisticated experiences", value: "basmati" },
        { text: "I like experiences that require patience and attention", value: "risotto" },
        { text: "I seek out unique, unconventional experiences", value: "purple" }
      ]
    },
    {
      id: 2,
      question: "Rice is believed to have been first domesticated around:",
      options: [
        { text: "8,000-10,000 years ago in China", value: "jasmine" },
        { text: "5,000 years ago in the Indian subcontinent", value: "basmati" },
        { text: "2,000 years ago in Italy", value: "risotto" },
        { text: "Ancient times across multiple regions", value: "purple" }
      ]
    },
    {
      id: 3,
      question: "When working on a project, you tend to:",
      options: [
        { text: "Go with the flow and adapt as needed", value: "jasmine" },
        { text: "Plan carefully and execute with precision", value: "basmati" },
        { text: "Stay deeply involved throughout the process", value: "risotto" },
        { text: "Take an unconventional, creative approach", value: "purple" }
      ]
    },
    {
      id: 4,
      question: "What draws you most to food and culture?",
      options: [
        { text: "Aromatic, comforting traditions", value: "jasmine" },
        { text: "Elegant, time-honored practices", value: "basmati" },
        { text: "Hands-on craftsmanship and technique", value: "risotto" },
        { text: "Nutritional innovation and wellness", value: "purple" }
      ]
    },
    {
      id: 5,
      question: "Rice feeds more than half of the world's population. What does this fact inspire in you?",
      options: [
        { text: "Appreciation for simple, essential connections", value: "jasmine" },
        { text: "Respect for cultural diversity and heritage", value: "basmati" },
        { text: "Wonder at human ingenuity and adaptation", value: "risotto" },
        { text: "Curiosity about sustainable food systems", value: "purple" }
      ]
    }
  ];

  const results = {
    jasmine: {
      name: "Jas the Comfy Companion",
      displayName: "Jasmine",
      image: "/images/Jasmine.svg",
      tagline: "You're warm, welcoming, and naturally bring people together. You create comfort wherever you go.",
      history: "Jasmine rice was born in Thailand over 2,000 years ago. It gets its name from the sweet aroma it releases while cooking—just like jasmine flowers. This rice became the heart of Southeast Asian meals.",
      funFact: "Fresh jasmine rice smells so good that warehouses storing it smell like flower gardens! The scent comes from a natural compound also found in pandan leaves.",
      reflection: "What simple pleasures help create a sense of togetherness in your life?"
    },
    basmati: {
      name: "Bas the Elegant Queen",
      displayName: "Basmati",
      image: "/images/Basmati.svg",
      tagline: "You appreciate the finer things. You're elegant, refined, and you know good things take time.",
      history: "Basmati means 'queen of fragrance' in Sanskrit. It's been grown in the foothills of the Himalayas for thousands of years, prized in royal feasts across India and Pakistan.",
      funFact: "Basmati rice nearly doubles in length when cooked but barely gets wider. The older it is, the better it tastes—aged basmati (stored for a year+) is the most prized.",
      reflection: "What aspects of your life have become richer as time has passed?"
    },
    risotto: {
      name: "Ris the Patient Creator",
      displayName: "Risotto", 
      image: "/images/Risotto.svg",
      tagline: "You believe good things take time. You're patient, present, and attentive, especially when something matters to you. You trust the process.",
      history: "Introduced to Italy in the 14th-15th century. Northern Italy's wetlands turned out to be perfect for growing short-grain rice.",
      funFact: "Stirring releases starch, creating risotto's creamy texture without any cream.",
      reflection: "What in your life could use more time and care?"
    },
    purple: {
      name: "Purp the Forbidden Icon",
      displayName: "Purple",
      image: "/images/Purple.svg",
      tagline: "You're one-of-a-kind. You seek out the unique, value what's authentic, and believe good things should be accessible to all.",
      history: "Once called 'Forbidden Rice' in ancient China—reserved only for emperors! Commoners weren't allowed to eat it. Now it's celebrated as a superfood available to everyone.",
      funFact: "When you cook purple rice, the water turns deep purple from antioxidants (the same ones in blueberries). It's more nutritious than brown rice!",
      reflection: "What knowledge or resources do you believe should be more widely shared?"
    }
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const counts = { jasmine: 0, basmati: 0, risotto: 0, purple: 0 };
    Object.values(answers).forEach(answer => {
      counts[answer]++;
    });
    
    const maxCount = Math.max(...Object.values(counts));
    const winners = Object.keys(counts).filter(key => counts[key] === maxCount);
    return winners[Math.floor(Math.random() * winners.length)];
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const resultType = calculateResult();
    const result = results[resultType];
    
    return (
      <>
        <PaddyFieldBackground />
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center relative z-10">
          <div className="max-w-md w-full">
            {/* Card */}
            <div className="bg-[#FAFAE6] rounded-3xl p-6 shadow-lg border-4 border-white">
              {/* Header with name and stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white border-3 border-black rounded-full px-6 py-3">
                  <h1 className="text-2xl font-bold text-black">{result.displayName}</h1>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Pixel character image */}
              <div className="flex justify-center mb-4">
                <img 
                  src={result.image} 
                  alt={result.displayName}
                  className="w-32 h-32 object-contain"
                />
              </div>

              <hr className="my-6 border-gray-300" />

              {/* Fun name */}
              <h2 className="text-xl font-bold text-black text-center mb-4">
                {result.name}
              </h2>

              {/* Tagline */}
              <p className="text-base font-medium text-black leading-relaxed mb-6">
                {result.tagline}
              </p>

              {/* History Section */}
              <div className="mb-4">
                <button className="bg-gray-200 border-2 border-gray-400 rounded-full px-5 py-2 text-sm font-bold text-black mb-3">
                  History
                </button>
                <p className="text-sm text-black leading-relaxed">
                  {result.history}
                </p>
              </div>

              {/* Fun Fact Section */}
              <div className="mb-4">
                <button className="bg-gray-200 border-2 border-gray-400 rounded-full px-5 py-2 text-sm font-bold text-black mb-3 flex items-center gap-2">
                  <span>✿</span> fun fact!
                </button>
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-3 bg-white">
                  <p className="text-sm text-black leading-relaxed">
                    {result.funFact}
                  </p>
                </div>
              </div>

              {/* Reflection Section */}
              <div className="mb-6">
                <button className="bg-gray-200 border-2 border-gray-400 rounded-full px-5 py-2 text-sm font-bold text-black mb-3">
                  Reflection
                </button>
                <p className="text-sm text-black leading-relaxed italic">
                  {result.reflection}
                </p>
              </div>

              {/* Restart button */}
              <button
                onClick={restart}
                className="w-full bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Take Quiz Again
              </button>
            </div>

            {/* Footer text */}
            <p className="text-center text-sm text-black mt-4 font-medium">
              what type of rice are you?
            </p>
          </div>
        </div>
      </>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <PaddyFieldBackground />
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center relative z-10">
        <div className="max-w-2xl w-full">
          <div className="mb-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Which Rice Are You?
            </h1>
            <p className="text-black font-medium">Discover your rice personality</p>
          </div>

          <div className="bg-[#FAFAE6] rounded-3xl shadow-lg p-6 md:p-8 border-4 border-white">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-black font-bold mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-gray-300">
                <div
                  className="bg-[#C8E632] h-full rounded-full transition-all duration-300 border-r-2 border-gray-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 rounded-2xl border-3 border-black bg-white hover:bg-[#C8E632] hover:scale-[1.02] transition-all duration-200 group shadow-md"
                  >
                    <div className="flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold mr-3 text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-black font-medium group-hover:font-bold">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="flex items-center text-black font-bold hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <div className="text-sm text-black font-medium">
                Select an answer to continue
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-black font-medium">
            <p>A thoughtful quiz experience for reflection and learning</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiceQuiz;
