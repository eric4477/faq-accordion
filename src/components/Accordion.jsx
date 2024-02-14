function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="item-title">
          <h3>{item.title}</h3>
          <span>
            <img src="/assets/images/icon-plus.svg" alt="icon-plus" />
          </span>
        </div>
        <div className="item-content">
          <p>{item.content}</p>
        </div>
        <hr />
      </div>
    );
  });
  return (
    <div className="accordion">
      <div className="accordion-header">
        <img src="/assets/images/icon-star.svg" alt="icon-star" />
        <h1>FAQs</h1>
      </div>
      <div className="accordion-items">{renderedItems}</div>
    </div>
  );
}

export default Accordion;
