import React from 'react';

const FormInputBottomErrorOffCp = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  disabled,
  errUsing,
  errMsg,
  classInput,
  classWarning,
}) => {
  return (
    <>
      <input
        className={classInput}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errUsing && errMsg && <span className={classWarning}>{errMsg}</span>}
    </>
  );
};
FormInputBottomErrorOffCp.defaultProps = {
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  placeholder: '',
  disabled: false,
  errUsing: false,
  errMsg: '',
  classInput: 'default_input',
  classWarning: '',
};
export default React.memo(FormInputBottomErrorOffCp);

export const FormInputBottomErrorLiOffCp = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  disabled,
  label,
  labelBold,
  errUsing,
  errMsg,
  classLi,
}) => {
  return (
    <li className={classLi + ' ' + (errMsg ? 'Warning_li' : '')}>
      {label && (labelBold ? <h3>{label}</h3> : <p>{label}</p>)}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errUsing && errMsg && <span className="Warning_text">{errMsg}</span>}
    </li>
  );
};
FormInputBottomErrorLiOffCp.defaultProps = {
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  placeholder: '',
  disabled: false,
  label: '',
  labelBold: true,
  errUsing: false,
  errMsg: '',
  classLi: '',
};
React.memo(FormInputBottomErrorLiOffCp);

export const FormInputOffCp = ({ type, id, value, onChange, onBlur, placeholder, disabled }) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

FormInputOffCp.defaultProps = {
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  placeholder: '',
  disabled: false,
};
React.memo(FormInputOffCp);
