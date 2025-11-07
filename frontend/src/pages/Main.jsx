import React, { useState } from "react";
import Top from "../components/Top";
import Bottom from "../components/Bottom";

const Main = () => {
  const [response, setResponse] = useState("");

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] 
                      h-[85vh] sm:h-[90vh] md:h-[95vh]
                      bg-gray-300 rounded-3xl flex flex-col justify-between items-center p-4 md:p-8 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">I CAN HELP</h1>
        <Top response={response} />
        <Bottom setResponse={setResponse} />
      </div>
    </div>
  );
};

export default Main;
