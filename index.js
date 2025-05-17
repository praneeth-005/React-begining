/* const heading = [React.createElement("h1", { id: "heading" }, "This Element h1 is being added by react"),
                React.createElement("h2", {id : "heading2"}, "This is 2nd heading element")
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

const heading = [React.createElement("div", { id: "child" }, React.createElement("h1", { id: "heaading1" }, "This is 1st heading"), React.createElement("h2", { id: "heading2" }, "This is 2nd heading"))
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);