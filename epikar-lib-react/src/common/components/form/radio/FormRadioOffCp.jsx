import React from 'react';

const FormRadioLabelSpanOffCp = ({
  list = [
    {
      name: 'sample1',
      value: '01',
      text: 'sample1',
    },
    {
      name: 'sample2',
      value: '02',
      text: 'sample2',
    },
  ],
  target,
  setTarget,
}) => {
  return (
    <>
      {list.map((l) => {
        return (
          <label htmlFor={l.name} key={'radioKey' + l.name}>
            <input
              type="radio"
              value={l.value}
              name={l.name}
              checked={target === l.value}
              onChange={(e) => setTarget(e.target.value)}
            />
            <span>{l.text}</span>
          </label>
        );
      })}
    </>
  );
};

export default React.memo(FormRadioLabelSpanOffCp);
