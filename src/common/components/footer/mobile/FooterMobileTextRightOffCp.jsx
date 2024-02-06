const FooterMobileTextRightOffCp = ({ Text, onClickLeft, onClickRight }) => {
  return (
    <div className="footer_div">
      <button className="Prev_page none_text" onClick={onClickLeft} />
      <button className="submit_page" onClick={onClickRight}>
        {Text}
      </button>
    </div>
  );
};

export default FooterMobileTextRightOffCp;
