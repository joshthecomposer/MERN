import { useState } from "react";
import './App.css';
import Tabs from "./component/Tabs";
import DisplayContent from "./component/DisplayContent";

function App() {
  const tabsArr = [
    {label: "Tab 1", content: "This is tab 1 content"},
    {label: "Tab 2", content: "This is tab 2 content"},
    {label: "Tab 3", content: "This is tab 3 content"},
    {label: "Tab 4", content: "This is tab 4 content"}
  ]

  const [allTabs, setAllTabs] = useState(tabsArr);
  const [currentTabIdx, setCurrentTabIdx] = useState(0);

  return (
    <div className="App">
      <Tabs
        allTabs={allTabs}
        currentTabIdx={currentTabIdx}
        setCurrentTabIdx={setCurrentTabIdx}
      />
      <DisplayContent
        allTabs={allTabs}
        currentTabIdx={currentTabIdx}
      />
    </div>
  );
}

export default App;
