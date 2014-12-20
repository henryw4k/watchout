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

var enemyCircle = svg.selectAll('.enemy')
  .data(enemyArr);

  enemyCircle.enter().append("circle")
  .attr('cx', function(d) {
    return d.x;
  })
  .attr('cy',function(d) {
    return d.y;
  })
  .attr('r', 5)
  .attr('style', "fill: black")
  .attr('class', "enemy");

setInterval(function(){
  // generate new x y cordinates for each enemy.
  for(var j = 0; j < enemyArr.length; j++){
    enemyArr[j].x = generateX();
    enemyArr[j].y = generateY();
  }
  // update enemy on screen with new x y coordinate
  enemyCircle.data(enemyArr)
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

var player = {name: "player",
                 x: 350,
                 y: 225,
                 r: 20
             };

var playerCircle = svg.selectAll('.player')
.data([player]);
playerCircle.enter().append("circle")
  .attr('cx', function(d) {
    //console.log(d);
    return d.x;
  })
  .attr('cy',function(d) {
    return d.y;
  })
  .attr('r', function(d) {
    return d.r;
  })
  .attr('style', "fill: orange")
  .attr('class', "player");

var dragMove = function() {
  moveRelative(d3.event.dx, d3.event.dy);
  console.log(d3.event.dx, d3.event.dy);
};

var moveRelative = function(dx, dy) {
  console.log('moving');
  playerCircle
  .attr('cx', function(d) {
    var newX = d.x + dx;
    if(newX < d.r) {
      d.x = d.r;
    } else if (newX > 700 - d.r){
      d.x = 700 - d.r;
    } else {
      d.x = newX;
    }
    return d.x;
  })
  .attr('cy',function(d) {
    var newY = d.y + dy;
    if(newY < d.r) {
      d.y = d.r;
    } else if (newY> 450 - d.r){
      d.y = 450 - d.r;
    } else {
      d.y = newY;
    }
    return d.y;
  });
};

var drag = d3.behavior.drag().on("drag", dragMove);
svg.selectAll('.player').call(drag);


