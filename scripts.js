const createButton = document.querySelector(".buttonClick")
const createButton2 = document.querySelector(".buttonClick2")
const mainContainer = document.querySelector(".main-container")
const secondMainContainer = document.querySelector(".second-main-container")







const firstBlank = document.querySelector(".for-first-blank")
const secondBlank = document.querySelector(".for-second-blank")
const thirdBlank = document.querySelector(".for-third-blank")
const fourthBlank = document.querySelector(".for-fourth-blank")
const fifthBlank = document.querySelector(".for-fifth-blank")


const firstBlank1 = document.querySelector(".for-first-blank1")
const secondBlank1 = document.querySelector(".for-second-blank1")
const thirdBlank1 = document.querySelector(".for-third-blank1")
const fourthBlank1 = document.querySelector(".for-fourth-blank1")
const fifthBlank1 = document.querySelector(".for-fifth-blank1")

const checkoutContainer = document.querySelector(".checkOutContainer")
const checkoutCard = document.querySelector(".checkoutCard")
const createButton3 = document.querySelector(".buttonClick3")


window.addEventListener("load",()=>{
    createButton3.disabled = true
})



createButton2.addEventListener("click",(e)=>{
    e.preventDefault()

    
    secondMainContainer.style.display = "flex"
    secondMainContainer.style.transform = "rotate(1turn) scale(1)"
    mainContainer.style.transform = "translateY(-100%) scale(0)"
    
    
    setTimeout(()=>{
        mainContainer.style.display = "none"
    },300)
})

// To appear next page after clicked create plan button
createButton.addEventListener("click",(e)=>{
    e.preventDefault()

    
    secondMainContainer.style.display = "flex"
    secondMainContainer.style.transform = "rotate(1turn) scale(1)"
    mainContainer.style.transform = "translateY(-100%) scale(0)"
    
    
    setTimeout(()=>{
        mainContainer.style.display = "none"
    },300)


    
})

//This loop and data are first MAIN_CONTAINER 
const coffeePhotoData = [
    {
        id : 1,

    }
]


//data for create plan page list 

const listArray = [
    {
        id : 1,
        name : "Preferences",
        number: "01",
        class: "one",

    },
    {
        id : 2,
        name : "Bean Type",
        number: "02",
        class: "two",

    },
    {
        id : 3,
        name : "Quantity",
        number: "03",
        class: "three",

    },
    {
        id : 4,
        name : "Grind Option",
        number: "04",
        class: "four",

    },
    {
        id : 5,
        name : "Deliveries",
        number: "05",
        class: "five",

    },
    
]

const cardData = [
    {
        id : 1 ,
        name : "Capsule",
        text : "Compatiable with Nespresso systems and similar brewers",
        classForSpan : "capsule-text",
        classforP : "detail1",
        class : "capsule"
        
    },
    {
        id : 2 ,
        name : "Filter",
        text : "For pour over or drip methods like Aeropress, Chemex, and V60",
        classForSpan : "filter-text",
        classforP : "detail2",
        class : "filter"
    },
    {
        id : 3 ,
        name : "Espresso",
        text : "Dense and finely ground beans for an intense, flavourful experience",
        classForSpan : "espresso-text",
        classforP : "detail3",
        class : "espresso"
    }
]


/* ***************************************************** */

    //this is for left hand side list 
const ulContainerInSecondMain = document.querySelector(".ul-container-in-second-main")
const arrowIcon = document.querySelector(".arrow-icon-container")
const MAIN_THIRD_CONTAINER = document.querySelector(".third-container1")

listArray.map((data)=>{
    const createList = document.createElement("li")
    const createspan = document.createElement("span")
    const createText = document.createElement("p")

    createspan.innerText = data.number
    createText.innerText = data.name
    createList.id = data.id
    createList.append(createspan,createText)
    createList.classList.add(data.class)
    ulContainerInSecondMain.append(createList)
    
    createList.style.borderBottom = "1px solid #777c80"
})



//this variable is for how do you drink your coffee 
const choiceCoffeeContainer  = document.querySelector(".choice-coffee-container")
const secondCardContainer = document.querySelector(".second-card-container")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const icon = document.querySelector(".fa-angle-up")
const cardTypeContainer = document.querySelector(".card-type-container")


/* ***************************************************** */
    //this is for first box in right hand side

