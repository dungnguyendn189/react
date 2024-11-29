import { createContext, useContext, useState } from "react";


// 1 create a context

const CounterContext = createContext()

function Counter({ children }) {

    const [count, setCount] = useState(0)
    const increase = () => setCount((c) => c + 1)
    const decrease = () => setCount((c) => c - 1)

    return <CounterContext.Provider value={{ count, increase, decrease }}>
        <span>{children}</span>
    </CounterContext.Provider>
}



// 3. create child components to help implement the common
function Count() {
    const { count } = useContext(CounterContext);
    return <span>{count}</span>
}
function Label({ children }) {
    return <span>{children}</span>
}
function Increase({ icon }) {
    const { increase } = useContext(CounterContext)
    return <button onClick={increase}>{icon}</button>
}
function Decrease({ icon }) {
    const { decrease } = useContext(CounterContext)
    return <button onClick={decrease}>{icon}</button>
}

// 4. Thêm phầm tử con components bănngf thuộc tính quang hệ componentß

Counter.Count = Count
Counter.Label = Label
Counter.Increase = Increase
Counter.Decrease = Decrease


export default Counter;
