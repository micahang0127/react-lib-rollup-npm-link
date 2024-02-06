import React from 'react';

const FormCheckboxAllOffCp = ({ list, checkList, setCheckList, labelKey, labelAll = 'All', labelItemKey = '' }) => {
  const onChangeEach = (e, value) => {
    if (e.target.checked) setCheckList([...checkList, value]);
    else setCheckList(checkList.filter((c) => c !== value));
  };

  return (
    <ul>
      <li>
        <label htmlFor={'allchk' + labelKey} className="checkbox">
          <input
            type="checkbox"
            id={'allchk' + labelKey}
            onChange={(e) => setCheckList(e.target.checked ? list : [])}
            checked={list.length === checkList.length}
          />
          <span className="box"></span>
          <span>{labelAll}</span>
        </label>
      </li>
      {list?.map((l, i) => {
        return (
          <li key={'checkBox' + labelKey + i}>
            <label htmlFor={'checkBox' + labelKey + i} className="checkbox">
              <input
                type="checkbox"
                id={'checkBox' + labelKey + i}
                onChange={(e) => onChangeEach(e, l)}
                checked={checkList.includes(l)}
              />
              <span className="box"></span>
              <span>{labelItemKey ? l[labelItemKey] : l}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(FormCheckboxAllOffCp);

export const FormCheckboxOneOffCp = ({ name, label = '', checked, onChange }) => {
  return (
    <label htmlFor={name}>
      <input type="checkbox" id={name} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
};

React.memo(FormCheckboxOneOffCp);
