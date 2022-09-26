import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <section className="fixed left-0 top-0 bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "500px" }}
          transition={{ duration: 1 }}
          className="bg-white w-[450px] h-[500px] rounded-xl shadow-lg flex justify-center items-start flex-col p-10 gap-8 relative"
        >
          <motion.img
            whileHover={{ rotate: 180, scale: 1.1 }}
            className="absolute right-5 top-5 w-[25px] hover:cursor-pointer"
            src="/close.png"
            alt=""
            onClick={() => setIsOpen(false)}
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-slate-200 w-full p-4 rounded-xl"
            type="email"
            placeholder="example@gmail.com"
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-slate-200 w-full p-4 rounded-xl"
            type="password"
            placeholder="Enter your password"
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-slate-200 w-full p-4 rounded-xl"
            type="password"
            placeholder="Confirm your password"
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-blue-500 hover:bg-blue-600 transition ease-linear delay-75 text-white font-medium p-3 px-10 rounded-[50px]"
          >
            Sign Up
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Modal;
