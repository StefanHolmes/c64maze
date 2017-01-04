var maze = "\\/";
var result = "";
var n=40*25;
for(i=0;i<n;i++) {
    var r = Math.random()*2
    result = result + (maze.slice(r,r+1));
}
console.log(result);