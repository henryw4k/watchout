// start slingin' some d3 here.

var width    = 700,
    height   = 450,
    nEnemies = 30;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "frame");

// svg.append("circle")
//     .attr("cx", 60)
//     .attr("cy", 60)
//     .attr("r", 5)
//     .attr("style", "fill: green");
var enemyArr = [];
for( var i = 0; i < nEnemies; i++ ){
  enemyArr.push({name: i ,
                    x: Math.random() * 650,
                    y: Math.random() * 400
                });
}

var circle = svg.selectAll('circle')
  .data(enemyArr);

  circle.enter().append("circle")
  .attr('cx', function(d) {
    console.log(d);
    return d.x;
  })
  .attr('cy', function(d) {
    return d.y;
  })
  .attr('r', function(d) {
    return 5;
  })
  .attr('style', function(d) {
    return "fill: black";
  })




