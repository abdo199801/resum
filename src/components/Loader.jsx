import { Html, useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  // Calculate progress for the circular progress bar
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="loader-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Animated Logo/Brand */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            background: "linear-gradient(45deg, #915EFF, #6A42FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            letterSpacing: "0.1em",
          }}>
            PORTFOLIO
          </h1>
          <p style={{
            color: "#888",
            fontSize: "1rem",
            marginTop: "0.5rem",
            fontWeight: "300",
            letterSpacing: "0.2em",
          }}>
            LOADING EXPERIENCE
          </p>
        </motion.div>

        {/* Circular Progress Bar */}
        <div style={{ position: "relative", width: "120px", height: "120px" }}>
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
              fill="none"
            />
            {/* Animated Progress Circle */}
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 60 60)"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 0.5 }}
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#915EFF" />
                <stop offset="100%" stopColor="#6A42FF" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage Text */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              key={progress}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#FFFFFF",
                display: "block",
              }}
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            width: "300px",
            height: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #915EFF, #6A42FF)",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        {/* Loading States */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            textAlign: "center",
          }}
        >
          <motion.p
            style={{
              color: "#888",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
              fontWeight: "300",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {progress < 30 && "Initializing 3D environment..."}
            {progress >= 30 && progress < 60 && "Loading 3D assets..."}
            {progress >= 60 && progress < 90 && "Optimizing performance..."}
            {progress >= 90 && "Finalizing experience..."}
          </motion.p>
          
          {/* Dots Animation */}
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#915EFF",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            textAlign: "center",
            color: "#666",
            fontSize: "0.8rem",
            fontWeight: "300",
          }}
        >
          <p>Premium Web Experience • Powered by React Three.js</p>
        </motion.div>
      </motion.div>
    </Html>
  );
};

export default CanvasLoader;