class Arth{
    n1:number=10
    n2:number=10
    n3:number=30
    sum(){
        console.log(this.n1+this.n2)
    }
    sub():number{
        return this.n1-this.n2
    }
}

var obj=new Arth()
obj.sum()
console.log(obj.sub())