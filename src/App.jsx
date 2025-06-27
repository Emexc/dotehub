import { useState, useEffect } from "react";
import { FaRobot, FaEthereum } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import OpportunitiesSection from "./components/Career";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to July 13th
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 6, 13); // Month is 0-indexed (6 = July)

      // If this year's July 13 has passed, use next year's date
      if (now > targetDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      }

      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Target date reached
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Avatar data
  const enrolledAvatars = [
    { bg: "bg-purple-500", initials: "AB" },
    { bg: "bg-cyan-500", initials: "CD" },
    { bg: "bg-pink-500", initials: "EF" },
    { bg: "bg-blue-500", initials: "GH" },
    { bg: "bg-indigo-500", initials: "IJ" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.classList.add("animate-fadeInUp");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Program timeline data
  const programTimeline = [
    {
      week: 1,
      date: "Jul 13-19",
      blockchainContent: "Blockchain Fundamentals & Ethereum Basics",
      blockchainTopics: [
        "Understanding decentralized systems",
        "Ethereum architecture overview",
        "Setting up development environment",
        "Writing your first Solidity contract",
      ],
      aiContent: "Introduction to Artificial Intelligence",
      aiTopics: [
        "AI vs ML vs Deep Learning",
        "Python for AI development",
        "Supervised learning concepts",
        "Data preprocessing techniques",
      ],
    },
    {
      week: 2,
      date: "Jul 20-26",
      blockchainContent: "Smart Contracts & DApp Development",
      blockchainTopics: [
        "Advanced Solidity patterns",
        "Testing and deploying contracts",
        "Web3.js/ethers.js integration",
        "Building a full-stack DApp",
      ],
      aiContent: "Machine Learning Fundamentals",
      aiTopics: [
        "Regression and classification",
        "Feature engineering",
        "Model evaluation metrics",
        "Scikit-learn practical workshop",
      ],
    },
    {
      week: 3,
      date: "Jul 27-Aug 2",
      blockchainContent: "Advanced Blockchain Concepts",
      blockchainTopics: [
        "Layer 2 scaling solutions",
        "Oracles and external data",
        "Security best practices",
        "Auditing smart contracts",
      ],
      aiContent: "Neural Networks & Deep Learning",
      aiTopics: [
        "Perceptrons and activation functions",
        "TensorFlow/PyTorch basics",
        "CNN for image recognition",
        "Hyperparameter tuning",
      ],
    },
    {
      week: 4,
      date: "Aug 3-9",
      blockchainContent: "DeFi & NFT Ecosystems",
      blockchainTopics: [
        "Decentralized Finance protocols",
        "Yield farming strategies",
        "NFT standards (ERC-721/1155)",
        "Building an NFT marketplace",
      ],
      aiContent: "Natural Language Processing",
      aiTopics: [
        "Text preprocessing techniques",
        "Word embeddings (Word2Vec, GloVe)",
        "Transformer architectures",
        "Building a chatbot",
      ],
    },
    {
      week: 5,
      date: "Aug 10-16",
      blockchainContent: "Blockchain for AI Applications",
      blockchainTopics: [
        "Decentralized data marketplaces",
        "AI model ownership via NFTs",
        "Federated learning on blockchain",
        "Tokenizing AI services",
      ],
      aiContent: "AI for Blockchain Enhancement",
      aiTopics: [
        "Anomaly detection in transactions",
        "Smart contract optimization with AI",
        "Predictive analytics for DeFi",
        "AI-powered security monitoring",
      ],
    },
    {
      week: 6,
      date: "Aug 17-23",
      blockchainContent: "Capstone Project Development",
      blockchainTopics: [
        "Project ideation workshop",
        "Architecture design review",
        "Implementation sprint",
        "Security audit preparation",
      ],
      aiContent: "Capstone Project Development",
      aiTopics: [
        "Problem statement refinement",
        "Data pipeline setup",
        "Model training and evaluation",
        "Deployment strategies",
      ],
      specialNote: "Demo Day Presentations on Aug 23rd",
    },
  ];
  // Blockchain and AI Feature Cards Data
  const techCards = [
    {
      title: "Blockchain Fundamentals",
      icon: <FaEthereum className="text-3xl text-white" />,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Understand decentralized systems",
        "Smart contract development",
        "NFTs & DeFi concepts",
        "Blockchain security",
      ],
      projects: [
        "Build your first DApp",
        "Create a token contract",
        "Deploy on testnet",
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: <FaRobot className="text-3xl text-white" />,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Machine learning basics",
        "Supervised and Unsupervised Learning",
        "Natural language processing",
        "Neural networks",
      ],
      projects: [
        "Train your first model",
        "Image classification",
        "Predictive analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <header className="bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FaRobot className="text-xl text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                DOT-E HUB
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <motion.a
                whileHover={{ y: -2 }}
                href="#courses"
                className="text-gray-300 hover:text-cyan-400 transition font-medium"
              >
                Courses
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#curriculum"
                className="text-gray-300 hover:text-cyan-400 transition font-medium"
              >
                Curriculum
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
              >
                <a href="#pricing">Enroll Now</a>
              </motion.button>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-2xl focus:outline-none text-gray-300"
              onClick={toggleMenu}
            >
              ☰
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="mt-4 pb-4 space-y-3">
                  <a
                    href="#about"
                    className="block text-gray-300 hover:text-cyan-400 transition font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#curriculum"
                    className="block text-gray-300 hover:text-cyan-400 transition font-medium"
                  >
                    Curriculum
                  </a>
                  <button className="mt-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all w-full">
                    <a href="#pricing">Enroll Now</a>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background linear */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-600/10 to-indigo-700/10 -z-10"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0 scroll-animate"
          >
            <div className="flex items-center mb-6">
              <span className="bg-linear-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                6-Weeks Intensive
              </span>
              <span className="ml-3 text-sm text-gray-400">
                July 13th - Auhust 22nd, 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Master{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-700">
                Blockchain
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-700">
                AI
              </span>{" "}
              in 6 Weeks
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              Our intensive program gives you the structured learning path to go
              from beginner to builder in blockchain and AI technologies.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg shadow-cyan-400/30"
              >
                <a href="#pricing">Enroll Now</a>
              </motion.button>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                <a href="#curriculum">View Curriculum</a>
              </motion.button>
            </div>
            {/* Enrolled Students with Avatars */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {enrolledAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${avatar.bg}`}
                  >
                    {avatar.initials}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 font-medium">
                  +10
                </div>
              </div>
              <div className="text-gray-400">
                <p className="font-medium">Already enrolled</p>
                <p className="text-sm">10+ students registered</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center scroll-animate"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-4">
                    <div className="w-14 h-14 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FaEthereum className="text-2xl text-white" />
                    </div>
                    <div className="w-14 h-14 bg-linear-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                      <FaRobot className="text-2xl text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">
                  What You'll Learn
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-700 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Blockchain fundamentals & smart contract development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-700 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Machine learning concepts & AI model training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-700 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Integration of blockchain and AI technologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-700 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Hands-on projects with real-world applications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards Section */}
      <section id="courses" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 scroll-animate"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Master Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dive deep into both blockchain and AI with our comprehensive
              curriculum.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-linear-to-br ${card.color} text-white rounded-2xl overflow-hidden shadow-xl scroll-animate`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-white/90">
                        You'll Learn:
                      </h4>
                      <ul className="space-y-2">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-white/90">
                        Hands-on Projects:
                      </h4>
                      <ul className="space-y-2">
                        {card.projects.map((project, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 scroll-animate"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Dual-Track Learning Timeline
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              8-weeks journey with dedicated Blockchain and AI tracks starting
              July 13th
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Header showing the two tracks */}
            <div className="hidden md:flex justify-between mb-8 px-8">
              <div className="w-1/2 text-center">
                <div className="inline-flex items-center bg-linear-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full">
                  <FaEthereum className="mr-2" />
                  <span className="font-bold">Blockchain Track</span>
                </div>
              </div>
              <div className="w-1/2 text-center">
                <div className="inline-flex items-center bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full">
                  <FaRobot className="mr-2" />
                  <span className="font-bold">AI Track</span>
                </div>
              </div>
            </div>

            {/* Dual-track timeline */}
            <div className="relative">
              {programTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`mb-12 flex flex-col md:flex-row items-stretch scroll-animate ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Week indicator */}
                  <div className="w-full md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold shadow-lg">
                      {item.week}
                    </div>
                  </div>

                  {/* Date marker */}
                  <div className="w-full md:w-32 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                    <div className="bg-gray-800 border-2 border-gray-700 rounded-lg px-3 py-1 shadow-sm">
                      <p className="font-medium text-gray-300 text-center">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  {/* Blockchain content (left side) */}
                  <div className="w-full md:w-1/2 px-0 md:px-4 mb-4 md:mb-0">
                    <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-md h-full border-l-4 border-purple-500">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center mr-3">
                          <FaEthereum className="text-purple-400" />
                        </div>
                        <h3 className="font-bold text-lg text-white">
                          Blockchain Focus
                        </h3>
                      </div>
                      <p className="text-gray-300">
                        {item.blockchainContent ||
                          "Smart contracts & DApp development"}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.blockchainTopics?.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                            <span className="text-gray-300">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* AI content (right side) */}
                  <div className="w-full md:w-1/2 px-0 md:px-4">
                    <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-md h-full border-l-4 border-cyan-500">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-900/50 flex items-center justify-center mr-3">
                          <FaRobot className="text-cyan-400" />
                        </div>
                        <h3 className="font-bold text-lg text-white">
                          AI Focus
                        </h3>
                      </div>
                      <p className="text-gray-300">
                        {item.aiContent || "Machine learning fundamentals"}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.aiTopics?.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-2"></span>
                            <span className="text-gray-300">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OpportunitiesSection />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 scroll-animate"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options for every learning goal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Blockchain Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-900 scroll-animate"
            >
              <div className="bg-linear-to-r from-purple-500 to-indigo-600 p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEthereum className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Blockchain</h3>
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-4xl font-bold">₦37,500</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-4 text-white">
                  Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      6 weeks of Blockchain content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Smart contract development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      DApp building projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Blockchain community access
                    </span>
                  </li>
                </ul>
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/message/4MJ37GXBJHCEP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.13-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.668.15-.198.297-.768.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.461-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.13-.297-.199-.57-.347m-2.462-1.159c-.173.248-.5.396-.868.396s-.695-.149-.868-.396c-.173-.248-.198-.545-.074-.793.124-.248.397-.396.669-.396h.198c.248 0 .521.149.644.397.124.248.099.545-.074.792m1.488.694c-.347.545-.991.793-1.982.793-1.238 0-2.159-.396-2.857-1.183-.124-.149-.248-.149-.347-.149-.099 0-.248.025-.347.149-.421.422-1.164 1.191-1.24 1.562-.075.372.173.719.446.843.173.074.347.124.347.223 0 .099-.025.198-.149.347-.124.149-.272.322-.397.496-.124.174-.025.298.025.347.124.124.545.644 1.164 1.041.694.446 1.289.57 1.833.57.198 0 .372 0 .521-.025.52-.05 1.365-.248 1.982-.843.619-.595.867-1.29.917-1.437.05-.149.05-.248-.025-.347-.074-.099-.272-.074-.619.223" />
                  </svg>
                  <span>Enroll</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Combined Program - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative scroll-animate"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                BEST VALUE
              </div>
              <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-cyan-500">
                <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-6 text-white text-center">
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <FaEthereum className="text-xl" />
                    </div>
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <FaRobot className="text-xl" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Complete Bundle</h3>
                  <div className="mt-4 flex justify-center items-baseline">
                    <span className="text-4xl font-bold">₦65,000</span>
                    <span className="ml-2 text-cyan-100">(Save ₦10,000)</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-white">
                    Includes:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-cyan-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Full 6-week program</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-cyan-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">
                        Both Blockchain & AI tracks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-cyan-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">4 hands-on projects</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-cyan-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Dual certification</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-cyan-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Priority mentorship</span>
                    </li>
                  </ul>
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/message/4MJ37GXBJHCEP1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.13-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.668.15-.198.297-.768.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.461-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.13-.297-.199-.57-.347m-2.462-1.159c-.173.248-.5.396-.868.396s-.695-.149-.868-.396c-.173-.248-.198-.545-.074-.793.124-.248.397-.396.669-.396h.198c.248 0 .521.149.644.397.124.248.099.545-.074.792m1.488.694c-.347.545-.991.793-1.982.793-1.238 0-2.159-.396-2.857-1.183-.124-.149-.248-.149-.347-.149-.099 0-.248.025-.347.149-.421.422-1.164 1.191-1.24 1.562-.075.372.173.719.446.843.173.074.347.124.347.223 0 .099-.025.198-.149.347-.124.149-.272.322-.397.496-.124.174-.025.298.025.347.124.124.545.644 1.164 1.041.694.446 1.289.57 1.833.57.198 0 .372 0 .521-.025.52-.05 1.365-.248 1.982-.843.619-.595.867-1.29.917-1.437.05-.149.05-.248-.025-.347-.074-.099-.272-.074-.619.223" />
                    </svg>
                    <span>Enroll</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* AI Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-blue-900 scroll-animate"
            >
              <div className="bg-linear-to-r from-blue-500 to-cyan-600 p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRobot className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-4xl font-bold">₦37,500</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-4 text-white">
                  Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-blue-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">6 weeks of AI content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-blue-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Machine learning fundamentals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-blue-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Model training projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-blue-900/50 rounded-full mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">AI community access</span>
                  </li>
                </ul>
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/message/4MJ37GXBJHCEP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 bg-linear-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.13-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.668.15-.198.297-.768.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.461-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.13-.297-.199-.57-.347m-2.462-1.159c-.173.248-.5.396-.868.396s-.695-.149-.868-.396c-.173-.248-.198-.545-.074-.793.124-.248.397-.396.669-.396h.198c.248 0 .521.149.644.397.124.248.099.545-.074.792m1.488.694c-.347.545-.991.793-1.982.793-1.238 0-2.159-.396-2.857-1.183-.124-.149-.248-.149-.347-.149-.099 0-.248.025-.347.149-.421.422-1.164 1.191-1.24 1.562-.075.372.173.719.446.843.173.074.347.124.347.223 0 .099-.025.198-.149.347-.124.149-.272.322-.397.496-.124.174-.025.298.025.347.124.124.545.644 1.164 1.041.694.446 1.289.57 1.833.57.198 0 .372 0 .521-.025.52-.05 1.365-.248 1.982-.843.619-.595.867-1.29.917-1.437.05-.149.05-.248-.025-.347-.074-.099-.272-.074-.619.223" />
                  </svg>
                  <span>Enroll</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-animate"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Limited Seats Available
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to future-proof your skills at an
              unbeatable price.
            </p>

            {/* Countdown Timer */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Class starts in:
              </h3>
              <div className="flex space-x-3 justify-center">
                <div className="bg-gray-900 p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <div className="text-2xl font-bold text-cyan-400">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs text-gray-400">DAYS</div>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <div className="text-2xl font-bold text-cyan-400">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs text-gray-400">HOURS</div>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <div className="text-2xl font-bold text-cyan-400">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs text-gray-400">MINS</div>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <div className="text-2xl font-bold text-cyan-400">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs text-gray-400">SECS</div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg"
            >
              <a href="#pricing"> Secure Your Spot Now </a>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaRobot className="text-xl text-white" />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  DOT-E HUB
                </span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of technology leaders through
                practical education.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#curriculum"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Join Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/4MJ37GXBJHCEP1"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">hubdote@gmail.com</li>
                <li className="text-gray-400">+234 8164149553</li>
                <li className="text-gray-400">Uyo, Akwa Ibom</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 DOT-E HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
