// data.js

const { DataSet } = window.vis;

export const nodes = new DataSet([
    { id: 1, label: "Node 1", data: { id: 1, label: "Node 1" } },
    { id: 2, label: "Node 2", data: { id: 2, label: "Node 2" } },
    { id: 3, label: "Node 3", data: { id: 3, label: "Node 3" } },
    { id: 4, label: "Node 4", data: { id: 4, label: "Node 4" } }
]);

export const edges = new DataSet([
    { id: 1, from: 1, to: 2, label: "Edge 1", weight: 5 },
    { id: 2, from: 1, to: 3, label: "Edge 2", weight: 3 },
    { id: 3, from: 2, to: 4, label: "Edge 3", weight: 7 },
    { id: 4, from: 3, to: 4, label: "Edge 4", weight: 2 }
]);
