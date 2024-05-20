var Arth = /** @class */ (function () {
    function Arth() {
        this.n1 = 10;
        this.n2 = 10;
        this.n3 = 30;
    }
    Arth.prototype.sum = function () {
        console.log(this.n1 + this.n2);
    };
    Arth.prototype.sub = function () {
        return this.n1 - this.n2;
    };
    return Arth;
}());
var obj = new Arth();
obj.sum();
console.log(obj.sub());
