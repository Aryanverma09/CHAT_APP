import React, { useState } from "react";
import axios from "axios";

const Bottom = ({ setResponse }) => {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ai/generate`, {
        prompt: text,
      }).catch((err) => {
        console.error("Error in POST request:", err);
        throw err;
      });
      setResponse(res.data.response); // send data to Main
      setText(""); // clear input
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setResponse("Error: Could not get response from server.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[10vh] w-[70vh] gap-5 flex justify-center items-center"
    >
      <input
        type="text"
        value={text}
        onChange={onChangeHandler}
        placeholder="Ask me anything..."
        className="bg-gray-500 p-4 w-[50vh] text-xl rounded-2xl text-white focus:outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 text-xl rounded-2xl cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default Bottom;
