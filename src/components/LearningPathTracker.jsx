import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Circle, Lock } from 'lucide-react';

const LearningPathTracker = ({ steps, onStepClick }) => {
  const [filter, setFilter] = useState('all');

  const filteredSteps = steps.filter(step => {
    if (filter === 'completed') return step.status === 'completed';
    if (filter === 'in-progress') return step.status === 'active' || step.status === 'completed';
    return true;
  });

  return (
    <div className="grid-card col-span-7 secondary-card path-tracker">
      <div className="card-header-flex">
        <h3>Learning Path</h3>
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >All</button>
          <button 
            className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >Completed</button>
          <button 
            className={`filter-tab ${filter === 'in-progress' ? 'active' : ''}`}
            onClick={() => setFilter('in-progress')}
          >In Progress</button>
        </div>
      </div>
      
      <div className="horizontal-stepper">
        {filteredSteps.map((step, index) => {
          const isLast = index === filteredSteps.length - 1;
          
          return (
            <div 
              key={step.id} 
              className={`step-hz ${step.status} ${step.status !== 'locked' ? 'clickable' : ''}`}
              onClick={() => step.status !== 'locked' && onStepClick && onStepClick(step)}
            >
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
