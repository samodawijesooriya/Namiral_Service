import React, { useState } from 'react';
import { Dumbbell, ArrowLeft, Play, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const GymInstructions = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('chest');

  const workoutCategories = {
    chest: {
      title: "Chest Workouts",
      color: "red",
      exercises: [
        {
          name: "Bench Press",
          steps: [
            "Lie flat on the bench with feet firmly on the ground",
            "Grip the bar slightly wider than shoulder-width",
            "Lower the bar to mid-chest with control",
            "Press up explosively while keeping your back flat",
            "Lock out arms at the top without hyperextending"
          ],
          tips: ["Keep shoulder blades retracted", "Don't bounce the bar off your chest", "Breathe in on descent, out on press"]
        },
        {
          name: "Push-Ups",
          steps: [
            "Start in plank position with hands shoulder-width apart",
            "Keep body in straight line from head to heels",
            "Lower chest to ground with elbows at 45-degree angle",
            "Push back up to starting position",
            "Maintain core engagement throughout"
          ],
          tips: ["Don't let hips sag", "Full range of motion", "Control both up and down movements"]
        }
      ]
    },
    back: {
      title: "Back Workouts",
      color: "blue",
      exercises: [
        {
          name: "Pull-Ups",
          steps: [
            "Hang from bar with hands slightly wider than shoulders",
            "Engage core and squeeze shoulder blades together",
            "Pull yourself up until chin clears the bar",
            "Lower with control to full extension",
            "Avoid swinging or using momentum"
          ],
          tips: ["Full range of motion is key", "Focus on using back, not just arms", "Keep chest up throughout movement"]
        },
        {
          name: "Barbell Row",
          steps: [
            "Stand with feet hip-width apart, knees slightly bent",
            "Hinge at hips to about 45-degree angle",
            "Grip bar with hands shoulder-width apart",
            "Pull bar to lower chest, squeezing shoulder blades",
            "Lower with control back to starting position"
          ],
          tips: ["Keep back neutral, not rounded", "Drive elbows back", "Don't use momentum"]
        }
      ]
    },
    legs: {
      title: "Leg Workouts",
      color: "green",
      exercises: [
        {
          name: "Squats",
          steps: [
            "Stand with feet shoulder-width apart, toes slightly out",
            "Keep chest up and core engaged",
            "Lower by bending knees and pushing hips back",
            "Go to at least parallel (thighs parallel to ground)",
            "Drive through heels to return to standing"
          ],
          tips: ["Keep knees in line with toes", "Maintain neutral spine", "Full depth for best results"]
        },
        {
          name: "Deadlifts",
          steps: [
            "Stand with feet hip-width apart, bar over mid-foot",
            "Bend at hips and knees to grip bar",
            "Keep back straight, chest up, shoulders back",
            "Drive through heels, extending hips and knees",
            "Stand fully upright, then lower with control"
          ],
          tips: ["Bar should travel in straight line", "Keep bar close to body", "Don't round your back"]
        }
      ]
    },
    shoulders: {
      title: "Shoulder Workouts",
      color: "purple",
      exercises: [
        {
          name: "Overhead Press",
          steps: [
            "Stand with feet shoulder-width apart",
            "Hold bar at shoulder height, grip slightly wider than shoulders",
            "Brace core and press bar straight up",
            "Lock out arms overhead",
            "Lower with control back to shoulders"
          ],
          tips: ["Keep core tight throughout", "Press in straight line", "Don't arch back excessively"]
        },
        {
          name: "Lateral Raises",
          steps: [
            "Stand with dumbbells at sides, slight bend in elbows",
            "Keep core engaged and chest up",
            "Raise arms out to sides until parallel to ground",
            "Pause briefly at top",
            "Lower with control back to starting position"
          ],
          tips: ["Don't use momentum", "Lead with elbows, not hands", "Slight forward lean is okay"]
        }
      ]
    },
    arms: {
      title: "Arm Workouts",
      color: "orange",
      exercises: [
        {
          name: "Bicep Curls",
          steps: [
            "Stand with dumbbells at sides, palms facing forward",
            "Keep elbows close to torso",
            "Curl weights up by contracting biceps",
            "Squeeze at the top",
            "Lower with control, don't drop weights"
          ],
          tips: ["Don't swing or use momentum", "Keep elbows stationary", "Control the negative"]
        },
        {
          name: "Tricep Dips",
          steps: [
            "Position hands shoulder-width on bench behind you",
            "Extend legs out with heels on ground",
            "Lower body by bending elbows to 90 degrees",
            "Press through palms to return to start",
            "Keep elbows close to body"
          ],
          tips: ["Don't go too low if shoulders hurt", "Keep shoulders down", "Focus on triceps, not chest"]
        }
      ]
    }
  };

  const generalTips = [
    "Always warm up for 5-10 minutes before starting",
    "Focus on proper form over heavy weight",
    "Breathe properly - exhale on exertion, inhale on return",
    "Stay hydrated throughout your workout",
    "Rest 48 hours between training same muscle groups",
    "Cool down and stretch after your workout",
    "Progressive overload - gradually increase weight or reps",
    "Listen to your body and avoid training through pain"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Dumbbell className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
              Gym Workout Instructions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master proper form and technique for effective, safe workouts
            </p>
          </div>

          {/* Category Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(workoutCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {workoutCategories[category].title}
              </button>
            ))}
          </div>

          {/* Selected Category Exercises */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {workoutCategories[selectedCategory].exercises.map((exercise, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <Play className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">{exercise.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-3">Step-by-Step Instructions:</h4>
                    <ol className="space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Pro Tips:</h4>
                    <ul className="space-y-1">
                      {exercise.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Tips Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">General Workout Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generalTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Warning */}
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <p className="text-yellow-800">
              <strong>Important:</strong> Always consult with a healthcare provider before starting any new exercise program. 
              If you experience pain (not to be confused with muscle fatigue), stop immediately and seek professional advice.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GymInstructions;