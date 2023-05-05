
const body=document.body;

let values=[];
let toComputeValues=[];

let buttons = [...body.querySelectorAll("button")];

const display= document.querySelector(".screen");

buttons.forEach((button)=>{

        button.addEventListener("click", (e)=>{ 

            compute(button);


        })
})


function compute(button){

    

    let value = button.innerText;

    
    console.log(toComputeValues);

    if(value==="C"){

        display.textContent=0;
        toComputeValues=[];
        values=[];
    } 

    else if(value === "=" ){

            display.textContent = eval(toComputeValues);
        
    }else{
        if(value==="x"){
            values.push("*");
        }else{
            values.push(value);
        }
        
    toComputeValues= values.join('')
    display.textContent=toComputeValues;
    }

    

    
    
}
   