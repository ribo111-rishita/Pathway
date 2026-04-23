import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';

const mockEvents = [
  "Ananya just started UI/UX Path",
  "Rohit completed Module 3",
  "Priya achieved a 7-day streak!",
  "Arjun unlocked the Portfolio Project",
  "Neha just started Web Development Path"
];

const ActivityToasts = () => {
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    let currentIndex = 0;
    
    // Cycle events indefinitely
    const interval = setInterval(() => {
      // Set an event
      setCurrentEvent(mockEvents[currentIndex]);
      
      // Clear it after 4 seconds to animate out
      setTimeout(() => {
        setCurrentEvent(null);
      }, 4000);

      currentIndex = (currentIndex + 1) % mockEvents.length;
    }, 8000); // Trigger a new event every 8 seconds

    // Initial trigger after mount delay
    setTimeout(() => {
      setCurrentEvent(mockEvents[0]);
      setTimeout(() => setCurrentEvent(null), 4000);
      currentIndex = 1;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="toast-container" style={{
      position: 'fixed', bottom: '32px', right: '32px', zIndex: 9999, pointerEvents: 'none'
    }}>
      <AnimatePresence>
        {currentEvent && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
            className="toast-card"
            style={{
              background: 'rgba(17, 24, 39, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.1)',
              padding: '16px 24px',
              borderRadius: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'white',
              pointerEvents: 'auto'
            }}
          >
            <div style={{
              width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6', 
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Bell size={12} color="white" />
            </div>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{currentEvent}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActivityToasts;
