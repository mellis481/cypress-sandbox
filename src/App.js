import React from 'react';

const App = () => (
  <>
    <h1 data-testid="visible" style={{ opacity: 1 }}>
      This should be visible
    </h1>
    <div data-testid="hidden" style={{ opacity: 0 }}>
      This should not be visible
    </div>
  </>
);

export default App;
