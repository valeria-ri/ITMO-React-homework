import React from "react";

const TranslateSection = ({ id, children }) => {
  return (
    <section className="translate-section" id={id}>
      {children}
    </section>
  )
};

export default TranslateSection;
