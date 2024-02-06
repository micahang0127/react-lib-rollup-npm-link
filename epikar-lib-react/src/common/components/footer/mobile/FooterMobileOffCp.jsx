const FooterMobileOffCp = ({
  isboth,
  leftText = '',
  onClickLeft = () => {},
  rightText,
  onClickRight,
  disabledRight = false,
}) => {
  return (
    <div className="footer_div">
      {isboth && (
        <button className="Prev_page" onClick={onClickLeft}>
          {leftText}
        </button>
      )}
      <button className="next_page" onClick={onClickRight} disabled={disabledRight}>
        {rightText}
      </button>
    </div>
  );
};

export default FooterMobileOffCp;
