"use client"
import { motion } from "framer-motion";

import {Card,Card1,Card2} from "../../components/Card";
function WorkPage() {
    return <div>
        <div className="m-10">
            <div>
            <motion.h4
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-semibold md:text-4xl md:my-8"
        >
          Projects
        </motion.h4>
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="my-10"
        >
          <Card></Card>
        </motion.h3>
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="my-10"
        >
          <Card1></Card1>
        </motion.h3>
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="my-10"
        >
          <Card2></Card2>
        </motion.h3>
            </div>
        </div>
    </div>
}

export default WorkPage;
