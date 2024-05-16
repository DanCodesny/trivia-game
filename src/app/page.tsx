import QuestionCard from "./question-card";

async function HomePage() {
  let questions = await fetch(
    "https://the-trivia-api.com/v2/questions",
    {
      cache: "no-store"
    }
  )
    .then((res) => res.json())
  return (
    <>
      <QuestionCard question={questions[0]} />
    </>
  );
}

export default HomePage;
