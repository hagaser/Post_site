import React from "react";
import MySelect from "../components/UI/MySelect/MySelect";

const ChooseDisplay = (props) => {
  return (
    <div>

      {props.displayMethod == "by buttons" &&
        <MySelect
          onChange = {props.setLimit}
          defaultValue = "Number of ellements on page"
          options = {[
            {value: 5, name: "5"},
            {value: 10, name: "10"},
            {value: 25, name: "25"},
            {value: -1, name: "Show all"},
          ]}
        />
      }

      <MySelect
        onChange = {props.setDisplayMethod}
        defaultValue = "Display method"
        options = {[
          {value: "endless feed", name: "Endless feed"},
          {value: "by buttons", name: "By buttons"},
        ]}
      />

    </div>
  );
};

export default ChooseDisplay