import Hero from "../components/index/Hero";
import QuizCard from "../components/index/QuizCard";

const App = () => {
  return (
    <div>
      <div className="h-screen w-11/12 m-auto">
        <Hero />
      </div>
      <div className="w-11/12 m-auto p-5 flex flex-wrap gap-6 justify-center">
        <QuizCard avatar="IM" name="Issam Mezgueldi" date="September 14, 2023" title="React" description="The quiz may include questions about the basic concepts of React, such as JSX syntax, component lifecycle methods, and state management. It may also cover more advanced topics, such as server-side rendering, Redux, and React Hooks." />
        <QuizCard avatar="JS" name="John Smith" date="November 08, 2023" title="Laravel" description="The quiz may include questions about the basic concepts of React, such as JSX syntax, component lifecycle methods, and state management. It may also cover more advanced topics, such as server-side rendering, Redux, and React Hooks." />
      </div>
    </div>
  )
}

export default App