const $app = document.getElementById('app');

const state = {
    count: 0
  };

function renderPage() {
const count = state.count;
$app.innerHTML = `
    <h1 id="counter-wrapper">Counter lives here</h1>
    <div id="count">${count}</div>
    <button id="increment">increment</button>
    <count-display count=${count}></count-display>
`;
}
function rerender() {
    console.log("rerender")
removeListeners();
renderPage();
addListeners();
}
console.log("running")
function handleClick(e) {
    console.log("handle click")
    state.count = state.count + 1;
    rerender();
}

function removeListeners() {
console.log("remove listeners")
document.getElementById('increment').removeEventListener('click', handleClick);
}

function addListeners() {
console.log("add listeners")
document.getElementById('increment').addEventListener('click', handleClick);
}




renderPage();
addListeners();
