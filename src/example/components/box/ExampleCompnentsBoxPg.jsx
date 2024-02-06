import React from 'react';
import LayoutOffCp from 'common/components/layout/LayoutOffCp.jsx';
import BoxOffCp from 'common/components/box/BoxOffCp.jsx';

const ExampleCompnentsBoxPg = () => {
  return (
    <LayoutOffCp title="Box Sample">
      {/* setting Col */}
      <BoxOffCp styleLayout={{ boxMarginBottom: 30 }} styleLi={{ liCol: '2' }} />
      {/* add count */}
      <BoxOffCp
        titleList={['Title1', 'Title2', 'Title3', 'Title4', 'Title5']}
        countLi={5}
        styleLayout={{ boxMarginBottom: 30 }}
      />
      <BoxOffCp
        titleList={['Title1', 'Title2', 'Title3', 'Title4', 'Title5']}
        countDiv={5}
        styleLayout={{ boxMarginBottom: 30 }}
      />
      Other Contents
    </LayoutOffCp>
  );
};

export default ExampleCompnentsBoxPg;
