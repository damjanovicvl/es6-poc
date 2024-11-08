// network.js
import { nodes, edges } from './data.js';
import { applyHoverEffect, removeHoverEffect, displayNodeJson, displayEdgeJson } from './ui.js';

const container = document.getElementById("network");
const data = { nodes: nodes, edges: edges };
const options = {};
const network = new vis.Network(container, data, options);

const jsonOutput = document.getElementById("jsonOutput");

// Populate the nodes list
const nodesList = document.getElementById("nodesList");
nodes.forEach(node => {
    const listItem = document.createElement("li");
    listItem.className = "node-item";
    listItem.textContent = `Node ${node.id}`;
    listItem.setAttribute("data-node-id", node.id);

    listItem.addEventListener("mouseover", () => applyHoverEffect(listItem));
    listItem.addEventListener("mouseout", () => removeHoverEffect(listItem));

    listItem.addEventListener("click", function() {
        displayNodeJson(node, jsonOutput);
    });

    nodesList.appendChild(listItem);
});

// Populate the edges table
const edgesTableBody = document.getElementById("edgesTableBody");
edges.forEach(edge => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${edge.id}</td><td>${edge.from}</td><td>${edge.to}</td>`;

    row.addEventListener("click", () => displayEdgeJson(edge, jsonOutput));
    row.addEventListener("mouseover", () => applyHoverEffect(row));
    row.addEventListener("mouseout", () => removeHoverEffect(row));

    edgesTableBody.appendChild(row);
});

// Network events
network.on("click", function(params) {
    if (params.nodes.length > 0) {
        const node = nodes.get(params.nodes[0]);
        displayNodeJson(node, jsonOutput);
    } else if (params.edges.length > 0) {
        const edge = edges.get(params.edges[0]);
        displayEdgeJson(edge, jsonOutput);
    }
});
