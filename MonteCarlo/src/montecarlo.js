/*
  YOUR TASK:  To fill in the following function.

  --- BASIC REQUIREMENTS ---
    * It should return a number equal to the area of the shape.

  --- EXTRA CREDIT ---
    * Have the algorithm only halt after a certain degree of precision has been reached.
    * Refine your algorithm to choose points in a "smarter" fashion.
    * Dig into base.js and improve performance there.

  --- AVAILABLE METHODS ---

    The following methods are available to you in the global scope:

      evalPoint: function(x, y)
        -- Returns "true" if a point is inside the shape, and false otherwise.

      getGraphDimensions: function()
        -- Returns an objects with the dimensions of the graph.
        -- Has properties x and y, each of which has properties min and max.
           (ex. { x:{min: 3, max: 10}, y:{min:-5, max: 6} })

  --- SOME THINGS TO THINK ABOUT ---
    * Which shapes are easier/harder to integrate?
    * What ratio of window size to shape size maximizes accuracy?
    * 
*/

var integrate = function() {
  var matrix = [];
  var wndw = getGraphDimensions();


  var width = wndw.x.max - wndw.x.min;
  var height = wndw.y.max - wndw.y.min;
  

  for(var i=0; i<1000; i++){
    var xPoint = (Math.random()*width)+wndw.x.min;
    var yPoint = (Math.random()*height)+wndw.y.min;
    matrix.push(evalPoint(xPoint,yPoint));

  }
  var within = 0;
  for(i=0; i<matrix.length; i++){
    if(matrix[i]){
        within++;
    }
  }
var ratio = within/matrix.length;
  var area = ratio*width*height;
  return area;
};