cardData.map((data)=>{
    const listInPlan = document.createElement("li")
     const spanInPlanList = document.createElement("span")
     const textInPlanList = document.createElement("p")
    

     listInPlan.id = data.id
     listInPlan.classList.add(data.class)
     spanInPlanList.innerHTML = data.name
     textInPlanList.innerText = data.text
     spanInPlanList.classList.add(data.classForSpan)
     textInPlanList.classList.add(data.classforP)
     listInPlan.append(spanInPlanList,textInPlanList)
     cardTypeContainer.append(listInPlan)

     

    listInPlan.addEventListener("click",()=>{
        if(listInPlan.id == 1){
            // setTimeout(()=>{
            //     mainContainer.style.transform = "translateY(0%) scale(1)"
            //     secondMainContainer.style.display = "none"
            //     mainContainer.style.display = "flex"
            // },1000)
            if(listInPlan.classList.contains("active")){
                listInPlan.classList.remove("active")
                unActiveCapsule()
                unActiveFilter()
                unActiveEspresso()
                
            }else{
                listInPlan.classList.add("active")
                activeCapsule()
                unActiveFilter()
                unActiveEspresso()
            }
        }else if(listInPlan.id == 2){
            if(listInPlan.classList.contains("active")){
                listInPlan.classList.remove("active")
                unActiveCapsule()
                unActiveFilter()
                unActiveEspresso()
                
            }else{
                listInPlan.classList.add("active")
                activeFilter()
                unActiveCapsule()
                unActiveEspresso()
            }
        }else{
            if(listInPlan.classList.contains("active")){
                listInPlan.classList.remove("active")
                unActiveCapsule()
                unActiveFilter()
                unActiveEspresso()
                
            }else{
                listInPlan.classList.add("active")
                activeEspresso()
                unActiveFilter()
                unActiveCapsule()
            }
        }
        
        //this is active and unactive for prefrences list number 
        
        if(listInPlan.classList.contains("active")){
            listOne.firstChild.style.color = "rgb(8, 133, 133)"
            listOne.classList.add("active")
            firstBlank.style.borderBottom = "0px"
            firstBlank1.style.borderBottom = "0px"
            createButton3.disabled = false
            
        }else{
            firstBlank.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            firstBlank.style.borderBottom = "3px solid rgb(6, 117, 117)"
            listOne.firstChild.style.color = "#303b49"
        }
    })


    
//this arrow icon is for drink your coffee container
     arrowIcon.addEventListener("click",(e)=>{
       
        const listOne = document.querySelector(".one")
        
    
        
        if(arrowIcon.classList.contains("active")){

        arrowIcon.classList.remove("active")
        icon.style.transform = "rotate(0turn)"
        secondCardContainer.style.height = "0"
        choiceCoffeeContainer.style.height = "110px"
        cardTypeContainer.style.display = "none"
        listOne.style.opacity = "0.46" 
        listOne.style.borderBottom = "1px solid #777c80fb" 
        MAIN_THIRD_CONTAINER.style.height = "2000px"
        
        // spanInPlanList.style.display = "none"
        
    }else{
        
        icon.style.transform = "rotate(0.5turn)"
        arrowIcon.classList.add("active")
        secondCardContainer.style.height = "calc(100% - 90px)"
        choiceCoffeeContainer.style.height = "420px"
        cardTypeContainer.style.display = "flex"
        listOne.style.opacity = "1" 
        listOne.style.borderBottom = "1px solid #777c8056" 
        MAIN_THIRD_CONTAINER.style.height = "2400px"
        // spanInPlanList.style.display = "block"
        
    }
    })
})

/* ***************************************************** */



/* for type of coffee data*/
const coffeeTypeData = [
    {
        id : 1,
        name : "Single Origin",
        text : "Distinct, high quality coffee from a specific family-owned farm",
        classForSpan : "single-text",
        classforP : "feeling1",
        class : "single"
        
    },
    {
        id : 2,
        name : "Decaf",
        text : "Just like regular coffee, expect the caffeine has been removed",
        classForSpan : "decaf-text",
        classforP : "feeling2",
        class : "decaf"
        
    },
    {
        id : 3,
        name : "Blended",
        text : "Combination of two or three dark roasted beans of organic coffees",
        classForSpan : "blended-text",
        classforP : "feeling3",
        class : "blended"
        
    },
    
]

//this variable is for what type of your coffee
const coffeeContainer = document.querySelector(".coffee-type-container")
const coffeeTypeCardContainer = document.querySelector(".coffee-type-card-container")
const secondCardInCoffee = document.querySelector(".second-card-container-in-coffee-type")
const arrowIconCoffeeType = document.querySelector(".upArrow")
const arrowIconContainer = document.querySelector(".arrow-icon-container-in-coffee-type")



/* ***************************************************** */
    //this is for second box in right hand side
