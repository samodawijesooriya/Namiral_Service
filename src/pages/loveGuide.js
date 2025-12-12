import React, { useState } from 'react';
import { Heart, ArrowLeft, Sparkles, Gift, MessageCircle, Smile, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoveChatbot from '../components/LoveChatbot';
import { useNavigate } from 'react-router-dom';

const LoveGuide = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('getting-started');

  const loveTopics = {
    'getting-started': {
      title: "How to Get a Girl",
      icon: Heart,
      color: "rose",
      sections: [
        {
          subtitle: "Build Confidence",
          tips: [
            "Work on yourself first - pursue your passions and hobbies",
            "Take care of your appearance and hygiene",
            "Develop good posture and body language",
            "Practice positive self-talk and self-improvement",
            "Be comfortable being yourself"
          ]
        },
        {
          subtitle: "Make the First Move",
          tips: [
            "Start with a genuine smile and eye contact",
            "Approach with confidence but not arrogance",
            "Use a casual, friendly opening line",
            "Show interest in getting to know her",
            "Be respectful of her space and boundaries"
          ]
        },
        {
          subtitle: "Create Connection",
          tips: [
            "Ask thoughtful questions about her interests",
            "Listen actively and remember details she shares",
            "Find common ground and shared interests",
            "Be authentic and honest about yourself",
            "Make her laugh with natural humor"
          ]
        },
        {
          subtitle: "Show Your Interest",
          tips: [
            "Compliment her personality and intellect, not just looks",
            "Show consistent interest through messages and calls",
            "Plan thoughtful dates that match her interests",
            "Be reliable and follow through on your promises",
            "Give her space - don't be too pushy or clingy"
          ]
        }
      ]
    },
    'loving-caring': {
      title: "How to Love & Care for Her",
      icon: Sparkles,
      color: "pink",
      sections: [
        {
          subtitle: "Emotional Support",
          tips: [
            "Be her safe space - let her express feelings without judgment",
            "Validate her emotions even if you don't fully understand",
            "Be present during difficult times, not just good times",
            "Remember important dates and milestones",
            "Support her dreams and ambitions"
          ]
        },
        {
          subtitle: "Show Affection",
          tips: [
            "Give random hugs and kisses throughout the day",
            "Hold hands in public - show you're proud to be with her",
            "Leave sweet notes or messages when apart",
            "Make time for quality one-on-one moments",
            "Tell her you love her - words matter"
          ]
        },
        {
          subtitle: "Acts of Service",
          tips: [
            "Help with tasks without being asked",
            "Bring her favorite food or drink as a surprise",
            "Take care of things when she's stressed or tired",
            "Plan dates so she doesn't have to",
            "Remember and do the little things she mentions"
          ]
        },
        {
          subtitle: "Respect & Trust",
          tips: [
            "Keep your promises and commitments",
            "Be honest and transparent in communication",
            "Respect her opinions even when you disagree",
            "Give her freedom and trust her",
            "Defend her when she's not around"
          ]
        }
      ]
    },
    'surprises': {
      title: "How to Surprise Her",
      icon: Gift,
      color: "purple",
      sections: [
        {
          subtitle: "Romantic Surprises",
          tips: [
            "Plan a surprise date to her favorite place",
            "Create a romantic dinner at home with candles",
            "Book a weekend getaway without telling her",
            "Recreate your first date together",
            "Set up a stargazing night with blankets and snacks"
          ]
        },
        {
          subtitle: "Thoughtful Gestures",
          tips: [
            "Buy flowers on a random day, not just special occasions",
            "Get her something she mentioned weeks ago",
            "Make a playlist of songs that remind you of her",
            "Write her a heartfelt letter expressing your feelings",
            "Create a photo album of your memories together"
          ]
        },
        {
          subtitle: "Creative Ideas",
          tips: [
            "Wake her up with breakfast in bed",
            "Plan a scavenger hunt with love notes",
            "Surprise her at work with lunch",
            "Organize a surprise party with her friends",
            "Learn something she's passionate about to surprise her"
          ]
        },
        {
          subtitle: "Small Daily Surprises",
          tips: [
            "Send her a sweet text in the morning",
            "Pick up her favorite coffee or snack",
            "Do a chore she usually does",
            "Give random compliments throughout the day",
            "Plan a movie night with her favorite films"
          ]
        }
      ]
    },
    'impressing': {
      title: "How to Impress Her",
      icon: Star,
      color: "amber",
      sections: [
        {
          subtitle: "Be a Gentleman",
          tips: [
            "Open doors and pull out chairs for her",
            "Walk on the traffic side of the sidewalk",
            "Offer your jacket when she's cold",
            "Be polite to waiters, cashiers, and everyone",
            "Respect her family and friends"
          ]
        },
        {
          subtitle: "Show Intelligence & Humor",
          tips: [
            "Have meaningful conversations about various topics",
            "Share your knowledge without being condescending",
            "Make her laugh with witty, appropriate humor",
            "Be curious and ask insightful questions",
            "Stay updated on current events and culture"
          ]
        },
        {
          subtitle: "Demonstrate Ambition",
          tips: [
            "Have clear goals and work towards them",
            "Be passionate about your career or studies",
            "Show financial responsibility",
            "Continuously learn and improve yourself",
            "Balance ambition with making time for her"
          ]
        },
        {
          subtitle: "Be Adventurous",
          tips: [
            "Suggest trying new activities together",
            "Be spontaneous occasionally",
            "Take her to unique, interesting places",
            "Show courage in trying new things",
            "Create exciting memories together"
          ]
        }
      ]
    },
    'making-happy': {
      title: "How to Make Her Happy When She's Angry",
      icon: Smile,
      color: "emerald",
      sections: [
        {
          subtitle: "Immediate Response",
          tips: [
            "Give her space if she needs it - don't force conversation",
            "Listen to her without interrupting or defending yourself",
            "Acknowledge her feelings: 'I understand why you're upset'",
            "Take responsibility if you're at fault",
            "Don't minimize her feelings or say 'calm down'"
          ]
        },
        {
          subtitle: "Sincere Apology",
          tips: [
            "Say 'I'm sorry' and mean it - don't add 'but'",
            "Explain what you understand you did wrong",
            "Show how you'll avoid the same mistake",
            "Don't make excuses or blame others",
            "Give her time to process your apology"
          ]
        },
        {
          subtitle: "Make Amends",
          tips: [
            "Do something thoughtful to show you care",
            "Bring her favorite comfort food or treat",
            "Write a heartfelt apology note if words are hard",
            "Show through actions, not just words",
            "Be patient - healing takes time"
          ]
        },
        {
          subtitle: "Long-term Solutions",
          tips: [
            "Identify patterns that upset her and work on them",
            "Communicate better to prevent misunderstandings",
            "Show consistent improvement in behavior",
            "Check in regularly: 'Are we okay now?'",
            "Learn her love language and speak it"
          ]
        },
        {
          subtitle: "When to Give Space",
          tips: [
            "Some girls need time alone to process emotions",
            "Send one caring message but don't bombard her",
            "Let her know you're there when she's ready",
            "Don't pressure her to 'get over it' quickly",
            "Respect her timeline for forgiveness"
          ]
        }
      ]
    },
    'communication': {
      title: "Communication & Understanding",
      icon: MessageCircle,
      color: "blue",
      sections: [
        {
          subtitle: "Active Listening",
          tips: [
            "Put away your phone when she's talking",
            "Make eye contact and show you're engaged",
            "Ask follow-up questions about what she shares",
            "Remember details from previous conversations",
            "Don't interrupt or try to 'fix' everything"
          ]
        },
        {
          subtitle: "Express Yourself",
          tips: [
            "Share your feelings openly and honestly",
            "Don't bottle up emotions until you explode",
            "Use 'I feel' statements instead of accusations",
            "Be vulnerable - it creates deeper connection",
            "Compliment her regularly and specifically"
          ]
        },
        {
          subtitle: "Conflict Resolution",
          tips: [
            "Never go to bed angry - address issues",
            "Fight fair - no name calling or bringing up past",
            "Focus on the issue, not attacking her character",
            "Find compromise and middle ground",
            "Remember you're a team, not opponents"
          ]
        },
        {
          subtitle: "Understanding Her Needs",
          tips: [
            "Ask what makes her feel loved and do it",
            "Notice when she's stressed or tired",
            "Learn her communication style and adapt",
            "Understand she may need to vent, not get advice",
            "Celebrate her wins like they're your own"
          ]
        }
      ]
    }
  };

  const topicButtons = [
    { id: 'getting-started', label: 'Getting Started', color: 'rose' },
    { id: 'loving-caring', label: 'Love & Care', color: 'pink' },
    { id: 'surprises', label: 'Surprises', color: 'purple' },
    { id: 'impressing', label: 'Impress Her', color: 'amber' },
    { id: 'making-happy', label: 'When Angry', color: 'emerald' },
    { id: 'communication', label: 'Communication', color: 'blue' }
  ];

  const currentTopic = loveTopics[selectedTopic];
  const TopicIcon = currentTopic.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center text-rose-600 hover:text-rose-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-16 h-16 text-rose-600 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-rose-600 mb-4">
              Love & Relationship Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to winning hearts and building meaningful relationships
            </p>
          </div>

          {/* Topic Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {topicButtons.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedTopic === topic.id
                    ? `bg-${topic.color}-600 text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
                style={{
                  backgroundColor: selectedTopic === topic.id ? 
                    topic.color === 'rose' ? '#e11d48' :
                    topic.color === 'pink' ? '#ec4899' :
                    topic.color === 'purple' ? '#9333ea' :
                    topic.color === 'amber' ? '#f59e0b' :
                    topic.color === 'emerald' ? '#10b981' :
                    '#3b82f6' : undefined
                }}
              >
                {topic.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center justify-center mb-8">
              <TopicIcon className={`w-12 h-12 text-${currentTopic.color}-600 mr-4`} />
              <h2 className="text-4xl font-bold text-gray-800">{currentTopic.title}</h2>
            </div>

            <div className="space-y-8">
              {currentTopic.sections.map((section, index) => (
                <div key={index} className="border-l-4 border-rose-300 pl-6 py-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.subtitle}</h3>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <Heart className="w-5 h-5 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Important Reminders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Golden Rules</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">❤️</span>
                  <span>Always be genuine and authentic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❤️</span>
                  <span>Respect is the foundation of love</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❤️</span>
                  <span>Communication is key to everything</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❤️</span>
                  <span>Actions speak louder than words</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">What NOT to Do</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Never lie or play mind games</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Don't be controlling or possessive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Never compare her to others</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Don't ignore her feelings or concerns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-8 text-center border-2 border-rose-200">
            <p className="text-xl text-gray-800 font-medium mb-4">
              💕 Remember: Every girl is unique. These are guidelines, not rules. 
              The most important thing is to be yourself and treat her with love, respect, and kindness.
            </p>
            <p className="text-lg text-gray-700">
              Love is a journey, not a destination. Be patient, be caring, and most importantly - be real. 💖
            </p>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Love Chatbot */}
      <LoveChatbot />
    </div>
  );
};

export default LoveGuide;