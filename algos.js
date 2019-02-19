String.prototype.camelCase = function(){
    this.toLowerCase();
    let ans = '';
    let strSplit = this.split(' ');
    for(let i = 0; i < strSplit.length;i++){
        ans += strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1)

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

/*['aplle','zebra', 'echo'].myMap(function(ele){
    return ele.charAt(0).toUpperCase() + ele.slice(1)

})*/