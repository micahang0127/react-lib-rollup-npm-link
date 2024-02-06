import { useState } from 'react';
import LayoutOffCp from 'common/components/layout/LayoutOffCp.jsx';
import {
  FormInputBottomErrorOffCp,
  FormRadioLabelSpanOffCp,
  FormSelectOffCp,
  FormCheckboxAllOffCp,
} from 'common/components/form/index.jsx';

const ExampleComponentsFormPg = () => {
  const [input, setInput] = useState('');
  const [radio, setRadio] = useState('');
  const [select, setSelect] = useState('');
  const [checkbox, setCheckbox] = useState('');

  return (
    <LayoutOffCp title="Form Sample">
      <div style={{ border: 'solid 2px gray', margin: '10px 0px', padding: '10px' }}>
        <div style={{ fontWeight: 'bold' }}>* Input :&nbsp;{input} </div>
        <br />
        <FormInputBottomErrorOffCp value={input} onChange={setInput} />
      </div>
      <div style={{ border: 'solid 2px gray', margin: '10px 0px', padding: '10px' }}>
        <div style={{ fontWeight: 'bold' }}>* Radio :&nbsp;{radio} </div>
        <br />
        <FormRadioLabelSpanOffCp
          list={[
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
          ]}
          target={radio}
          setTarget={setRadio}
        />
      </div>
      <div style={{ border: 'solid 2px gray', margin: '10px 0px', padding: '10px' }}>
        <div style={{ fontWeight: 'bold' }}>* Select :&nbsp;{select} </div>
        <br />
        <FormSelectOffCp
          label="label"
          topOption="All"
          list={[
            {
              value: '01',
              text: 'Select1',
            },
            {
              value: '02',
              text: 'Select2',
            },
            {
              value: '03',
              text: 'Select3',
            },
            {
              value: '04',
              text: 'Select4',
            },
          ]}
          value={select}
          onChange={setSelect}
          itemLabelKey="value"
          itemValueKey="value"
        />
      </div>
      <div style={{ border: 'solid 2px gray', margin: '10px 0px', padding: '10px' }}>
        <div style={{ fontWeight: 'bold' }}>* Checkbox :&nbsp;{checkbox} </div>
        <br />
        <FormCheckboxAllOffCp list={['가', '나', '다', '라', '마']} checkList={checkbox} setCheckList={setCheckbox} />
      </div>
    </LayoutOffCp>
  );
};

export default ExampleComponentsFormPg;
