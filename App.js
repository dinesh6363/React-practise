{/* <div id="parent">
    <div id = "child1">
        <h1>Nested html tag</h1>
        <h2>Sibling html tag</h2>
    </div>
    <div id = "child2">
        <h1>Nested html tag</h1>
        <h2>Sibling html tag</h2>
    </div>
</div> */}




// const heading = React.createElement("h1", {id: "react-heading"}, "Hello World From React")
// const paragraph = React.createElement("p", {id: "paragraph"}, "React Paragraph")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// root.render(paragraph)


const heading = React.createElement("div", {id: "parent"}, 
                                    [React.createElement("div", {id: "child1", key: 'child1'}, [React.createElement("h1", {key: 1}, "Nested html tag"), React.createElement("h2", {key: 2}, "Sibling html tag")]),
                                    React.createElement("div", {id: "child2", key: 'child2'}, [React.createElement("h1", {key: 1}, "Nested html tag"), React.createElement("h2", {key: 2}, "Sibling html tag")])])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)