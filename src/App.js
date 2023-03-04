/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import context from "./context";
import Ending from "./components/Ending";
import FinalSection from "./components/FinalSection";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import OptionsSection from "./components/OptionsSection";
import SecondSection from "./components/SecondSection";
import mcqBank from "./mcqArray";

function App() {
  const [subjectNumber, setSubjectNumber] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [optionChecked, setOptionChecked] = useState(false);

  const contextObject = {
    subjectNumber,
    setSubjectNumber,
    questionNumber,
    setQuestionNumber,
    saveEnabled,
    setSaveEnabled,
    optionChecked,
    setOptionChecked,
    mcqArray: mcqBank,
  };
  return (
    <>
      <context.Provider value={contextObject}>
        <Header />
        <FirstSection />
        <SecondSection />
        <OptionsSection />
        <FinalSection />
        <Ending />
      </context.Provider>
    </>
  );
}

export default App;
