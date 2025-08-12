const navList = Array.from(document.getElementsByClassName("navItem"));
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

function createUL(options){
    const ulElement = document.createElement("ul")
    options.forEach(element => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = element;
        li.appendChild(a);
        ulElement.appendChild(li);
    });
    ulElement.classList.add("hiddenNavDropdown");
    return ulElement;
}


navList.forEach((element)=>{
    element.appendChild(createUL(options));
})