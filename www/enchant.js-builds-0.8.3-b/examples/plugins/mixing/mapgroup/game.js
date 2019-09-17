/*
 * Same sample than examples/expert/rpg
 * but instead of using a group object the
 * map class is mixed with a group so that
 * objects can be nested directly within a
 * map:
 * 
    var MapGroup = enchant.Class.mixClasses(Map, Group,true);
    var map = new MapGroup(16, 16);

    map.addChild(player);
    map.addChild(foregroundMap);

    game.rootScene.addChild(map);

    game.rootScene.addEventListener('enterframe', function(e) {
        ... 
        map.x = x;
        map.y = y;
    });
 *    
 * previously:
 * 
    var map = new Map(16, 16);
    ...
    var stage = new Group();
    stage.addChild(map);
    stage.addChild(player);
    stage.addChild(foregroundMap);

    game.rootScene.addChild(stage);

    game.rootScene.addEventListener('enterframe', function(e) {
        ... 
        stage.x = x;
        stage.y = y;
    });
 *
 */

enchant();

window.onload = function() {
    var game = new Game(320, 320);
    game.fps = 15;
    game.preload('map1.gif', 'chara0.gif');
    game.onload = function() {
    	var MapGroup = enchant.Class.mixClasses(Map, Group,true);
        var map = new MapGroup(16, 16);
        map.image = game.assets['map1.gif'];
        map.loadData([
            [322,322,322,322,322,322,224,225,225,225,225,225,167,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205],
            [322,322,322,322,322,322,322,322,322,322,322,322,224,225,225,225,225,225,167,205,205,205,205,205,205,205,205,205,205,205],
            [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,224,225,225,225,225,225,225,225,225,225,225,225],
            [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
            [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
            [322,322,322,342,342,342,341,341,341,342,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
            [322,322,322, 24, 25, 25, 25, 26,322,322,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
            [322,322,322, 44, 45, 45, 45, 46,322,322,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
            [322,322,322, 64,  7,  6, 65, 66,322,322,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,342,342,342,342,322,322,322,322,322,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,342,342,342,342,322,322,322,322,322,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,342,342,342,342,322,322,322,322,322,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 24, 26,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
            [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
            [ 25, 25, 25, 25,  5, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
            [ 45, 45, 45, 45, 45,  4, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,  5, 49,322,322,322,322,322,322,322,322,322,322],
            [ 45, 45, 45, 45, 45, 45,  6, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 66,322,322,322,322,322,322,322,322,322,322],
            [ 45, 45, 45, 45, 45, 45, 46,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
            [ 45, 45, 45, 45, 45,  6, 66,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,184,185,185,186,322,322,322],
            [ 65, 65, 65, 65, 65, 66,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,184,165,205,205,164,186,322,322],
            [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,204,205,205,205,205,164,185,185],
            [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,180,161,161,161,207,205,205,205,205,205,205,205],
            [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,203,322,322,322,204,205,205,205,205,205,205,205],
            [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,203,322,322,322,204,205,205,205,205,205,205,205]
        ],[
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,461,462, -1,461,462, -1,461,462,421,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,481,482, -1,481,482,421,481,482,421,481,482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,421,421,321,341,341,341,341,341,321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,461,462,321,422, -1, -1,400,400,321,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,481,482,321, -1, -1, -1, -1,400,321,481,482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1,321,521,521,521,521,521,321,421, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,461,462,321, -1, -1, -1, -1, -1,321,461,462, -1, -1, -1, -1, -1,321,341,341,341,341,341,341,341,321, -1, -1, -1, -1],
            [ -1,481,482,321, -1, -1, -1, -1,400,321,481,482, -1, -1, -1, -1, -1,321,420, -1, -1, -1, -1,400,400,321, -1,421, -1, -1],
            [ -1, -1, -1,341, -1, -1, -1, -1, -1,341,421, -1, -1, -1, -1, -1, -1,321, -1, -1, -1, -1, -1, -1,400,321,461,462, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1,421,421, -1, -1, -1, -1, -1, -1, -1,321, -1, -1,321, -1, -1, -1, -1,321,481,482, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,321,521,521,321,402, -1, -1, -1,321, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462,321, -1, -1,321,341,341,341, -1,341, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,481,482,321, -1, -1,321, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,421,321, -1, -1,321, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,341, -1, -1,341, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,481,482,481,482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,421, -1, -1, -1, -1,460, -1, -1, -1, -1, -1, -1, -1,461,462, -1,421, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,480, -1, -1, -1, -1, -1, -1, -1,481,482,421, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,481,482, -1, -1, -1, -1, -1, -1, -1,421, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,421,420, -1, -1, -1, -1, -1, -1, -1, -1]
        ]);
        map.collisionData = [
            [  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
            [  0,  1,  1,  0,  1,  1,  0,  1,  1,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
            [  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  1,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  1,  1,  1,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0],
            [  0,  1,  1,  1,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0],
            [  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  1,  1,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  0,  1,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1]
        ];

        var foregroundMap = new Map(16, 16);
        foregroundMap.image = game.assets['map1.gif'];
        foregroundMap.loadData([
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,461,462, -1,461,462, -1,461,462, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,461,462, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1,461,462, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,402, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                function addBear () {
                var bear = new Sprite(32, 32);
                bear.image = game.assets['chara1.gif'];
                canvasGroup.addChild(bear);
                bear.frame = 5;
                bear.vx = 3;
                bear.vy = 2;
                bear.vs = 0.01;
                bear.onenterframe = function(){
                    this.x += this.vx;
                    this.y += this.vy;
                    if(this.x > 288 || this.x < 0){
                        this.vx *= -1;
                        this.vs *= -1;
                    }
                    if(this.y > 288 || this.y < 0){
                        this.vy *= -1;
                        this.vs *= -1;
                    }
                    this.rotation += 5;
                    this.scaleX += this.vs;
                    this.scaleY += this.vs;
                };
                return bear;
            }
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
        ]);

        var player = new Sprite(32, 32);
        player.x = 6 * 16 - 8;
        player.y = 10 * 16;
        var image = new Surface(96, 128);
        image.draw(game.assets['chara0.gif'], 0, 0, 96, 128, 0, 0, 96, 128);
        player.image = image;

        player.isMoving = false;
        player.direction = 0;
        player.walk = 1;
        player.addEventListener('enterframe', function() {
            this.frame = this.direction * 3 + this.walk;
            if (this.isMoving) {
                this.moveBy(this.vx, this.vy);
 
                if (!(game.frame % 3)) {
                    this.walk++;
                    this.walk %= 3;
                }
                if ((this.vx && (this.x-8) % 16 == 0) || (this.vy && this.y % 16 == 0)) {
                    this.isMoving = false;
                    this.walk = 1;
                }
            } else {
                this.vx = this.vy = 0;
                if (game.input.left) {
                    this.direction = 1;
                    this.vx = -4;
                } else if (game.input.right) {
                    this.direction = 2;
                    this.vx = 4;
                } else if (game.input.up) {
                    this.direction = 3;
                    this.vy = -4;
                } else if (game.input.down) {
                    this.direction = 0;
                    this.vy = 4;
                }
                if (this.vx || this.vy) {
                    var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 16 : 0) + 16;
                    var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 16 : 0) + 16;
                    if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
                        this.isMoving = true;
                        arguments.callee.call(this);
                    }
                }
            }
        });
        map.addChild(player);
        map.addChild(foregroundMap);
        game.rootScene.addChild(map);

        var pad = new Pad();
        pad.x = 0;
        pad.y = 220;
        game.rootScene.addChild(pad);

        game.rootScene.addEventListener('enterframe', function(e) {
            var x = Math.min((game.width  - 16) / 2 - player.x, 0);
            var y = Math.min((game.height - 16) / 2 - player.y, 0);
            x = Math.max(game.width,  x + map.width)  - map.width;
            y = Math.max(game.height, y + map.height) - map.height;
            map.x = x;
            map.y = y;
        });
    };
    game.start();
};
