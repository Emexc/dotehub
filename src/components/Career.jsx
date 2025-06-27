import { useState } from "react";
import { FaRobot, FaEthereum, FaCheck, FaBriefcase, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const OpportunitiesSection = () => {
  const [activeTab, setActiveTab] = useState("blockchain");

  const opportunities = {
    blockchain: {
      title: "Blockchain Career Opportunities",
      icon: <FaEthereum className="text-3xl" />,
      careers: [
        {
          title: "Blockchain Developer",
          salary: "$90,000 - $180,000",
          description: "Build decentralized applications and smart contracts",
          demand: "High demand across industries",
        },
        {
          title: "Smart Contract Engineer",
          salary: "$110,000 - $200,000",
          description: "Design and audit secure smart contracts",
          demand: "Critical for DeFi and Web3 projects",
        },
        {
          title: "Blockchain Architect",
          salary: "$130,000 - $250,000",
          description: "Design blockchain solutions for enterprises",
          demand: "Growing need in corporate adoption",
        },
        {
          title: "Web3 Frontend Developer",
          salary: "$85,000 - $160,000",
          description: "Build user interfaces for DApps",
          demand: "Increasing with Web3 adoption",
        },
      ],
      benefits: [
        "Future-proof career in Web3 revolution",
        "Work on cutting-edge decentralized technology",
        "High earning potential with global opportunities",
        "Be part of the financial system transformation",
      ],
    },
    ai: {
      title: "AI Career Opportunities",
      icon: <FaRobot className="text-3xl" />,
      careers: [
        {
          title: "Machine Learning Engineer",
          salary: "$100,000 - $200,000",
          description: "Develop and deploy ML models",
          demand: "Essential across all tech sectors",
        },
        {
          title: "AI Research Scientist",
          salary: "$120,000 - $250,000",
          description: "Advance the frontiers of AI",
          demand: "Critical for innovation",
        },
        {
          title: "Data Scientist",
          salary: "$90,000 - $180,000",
          description: "Extract insights from complex data",
          demand: "High demand in all industries",
        },
        {
          title: "NLP Engineer",
          salary: "$115,000 - $220,000",
          description: "Work on language models and chatbots",
          demand: "Rapidly growing field",
        },
      ],
      benefits: [
        "Shape the future of technology",
        "Solve complex real-world problems",
        "Work across diverse industries",
        "Continuous learning and growth",
      ],
    },
  };

  const stats = [
    { icon: <FaBriefcase />, value: "1M+", label: "Job Openings" },
    { icon: <FaMoneyBillWave />, value: "$100K+", label: "Average Salary" },
    { icon: <FaChartLine />, value: "35%", label: "Growth Rate" },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Transform Your Future with Cutting-Edge Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Blockchain and AI skills open doors to high-growth, high-paying
            careers in the most exciting tech fields.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-3xl mb-2 text-cyan-400 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800 rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab("blockchain")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === "blockchain"
                  ? "bg-linear-to-r from-purple-500 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >
              Blockchain
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === "ai"
                  ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              Artificial Intelligence
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Careers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className={`p-6 text-white ${
                activeTab === "blockchain"
                  ? "bg-linear-to-r from-purple-500 to-indigo-600"
                  : "bg-linear-to-r from-cyan-500 to-blue-600"
              }`}
            >
              <div className="flex items-center">
                {opportunities[activeTab].icon}
                <h3 className="text-2xl font-bold ml-3">
                  {opportunities[activeTab].title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {opportunities[activeTab].careers.map((career, index) => (
                  <div key={index} className="border-b border-gray-700 pb-6">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {career.title}
                    </h4>
                    <div className="flex items-center text-gray-400 mb-2">
                      <span className="font-medium text-cyan-400">
                        {career.salary}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{career.demand}</span>
                    </div>
                    <p className="text-gray-300">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="p-6 bg-gray-700 text-white">
                <h3 className="text-2xl font-bold">Why Learn {activeTab === "blockchain" ? "Blockchain" : "AI"}?</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {opportunities[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className={`flex-shrink-0 mt-1 ${
                          activeTab === "blockchain"
                            ? "text-purple-400"
                            : "text-cyan-400"
                        }`}
                      >
                        <FaCheck />
                      </div>
                      <span className="ml-3 text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`p-6 rounded-xl shadow-lg overflow-hidden text-white ${
                activeTab === "blockchain"
                  ? "bg-linear-to-r from-purple-500 to-indigo-600"
                  : "bg-linear-to-r from-cyan-500 to-blue-600"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="mb-6 opacity-90">
                Enroll now and gain the skills that will shape the future of
                technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;