"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/Button";
import SkillSection from "../../components/SkillCloud";
function AboutPage() {
    const skills = [
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "REST APIs",
        "Express.js",
        "Hono.js",
        "JWT",
        "Zod",
        "Serverless",
        "Turborepo",
        "Websokets",
        "Postgres",
        "MongoDB",
        "MySQL",
        "Prisma",
        "Firebase",
        "Git/Github",
        "CI/CD",
        "Nginx",
        "AWS/EC2/S3",
        "Docker",
        "C++",
        "Javascript",
        "Typescript",
      ]
      
    return <div className="flex flex-col m-10 justify-between md:m-20 xl:flex-row">
    <div className="flex flex-col justify-center xl:w-1/2">
        <motion.h4
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-semibold md:text-4xl md:my-1"
        >
          About
        </motion.h4>
        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-md font-bold my-4 md:text-lg md:my-2"
        >
         {"IIIT Ranchi(computer science): nov'22-july'26"}
         <br></br>
         {"8.71"}
         <br></br>
         <br></br>
         {"TINSES, Varanasi: april'20-mar'22(xii)"}
         <br></br>
         {"94.8%"}
         <br></br>
         <br></br>
         {"TINSES, Varanasi: april'18-mar'20(x)"}
         <br></br>
         {"97%"}
        </motion.h1>
        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-md font-bold my-8 md:text-lg md:my-6"
        >
          I’m a third-year Computer Science Engineering student at IIIT Ranchi, currently pursuing my BTech. My academic journey has provided me with a strong foundation in computer science principles, and I am eager to apply my knowledge in real-world scenarios.
        </motion.h1>
        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-md font-bold md:text-lg md:mb-6"
        >
         In addition to my education, I am developing skills in full stack development, software engineering, and WiFi networking. I am actively looking for a Full Stack Internship to gain hands-on experience and further enhance my abilities in building scalable applications and optimizing network systems.
        </motion.h1>
        <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="text-2xl my-4 font-semibold text-gray-300 md:text-3xl md:mt-8"
        >
            My Tech Stack
        </motion.h2>
        <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="text-md font-semibold text-gray-300 md:text-lg"
        >
         <div className='flex flex-wrap gap-4 mt-4'>
                                 {skills.map((skill, index) => (
                                     <Button key={index} content={skill}/>
                                 ))}
                </div>
        </motion.h2>
        </div>
        <div>
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.7 }}
        className=""
    >
        {/* <Image
            src="/images/about.jpg"
            alt=""
            width="480"
            height="640"
        /> */}
         <SkillSection />
    </motion.div>
    </div>
</div>
}

export default AboutPage;
