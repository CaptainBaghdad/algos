var assert= require('assert');
describe('Array', function(){
 describe('#myMap()', function(){
    it('should return each element in the array with the word capitalizrf', function(){
        assert.equal(['aplle','zebra', 'echo'].myMap(), ['Aplle','Zebra','Echo']);
    });
 });

});