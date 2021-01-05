class DropDown {
    constructor(data){
        this.data = data;
        this.targets = [];
    }
    filterData(filtersAsArray){
        return this.data.filter(r => filtersAsArray.every((item,i) => item === r[i]));
    }
    getUniqueValues(dataAsArray,index){
        const uniqueOptions = new Set();
        dataAsArray.forEach(r => uniqueOptions.add(r[index]));
        return [...uniqueOptions];
    }
    populateDropDown(el,listAsArray){
        el.innerHTML = "";
        listAsArray.forEach(item => {
            const option = document.createElement("option");
            option.textContent = item;
            el.appendChild(option);
        });
    }
    createPopulateDropDownFunction(el,elsDependsOn){
       return () => {
        const elsDependsOnValues = elsDependsOn.map(depEl => depEl.value);
        const dataToUse = this.filterData(elsDependsOnValues);
        const listToUse = this.getUniqueValues(dataToUse,elsDependsOn.length);
        this.populateDropDown(el,listToUse);
       }
    }

    add(options){
        const el = document.getElementById(options.target);
        const elsDependsOn = options.dependsOn.map(id => document.getElementById(id));
        const eventFunction = this.createPopulateDropDownFunction(el,elsDependsOn);
        const targetObject = {el: el, elsDependsOn: elsDependsOn, func: eventFunction};
        targetObject.elsDependsOn.forEach(depEl => depEl.addEventListener("change",eventFunction));
        this.targets.push(targetObject);
    }
}




   var myData = [
   
   ["Volvo","Regular Door","1500","2","Sports Car","2","Black"],
      ["Volvo","Regular Door","1500","2","Sports Car","2","White"],

      ["Volvo","Regular Door","1500","2","Sports Car","4","Silver"],
      ["Volvo","Regular Door","1500","2","Sports Car","4","Gray"],

      ["Volvo","Regular Door","1500","2","Minivan","4","Gray"],
      ["Volvo","Regular Door","1500","2","Minivan","4","Blue"],

      ["Volvo","Regular Door","1500","2","Minivan","6","Black"],
      ["Volvo","Regular Door","1500","2","Minivan","6","silver"],

      ["Volvo","Regular Door","1500","2","Convertible","4","White"],
      ["Volvo","Regular Door","1500","2","Convertible","4","Blue"],

      ["Volvo","Regular Door","1500","2","Convertible","6","Red"],
      ["Volvo","Regular Door","1500","2","Convertible","6","Black"],

      ["Volvo","Regular Door","1500","2","Convertible","8","White"],
      ["Volvo","Regular Door","1500","2","Convertible","8","Silver"],

      ["Volvo","Regular Door","1500","2","Hatchback","6","Silver"],
      ["Volvo","Regular Door","1500","2","Hatchback","6","Gray"],

      ["Volvo","Regular Door","1500","2","Hatchback","8","Black"],
      ["Volvo","Regular Door","1500","2","Hatchback","8","Gray"],

      ["Volvo","Regular Door","1500","4","Minivan","2","Blue"],
      ["Volvo","Regular Door","1500","4","Minivan","2","White"],

      ["Volvo","Regular Door","1500","4","Minivan","4","Silver"],
      ["Volvo","Regular Door","1500","4","Minivan","4","White"],

      ["Volvo","Regular Door","1500","4","Minivan","6","Black"],
      ["Volvo","Regular Door","1500","4","Minivan","6","Gray"],

      ["Volvo","Regular Door","1500","4","Convertible","6","White"],
      ["Volvo","Regular Door","1500","4","Convertible","6","Black"],

      ["Volvo","Regular Door","1500","4","Convertible","8","Silver"],
      ["Volvo","Regular Door","1500","4","Convertible","8","Blue"],

      ["Volvo","Regular Door","1500","4","Hatchback","2","Red"],
      ["Volvo","Regular Door","1500","4","Hatchback","2","White"],

      ["Volvo","Regular Door","1500","4","Hatchback","4","Silver"],
      ["Volvo","Regular Door","1500","4","Hatchback","4","Gray"],

      ["Volvo","Regular Door","1500","6","Convertible","4","Blue"],
      ["Volvo","Regular Door","1500","6","Convertible","4","White"],

      ["Volvo","Regular Door","1500","6","Convertible","6","Black"],
      ["Volvo","Regular Door","1500","6","Convertible","6","Silver"],

      ["Volvo","Regular Door","1500","6","Convertible","8","Gray"],
      ["Volvo","Regular Door","1500","6","Convertible","8","Red"],

      ["Volvo","Regular Door","1500","6","Hatchback","2","Black"],
      ["Volvo","Regular Door","1500","6","Hatchback","2","White"],

      ["Volvo","Regular Door","1500","6","Hatchback","4","Blue"],
      ["Volvo","Regular Door","1500","6","Hatchback","4","White"],

      ["Volvo","Regular Door","1500","8","Hatchback","4","White"],
      ["Volvo","Regular Door","1500","8","Hatchback","4","Black"],

      ["Volvo","Regular Door","1500","8","Hatchback","6","Blue"],
      ["Volvo","Regular Door","1500","8","Hatchback","6","White"],

      ["Volvo","Regular Door","1500","8","Convertible","2","Black"],
      ["Volvo","Regular Door","1500","8","Convertible","2","White"],

      ["Volvo","Regular Door","1500","8","Convertible","4","Blue"],
      ["Volvo","Regular Door","1500","8","Convertible","4"],"Red",

      ["Volvo","Regular Door","1500","8","Convertible","6","Silver"],
      ["Volvo","Regular Door","1500","8","Convertible","6","Gray"],

      ["Volvo","Regular Door","2000","4","Minivan","2","White"],
      ["Volvo","Regular Door","2000","4","Minivan","2","Black"],

      ["Volvo","Regular Door","2000","4","Minivan","4","Blue"],
      ["Volvo","Regular Door","2000","4","Minivan","4","Red"],

      ["Volvo","Regular Door","2000","4","Sports Car","4","Gray"],
      ["Volvo","Regular Door","2000","4","Sports Car","4","Blue"],

      ["Volvo","Regular Door","2000","4","Sports Car","6","Black"],
      ["Volvo","Regular Door","2000","4","Sports Car","6","Silver"],

      ["Volvo","Regular Door","2000","4","Sports Car","8","Blue"],
      ["Volvo","Regular Door","2000","4","Sports Car","8","White"],

      ["Volvo","Regular Door","2000","4","Convertible","4","Black"],
      ["Volvo","Regular Door","2000","4","Convertible","4","White"],

      ["Volvo","Regular Door","2000","4","Convertible","6","Blue"],
      ["Volvo","Regular Door","2000","4","Convertible","6","Gray"],

      ["Volvo","Regular Door","2000","4","Hatchback","6","Silver"],
      ["Volvo","Regular Door","2000","4","Hatchback","6","Gray"],

      ["Volvo","Regular Door","2000","4","Hatchback","8","Black"],
      ["Volvo","Regular Door","2000","4","Hatchback","8","Blue"],

      ["Volvo","Regular Door","2000","6","Sports Car","2","Silver"],
      ["Volvo","Regular Door","2000","6","Sports Car","2","White"],

      ["Volvo","Regular Door","2000","6","Sports Car","4","Black"],
      ["Volvo","Regular Door","2000","6","Sports Car","4","Red"],

      ["Volvo","Regular Door","2000","6","Minivan","4","Gray"],
      ["Volvo","Regular Door","2000","6","Minivan","4","Red"],

      ["Volvo","Regular Door","2000","6","Minivan","6","Red"],
      ["Volvo","Regular Door","2000","6","Minivan","6","Black"],

      ["Volvo","Regular Door","2000","6","Minivan","8","Gray"],
      ["Volvo","Regular Door","2000","6","Minivan","8","Black"],

      ["Volvo","Regular Door","2000","6","Hatchback","6","White"],
      ["Volvo","Regular Door","2000","6","Hatchback","6","Blue"],

      ["Volvo","Regular Door","2000","6","Hatchback","8","Silver"],
      ["Volvo","Regular Door","2000","6","Hatchback","8","White"],

      ["Volvo","Regular Door","2000","8","convertible","2","Black"],
      ["Volvo","Regular Door","2000","8","convertible","2","Red"],

      ["Volvo","Regular Door","2000","8","convertible","4","Blue"],
      ["Volvo","Regular Door","2000","8","convertible","4","White"],

      ["Volvo","Regular Door","2000","8","Minivan","4","Silver"],
      ["Volvo","Regular Door","2000","8","Minivan","4","White"],

      ["Volvo","Regular Door","2000","8","Minivan","6","Blue"],
      ["Volvo","Regular Door","2000","8","Minivan","6","Black"],

      ["Volvo","Regular Door","2000","8","Minivan","8","White"],
      ["Volvo","Regular Door","2000","8","Minivan","8","Gray"],

      ["Volvo","Regular Door","2000","8","Sports Car","6","Red"],
      ["Volvo","Regular Door","2000","8","Sports Car","6","Black"],

      ["Volvo","Regular Door","2000","8","Sports Car","8","Blue"],
      ["Volvo","Regular Door","2000","8","Sports Car","8","Silver"],

      ["Volvo","Scissor Door","2500","4","Sports Car","2","Gray"],
      ["Volvo","Scissor Door","2500","4","Sports Car","2","Red"],

      ["Volvo","Scissor Door","2500","4","Sports Car","4","Black"],
      ["Volvo","Scissor Door","2500","4","Sports Car","4","White"],

      ["Volvo","Scissor Door","2500","4","Hatchback","4","Black"],
      ["Volvo","Scissor Door","2500","4","Hatchback","4","Gray"],

      ["Volvo","Scissor Door","2500","4","Hatchback","6","Silver"],
      ["Volvo","Scissor Door","2500","4","Hatchback","6","White"],

      ["Volvo","Scissor Door","2500","4","Hatchback","8","Blue"],
      ["Volvo","Scissor Door","2500","4","Hatchback","8","Black"],

      ["Volvo","Scissor Door","2500","6","Convertible","4","Gray"],
      ["Volvo","Scissor Door","2500","6","Convertible","4","White"],

      ["Volvo","Scissor Door","2500","6","Convertible","6","Blue"],
      ["Volvo","Scissor Door","2500","6","Convertible","6","Gray"],

      ["Volvo","Scissor Door","2500","6","Spotrs Car","2","Red"],
      ["Volvo","Scissor Door","2500","6","Spotrs Car","2","Gray"],

      ["Volvo","Scissor Door","2500","6","Spotrs Car","4","Blue"],
      ["Volvo","Scissor Door","2500","6","Spotrs Car","4","White"],

      ["Volvo","Scissor Door","2500","6","Spotrs Car","6","Black"],
      ["Volvo","Scissor Door","2500","6","Spotrs Car","6","Red"],

      ["Volvo","Scissor Door","2500","6","Hatchback","6","Blue"],
      ["Volvo","Scissor Door","2500","6","Hatchback","6","Gray"],

      ["Volvo","Scissor Door","2500","6","Hatchback","8","White"],
      ["Volvo","Scissor Door","2500","6","Hatchback","8","Black"],

      ["Volvo","Scissor Door","2500","8","Sports Car","2","Blue"],
      ["Volvo","Scissor Door","2500","8","Sports Car","2","Silver"],

      ["Volvo","Scissor Door","2500","8","Sports Car","4","White"],
      ["Volvo","Scissor Door","2500","8","Sports Car","4","Red"],

      ["Volvo","Scissor Door","2500","8","Minivan","4","Black"],
      ["Volvo","Scissor Door","2500","8","Minivan","4","White"],

      ["Volvo","Scissor Door","2500","8","Minivan","6","Silver"],
      ["Volvo","Scissor Door","2500","8","Minivan","6","Gray"],

      ["Volvo","Scissor Door","2500","8","Minivan","8","Black"],
      ["Volvo","Scissor Door","2500","8","Minivan","8","Red"],

      ["Volvo","Scissor Door","3000","6","Hatchback","2","Black"],
      ["Volvo","Scissor Door","3000","6","Hatchback","2","White"],

      ["Volvo","Scissor Door","3000","6","Hatchback","4","Silver"],
      ["Volvo","Scissor Door","3000","6","Hatchback","4","Red"],

      ["Volvo","Scissor Door","3000","6","Minivan","4","Red"],
      ["Volvo","Scissor Door","3000","6","Minivan","4","Silver"],

      ["Volvo","Scissor Door","3000","6","Minivan","6","White"],
      ["Volvo","Scissor Door","3000","6","Minivan","6","Blue"],

      ["Volvo","Scissor Door","3000","6","Minivan","8","Silver"],
      ["Volvo","Scissor Door","3000","6","Minivan","8","Gray"],

      ["Volvo","Scissor Door","3000","6","Sports Car","6","Black"],
      ["Volvo","Scissor Door","3000","6","Sports Car","6","White"],

      ["Volvo","Scissor Door","3000","6","Sports Car","8","Silver"],
      ["Volvo","Scissor Door","3000","6","Sports Car","8","Red"],

      ["Volvo","Scissor Door","3000","8","Convertible","2","Gray"],
      ["Volvo","Scissor Door","3000","8","Convertible","2","Blue"],

      ["Volvo","Scissor Door","3000","8","Convertible","4","White"],
      ["Volvo","Scissor Door","3000","8","Convertible","4","Blue"],

      ["Volvo","Scissor Door","3000","8","Convertible","6","Red"],
      ["Volvo","Scissor Door","3000","8","Convertible","6","Gray"],

      ["Volvo","Scissor Door","3000","8","Minivan","6","Black"],
      ["Volvo","Scissor Door","3000","8","Minivan","6","Blue"],

      ["Volvo","Scissor Door","3000","8","Minivan","8","Silver"],
      ["Volvo","Scissor Door","3000","8","Minivan","8","Red"],

     

      
      ["BMW","Butterfly Door","1500","2","Sports Car","2","Black"],
      ["BMW","Butterfly Door","1500","2","Sports Car","2","White"],

      ["BMW","Butterfly Door","1500","2","Sports Car","4","Silver"],
      ["BMW","Butterfly Door","1500","2","Sports Car","4","Gray"],

      ["BMW","Butterfly Door","1500","2","Minivan","4","Gray"],
      ["BMW","Butterfly Door","1500","2","Minivan","4","Blue"],

      ["BMW","Butterfly Door","1500","2","Minivan","6","Black"],
      ["BMW","Butterfly Door","1500","2","Minivan","6","silver"],

      ["BMW","Butterfly Door","1500","2","Convertible","4","White"],
      ["BMW","Butterfly Door","1500","2","Convertible","4","Blue"],

      ["BMW","Butterfly Door","1500","2","Convertible","6","Red"],
      ["BMW","Butterfly Door","1500","2","Convertible","6","Black"],

      ["BMW","Butterfly Door","1500","2","Convertible","8","White"],
      ["BMW","Butterfly Door","1500","2","Convertible","8","Silver"],

      ["BMW","Butterfly Door","1500","2","Hatchback","6","Silver"],
      ["BMW","Butterfly Door","1500","2","Hatchback","6","Gray"],

      ["BMW","Butterfly Door","1500","2","Hatchback","8","Black"],
      ["BMW","Butterfly Door","1500","2","Hatchback","8","Gray"],

      ["BMW","Butterfly Door","1500","4","Minivan","2","Blue"],
      ["BMW","Butterfly Door","1500","4","Minivan","2","White"],

      ["BMW","Butterfly Door","1500","4","Minivan","4","Silver"],
      ["BMW","Butterfly Door","1500","4","Minivan","4","White"],

      ["BMW","Butterfly Door","1500","4","Minivan","6","Black"],
      ["BMW","Butterfly Door","1500","4","Minivan","6","Gray"],

      ["BMW","Butterfly Door","1500","4","Convertible","6","White"],
      ["BMW","Butterfly Door","1500","4","Convertible","6","Black"],

      ["BMW","Butterfly Door","1500","4","Convertible","8","Silver"],
      ["BMW","Butterfly Door","1500","4","Convertible","8","Blue"],

      ["BMW","Butterfly Door","1500","4","Hatchback","2","Red"],
      ["BMW","Butterfly Door","1500","4","Hatchback","2","White"],

      ["BMW","Butterfly Door","1500","4","Hatchback","4","Silver"],
      ["BMW","Butterfly Door","1500","4","Hatchback","4","Gray"],

      ["BMW","Butterfly Door","1500","6","Convertible","4","Blue"],
      ["BMW","Butterfly Door","1500","6","Convertible","4","White"],

      ["BMW","Butterfly Door","1500","6","Convertible","6","Black"],
      ["BMW","Butterfly Door","1500","6","Convertible","6","Silver"],

      ["BMW","Butterfly Door","1500","6","Convertible","8","Gray"],
      ["BMW","Butterfly Door","1500","6","Convertible","8","Red"],

      ["BMW","Butterfly Door","1500","6","Hatchback","2","Black"],
      ["BMW","Butterfly Door","1500","6","Hatchback","2","White"],

      ["BMW","Butterfly Door","1500","6","Hatchback","4","Blue"],
      ["BMW","Butterfly Door","1500","6","Hatchback","4","White"],

      ["BMW","Butterfly Door","1500","8","Hatchback","4","White"],
      ["BMW","Butterfly Door","1500","8","Hatchback","4","Black"],

      ["BMW","Butterfly Door","1500","8","Hatchback","6","Blue"],
      ["BMW","Butterfly Door","1500","8","Hatchback","6","White"],

      ["BMW","Butterfly Door","1500","8","Convertible","2","Black"],
      ["BMW","Butterfly Door","1500","8","Convertible","2","White"],

      ["BMW","Butterfly Door","1500","8","Convertible","4","Blue"],
      ["BMW","Butterfly Door","1500","8","Convertible","4"],"Red",

      ["BMW","Butterfly Door","1500","8","Convertible","6","Silver"],
      ["BMW","Butterfly Door","1500","8","Convertible","6","Gray"],

      ["BMW","Butterfly Door","2000","4","Minivan","2","White"],
      ["BMW","Butterfly Door","2000","4","Minivan","2","Black"],

      ["BMW","Butterfly Door","2000","4","Minivan","4","Blue"],
      ["BMW","Butterfly Door","2000","4","Minivan","4","Red"],

      ["BMW","Butterfly Door","2000","4","Sports Car","4","Gray"],
      ["BMW","Butterfly Door","2000","4","Sports Car","4","Blue"],

      ["BMW","Butterfly Door","2000","4","Sports Car","6","Black"],
      ["BMW","Butterfly Door","2000","4","Sports Car","6","Silver"],

      ["BMW","Butterfly Door","2000","4","Sports Car","8","Blue"],
      ["BMW","Butterfly Door","2000","4","Sports Car","8","White"],

      ["BMW","Butterfly Door","2000","4","Convertible","4","Black"],
      ["BMW","Butterfly Door","2000","4","Convertible","4","White"],

      ["BMW","Butterfly Door","2000","4","Convertible","6","Blue"],
      ["BMW","Butterfly Door","2000","4","Convertible","6","Gray"],

      ["BMW","Butterfly Door","2000","4","Hatchback","6","Silver"],
      ["BMW","Butterfly Door","2000","4","Hatchback","6","Gray"],

      ["BMW","Butterfly Door","2000","4","Hatchback","8","Black"],
      ["BMW","Butterfly Door","2000","4","Hatchback","8","Blue"],

      ["BMW","Butterfly Door","2000","6","Sports Car","2","Silver"],
      ["BMW","Butterfly Door","2000","6","Sports Car","2","White"],

      ["BMW","Butterfly Door","2000","6","Sports Car","4","Black"],
      ["BMW","Butterfly Door","2000","6","Sports Car","4","Red"],

      ["BMW","Butterfly Door","2000","6","Minivan","4","Gray"],
      ["BMW","Butterfly Door","2000","6","Minivan","4","Red"],

      ["BMW","Butterfly Door","2000","6","Minivan","6","Red"],
      ["BMW","Butterfly Door","2000","6","Minivan","6","Black"],

      ["BMW","Butterfly Door","2000","6","Minivan","8","Gray"],
      ["BMW","Butterfly Door","2000","6","Minivan","8","Black"],

      ["BMW","Butterfly Door","2000","6","Hatchback","6","White"],
      ["BMW","Butterfly Door","2000","6","Hatchback","6","Blue"],

      ["BMW","Butterfly Door","2000","6","Hatchback","8","Silver"],
      ["BMW","Butterfly Door","2000","6","Hatchback","8","White"],

      ["BMW","Butterfly Door","2000","8","convertible","2","Black"],
      ["BMW","Butterfly Door","2000","8","convertible","2","Red"],

      ["BMW","Butterfly Door","2000","8","convertible","4","Blue"],
      ["BMW","Butterfly Door","2000","8","convertible","4","White"],

      ["BMW","Butterfly Door","2000","8","Minivan","4","Silver"],
      ["BMW","Butterfly Door","2000","8","Minivan","4","White"],

      ["BMW","Butterfly Door","2000","8","Minivan","6","Blue"],
      ["BMW","Butterfly Door","2000","8","Minivan","6","Black"],

      ["BMW","Butterfly Door","2000","8","Minivan","8","White"],
      ["BMW","Butterfly Door","2000","8","Minivan","8","Gray"],

      ["BMW","Butterfly Door","2000","8","Sports Car","6","Red"],
      ["BMW","Butterfly Door","2000","8","Sports Car","6","Black"],

      ["BMW","Butterfly Door","2000","8","Sports Car","8","Blue"],
      ["BMW","Butterfly Door","2000","8","Sports Car","8","Silver"],

      ["BMW","Gull Wing Door","2500","4","Sports Car","2","Gray"],
      ["BMW","Gull Wing Door","2500","4","Sports Car","2","Red"],

      ["BMW","Gull Wing Door","2500","4","Sports Car","4","Black"],
      ["BMW","Gull Wing Door","2500","4","Sports Car","4","White"],

      ["BMW","Gull Wing Door","2500","4","Hatchback","4","Black"],
      ["BMW","Gull Wing Door","2500","4","Hatchback","4","Gray"],

      ["BMW","Gull Wing Door","2500","4","Hatchback","6","Silver"],
      ["BMW","Gull Wing Door","2500","4","Hatchback","6","White"],

      ["BMW","Gull Wing Door","2500","4","Hatchback","8","Blue"],
      ["BMW","Gull Wing Door","2500","4","Hatchback","8","Black"],

      ["BMW","Gull Wing Door","2500","6","Convertible","4","Gray"],
      ["BMW","Gull Wing Door","2500","6","Convertible","4","White"],

      ["BMW","Gull Wing Door","2500","6","Convertible","6","Blue"],
      ["BMW","Gull Wing Door","2500","6","Convertible","6","Gray"],

      ["BMW","Gull Wing Door","2500","6","Spotrs Car","2","Red"],
      ["BMW","Gull Wing Door","2500","6","Spotrs Car","2","Gray"],

      ["BMW","Gull Wing Door","2500","6","Spotrs Car","4","Blue"],
      ["BMW","Gull Wing Door","2500","6","Spotrs Car","4","White"],

      ["BMW","Gull Wing Door","2500","6","Spotrs Car","6","Black"],
      ["BMW","Gull Wing Door","2500","6","Spotrs Car","6","Red"],

      ["BMW","Gull Wing Door","2500","6","Hatchback","6","Blue"],
      ["BMW","Gull Wing Door","2500","6","Hatchback","6","Gray"],

      ["BMW","Gull Wing Door","2500","6","Hatchback","8","White"],
      ["BMW","Gull Wing Door","2500","6","Hatchback","8","Black"],

      ["BMW","Gull Wing Door","2500","8","Sports Car","2","Blue"],
      ["BMW","Gull Wing Door","2500","8","Sports Car","2","Silver"],

      ["BMW","Gull Wing Door","2500","8","Sports Car","4","White"],
      ["BMW","Gull Wing Door","2500","8","Sports Car","4","Red"],

      ["BMW","Gull Wing Door","2500","8","Minivan","4","Black"],
      ["BMW","Gull Wing Door","2500","8","Minivan","4","White"],

      ["BMW","Gull Wing Door","2500","8","Minivan","6","Silver"],
      ["BMW","Gull Wing Door","2500","8","Minivan","6","Gray"],

      ["BMW","Gull Wing Door","2500","8","Minivan","8","Black"],
      ["BMW","Gull Wing Door","2500","8","Minivan","8","Red"],

      ["BMW","Gull Wing Door","3000","6","Hatchback","2","Black"],
      ["BMW","Gull Wing Door","3000","6","Hatchback","2","White"],

      ["BMW","Gull Wing Door","3000","6","Hatchback","4","Silver"],
      ["BMW","Gull Wing Door","3000","6","Hatchback","4","Red"],

      ["BMW","Gull Wing Door","3000","6","Minivan","4","Red"],
      ["BMW","Gull Wing Door","3000","6","Minivan","4","Silver"],

      ["BMW","Gull Wing Door","3000","6","Minivan","6","White"],
      ["BMW","Gull Wing Door","3000","6","Minivan","6","Blue"],

      ["BMW","Gull Wing Door","3000","6","Minivan","8","Silver"],
      ["BMW","Gull Wing Door","3000","6","Minivan","8","Gray"],

      ["BMW","Gull Wing Door","3000","6","Sports Car","6","Black"],
      ["BMW","Gull Wing Door","3000","6","Sports Car","6","White"],

      ["BMW","Gull Wing Door","3000","6","Sports Car","8","Silver"],
      ["BMW","Gull Wing Door","3000","6","Sports Car","8","Red"],

      ["BMW","Gull Wing Door","3000","8","Convertible","2","Gray"],
      ["BMW","Gull Wing Door","3000","8","Convertible","2","Blue"],

      ["BMW","Gull Wing Door","3000","8","Convertible","4","White"],
      ["BMW","Gull Wing Door","3000","8","Convertible","4","Blue"],

      ["BMW","Gull Wing Door","3000","8","Convertible","6","Red"],
      ["BMW","Gull Wing Door","3000","8","Convertible","6","Gray"],

      ["BMW","Gull Wing Door","3000","8","Minivan","6","Black"],
      ["BMW","Gull Wing Door","3000","8","Minivan","6","Blue"],

      ["BMW","Gull Wing Door","3000","8","Minivan","8","Silver"],
      ["BMW","Gull Wing Door","3000","8","Minivan","8","Red"],

     
     
   ];

   var dd = new DropDown(myData);
  
 
   dd.add({target: "level2", dependsOn: ["level1"]});
   dd.add({target: "level3", dependsOn: ["level1","level2"]});
   dd.add({target: "level7", dependsOn: ["level1","level2","level3","level4","level5","level6"]});
   dd.add({target: "level6", dependsOn: ["level1","level2","level3","level4","level5"]});
   dd.add({target: "level5", dependsOn: ["level1","level2","level3","level4"]});
   dd.add({target: "level4", dependsOn: ["level1","level2","level3"]});






