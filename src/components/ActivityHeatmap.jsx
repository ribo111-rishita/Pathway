import React from 'react';

const ActivityHeatmap = ({ totalHours, weeks = 15 }) => {
  return (
    <div className="grid-card col-span-5 secondary-card">
      <div className="card-header-flex">
        <h3>Activity Heatmap</h3>
        <span className="text-dim text-sm font-bold">{totalHours}h Total</span>
      </div>
      <div className="heatmap-dense">
        <div className="heatmap-labels-y">
          <span>M</span><span>W</span><span>F</span>
        </div>
        <div className="heatmap-grid-inner">
          {Array.from({ length: weeks }).map((_, col) => (
            <div className="heat-col" key={col}>
              {Array.from({ length: 7 }).map((_, row) => {
                const isActive = Math.random() > 0.5;
                const intensity = Math.floor(Math.random() * 4) + 1;
                const hours = isActive ? (intensity * 1.5).toFixed(1) : 0;
                return (
                  <div 
                    key={row} 
                    className={`heat-cell-sm ${isActive ? 'lvl-' + intensity : 'lvl-0'}`}
                    title={isActive ? `${hours} hrs` : '0 hrs'}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityHeatmap;
