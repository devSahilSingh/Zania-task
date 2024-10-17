import React from "react";

interface TimeAgoProps {
  timestamp: Date;
}

const TimeAgo: React.FC<TimeAgoProps> = (props) => {
  const { timestamp } = props;

  // Convert timestamp to Date object
  const date = new Date(timestamp);

  const calculateTimeAgo = (date: Date) => {
    const now = new Date();
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);

    if (secondsAgo < 60) {
      return `${secondsAgo} seconds ago`;
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    } else {
      return `${hoursAgo} hours ago`;
    }
  };

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return <div>Invalid date</div>;
  }

  const timeAgo = calculateTimeAgo(date);
  return <div>Last saved: {timeAgo}</div>;
};

export default TimeAgo;
