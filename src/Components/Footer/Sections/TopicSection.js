const TopicSection = (props) => {
  return (
    <div className="section-topics">
      <h1>{props.children}</h1>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicSection;
