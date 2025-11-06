import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card"; // ✅ use alias from jsconfig.json

const Top = ({ response }) => {
  return (
    <Card className="h-[50vh] w-[70vh] overflow-y-auto border border-gray-200 shadow-lg rounded-2xl bg-white">
      <CardContent className="p-6 flex flex-col gap-4">
        {response ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 px-4 py-3 rounded-2xl shadow-md w-fit max-w-[90%]"
          >
            {response}
          </motion.div>
        ) : (
          <p className="text-gray-500 italic text-center mt-20">
            Ask something to get started...
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default Top;
