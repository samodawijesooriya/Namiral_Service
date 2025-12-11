import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Users, X } from 'lucide-react';

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Show error message
  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 5000); // Auto-hide after 5 seconds
  };

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load messages from storage
  const loadMessages = async () => {
    try {
      const result = await window.storage.get('chat-messages', true);
      if (result) {
        const data = JSON.parse(result.value);
        setMessages(data);
      }
    } catch (error) {
      console.log('No messages yet');
      setMessages([]);
    }
  };

  // Load online users
  const loadOnlineUsers = async () => {
    try {
      const result = await window.storage.list('user-online:', true);
      if (result && result.keys) {
        const users = new Set(result.keys.map(key => key.replace('user-online:', '')));
        setOnlineUsers(users);
      }
    } catch (error) {
      console.log('Error loading users');
    }
  };

  // Mark user as online
  const markOnline = async () => {
    if (username) {
      try {
        await window.storage.set(`user-online:${username}`, Date.now().toString(), true);
      } catch (error) {
        console.error('Error marking online');
      }
    }
  };

  // Remove user from online list
  const markOffline = async () => {
    if (username) {
      try {
        await window.storage.delete(`user-online:${username}`, true);
      } catch (error) {
        console.error('Error marking offline');
      }
    }
  };

  // Send message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || isLoading) return;

    setIsLoading(true);
    const message = {
      id: Date.now(),
      username,
      text: newMessage.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      const updatedMessages = [...messages, message].slice(-100); // Keep last 100 messages
      await window.storage.set('chat-messages', JSON.stringify(updatedMessages), true);
      setMessages(updatedMessages);
      setNewMessage('');
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message:', error);
      showError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle username submission
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
      markOnline();
    }
  };

  // Refresh messages and online users periodically
  useEffect(() => {
    if (isUsernameSet) {
      loadMessages();
      loadOnlineUsers();
      
      const interval = setInterval(() => {
        loadMessages();
        loadOnlineUsers();
        markOnline(); // Keep user marked as online
      }, 3000);

      return () => {
        clearInterval(interval);
        markOffline();
      };
    }
  }, [isUsernameSet, username]);

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
      {/* Error Toast Notification */}
      {error && (
        <div className="absolute bottom-20 right-0 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg mb-4 animate-slide-up flex items-center gap-2 max-w-sm">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="font-medium">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="ml-auto flex-shrink-0 hover:bg-red-600 rounded p-1 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="font-semibold">Community Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border-2 border-red-600">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-bold">Community Chat</h3>
                <p className="text-xs text-red-100 flex items-center gap-1">
                  <Users size={12} />
                  {onlineUsers.size} online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-red-700 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Username Input */}
          {!isUsernameSet ? (
            <div className="flex-1 flex items-center justify-center p-6">
              <form onSubmit={handleUsernameSubmit} className="w-full">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  Choose a username to start chatting
                </h4>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none mb-4"
                  maxLength={20}
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Join Chat
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Your messages will be visible to everyone
                </p>
              </form>
            </div>
          ) : (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <MessageCircle size={48} className="mx-auto mb-2 opacity-50" />
                    <p>No messages yet. Be the first to say hello!</p>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`mb-3 ${
                        msg.username === username ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                          msg.username === username
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-gray-800 border border-gray-200'
                        }`}
                      >
                        <p className="font-semibold text-sm mb-1">
                          {msg.username}
                        </p>
                        <p className="break-words">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.username === username
                              ? 'text-red-100'
                              : 'text-gray-500'
                          }`}
                        >
                          {formatTime(msg.timestamp)}
                        </p>
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
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !newMessage.trim()}
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunityChat;