import React, { useState } from "react";
import Top from "../components/Top";
import Bottom from "../components/Bottom";

const Main = () => {
    const [response, setResponse] = useState('')
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="h-[80vh] w-[80vh] bg-gray-300 rounded-3xl flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl mb-6">I CAN HELP</h1>
        <Top response={response}/>
        <Bottom setResponse={setResponse} />
      </div>
    </div>
  );
};

export default Main;
