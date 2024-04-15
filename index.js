




const validation = (value) => {
    return  /^\d+$/.test(value);
}


const handleClick = (event) => {
    event.preventDefault();
    const taxData = {
     grossValue : document.getElementById("grossAnnualIncome").value,
     extraIncome : document.getElementById("extraIncome").value,
     ageGroup : document.getElementById("ageGroup").value,
     deductions : document.getElementById("deductions").value,
    }
    if(taxData.ageGroup && validation(taxData.extraIncome) && validation(taxData.deductions) && validation(taxData.grossValue)){
        let tax = 0;
        console.log(taxData);
        const totalIncome = taxData.grossValue + taxData.extraIncome - taxData.deductions;
        if (totalIncome <= 800000) {
            tax = 0;
        } else {
            if (taxData.ageGroup === "<40") {
                tax = 0.3 * (totalIncome - 800000);
            } else if (taxData.ageGroup === "≥40 & <60") {
                tax = 0.4 * (totalIncome - 800000);
            } else if (taxData.ageGroup === "≥60") {
                tax = 0.1 * (totalIncome - 800000);
            }
        }
    const modal = document.getElementById("modal");
    const taxResult = document.getElementById("taxResult");
    taxResult.innerHTML = `Your Overall income will be <br> ${tax.toFixed(2)} <br> after tax deductions`;
    modal.style.display = "block";
    }
    else{
        alert("Please fill in all required fields before submitting the form.");
    }
    
}

document.getElementById("grossAnnualIncome").addEventListener("blur",() => {
    const grossAnnualIncome = document.getElementById("grossAnnualIncome").value;
    if(validation(grossAnnualIncome)){
        document.getElementsByClassName("error")[0].style.display = "none";
    }else{
        document.getElementsByClassName("error")[0].style.display = "block";
    }
})

document.getElementById("extraIncome").addEventListener("blur",() => {
    const extraIncome = document.getElementById("extraIncome").value;
    if(validation(extraIncome)){
        document.getElementsByClassName("error")[1].style.display = "none";
    }else{
        document.getElementsByClassName("error")[1].style.display = "block";
    }
})
document.getElementById("ageGroup").addEventListener("blur",() => {
    const ageGroup = document.getElementById("ageGroup").value;
    if(ageGroup){
        document.getElementsByClassName("error")[2].style.display = "none";
    }else{
        document.getElementsByClassName("error")[2].style.display = "block";
    }
})

document.getElementById("deductions").addEventListener("blur",() => {
    const deductions = document.getElementById("deductions").value;
    if(validation(deductions)){
        document.getElementsByClassName("error")[3].style.display = "none";
    }else{
        document.getElementsByClassName("error")[3].style.display = "block";
    }
})

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("submit").addEventListener("click",handleClick);