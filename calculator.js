var buttons = document.getElementsByClassName("unit");
var display = document.getElementById("display");
var op1=0;
var op2=null;
var op = null;


for(var i=0;i<buttons.length;i++){

    buttons[i].addEventListener('click', function(){
    var value = this.getAttribute('data-value');
        if(value=='+'){
            op = '+';
            op1 = parseFloat(display.textContent);
            display.innerText = " ";
        }else if(value=='AC'){
            display.innerText = " ";
        
        }else if(value=='='){
            
            op2 = parseFloat(display.textContent);

            if(op2=='0'){
                display.innerText="Error";
            }else if(op=='^'){
                display.innerText =Math.pow(parseInt(op1), parseInt(op2));
            }else{
                res = eval(op1+" "+op+" "+op2);
                display.innerText =res;
            }
        }else if(value=='-'){
            op = '-';
            op1 = parseFloat(display.textContent);
            display.innerText = " ";
        }else if(value=='*'){
            op = '*';
            op1 = parseFloat(display.textContent);
            display.innerText = " ";
        }else if(value=='/'){
            op = '/';
            op1 = parseFloat(display.textContent);
            display.innerText = " ";
        }else if(value=='^'){
            op = '^';
            op1 = parseFloat(display.textContent);
            display.innerText = " ";
        }else if(value=='%'){
            op = '%';
            op1 = parseFloat(display.textContent);
            display.innerText = " ";
        }else{
            display.innerText += value;
        }

    });
}


