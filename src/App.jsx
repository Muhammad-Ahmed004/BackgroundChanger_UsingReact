import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")
  return (  
     <div className="w-full h-screen "
      style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button onClick={() => setcolor("red")}
          className="outline-none px-4 bg-red-600 py-2 rounded-3xl ">Red</button>
          <button onClick={() => setcolor("blue")}
          className="outline-none px-4 bg-blue-700 py-2 rounded-3xl ">blue</button>
          <button onClick={() => setcolor("green")} 
          className="outline-none px-4 bg-green-600 py-2 rounded-3xl ">green</button>
          <button onClick={() => setcolor("yellow")}
          className="outline-none px-4 bg-yellow-600 py-2 rounded-3xl ">yellow</button>
          <button onClick={() => setcolor("pink")}
           className="outline-none px-4 bg-pink-600 py-2 rounded-3xl ">pink</button>
          <button onClick={() => setcolor("white")}
           className="outline-none px-4 bg-white py-2 rounded-3xl ">white</button>
            <button onClick={() => setcolor("black")}
           className="outline-none px-4 bg-slate-600 py-2 rounded-3xl ">black</button>
        </div>
     </div>
     </div>

  )
}

export default App