coffeeTypeData.map((d)=>{
    const listCreate2 = document.createElement("li")
    const spanInPlanList2 = document.createElement("span")
    const textInPlanList2 = document.createElement("p")
    

    listCreate2.id = d.id
    spanInPlanList2.innerText = d.name
    textInPlanList2.innerText = d.text
    listCreate2.classList.add(d.class)
    spanInPlanList2.classList.add(d.classForSpan)
    textInPlanList2.classList.add(d.classforP)
    listCreate2.append(spanInPlanList2,textInPlanList2)
    coffeeTypeCardContainer.append(listCreate2)

    
    

    listCreate2.addEventListener("click",()=>{
        if(listCreate2.id == 1 ){
            if(listCreate2.classList.contains("active")){
                listCreate2.classList.remove("active")
                unActiveSingleType()
                unActiveBlendedType()
                unActiveDecafType()
            }else{
                listCreate2.classList.add("active")
                activeSingleType()
                unActiveBlendedType()
                unActiveDecafType()
            }
        }else if(listCreate2.id == 2){
            if(listCreate2.classList.contains("active")){
                listCreate2.classList.remove("active")
                unActiveSingleType()
                unActiveBlendedType()
                unActiveDecafType()
            }else{
                listCreate2.classList.add("active")
                activeDecafType()
                unActiveBlendedType()
                unActiveSingleType()
            }
        }else{
            if(listCreate2.classList.contains("active")){
                listCreate2.classList.remove("active")
                unActiveSingleType()
                unActiveBlendedType()
                unActiveDecafType()
            }else{
                listCreate2.classList.add("active")
                activeBlendedType()
                unActiveDecafType()
                unActiveSingleType()
            }
        }
        //this is active and unactive for prefrences list number 
        
        if(listCreate2.classList.contains("active")){
            listTwo.firstChild.style.color = "rgb(8, 133, 133)"
            listTwo.classList.add("active")
            secondBlank.style.borderBottom = "0px"
            secondBlank1.style.borderBottom = "0px"
            
        }else{
            listTwo.firstChild.style.color = "#303b49"
            secondBlank.style.borderBottom = "3px solid rgb(6, 117, 117)"
            secondBlank.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"

            secondBlank1.style.borderBottom = "3px solid rgb(6, 117, 117)"
            secondBlank1.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            
        }
    })

    

    arrowIconContainer.addEventListener("click",()=>{

        if(arrowIconContainer.classList.contains("active")){
            arrowIconCoffeeType.style.transform = "rotate(0turn)"
            arrowIconContainer.classList.remove("active")
            coffeeContainer.style.height = "110px"
            secondCardInCoffee.style.height = "0"
            coffeeTypeCardContainer.style.display = "none"
            listTwo.style.borderBottom = "1px solid #777c80fb"
            listTwo.style.opacity = "0.46"
            MAIN_THIRD_CONTAINER.style.height = "2000px"
        }else{
            arrowIconContainer.classList.add("active")
            arrowIconCoffeeType.style.transform = "rotate(0.5turn)"
            secondCardInCoffee.style.height = "calc(100% - 90px)"
            coffeeContainer.style.height = "420px"
            coffeeTypeCardContainer.style.display = "flex"
            listTwo.style.borderBottom = "1px solid #777c8056"
            listTwo.style.opacity = "1"
            MAIN_THIRD_CONTAINER.style.height = "2400px"
        }
    })


    

})



/* ***************************************************** */

// this variable is for weight of coffee box 
const weightContainer = document.querySelector(".weight-of-coffee-container")
const weightCardContainer = document.querySelector(".weight-type-card-container")
const secondCardContainerInWeight =document.querySelector(".second-card-container-in-weight-type")
const arrowBoxInWeight =document.querySelector(".arrow-icon-container-in-weight-type")
const iconWeight = document.querySelector(".upArrow2")

/* for weight of coffee box data*/
const weightData = [
    {
        id : 1,
        no : "250g",
        text : "Perfect for the solo drinker. Yields about 12 delicious cups.",
        classForSpan : "smallWeightNumber",
        classforP : "cup-quantity1",
        class : "small"
    },
    {
        id : 2,
        no : "500g",
        text : "Perfect option for a couple. Yields about 40 delectable cups.",
        classForSpan : "mediumWeightNumber",
        classforP : "cup-quantity2",
        class : "medium"
    },
    {
        id : 3,
        no : "1000g",
        text : "Perfect for offices and events. Yields about 90 delicious cups.",
        classForSpan : "largeWeightNumber",
        classforP : "cup-quantity3",
        class : "large"
    },
]

weightData.map((data)=>{
    const listCreate3 = document.createElement("li")
    const spanInPlanList3 = document.createElement("span")
    const textInPlanList3 = document.createElement("p")
    
    
    listCreate3.id = data.id
    spanInPlanList3.innerText = data.no
    textInPlanList3.innerText = data.text
    spanInPlanList3.classList.add(data.classForSpan)
    textInPlanList3.classList.add(data.classforP)
    listCreate3.classList.add(data.class)
    listCreate3.append(spanInPlanList3,textInPlanList3)
    weightCardContainer.append(listCreate3)

    

    listCreate3.addEventListener("click",()=>{

        if(listCreate3.id == 1){
            if(listCreate3.classList.contains("active")){
                listCreate3.classList.remove("active")
                unActiveSmallSize()
                unActiveMediumSize()
                unActiveLargeSize()
            }else{
                listCreate3.classList.add("active")
                activeSmallSize()
                unActiveMediumSize()
                unActiveLargeSize()
            }
        }else if(listCreate3.id == 2){
            if(listCreate3.classList.contains("active")){
                listCreate3.classList.remove("active")
                unActiveSmallSize()
                unActiveMediumSize()
                unActiveLargeSize()
            }else{
                listCreate3.classList.add("active")
                activeMediumSize()
                unActiveSmallSize()
                unActiveLargeSize()
            }
        }else{
            if(listCreate3.classList.contains("active")){
                listCreate3.classList.remove("active")
                unActiveSmallSize()
                unActiveMediumSize()
                unActiveLargeSize()
            }else{
                listCreate3.classList.add("active")
                activeLargeSize()
                unActiveSmallSize()
                unActiveMediumSize()
            }
        }
        //this is active and unactive for quantity list number 
        
        if(listCreate3.classList.contains("active")){
            listThree.firstChild.style.color = "rgb(8, 133, 133)"
            thirdBlank.style.borderBottom = "0px"
            thirdBlank1.style.borderBottom = "0px"
            listThree.classList.add("active")
        }else{
            listThree.firstChild.style.color = "#303b49"
            thirdBlank.style.borderBottom = "3px solid rgb(6, 117, 117)"
            thirdBlank.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            thirdBlank1.style.borderBottom = "3px solid rgb(6, 117, 117)"
            thirdBlank1.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            
        }
    })

    arrowBoxInWeight.addEventListener("click",()=>{
    
        if(arrowBoxInWeight.classList.contains("active")){
            arrowBoxInWeight.classList.remove("active")
            iconWeight.style.transform = "rotate(0turn)"
            weightContainer.style.height = "110px"
            secondCardContainerInWeight.style.height = "0"
            weightCardContainer.style.display = "none"
            MAIN_THIRD_CONTAINER.style.height = "2000px"
            listThree.style.opacity = "0.46"
            listThree.style.borderBottom = "1px solid #777c80fb" 
        }else{
            arrowBoxInWeight.classList.add("active")
            iconWeight.style.transform = "rotate(0.5turn)"
            weightContainer.style.height = "420px"
            secondCardContainerInWeight.style.height = "calc(100% - 90px)"
            weightCardContainer.style.display = "flex"
            MAIN_THIRD_CONTAINER.style.height = "2400px"
            listThree.style.opacity = "1"
            listThree.style.borderBottom = "1px solid #777c8056" 
        }
    
    })
})

