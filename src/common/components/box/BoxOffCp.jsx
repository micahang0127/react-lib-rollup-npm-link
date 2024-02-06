import React from 'react';

const BoxOffCp = ({ titleList, countLi, countDiv, styleLayout, styleLi }) => {
  return (
    <BoxLayoutOffCp style={styleLayout}>
      <BoxLiOffCp titleList={titleList} countLi={countLi} countDiv={countDiv} style={styleLi} />
    </BoxLayoutOffCp>
  );
};
BoxOffCp.defaultProps = {
  titleList: [],
  countLi: 1,
  countDiv: 1,
  styleLayout: {
    boxMarginBottom: 30,
  },
  styleLi: {
    liCol: 'auto',
  },
};
export default BoxOffCp;

export const BoxLayoutOffCp = ({ children, style }) => {
  return (
    <div className={`col_layout mB${style.boxMarginBottom}`}>
      <ul className="col_layout_wrap">{children}</ul>
    </div>
  );
};
BoxLayoutOffCp.defaultProps = {
  children: <></>,
  style: {
    boxMarginBottom: 30,
  },
};
export const BoxLiOffCp = ({ titleList, countLi, countDiv, style }) => {
  return (
    <>
      {[...Array(countLi)].map((elementLi, indexLi) => {
        return (
          <li className={'col col_' + style.liCol} key={'boxoffcp-li-' + indexLi}>
            {[...Array(countDiv)].map((elementDiv, indexDiv) => {
              return (
                <div className="default_box" key={'boxoffcp-div-' + indexDiv}>
                  <h2 className="default_box_title">{titleList[indexLi]}</h2>
                </div>
              );
            })}
          </li>
        );
      })}
    </>
  );
};
BoxLiOffCp.defaultProps = {
  titleList: [],
  countLi: 1,
  countDiv: 1,
  style: {
    liCol: 'auto',
  },
};
export const BoxLiHeight100OffCp = ({ titleList, countLi, style }) => {
  return (
    <>
      {[...Array(countLi)].map((element, index) => {
        return (
          <li className={'col col_' + style.liCol} key={'boxoffcp-li-' + index}>
            <div className={'default_box He100'}>
              <h2 className="default_box_title">{titleList[index]}</h2>
            </div>
          </li>
        );
      })}
    </>
  );
};
BoxLiHeight100OffCp.defaultProps = {
  titleList: [],
  countLi: 1,
  style: {
    liCol: 'auto',
  },
};
