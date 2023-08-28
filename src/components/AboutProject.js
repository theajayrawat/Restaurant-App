import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div>
      <h3>{title}</h3>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}

      {isVisible && description.map(title => {
        return <div key={title}>{title}</div>;
      })}
    </div>
  );
};

const AboutProject = () => {
  const [visibleSection, setIsVisibleSection] = useState("");
  return (
    <>
      <h1> About Project</h1>
      <Section
        title={"Key Features"}
        description={[
          "Shimmer UI for Better UserExperience",
          "Search Feature",
          "Cart Feature",
          "Checking network connection",
          "forms to contact",
          "Single page application",
          "Implemented Lazy Loading or OnDemand Loading on This Router",
        ]}
        isVisible={visibleSection === "features"}
        setIsVisible={(isTrue) => {
          if (isTrue) {
            setIsVisibleSection("features");
          } else {
            setIsVisibleSection("");
          }
        }}
      />

      <Section
        title={"Tech Stack used"}
        description={[
          "React JS for UI",
          "Parcel for Bundling",
          "Redux for state management",
          "Tailwind CSS for Styling",
        ]}
        isVisible={visibleSection === "tech"}
        setIsVisible={(isTrue) => {
          if (isTrue) {
            setIsVisibleSection("tech");
          } else {
            setIsVisibleSection("");
          }
        }}
      />
    </>
  );
};

export default AboutProject;
