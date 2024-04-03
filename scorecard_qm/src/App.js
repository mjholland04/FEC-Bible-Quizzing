import logo from './logo.svg';
import './App.css';
import QuestionCounter from './QuestionCounter';
import RowLabels from './ScorecardRowLabels';
import ScorecardScroll from './ScorecardScroll';
import ScorecardColumn from './ScorecardColumn';
import ScrollingTable from './ScorecardScroll';

function App() {
  return (
    <div className="App">

      < QuestionCounter />
      < RowLabels />
      < ScrollingTable />
      < ScorecardColumn />
    </div>
  );
}

export default App;
