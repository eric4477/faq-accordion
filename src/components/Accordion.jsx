import { useState } from "react";

function Accordion({ items }) {
  const [itemIndex, setItemIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === itemIndex) {
      setItemIndex(-1);
    } else {
      setItemIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === itemIndex;
    let icon = isExpanded
      ? "../assets/images/icon-minus.svg"
      : "../assets/images/icon-plus.svg";

    let alt = isExpanded ? "icon-minus" : "icon-plus";

    return (
      <div className="item" key={item.id}>
        <div onClick={() => handleClick(index)} className="item-title">
          <h3>{item.title}</h3>
          <span>
            <img src={icon} alt={alt} />
          </span>
        </div>
        {isExpanded && (
          <div className="item-content">
            <p>{item.content}</p>
          </div>
        )}
        <hr />
      </div>
    );
  });
  return (
    <div className="accordion">
      <div className="accordion-header">
        <span>
          <img src="../assets/images/icon-star.svg" alt="icon-star" />
        </span>
        <h1>FAQs</h1>
      </div>
      <div className="accordion-items">{renderedItems}</div>
    </div>
  );
}

export default Accordion;
