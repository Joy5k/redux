import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count)

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md p-10 bg-stone-100">
        <button onClick={()=>dispatch(incrementByValue(5))} className='bg-green-600 mr-5 px-3 py-2 text-xl font-bold text-white rounded-md'>Increment By 5</button>
        <button onClick={()=>dispatch(increment())} className='bg-green-600 px-3 py-2 text-xl font-bold text-white rounded-md'>Increment</button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className='bg-red-500 px-3 py-2 text-xl font-bold text-white rounded-md'>Decrement</button>
        
      </div>
    </div>
  )
}

export default App
