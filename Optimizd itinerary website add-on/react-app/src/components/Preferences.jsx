import React from "react";
import Select from "react-select";

const App = ({ onChange, preference }) => {
  const options = [
    { value: "Incontournable", label: "Incontournable" },
    { value: "Musée", label: "Musée" },
    { value: "Jardin", label: "Jardin" },
  ];

  return (
    <div className="relative">
      <Select
        options={options}
        value={preference}
        className="z-0"
        onChange={onChange}
        isMulti
      />
    </div>
  );
};

export default App;
