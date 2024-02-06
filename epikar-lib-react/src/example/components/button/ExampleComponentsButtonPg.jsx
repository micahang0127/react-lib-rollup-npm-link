import React from 'react';
import LayoutOffCp from 'common/components/layout/LayoutOffCp.jsx';
import ButtonOffCp from 'common/components/button/ButtonOffCp.jsx';

const ExampleComponentsButtonPg = () => {
  const onClickNavy = (e) => {
    alert('Click Navy Button');
  };
  const onClickGray = (e) => {
    alert('Click Gray Button');
  };
  return (
    <LayoutOffCp title="Box Sample">
      <ButtonOffCp label="Navy Btn" onClick={onClickNavy} />
      <br />
      <br />
      <ButtonOffCp type="gray" label="Gray Btn" onClick={onClickGray} />
    </LayoutOffCp>
  );
};

export default ExampleComponentsButtonPg;
