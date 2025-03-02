const dscc = require('@google/dscc');
const LOCAL = dscc.isLocal();
const styleVal = (style, styleId) => {
  return style[styleId].value || style[styleId].defaultValue;
};

// Function to draw the visualization
function drawViz(data) {
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.fontSize = "24px";
  container.style.fontWeight = "bold";
  container.innerText = "Hello, World!";

  document.body.innerHTML = ""; // Clear any existing content
  document.body.appendChild(container);
}

// Subscribe to data updates
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
