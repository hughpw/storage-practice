
// storagearea.setItem("labelToCallOn","something/valueInThatPlace")
funcLocal = () => localStorage.setItem("localText", inputValue);
funcSession = () => sessionStorage.setItem("sessionText", inputValue);
// the only thing that can go into storage is a string or an object turned into a string(JSON)

// localStorage.setItem("Fruit", "Pineapple");

// sessionStorage.setItem("carBrand", "BMW");

// let var1 = localStorage.getItem("Fruit");

// let var2 = sessionStorage.getItem("carBrand");

funcForP = () => {
  const carSelection = document.querySelector("select");
  const answer = carSelection.options[carSelection.selectedIndex];
  // document.querySelector("p").innerHTML = `You think ${answer.text} are the best car manufacturer.`;
  sessionStorage.setItem("carManufacturer", answer.text);
  let answer2 = sessionStorage.getItem("carManufacturer");
  document.querySelector("p").innerHTML = `You think ${answer2} are the best car manufacturer.`;
  // just for the sake of the project, instead use answer.text
}

document.querySelector("select").addEventListener("change", funcForP);
