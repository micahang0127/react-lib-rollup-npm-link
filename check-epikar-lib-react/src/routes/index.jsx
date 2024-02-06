import { Route, Routes, BrowserRouter } from 'react-router-dom';
// [SORT: 1.Type 2.A-Z]

import { ExampleCompnentsBoxPg, ExampleComponentsButtonPg, ExampleComponentsFormPg, ExampleComponentsLayoutPg } from 'epikar-lib-react';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components/box" element={<ExampleCompnentsBoxPg />} />
        <Route path="/components/button" element={<ExampleComponentsButtonPg />} />
        <Route path="/components/form" element={<ExampleComponentsFormPg />} />
        <Route path="/components/layout" element={<ExampleComponentsLayoutPg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
