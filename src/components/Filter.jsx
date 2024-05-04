import React from "react";
import Myselect from "./UI/Myselect/Myselect";
import Myinput from "./UI/Myinput/Myinput";

const Filter = ({setSearchQuery, searchQuery, sortPost}) => {
  return (
    <div>
        <Myinput
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
          placeholder = "search..."
        />
        <Myselect
          onChange = {sortPost}
          defaultValue = "Sort and Search By"
          options = {[
            {value: "title", name: "Title"},
            {value: "content", name: "Content"},
          ]}
        />
    </div>
  );
};

export default Filter