import React from 'react';

const LayoutOffCp = ({ title, children }) => {
  return (
    <div className="default_content_layout">
      <h1 className="section_title">{title}</h1>
      {children}
    </div>
  );
};

LayoutOffCp.defaultProps = {
  title: '',
};
export default LayoutOffCp;
