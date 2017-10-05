//Random szám min és max között
module.exports = function randomMinMax(min, max){
    return Math.floor((Math.random()) * (max-min+1) + min);
}