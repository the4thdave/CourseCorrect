const { useState } = React;

function App() {
    return (
        <div className="container">
            <h1>Hello, world!</h1>
            <p>Welcome to the CourseCorrect Frontend.</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
