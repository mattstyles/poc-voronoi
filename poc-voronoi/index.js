
'use strict';

var Voronoi = require( './voronoi' )
var fit = require( 'canvas-fit' )
var random = require( 'lodash.random' )
var C = require( './constants' )
var Region = require( './region' )
var World = require( './world' )
var iterate = require( './iterate' )

var canvas = document.createElement( 'canvas' )
document.body.appendChild( canvas )
window.addEventListener( 'resize', fit( canvas, window, window.devicePixelRatio ), false )
var renderRegion = require( './render' )( canvas )

var heightmapCanvas = document.createElement( 'canvas' )
document.body.appendChild( heightmapCanvas )
heightmapCanvas.setAttribute( 'id', 'heightmap' )
fit( heightmapCanvas )
var renderHeightmap = require( './renderHeightmap' )( heightmapCanvas )


var world = new World()

world.generate( 0, 0 )
world.generate( 1, 0 )
world.generate( 0, 1 )
world.generate( 1, 1 )

// var region = new Region({
//   x: 0,
//   y: 0,
//   width: C.WORLD_SIZE[ 0 ],
//   height: C.WORLD_SIZE[ 1 ],
//   divisions: C.DIVISIONS
// })
//
// var region2 = new Region({
//   x: C.WORLD_SIZE[ 0 ],
//   y: 0,
//   width: C.WORLD_SIZE[ 0 ],
//   height: C.WORLD_SIZE[ 1 ],
//   divisions: C.DIVISIONS
// })
//
// region2.smoothVertices( 'left', region )
//
// var region3 = new Region({
//   x: 0,
//   y: C.WORLD_SIZE[ 1 ],
//   width: C.WORLD_SIZE[ 0 ],
//   height: C.WORLD_SIZE[ 1 ],
//   divisions: C.DIVISIONS
// })
//
// region3.smoothVertices( 'top', region )
//
// var region4 = new Region({
//   x: C.WORLD_SIZE[ 0 ],
//   y: C.WORLD_SIZE[ 1 ],
//   width: C.WORLD_SIZE[ 0 ],
//   height: C.WORLD_SIZE[ 1 ],
//   divisions: C.DIVISIONS
// })
//
// region4.smoothVertices( 'top', region2 )
// region4.smoothVertices( 'left', region3 )



function render() {
  // renderRegion( region )
  // renderRegion( region2 )
  // renderRegion( region3 )
  // renderRegion( region4 )

  iterate( world.regions, renderRegion )
}

render()

// window.region = region
// window.region2 = region2
// window.region3 = region3
window.world = world
window.renderHeightmap = renderHeightmap //eg renderHeightmap({x:0,y:0,width:800,height:400})
window.render = render