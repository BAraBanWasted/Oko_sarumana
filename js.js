let main = document.getElementById('main')
let out = document.getElementById('out')
let str = ''
let num = 0
const nums = []
for (i=0;i<16;i++){
    str+='<div id ='+i+'></div>'
    nums.push(0)
}
main.innerHTML= str 
const divs = document.getElementsByTagName('div')
console.log(divs)
for (i in divs){
    divs[i].onclick = f1
}
function f1(){
    console.log(this.id)
    let k = Number(this.id)
    nums[k]+=1
    if (nums[k]>2){nums[k]=0}
    this.innerHTML= '<img src =' +pics[nums[k]]+'>'
}
onclick = f3
function f3 (){
    num +=100
    out.innerHTML = num
}
const pics =['','oko.jpg','ring.png']