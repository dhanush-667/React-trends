import React from 'react';
import './App.css';
import CycleTimeChart from './components/CycleTimeChart';
import DeploymentFrequencyChart from './components/DeploymentFrequencyChart';
import CodeReviewMetricsChart from './components/CodeReviewMetricsChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flow-like Dashboard</h1>
      </header>
      <main>
        <CycleTimeChart />
        <DeploymentFrequencyChart />
        <CodeReviewMetricsChart />
      </main>
    </div>
  );
}

export default App;
