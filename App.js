{/* <div id="parent">
<div class="child1">
    <h1></h1>
    <h2></h2>
</div>
<div class="child1">
    <h1></h1>
    <h2></h2>
</div>
</div> */}
import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div", { id: 'parent' },
    [React.createElement("div", { class: "child1" },
        [React.createElement("h1", {}, "H1 Tag"),
        React.createElement("h2", {}, "H2 Tag")]),
    React.createElement("div", { class: "child2" },
        [React.createElement("h1", {}, "H1 Tag"),
        React.createElement("h2", {}, "H2 Tag")]
    )]);



const heading =
    React.createElement("h1",
        { id: "heading", class: "head" },
        "Hello World From React"
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);