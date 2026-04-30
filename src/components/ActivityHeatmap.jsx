import React from 'react';

const ActivityHeatmap = ({ totalHours, activityData, weeks = 15 }) => {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (weeks * 7) + 1);

  return (
    <div className="grid-card col-span-5 secondary-card">
      <div className="card-header-flex">
        <h3>Activity Heatmap</h3>
        <span className="text-dim text-sm font-bold">{totalHours.toFixed(1)}h Total</span>
      </div>
      <div className="heatmap-dense">
        <div className="heatmap-labels-y">
          <span>M</span><span>W</span><span>F</span>
        </div>
        <div className="heatmap-grid-inner">
          {Array.from({ length: weeks }).map((_, colIndex) => (
            <div className="heat-col" key={colIndex}>
              {Array.from({ length: 7 }).map((_, rowIndex) => {
                const cellDate = new Date(startDate);
                cellDate.setDate(startDate.getDate() + (colIndex * 7) + rowIndex);
                
                const dateKey = cellDate.toISOString().split('T')[0];
                const displayDate = cellDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
                
                const intensity = activityData[dateKey] || 0;
                const isActive = intensity > 0;
                const hours = isActive ? (intensity * 1.5).toFixed(1) : 0;
                
                return (
                  <div key={rowIndex} className="custom-tooltip-wrapper">
                    <div className={`heat-cell-sm ${isActive ? 'lvl-' + intensity : 'lvl-0'}`}></div>
                    <div className="custom-tooltip">
                      {displayDate}: {hours} hrs
                    </div>
                  </div>
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