/* ***************************************************** */



/* ***************************************************** */
//this is for choose grind step
const grindContainer = document.querySelector(".grind-type-container")
const grindTypeCardContainer = document.querySelector(".grind-type-card-container")
const secondCardContainerInGrind = document.querySelector(".second-card-container-in-grind-type")
const arrowIconInGrindStep = document.querySelector(".upArrow3")
const arrowIconContianerInGrind = document.querySelector(".arrow-icon-container-in-grind-type")

const grindData = [
    {
        id : 1,
        name : "Wholebean",
        text : "Best choice if you cherush the full sensory expericence",
        class : "wholebean",
        classForSpan : "wholeBean-text",
        classforP : "pText1"
    },
    {
        id : 2,
        name : "Filter",
        text : "For drip or pour-over coffee methpds such as V60 or Aeropress",
        class : "filterGrind",
        classForSpan : "filterGrind-text",
        classforP : "pText2"
    },
    {
        id : 3,
        name : "Cafetiere",
        text : "Course gorund beans speciall suited fir french pres coffee",
        class : "cafetiere",
        classForSpan : "cafe-text",
        classforP : "pText3"
    },
]

grindData.map((d)=>{
    const listCreate4 = document.createElement("li")
    const spanInPlanList4 = document.createElement("span")
    const textInPlanList4 = document.createElement("p")
    
    

    listCreate4.id = d.id
    spanInPlanList4.innerText = d.name
    textInPlanList4.innerText = d.text
    spanInPlanList4.classList.add(d.classForSpan)
    textInPlanList4.classList.add(d.classforP)
    listCreate4.classList.add(d.class)
    listCreate4.append(spanInPlanList4,textInPlanList4)
    grindTypeCardContainer.append(listCreate4)
    
    listCreate4.addEventListener("click",()=>{
        if(listCreate4.id == 1){
            if(listCreate4.classList.contains("active")){
                listCreate4.classList.remove("active")
                unActiveWholeBean()
                unActiveFilterGrind()
                unActiveCafetiere()
            }else{
                listCreate4.classList.add("active")
                activeWholeBean()
                unActiveFilterGrind()
                unActiveCafetiere()
            }
        }else if(listCreate4.id == 2){
            if(listCreate4.classList.contains("active")){
                listCreate4.classList.remove("active")
                unActiveWholeBean()
                unActiveFilterGrind()
                unActiveCafetiere()
            }else{
                listCreate4.classList.add("active")
                activeFilterGrind()
                unActiveWholeBean()
                unActiveCafetiere()
            }
        }else{
            if(listCreate4.classList.contains("active")){
                listCreate4.classList.remove("active")
                unActiveWholeBean()
                unActiveFilterGrind()
                unActiveCafetiere()
            }else{
                listCreate4.classList.add("active")
                unActiveWholeBean()
                unActiveFilterGrind()
                activeCafetiere()
            }
        }

        if(listCreate4.classList.contains("active")){
            listFour.firstChild.style.color = "rgb(8, 133, 133)"
            fourthBlank.style.borderBottom = "0px"
            fourthBlank1.style.borderBottom = "0px"
            listFour.classList.add("active")
        }else{
            listFour.firstChild.style.color = "#303b49"
            fourthBlank.style.borderBottom = "3px solid rgb(6, 117, 117)"
            fourthBlank.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            fourthBlank1.style.borderBottom = "3px solid rgb(6, 117, 117)"
            fourthBlank1.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            
        }
    })


    

    arrowIconContianerInGrind.addEventListener("click",()=>{
        if(arrowIconContianerInGrind.classList.contains("active")){
            arrowIconContianerInGrind.classList.remove("active")
            arrowIconInGrindStep.style.transform = "rotate(0turn)"
            grindContainer.style.height = "110px"
            grindTypeCardContainer.style.display = "none"
            secondCardContainerInGrind.style.height = "0px"
           MAIN_THIRD_CONTAINER.style.height = "2000px"
           listFour.style.opacity = "0.46"
           listFour.style.borderBottom = "1px solid #777c80fb" 
        }else{
            arrowIconContianerInGrind.classList.add("active")
            arrowIconInGrindStep.style.transform = "rotate(0.5turn)"
            grindContainer.style.height = "420px"
            grindTypeCardContainer.style.display = "flex"
            secondCardContainerInGrind.style.height ="calc(100% - 90px)"
            MAIN_THIRD_CONTAINER.style.height = "2400px"
            listFour.style.opacity = "1"
            listFour.style.borderBottom = "1px solid #777c8056" 
        }
    })
})
/* ***************************************************** */


