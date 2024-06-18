import React from "react";

export default ({ label, value, onChange }) => {
  return (
    <div className="field input-row">
      <label className="field__label label">{label}</label>
      <input
        className="field__input input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
