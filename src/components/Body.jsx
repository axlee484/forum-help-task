import Title from "./Body-Components/Title";
import Description from "./Body-Components/Description";

function Body({ issue }) {
  return (
    <div>
      <Title title={issue.title} />
      <Description description={issue.description} />
    </div>
  );
}

export default Body;