/* ***************************************************** */
// this is for deliver step data 

const deliverContainer = document.querySelector(".deliver-type-container")
const deliverTypeCardContainer = document.querySelector(".deliver-type-card-container")
const secondCardContainerInDeliver = document.querySelector(".second-card-container-in-deliver-type")
const arrowIconInDeliverStep = document.querySelector(".upArrow4")
const arrowIconContianerInDeliver = document.querySelector(".arrow-icon-container-in-deliver-type")

const deliverData = [
    {
        id : 1,
        name : "Every Week",
        text : "$14.00 per shipment. Includes free first-class shipping.",
        class : "everyWeek",
        classForSpan : "everyweek-text",
        classforP : "week-plan"
    },
    {
        id : 2,
        name : "Every 2 weeks",
        text : "$17.25 per shipment. Includes free priority shipping.",
        class : "everyTwoWeeks",
        classForSpan : "every-2Weeks-text",
        classforP : "two-weeks-plan"
    },
    {
        id : 3,
        name : "Every month",
        text : "$22.50 per shipment. Includes free pririty shipping",
        class : "everyMonth",
        classForSpan : "every-month-text",
        classforP : "month-plan"
    },
]

deliverData.map((d)=>{

    const listCreate5 = document.createElement("li")
    const spanInPlanList5 = document.createElement("span")
    const textInPlanList5 = document.createElement("p")
    
   
    

    listCreate5.id = d.id
    spanInPlanList5.innerText = d.name
    textInPlanList5.innerText = d.text
    spanInPlanList5.classList.add(d.classForSpan)
    textInPlanList5.classList.add(d.classforP)
    listCreate5.classList.add(d.class)
    listCreate5.append(spanInPlanList5,textInPlanList5)
    deliverTypeCardContainer.append(listCreate5)


    listCreate5.addEventListener("click",()=>{
        if(listCreate5.id == 1){
            if(listCreate5.classList.contains("active")){
                listCreate5.classList.remove("active")
                unActiveEveryWeek()
                unActiveEveryTwoWeeks()
                unActiveEveryMonth()
            }else{
                listCreate5.classList.add("active")
                activeEveryWeek()
                unActiveEveryTwoWeeks()
                unActiveEveryMonth()
            } 
        }else if(listCreate5.id == 2){
            if(listCreate5.classList.contains("active")){
                listCreate5.classList.remove("active")
                unActiveEveryWeek()
                unActiveEveryTwoWeeks()
                unActiveEveryMonth()
                
            }else{
                listCreate5.classList.add("active")
                activeEveryTwoWeeks()
                unActiveEveryWeek()
                unActiveEveryMonth()
            }
        }else{
            if(listCreate5.classList.contains("active")){
                listCreate5.classList.remove("active")
                unActiveEveryWeek()
                unActiveEveryTwoWeeks()
                unActiveEveryMonth()
                
            }else{
                listCreate5.classList.add("active")
                activeEveryMonth()
                unActiveEveryTwoWeeks()
                unActiveEveryWeek()

            }
        }

        if(listCreate5.classList.contains("active")){
            listFive.firstChild.style.color = "rgb(8, 133, 133)"
            fifthBlank.style.borderBottom = "0px"
            fifthBlank1.style.borderBottom = "0px"
            listFive.classList.add("active")
            
        }else{
            listFive.firstChild.style.color = "#303b49"
            fifthBlank.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            fifthBlank.style.borderBottom = "3px solid rgb(6, 117, 117)"
            fifthBlank1.innerHTML ="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
            fifthBlank1.style.borderBottom = "3px solid rgb(6, 117, 117)"
            
        }
    })


    arrowIconContianerInDeliver.addEventListener("click",()=>{
        if(arrowIconContianerInDeliver.classList.contains("active")){

            deliverTypeCardContainer.style.display = "none"
            arrowIconContianerInDeliver.classList.remove("active")
            arrowIconInDeliverStep.style.transform = "rotate(0turn)"
            deliverContainer.style.height = "110px"
            secondCardContainerInDeliver.style.height = "calc(100% - 90px)"
            MAIN_THIRD_CONTAINER.style.height = "2000px"
            listFive.style.opacity = "0.46"
            listFive.style.borderBottom = "1px solid #777c80fb" 


        }else{
            arrowIconContianerInDeliver.classList.add("active")
            arrowIconInDeliverStep.style.transform = "rotate(0.5turn)"
            deliverTypeCardContainer.style.display = "flex"
            deliverContainer.style.height = "420px"
            secondCardContainerInDeliver.style.height = "calc(100% - 90px)"
            MAIN_THIRD_CONTAINER.style.height = "2400px"
            listFive.style.opacity = "1"
            listFive.style.borderBottom = "1px solid #777c8056" 
        }
    })
})
/* ***************************************************** */



MAIN_THIRD_CONTAINER.addEventListener("click",()=>{
    


    if(((!arrowIcon.classList.contains("active")) && (!arrowIconContainer.classList.contains("active"))) && ((!arrowBoxInWeight.classList.contains("active")) && (!arrowIconContianerInGrind.classList.contains("active"))) && (!arrowIconContianerInDeliver.classList.contains("active"))){
        MAIN_THIRD_CONTAINER.style.height = "950px"
        
        
    }
})

