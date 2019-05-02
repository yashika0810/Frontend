interface Point{
    x:number,
    y:number
}
//use in multiple places



let demo = (point):{x:number,y:number}=>{
    console.log(point)
}
//inline annoatation // to not repeat this in other functions we use interface
demo({
   x:1,
   y:2
   //passing an object 
})