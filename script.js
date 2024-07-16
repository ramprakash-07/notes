let a = document.getElementById("input1");
let appender = document.querySelector(".appender")

document.querySelector(".add").addEventListener("click", ()=>{
    let newdiv = document.createElement('h1');
    newdiv.id="newdivid"
    newdiv.innerHTML=a.value +"<button onclick='edit(event)' class='edit'>EDIT</button><button onclick='remove(event)' class='delete'>DELETE</button>" ;
    
    appender.append(newdiv);
    
    


    
})

function remove(event){
    event.target.parentElement.remove()
}


function edit(event) {
    let currentText = event.target.parentElement.textContent.trim();
    let wantedText = currentText.slice(0,-10);
    event.target.parentElement.innerHTML = "<input id='inputid'><button class='ok' onclick='ok(event)'>OK</button>";
    
    let inputid = document.getElementById("inputid");
    inputid.value = wantedText;
}

function ok(event) {
    let inputid = document.getElementById("inputid");
    let newValue = inputid.value;
    
    event.target.parentElement.innerHTML = newValue + " <button onclick='edit(event)' class='edit'>EDIT</button> <button onclick='remove(event)' class='delete'>DELETE</button>";
}