const listOne = document.querySelector(".one")
const listTwo = document.querySelector(".two")
const listThree = document.querySelector(".three")
const listFour = document.querySelector(".four")
const listFive = document.querySelector(".five")



//this is appear checkout box after checking all list active from choice step container
createButton3.addEventListener("click",()=>{
    if(((listOne.classList.contains("active") && listTwo.classList.contains("active")) && (listThree.classList.contains("active") && listFour.classList.contains("active"))) && listFive.classList.contains("active")){
        checkoutContainer.style.transform = "scale(1)"
        checkoutCard.style.transform = "scale(1)"
    }
})

// createButton3.disabled = false
//         checkoutContainer.style.transform = "scale(1)"
//         checkoutCard.style.transform = "scale(1)"

const billText = document.querySelector(".billText")
const checkoutButton = document.querySelector(".checkoutButton")

checkoutButton.addEventListener("click",()=>{
    checkoutContainer.style.transform = "scale(0)"
    checkoutCard.style.transform = "scale(0)"

    mainContainer.style.display = "flex"
    mainContainer.style.transform = "rotate(1turn) scale(1)"
    secondMainContainer.style.transform = "translateY(-100%) scale(0)"
    
    
    setTimeout(()=>{
        window.location.reload()
        secondMainContainer.style.display = "none"
    },1000)

    listOne.classList.remove("active")
    listTwo.classList.remove("active")
    listThree.classList.remove("active")
    listFour.classList.remove("active")
    listFive.classList.remove("active")

})





/* --------------------------------------------------------------------*/

            //active and unactive function for capsule , filter , espresso 

            //active

            
function activeFilter (){
            const filter = document.querySelector(".filter")
            const name = document.querySelector(".filter-text")
            const detail = document.querySelector(".detail2")
            filter.classList.add("active")
            filter.style.background = "rgb(8, 133, 133)"
            name.style.color = "white"
            detail.style.fontWeight = "400"
            detail.style.color = "#ffffffb5"
            firstBlank.innerHTML = name.innerText
            firstBlank1.innerHTML = name.innerText
            
}
function activeCapsule (){
            const filter = document.querySelector(".capsule")
            const name = document.querySelector(".capsule-text")
            const detail = document.querySelector(".detail1")
            filter.style.background = "rgb(8, 133, 133)"
            filter.classList.add("active")
            name.style.color = "white"
            detail.style.fontWeight = "400"
            detail.style.color = "#ffffffb5"
            firstBlank.innerHTML = name.innerText
            firstBlank1.innerHTML = name.innerText
            
}
function activeEspresso (){
            const filter = document.querySelector(".espresso")
            const name = document.querySelector(".espresso-text")
            const detail = document.querySelector(".detail3")
            filter.classList.add("active")
            filter.style.background = "rgb(8, 133, 133)"
            name.style.color = "white"
            detail.style.fontWeight = "400"
            detail.style.color = "#ffffffb5"
            firstBlank.innerHTML = name.innerText
            firstBlank1.innerHTML = name.innerText
            
}

//unactive
function unActiveFilter (){
            const filter = document.querySelector(".filter")
            const name = document.querySelector(".filter-text")
            const detail = document.querySelector(".detail2")
            filter.style.background = "rgba(240, 232, 219, 0.74)"
            filter.classList.remove("active")
            
            name.style.color = "#333d4b"
            detail.style.color = "rgba(87, 104, 129, 0.76)"
            detail.style.fontWeight = "500"
}
function unActiveCapsule (){
            const filter = document.querySelector(".capsule")
            const name = document.querySelector(".capsule-text")
            const detail = document.querySelector(".detail1")
            filter.classList.remove("active")
            
            filter.style.background = "rgba(240, 232, 219, 0.74)"
            name.style.color = "#333d4b"
            detail.style.color = "rgba(87, 104, 129, 0.76)"
            detail.style.fontWeight = "500"
}
function unActiveEspresso (){
           
            const filter = document.querySelector(".espresso")
            const name = document.querySelector(".espresso-text")
            const detail = document.querySelector(".detail3")
            filter.style.background = "rgba(240, 232, 219, 0.74)"
            filter.classList.remove("active")
            name.style.color = "#333d4b"
            detail.style.color = "rgba(87, 104, 129, 0.76)"
            detail.style.fontWeight = "500"
}
/* --------------------------------------------------------------------*/



/* --------------------------------------------------------------------*/
                //function for active and unactive of coffee type

