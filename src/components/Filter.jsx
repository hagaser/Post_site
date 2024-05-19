import React from "react";

// components //
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";

const Filter = ({setSearchQuery, searchQuery, setSortBy}) => {
  return (

    <div>

        <MyInput
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
          placeholder = "search..."
        />

        <MySelect
          onChange = {setSortBy}
          defaultValue = "Sort and Search By"
          options = {[
            {value: "title", name: "Title"},
            {value: "body", name: "Body"},
          ]}
        />

    </div>

  );
};

export default Filter