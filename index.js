document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#formPharase").addEventListener("submit",formEvent)
})

function regex(string){
    let pharaseDecode = string.split(/0.0*/); 
    
    return  { first_name: pharaseDecode[0], last_name: pharaseDecode[1], id: pharaseDecode[2] };
}

function formEvent(event) {
    event.preventDefault();

    let pharase = document.querySelector("#pharase");
    let json = document.querySelector("#result");

    if(pharase.value.length === 0){
        pharase.classList.add("inputError");
        json.style.display="none";
        return
    } ;


    result = regex(pharase.value);

    json.textContent = 
    JSON.stringify(
        result,
        undefined,
        2
    );

    pharase.classList.remove("inputError");
    json.style.display="block";
}