function activeSingleType (){
            const single = document.querySelector(".single")
            const name = document.querySelector(".single-text")
            const detail = document.querySelector(".feeling1")
            single.classList.add("active")
            single.style.background = "rgb(8, 133, 133)"
            name.style.color = "white"
            detail.style.fontWeight = "400"
             detail.style.color = "#ffffffb5"
            secondBlank.innerHTML = name.innerText
            secondBlank1.innerHTML = name.innerText
}
function activeDecafType (){
            const decaf = document.querySelector(".decaf")
            const name = document.querySelector(".decaf-text")
            const detail = document.querySelector(".feeling2")
            decaf.classList.add("active")
            decaf.style.background = "rgb(8, 133, 133)"
            name.style.color = "white"
            detail.style.fontWeight = "400"
            detail.style.color = "#ffffffb5"
            secondBlank.innerHTML = name.innerText
            secondBlank1.innerHTML = name.innerText
}
function activeBlendedType (){
            const blended = document.querySelector(".blended")
            const name = document.querySelector(".blended-text")
            const detail = document.querySelector(".feeling3")
            blended.classList.add("active")
            blended.style.background = "rgb(8, 133, 133)"
            name.style.color = "white"
            detail.style.fontWeight = "400"
            detail.style.color = "#ffffffb5"
            secondBlank.innerHTML = name.innerText
            secondBlank1.innerHTML = name.innerText
            
}
//unactive
function unActiveSingleType (){
    const single = document.querySelector(".single")
    const name = document.querySelector(".single-text")
    const detail = document.querySelector(".feeling1")
    single.style.background = "rgba(240, 232, 219, 0.74)"
    single.classList.remove("active")
    name.style.color = "#333d4b"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
    detail.style.fontWeight = "500"
    
    
}
function unActiveDecafType (){
    const decaf = document.querySelector(".decaf")
    const name = document.querySelector(".decaf-text")
    const detail = document.querySelector(".feeling2")
    decaf.style.background = "rgba(240, 232, 219, 0.74)"
    decaf.classList.remove("active")
    name.style.color = "#333d4b"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
    detail.style.fontWeight = "500"
   
}
function unActiveBlendedType(){
    const blended = document.querySelector(".blended")
    const name = document.querySelector(".blended-text")
    const detail = document.querySelector(".feeling3")
    blended.style.background = "rgba(240, 232, 219, 0.74)"
    blended.classList.remove("active")
    name.style.color = "#333d4b"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
    detail.style.fontWeight = "500"
   
}
/* --------------------------------------------------------------------*/




/* --------------------------------------------------------------------*/
    //this function is active and unactive for weight of coffee 

    //active
    function activeSmallSize(){
        const smallSize = document.querySelector(".small")
        const name = document.querySelector(".smallWeightNumber")
        const detail = document.querySelector(".cup-quantity1")
        smallSize.classList.add("active")
        smallSize.style.background = "rgb(8, 133, 133)"
        name.style.color = "white"
        detail.style.fontWeight = "400"
        detail.style.color = "#ffffffb5"
        thirdBlank.innerHTML = name.innerText
        thirdBlank1.innerHTML = name.innerText
}
    function activeMediumSize(){
        const mediumSize = document.querySelector(".medium")
        const name = document.querySelector(".mediumWeightNumber")
        const detail = document.querySelector(".cup-quantity2")
        mediumSize.classList.add("active")
        mediumSize.style.background = "rgb(8, 133, 133)"
        name.style.color = "white"
        detail.style.fontWeight = "400"
        detail.style.color = "#ffffffb5"
        thirdBlank.innerHTML = name.innerText
        thirdBlank1.innerHTML = name.innerText
        
}
    function activeLargeSize(){
        const largeSize = document.querySelector(".large")
        const name = document.querySelector(".largeWeightNumber")
        const detail = document.querySelector(".cup-quantity3")
        largeSize.classList.add("active")
        largeSize.style.background = "rgb(8, 133, 133)"
        name.style.color = "white"
        detail.style.fontWeight = "400"
        detail.style.color = "#ffffffb5"
        thirdBlank.innerHTML = name.innerText
        thirdBlank1.innerHTML = name.innerText
}

//  unActive

    function unActiveSmallSize(){
        const smallSize = document.querySelector(".small")
        const name = document.querySelector(".smallWeightNumber")
        const detail = document.querySelector(".cup-quantity1")
        smallSize.classList.remove("active")
        smallSize.style.background = "rgba(240, 232, 219, 0.74)"
        name.style.color = "#333d4b"
        detail.style.color = "rgba(87, 104, 129, 0.76)"
        detail.style.fontWeight = "500"
       
}
    function unActiveMediumSize(){
        const mediumSize = document.querySelector(".medium")
        const name = document.querySelector(".mediumWeightNumber")
        const detail = document.querySelector(".cup-quantity2")
        mediumSize.classList.remove("active")
        mediumSize.style.background = "rgba(240, 232, 219, 0.74)"
        name.style.color = "#333d4b"
        detail.style.color = "rgba(87, 104, 129, 0.76)"
        detail.style.fontWeight = "500"
        
}
    function unActiveLargeSize(){
        const largeSize = document.querySelector(".large")
        const name = document.querySelector(".largeWeightNumber")
        const detail = document.querySelector(".cup-quantity3")
        largeSize.classList.remove("active")
        largeSize.style.background = "rgba(240, 232, 219, 0.74)"
        name.style.color = "#333d4b"
        detail.style.color = "rgba(87, 104, 129, 0.76)"
        detail.style.fontWeight = "500"
        
}
/* --------------------------------------------------------------------*/


