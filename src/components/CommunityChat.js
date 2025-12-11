import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-reply responses based on user input
  const getAutoReply = (userMessage) => {
    const msg = userMessage.toLowerCase().trim();
    
    // Check for specific keywords and return appropriate responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! Welcome to our community. How can I help you today?';
    } else if (msg.includes('service') || msg.includes('services')) {
      return 'We offer a variety of community services. Check out our Services page for more details!';
    } else if (msg.includes('event') || msg.includes('events')) {
      return 'Visit our Events page to see upcoming community events and activities!';
    } else if (msg.includes('contact') || msg.includes('reach')) {
      return 'You can reach us through the Contact page. We\'d love to hear from you!';
    } else if (msg.includes('help') || msg.includes('support')) {
      return 'I\'m here to help! You can ask about our services, events, or how to contact us.';
    } else if (msg.includes('thank') || msg.includes('thanks')) {
      return 'You\'re welcome! Feel free to ask if you need anything else.';
    } else if (msg.includes('bye') || msg.includes('goodbye')) {
      return 'Goodbye! Have a great day and hope to see you around!';
    } else if (msg.includes('gym') || msg.includes('fitness')) {
      return 'Check out our Gym Instructions page for fitness tips and guidance!';
    } else if (msg.includes('about')) {
      return 'Learn more about our community on the About page!';
    } else {
      // Default responses for unmatched messages
      const defaultReplies = [
        'Thanks for your message! How can I assist you further?',
        'Interesting! Tell me more about what you\'re looking for.',
        'I\'m here to help with information about our community services and events!',
        'Feel free to browse our website or ask me specific questions about our services.',
      ];
      return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
    }
  };

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Send message and get auto-reply
  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: newMessage.trim(),
      timestamp: new Date().toISOString()
    };

    const replyText = getAutoReply(newMessage);
    const botReply = {
      id: Date.now() + 1,
      sender: 'bot',
      text: replyText,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage, botReply]);
    setNewMessage('');
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="font-semibold">Chat Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border-2 border-red-600">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <h3 className="font-bold">Chat Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-red-700 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <MessageCircle size={48} className="mx-auto mb-2 opacity-50" />
                <p>Start a conversation! Ask me anything.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 ${
                    msg.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="break-words">{msg.text}</p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <form onSubmit={sendMessage} className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                maxLength={500}
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommunityChat;