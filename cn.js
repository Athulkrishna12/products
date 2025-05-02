// let root = document.getElementById('root');


// function addElem() {
//     let val= prompt();
//     let root = document.getElementById('root');
//     let text = document.createElement('h1');
//  console.log(val);
//  text.innerText = val;
 
//     root.append(text);
//     }





let root = document.getElementById('root');
let data = document.getElementById('data');


function addElem() {
    
    let root = document.getElementById('root');
    let text = document.createElement('h1');
 console.log(data.value);
 text.innerText = data.value;
 
    root.append(text);
    }