/* --------------------------------------------------------------------*/
    //this function is active and unactive for weight of coffee 

    //active
    function activeWholeBean(){
        const wholeBean = document.querySelector(".wholebean")
        const name = document.querySelector(".wholeBean-text")
        const detail = document.querySelector(".pText1")
        wholeBean.classList.add("active")
        wholeBean.style.background = "rgb(8, 133, 133)"
        name.style.color = "white"
        detail.style.fontWeight = "400"
        detail.style.color = "#ffffffb5"
        fourthBlank.innerHTML = name.innerText
        fourthBlank1.innerHTML = name.innerText
}
    function activeFilterGrind(){
        const filterGrind = document.querySelector(".filterGrind")
        const name = document.querySelector(".filterGrind-text")
        const detail = document.querySelector(".pText2")
        filterGrind.classList.add("active")
        filterGrind.style.background = "rgb(8, 133, 133)"
        name.style.color = "white"
        detail.style.fontWeight = "400"
        detail.style.color = "#ffffffb5"
        fourthBlank.innerHTML = name.innerText
        fourthBlank1.innerHTML = name.innerText
}
    function activeCafetiere(){
        const cafetiere = document.querySelector(".cafetiere")
        const name = document.querySelector(".cafe-text")
        const detail = document.querySelector(".pText3")
        cafetiere.classList.add("active")
        cafetiere.style.background = "rgb(8, 133, 133)"
        name.style.color = "white"
        detail.style.fontWeight = "400"
        detail.style.color = "#ffffffb5"
        fourthBlank.innerHTML = name.innerText
        fourthBlank1.innerHTML = name.innerText
}


//unactive
function unActiveWholeBean(){
    const wholeBean = document.querySelector(".wholebean")
    const name = document.querySelector(".wholeBean-text")
    const detail = document.querySelector(".pText1")
    wholeBean.classList.remove("active")
    wholeBean.style.background = "rgba(240, 232, 219, 0.74)"
    name.style.color = "#333d4b"
    detail.style.fontWeight = "500"
    detail.style.color = "rgba(87, 104, 129, 0.765"
}
function unActiveFilterGrind(){
    const filterGrind = document.querySelector(".filterGrind")
    const name = document.querySelector(".filterGrind-text")
    const detail = document.querySelector(".pText2")
    filterGrind.classList.remove("active")
    filterGrind.style.background = "rgba(240, 232, 219, 0.74)"
    name.style.color = "#333d4b"
    detail.style.fontWeight = "500"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
}
function unActiveCafetiere(){
    const cafetiere = document.querySelector(".cafetiere")
    const name = document.querySelector(".cafe-text")
    const detail = document.querySelector(".pText3")
    cafetiere.classList.remove("active")
    cafetiere.style.background = "rgba(240, 232, 219, 0.74)"
    name.style.color = "#333d4b"
    detail.style.fontWeight = "500"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
}


/* --------------------------------------------------------------------*/



/* --------------------------------------------------------------------*/
//this function is for deliver data active and unactive

//active
function activeEveryWeek(){
    const everyWeek = document.querySelector(".everyWeek")
    const name = document.querySelector(".everyweek-text")
    const detail = document.querySelector(".week-plan")
    everyWeek.classList.add("active")
    everyWeek.style.background = "rgb(8, 133, 133)"
    name.style.color = "white"
    detail.style.fontWeight = "400"
    detail.style.color = "#ffffffb5"
    fifthBlank.innerHTML = name.innerText
    fifthBlank1.innerHTML = name.innerText
    billText.innerHTML = "$14.00/wk"
}
function activeEveryTwoWeeks(){
    const everyTwoWeeks = document.querySelector(".everyTwoWeeks")
    const name = document.querySelector(".every-2Weeks-text")
    const detail = document.querySelector(".two-weeks-plan")
    everyTwoWeeks.classList.add("active")
    everyTwoWeeks.style.background = "rgb(8, 133, 133)"
    name.style.color = "white"
    detail.style.fontWeight = "400"
    detail.style.color = "#ffffffb5"
     fifthBlank.innerHTML = name.innerText
     fifthBlank1.innerHTML = name.innerText
     billText.innerHTML = "$17.25/2wks"
}
function activeEveryMonth(){
    const everyMonth = document.querySelector(".everyMonth")
    const name = document.querySelector(".every-month-text")
    const detail = document.querySelector(".month-plan")
    everyMonth.classList.add("active")
    everyMonth.style.background = "rgb(8, 133, 133)"
    name.style.color = "white"
    detail.style.fontWeight = "400"
    detail.style.color = "#ffffffb5"
     fifthBlank.innerHTML = name.innerText
     fifthBlank1.innerHTML = name.innerText
     billText.innerHTML = "$22.0/mo"
}

//unactive
function unActiveEveryWeek(){
    const everyWeek = document.querySelector(".everyWeek")
    const name = document.querySelector(".everyweek-text")
    const detail = document.querySelector(".week-plan")
    everyWeek.classList.remove("active")
    everyWeek.style.background = "rgba(240, 232, 219, 0.74)"
    name.style.color = "#333d4b"
    detail.style.fontWeight = "500"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
}


function unActiveEveryTwoWeeks(){
    const everyTwoWeeks = document.querySelector(".everyTwoWeeks")
    const name = document.querySelector(".every-2Weeks-text")
    const detail = document.querySelector(".two-weeks-plan")
    everyTwoWeeks.classList.remove("active")
    everyTwoWeeks.style.background = "rgba(240, 232, 219, 0.74)"
    name.style.color = "#333d4b"
    detail.style.fontWeight = "500"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
}


function unActiveEveryMonth(){
    const everyMonth = document.querySelector(".everyMonth")
    const name = document.querySelector(".every-month-text")
    const detail = document.querySelector(".month-plan")
    everyMonth.classList.remove("active")
    everyMonth.style.background = "rgba(240, 232, 219, 0.74)"
    name.style.color = "#333d4b"
    detail.style.fontWeight = "500"
    detail.style.color = "rgba(87, 104, 129, 0.76)"
}

/* --------------------------------------------------------------------*/