what is JSX, and why is it used?

ANS:


JSX stands for JavaScript XML. It is a syntax used in react that allows to write HTML inside JavaScript. JSX code easier to read and understand. react converts JSX regular JavaScript using babel


what is the deference between State and Props?

ANS:

(a)  

Props are used to pass data from a parent component to child component. Props are read-only, which means they cannot be changed by the child component.

(b)
State is used to store data inside a component. State can change over time,  and when it changes, React automatically updates the UI.


Q : What is the useState hook, and how does it work?

ANS:

useState is a react hook that allows functional components to have state. it returns two values: the current sate and a function to update that statel.

for example: const [count, setCount] = useState(0)

here count is the current state value, and setCount is used to update the state. when the state changes, React re-renders the component.


Q: How can you share state between components in React?

ANS:

state can be shared between components by lifting the state up. this means parent component shared State to child by using props.


Q: How is event handling done in React

ANS:


event handling in React is done using event handlers like onClick, onChange, onSubmit. these handlers call a function when an event occurs.

for example: <button onClick={handleClick}>Click Me</button>

here handleClick is a function that runs when the button is clicked.
