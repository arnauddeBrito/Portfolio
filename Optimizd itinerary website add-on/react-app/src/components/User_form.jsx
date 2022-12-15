import React from "react";

import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";

const App = ({ onChange, date, text }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {text} : {date ? date.toLocaleDateString() : "Séléctionner une date"}
      </button>
      <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(2022, 8, 12)}
        minDate={new Date(2022, 10, 10)}
        maxDate={new Date(2025, 0, 10)}
        headerFormat="DD, MM dd"
        onChange={onChange}
      />
    </div>
  );
};

export default App;
