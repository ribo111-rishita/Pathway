import React from 'react';
import { ChevronRight, CheckCircle2, Circle, Lock } from 'lucide-react';

const LearningPathTracker = ({ steps }) => {
  return (
    <div className="grid-card col-span-7 secondary-card path-tracker">
      <div className="card-header-flex">
        <h3>Learning Path</h3>
        <button className="btn-text">View full map <ChevronRight size={16}/></button>
      </div>
      
      <div className="horizontal-stepper">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className={`step-hz ${step.status}`}>
              <div className={`hz-icon ${step.status === 'active' ? 'pulse' : ''}`}>
                {step.status === 'completed' && <CheckCircle2 size={16} />}
                {step.status === 'active' && <Circle size={16} />}
                {step.status === 'locked' && <Lock size={14} />}
              </div>
              <span className={`hz-label ${step.status === 'active' ? 'current' : ''}`}>
                {step.label}
              </span>
              {!isLast && <div className={`hz-line ${step.status === 'completed' ? '' : 'pending'}`}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPathTracker;
