import { useState } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User } from "lucide-react";
import "./aiChatAssistant.css";

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  // Static mock UI messages to simulate a live, professional interaction
  const [messages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your HR AI assistant. You can ask me about company policies, leave guidelines, or upcoming calendar events.",
    },
    {
      sender: "user",
      text: "How many vacation days do I start with annually?",
    },
    {
      sender: "bot",
      text: "According to the updated 2026 framework, standard portal members receive a maximum allocation of 25 vacation days per year.",
    },
  ]);

  return (
    <div className="chat-assistant-root">
      {/* 🔘 TRIGGER FLOATING ACTION BUTTON */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="chat-fab-trigger group"
          title="Open AI Workspace Assistant"
        >
          <MessageSquare className="fab-icon" />
          <span className="notification-ping-wrapper">
            <span className="ping-wave" />
            <span className="ping-core" />
          </span>
        </button>
      )}

      {/* 💬 CHAT ASSISTANT PANEL WINDOW */}
      {isOpen && (
        <div className="chat-panel-window">
          {/* WINDOW HEADER */}
          <div className="chat-window-header">
            <div className="header-identity-cluster">
              <div className="sparkle-avatar-wrapper">
                <Sparkles className="sparkle-icon" />
              </div>
              <div>
                <h3 className="header-title-text">PortalHub AI Core</h3>
                <span className="header-status-indicator">
                  <span className="status-dot-pulse" /> Online
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="window-close-btn"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* CHAT MESSAGES CANVAS LAYER */}
          <div className="chat-messages-canvas">
            {messages.map((msg, index) => {
              const isBot = msg.sender === "bot";
              return (
                <div
                  key={index}
                  className={`msg-row-wrapper ${!isBot ? "user-row-direction" : ""}`}
                >
                  {/* Avatar Icons */}
                  <div
                    className={`sender-avatar-badge ${
                      isBot ? "avatar-bot-theme" : "avatar-user-theme"
                    }`}
                  >
                    {isBot ? (
                      <Bot className="h-3.5 w-3.5" />
                    ) : (
                      <User className="h-3.5 w-3.5" />
                    )}
                  </div>

                  {/* Message Bubble Content */}
                  <div
                    className={`msg-bubble-base ${
                      isBot ? "bubble-bot-theme" : "bubble-user-theme"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTER CONTROL BAR */}
          <div className="chat-footer-controls">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="footer-form-element"
            >
              <input
                type="text"
                placeholder="Ask about policy, allowances, metrics..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-composition-input"
              />
              <button type="submit" className="chat-msg-send-btn">
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
