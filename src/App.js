import React from 'react';
import TodayHoliday from './features/TodayHoliday/TodayHoliday';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12 mt-4">
          <TodayHoliday />
        </div>
      </div>
    </div>
  );
}

export default App;
