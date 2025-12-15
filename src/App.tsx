import { Button } from "./components/ui/button";
import { AnimatedList } from "./components/ui/animated-list";

function App() {

  return (
    <>
      <div className='p-10'>
        <h1 className='text-2xl font-bold text-red-800'>pathflow</h1>
        <Button variant="default">Click me</Button>
        \<AnimatedList>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </AnimatedList>
      </div>
    </>
  )
}

export default App;
