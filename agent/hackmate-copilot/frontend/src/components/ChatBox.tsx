// import { useState } from "react";
// import axios from "axios";

// export default function ChatBox() {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = async () => {
//     const res = await axios.post("https://agentcopilot.netlify.app/:9009/query", { message: query });
//     setResponse(res.data.reply);
//   };

//   return (
//     <div className="p-4">
//       <textarea className="w-full border p-2" rows={4} onChange={(e) => setQuery(e.target.value)} />
//       <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleSubmit}>Ask Copilot</button>
//       <div className="mt-4 bg-gray-100 p-4">{response}</div>
//     </div>
//   );
// }

"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import "../chatbox.css"

export default function ChatBox() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const res = await axios.post("http://localhost:9009/query", {
        message: query,
      })
      setResponse(res.data.reply)
    } catch (error) {
      setResponse("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="chatbox-container">
      <div className="background-decoration">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
      </div>

      <div className="chatbox-card">
        <div className="header">
          <div className="logo-section">
            <div className="logo-container">
              <span>🤖</span>
              <div className="logo-badge">
                <span>✨</span>
              </div>
            </div>
            <div>
              <h1 className="title">HackMate Copilot</h1>
              <p className="subtitle">Your AI-powered coding assistant</p>
            </div>
          </div>
        </div>

        <div className="chat-interface">
          <div className="input-section">
            <div className="message-input-container">
              <div className="user-avatar">
                <span>👤</span>
              </div>
              <textarea
                className="message-input"
                rows={4}
                placeholder="Ask your copilot anything... (Press Enter to send, Shift+Enter for new line)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="submit-button" onClick={handleSubmit} disabled={isLoading || !query.trim()}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Thinking...</span>
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    <span>Ask Copilot</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {response && (
            <div className="response-section">
              <div className="bot-avatar">
                <span>🤖</span>
              </div>
              <div className="response-content">
                <div className="response-header">
                  <span className="response-title">HackMate Response</span>
                  <div className="status-dot"></div>
                </div>
                <div className="response-text">{response}</div>
              </div>
            </div>
          )}

          {!response && !isLoading && (
            <div className="welcome-message">
              <div className="welcome-badge">
                <span>✨</span>
                <span>Ready to help you code better!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
