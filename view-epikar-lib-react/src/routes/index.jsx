import { Route, Routes, BrowserRouter } from 'react-router-dom';
// [SORT: 1.Type 2.A-Z]

import { ExampleCompnentsBoxPg, ExampleComponentsButtonPg, ExampleComponentsFormPg, ExampleComponentsLayoutPg } from 'epikar-lib-react';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page/box" element={<ExampleCompnentsBoxPg />} />
        <Route path="/page/button" element={<ExampleComponentsButtonPg />} />
        <Route path="/page/form" element={<ExampleComponentsFormPg />} />
        <Route path="/page/layout" element={<ExampleComponentsLayoutPg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
