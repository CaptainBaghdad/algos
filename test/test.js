var assert = require('assert');

String.prototype.camelCase = function(){
    
    let ans = '';
    let strSplit = this.split(' ');
    let reg = /^\W/;

    if(strSplit.length == 1){
        return this;
    }

    
    
   
    this.toLowerCase();
    for(let i = 0; i < strSplit.length;i++){
        
        if(strSplit[i].charAt(0).search(reg) !== -1){
            return this;
        }
        
        else{
            ans += strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
        }
        

    }

    return ans;
}

Array.prototype.myMap = function(callback){
    let arr = [];
    for(let i =0; i < this.length;i++){
        arr.push(callback(this[i]));


    }

    return arr;
}






describe('String', function(){
 describe('#camelCase()', function(){
    
    it('should be a string', function(){
        assert.equal(typeof('first test'.camelCase()), 'string');
    });

    it('should check to see that the first letter of each word is a letter', function(){
        assert.equal('!ord'.camelCase(), '!ord');
        
    });

    it('should return this !s a test', function(){
        assert.equal('this !s a test'.camelCase(), 'this !s a test');

        
    });

    it('should return Th!sIsATest', function(){
        assert.equal('th!s is a test'.camelCase(), 'Th!sIsATest');

        
    });

    it('should return Th!s Is ^ Test', function(){
        assert.equal('Th!s Is ^ Test'.camelCase(), 'Th!s Is ^ Test');

        
    });

    it('should return ThisIsAT%st', function(){
        assert.equal('This Is A T%st'.camelCase(), 'ThisIsAT%st');

        
    });

    
    it('should return the original string if only one word', function(){
        assert.equal('Word'.camelCase(), 'Word');
    });



 });

});