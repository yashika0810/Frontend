//all js code is also a valid ts code

function demo(value)
{
    console.log(value);

}
var value='hello';
demo(value);





//variable declarations:-

//var scoping

function demo1(){
    for(var i=0; i<5;i++){
        console.log(i);

    }
console.log(i);
}
demo1();


//redeclarations

var x=2;
var x=3;
var x=8;

if(x<10){
    console.log(x);
}
else{
    console.log('error');
}
//using let keyword



//TYPES:-

let a:number;
let b:boolean;
let e:string;
let c:any;
let d:number[]=[1,2.3];


const red=0;
const blue=1;

enum color{red,green,blue};
let bcolor=color.blue;





//Type assertions

let y;
y='abc';

let z=(<string>y).endsWith('c');
let p=(y as string).endsWith('c');



//Arrow Functions



function demoo(message){
    console.log(message);//in javascript
}

let demo3= (value)=>{
    console.log(value)
}

let v='hello';
let demo4=(g)=>{
    console.log(g);
}
demo4(v);

//example


/*

let v:number=4;
let sum=(value)=>
{
    value++;
    return value;
}
console.log(sum(p));

*/





//Interfaces


//without interface

let demo8=(object:{x:number,y:number,c:number})=>     //type annoataion
{console.log(object.x);
}
 demo({a:5,b:6, c:'abc'});






 //using interface

interface Point{
    x:number,
    y:number
   
}


let demo2=(object:Point)=>{
    console.log(object.x);
}
demo2({x:4,y:2})



let demo6=(sum:Point)=>{
    console.log(sum.x);
}

demo6({x:8,y:6});



//CLASSES








class Point{
    x:number;
    y:number;
 
    
    draw(){

console.log('x' +this.x + 'y'+this.y);
    }
}

let object:Point;
object.draw();