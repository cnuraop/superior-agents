import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://agentcopilot.netlify.app/query", { message: query });
    setResponse(res.data.reply);
  };

  return (
    <div className="p-4">
      <textarea className="w-full border p-2" rows={4} onChange={(e) => setQuery(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleSubmit}>Ask Copilot</button>
      <div className="mt-4 bg-gray-100 p-4">{response}</div>
    </div>
  );
}
