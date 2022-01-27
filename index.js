const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  //const listEl = document.querySelector(".lista")
  //const listDosEl = listEl.querySelectorAll("li") es igual a:
  //Els es de elements
  const listaEl = document.querySelector(".lista")
  const itemsEls = document.querySelectorAll(".lista li")
 


  itemsEls.forEach((el)=>{
    el.remove()
  })
  

  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li")
    newLiEl.textContent = item.tema
    newLiEl.classList.add(item.class || "item")
    
    listaEl.appendChild(newLiEl)
    
    
  }

  


   

  

  
}

main();
