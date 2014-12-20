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

var generateX = function() {
  return Math.random() * 650;
};

var generateY = function() {
  return Math.random() * 400;
};

for( var i = 0; i < nEnemies; i++ ){
  enemyArr.push({name: i ,
                    x: generateX(),
                    y: generateY()
                });
}

var circle = svg.selectAll('circle')
  .data(enemyArr);

  circle.enter().append("circle")
  .attr('cx', function(d) {
    console.log(d);
    return d.x;
  })
  .attr('cy',function(d) {
    return d.y;
  })
  .attr('r', 5)
  .attr('style', "fill: black");

setInterval(function(){
  // generate new x y cordinates for each enemy.
  for(var j = 0; j < enemyArr.length; j++){
    enemyArr[j].x = generateX();
    enemyArr[j].y = generateY();
  }
  // update enemy on screen with new x y coordinate
  circle.data(enemyArr)
  .transition()
    .duration(750)
  .attr('cx', function(d) {
    //console.log(d);
    return d.x;
  })
  .attr('cy',function(d) {
    return d.y;
  });
  // transition
}, 1000);




