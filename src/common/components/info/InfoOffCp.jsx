export const InfoNoDataOffCp = ({ className, text }) => {
  return <div className={className}>{text}</div>;
};
InfoNoDataOffCp.defaultProps = {
  className: '',
  text: '데이터가 없습니다.',
};
