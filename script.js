let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = ""
let array = Array.from(buttons)
array.forEach(button => {
    button.addEventListener('click', (e) => { // element of html.eventlistener
        if(e.target.innerHTML == '='){ // evaluates the string 
           string = eval(string); // evaluates the string
           input.value = string;
        }
       else if(e.target.innerHTML == 'AC'){ // clears the string 
            string = ""
            input.value = string
        }
    //    it deletes the string by reducing its length -1
        else if(e.target.innerHTML == 'x'){
       string = string.substring(0,string.length-1)
       input.value = string
        }
        // increases the number
      else{
        string += e.target.innerHTML 
        input.value = string; 
      }    
    })
})
