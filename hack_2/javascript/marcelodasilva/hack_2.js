
const pi = Math.PI;

function calculate_area_circle(r) {
  const area = pi * Math.pow(r,2);
  return area.toFixed(2); 
}

radius = 1 + (Math.random() * 10);

console.log("Circle radius: "+radius.toFixed(2));
console.log("Circle area: "+calculate_area_circle(radius.toFixed(2)));