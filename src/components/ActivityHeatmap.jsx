import React from 'react';

const ActivityHeatmap = ({ totalHours, activityData, weeks = 15 }) => {
  // Generate dates for the heatmap grid
  // We want the grid to end on today (or end of this week). 
  // Let's assume today is the last cell of the grid for simplicity, or we align to Sunday.
  const today = new Date();
  
  // Calculate the start date (15 weeks ago)
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
                // Calculate the specific date for this cell
                const cellDate = new Date(startDate);
                cellDate.setDate(startDate.getDate() + (colIndex * 7) + rowIndex);
                
                // Format date as YYYY-MM-DD
                const dateKey = cellDate.toISOString().split('T')[0];
                
                // Look up activity data for this date
                const intensity = activityData[dateKey] || 0;
                const isActive = intensity > 0;
                const hours = isActive ? (intensity * 1.5).toFixed(1) : 0;
                
                return (
                  <div 
                    key={rowIndex} 
                    className={`heat-cell-sm ${isActive ? 'lvl-' + intensity : 'lvl-0'}`}
                    title={`${dateKey}: ${hours} hrs`}
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
