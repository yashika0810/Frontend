class Point{
    x:number;
    y:number;//fields for storing data
    demo()
{

}
    getdistance(another:Point){

    }
}





interface Point{
    x:number,
    y:number
    demo:()=> void;//can directly access the interface members without 
    //declaring the parameter
}
let demo1=(point:Point)=>
{
  
}
let getdistance=(pointa: Point, pointb:Point)=>{
    //..
}
//we cannot move these functions in interface
//because interfaces are for declarations not for implementations//..
demo1({
    x:1,
    y:2
})