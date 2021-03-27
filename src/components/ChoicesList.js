import React from "react";

import Choice from "./Choice";

export default function ChoicesList(props) {
  return (
    <div>
      {props.choices.map((choice, key) => (
        <Choice choice={choice} />
      ))}
    </div>
  );
}
