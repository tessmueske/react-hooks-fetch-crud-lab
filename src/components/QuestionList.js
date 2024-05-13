import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {

  const [questions, setQuestion] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(data => setQuestion(data))
  }, []
  )

  function deleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.prompt !== deletedQuestion.prompt);
    setQuestion(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem question={question} deleteQuestion={deleteQuestion} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
