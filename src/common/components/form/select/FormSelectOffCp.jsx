import React from 'react';

const FormSelectOffCp = ({
  label,
  placeholder,
  topOption,
  list,
  value,
  onChange,
  keyLabel,
  itemLabelKey,
  itemValueKey,
  disabled,
  errUsing,
  errColor,
  errMsg,
  disabledValues,
  classSelect,
}) => {
  return (
    <>
      {label && <p>{label}</p>}
      <select
        className={classSelect + (disabled ? ' disabled' : '')}
        onChange={(e) => onChange(!itemValueKey && e.target.value ? JSON.parse(e.target.value) : e.target.value)}
        value={!value ? value : itemValueKey ? value[itemValueKey] : JSON.stringify(value)}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {topOption && <option value="">{topOption}</option>}
        {list.map((item) => {
          return (
            <option
              value={itemValueKey ? item[itemValueKey] : JSON.stringify(item)}
              key={keyLabel + (itemValueKey ? item[itemValueKey] : JSON.stringify(item))}
              disabled={disabledValues.includes(itemValueKey ? item[itemValueKey] : JSON.stringify(item))}
            >
              {itemLabelKey ? item[itemLabelKey] : item}
            </option>
          );
        })}
      </select>
      {errUsing && <p style={{ color: errColor }}>{errMsg}</p>}
    </>
  );
};

FormSelectOffCp.defaultProps = {
  label: '',
  placeholder: '',
  topOption: '',
  onChange: () => {},
  disabled: false,
  keyLabel: '',
  itemLabelKey: '',
  itemValueKey: '',
  errUsing: false,
  errMsg: '',
  errColor: 'red',
  disabledValues: [],
  classSelect: '',
};
export default React.memo(FormSelectOffCp);
