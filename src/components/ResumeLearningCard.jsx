import React, { useState } from 'react';
import { PlayCircle, Clock, BookOpen, Loader2 } from 'lucide-react';

const ResumeLearningCard = ({ 
  moduleNumber, 
  progress, 
  title, 
  description, 
  timeRemaining, 
  lessonsLeft,
  onComplete
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeClick = () => {
    setIsLoading(true);
    // Simulate network request or content loading
    setTimeout(() => {
      onComplete();
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="grid-card col-span-8 primary-card">
      <div className="card-layer-bg"></div>
      <div className="primary-content">
        <div className="primary-header">
          <span className="badge-neon">CONTINUE MODULE {moduleNumber}</span>
          <div className="primary-progress-text">{progress}% Complete</div>
        </div>
        <div className="primary-body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
        <div className="primary-actions">
          <button className="btn-vibrant" onClick={handleResumeClick} disabled={isLoading}>
            {isLoading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <PlayCircle size={20} className="fill-icon" />
            )}
            {isLoading ? 'Loading Lesson...' : 'Resume Learning'}
          </button>
          <div className="action-meta">
            <div className="meta-item"><Clock size={14}/> <span>{timeRemaining} mins remaining</span></div>
            <div className="meta-item"><BookOpen size={14}/> <span>{lessonsLeft} lessons left</span></div>
          </div>
        </div>
        
        <div className="progress-bar-thick">
          <div className="progress-thick-fill" style={{width: `${progress}%`}}></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLearningCard;
