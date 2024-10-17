import { useState, useEffect } from "react";
import Card from "../cardContainer/Card";
import TimeAgo from "../TimeStamp/TimeAgo";
import "./Dashboard.css";
import { ICard } from "../../types/Common";

const Dashboard = () => {
  const [cardList, setCardList] = useState<ICard[]>([]);

  console.log(process.env.REACT_APP_API_URL);

  // handle fetch api posts and set into cardList
  useEffect(() => {
    fetch(`posts`)
      .then((res) => res.json())
      .then((res) => setCardList(res));
  }, []);

  // handle drag start event and set index as dataTransfer
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  // handle drop card event at index and update lastTimeSaved
  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    if (dragIndex !== dropIndex) {
      const newData = Array.from(cardList);
      const [movedItem] = newData.splice(dragIndex, 1);
      newData.splice(dropIndex, 0, movedItem);

      // Update lastTimeSaved for the item at dropIndex
      newData[dropIndex] = {
        ...newData[dropIndex],
        lastTimeSaved: new Date(),
      };

      setCardList(newData);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="grid-container">
        {cardList.map((item, index) => (
          <div
            key={item.title}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <Card cardItem={item} />
            {item.lastTimeSaved && <TimeAgo timestamp={item.lastTimeSaved} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
