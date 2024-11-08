// ui.js
export function applyHoverEffect(element) {
    element.classList.add("hover-highlight");
}

export function removeHoverEffect(element) {
    element.classList.remove("hover-highlight");
}

export function displayNodeJson(node, jsonOutput) {
    jsonOutput.innerHTML = `<strong>Node ${node.id} Details:</strong><pre>${JSON.stringify(node.data, null, 2)}</pre>`;
}

export function displayEdgeJson(edge, jsonOutput) {
    jsonOutput.innerHTML = `<strong>Edge ${edge.id} Details:</strong><pre>${JSON.stringify(edge, null, 2)}</pre>`;
}
