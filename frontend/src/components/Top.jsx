import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";

const Top = ({ response }) => {
  return (
    <Card className="w-full flex-1 overflow-y-auto border border-gray-200 shadow-lg rounded-2xl bg-white max-h-[50vh]">
      <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col gap-4">
        {response ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 px-3 py-2 rounded-2xl shadow-md w-fit max-w-[90%] text-sm sm:text-base break-words"
          >
            {response}
          </motion.div>
        ) : (
          <p className="text-gray-500 italic text-center mt-10 text-sm sm:text-base">
            Ask something to get started...
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default Top;
