import { useState } from "react";
import "./App.css";
import Newpost from "./components/Newpost";
import QuestionForm from "./components/QuestionForm";
import Article from "./components/Article";


function App() {
  const [postType, setPostType] = useState("question"); 

  return (
    <>
      <Newpost postType={postType} setPostType={setPostType} />

      {postType === "question" ? <QuestionForm postType={postType}/> : <Article postType={postType}/>}

    </>
  );
}

export default App;
