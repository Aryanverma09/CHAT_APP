import React, { useState } from "react";
import axios from "axios";

const Bottom = ({ setResponse }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ai/generate`, {
        prompt: text,
      });
      setResponse(res.data.response);
      setText("");
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setResponse("Error: Could not get response from server.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mt-2"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask me anything..."
        className="bg-gray-500 p-3 sm:p-4 w-full text-sm sm:text-base md:text-lg rounded-2xl text-white focus:outline-none placeholder-gray-200"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-5 py-2 sm:px-6 sm:py-2 text-base md:text-lg rounded-2xl cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default Bottom;
