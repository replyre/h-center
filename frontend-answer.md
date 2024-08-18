## React Assignment Answers

1. How can you implement shared functionality across a component tree?

Ans: We can use various methods to achieve shared functionality across a component tree, one way is to lift the state up, where the state is defined in parent component and passed to child components. This also leads to a problem called prop drilling where data is shared over components which do not need them. Another way is the use of
State Management Tools like Context API, Redux etc. One most commonly used id Zustand. We can also created custom hooks which are mostly used to share and reuse same logic over different components.

2. Why is the `useState` hook appropriate for handling state in a complex component?

Ans: The useState hooks allows functional components to manage state directly, which eliminates the need for class-based components or external state management libraries for simple use cases. It is a built in hook which is strong enough to store arrays, objects and complex data which includes them both. It is simple and flexible and is easy to integrate with other components.
