import React from 'react';

const StatCard = ({ icon: Icon, colorTheme, label, value, trend, trendLabel }) => {
  // Determine trend classes
  let trendClass = 'trend-flat';
  if (trend === 'up') trendClass = 'trend-up';
  if (trend === 'down') trendClass = 'trend-down';

  return (
    <div className="stat-row">
      <div className={`stat-icon-wrap bg-${colorTheme}-dim`}>
        <Icon size={18} className={`text-${colorTheme}`} />
      </div>
      <div className="stat-details">
        <span className="stat-label">{label}</span>
        <span className="stat-val">{value}</span>
      </div>
      <div className={`stat-trend ${trendClass}`}>{trendLabel}</div>
    </div>
  );
};

export default StatCard;
