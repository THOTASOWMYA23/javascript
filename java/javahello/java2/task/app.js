// function billSplit(){
//     const billAmount = parseInt(document.getElementById("billAmount").value);
//     const personaCount = parseInt(document.getElementById("personCount").value);
//     const finalBillAmount = document.getElementById("finalBillAmount")
//     const cgst = 0.09;
//     const sgst = 0.09;
//     const gst = cgst + sgst;
//     const discount = document.getElementById("checkbox").Checked;
//     if(billAmount <= 0){
//         alert("enter vaild amount");
//         document.getElementById("billAmount").value = "";
//         document.getElementById("personCount").value = "";
//     } else if(personCount <= 1) {
//         alert("enter more than one person to split bill");
//         document.getElementById("billAmount").value = "";
//         document.getElementById("personCount").value = "";
//     } else if (
//         typeof billAmount !=="number"&&
//         typeof personCount !=="number"
//     ) {
//         alert("Enter in Numbers");
//         document.getElementById("billAmount").value = "";
//         document.getElementById("personCount").value = "";
//     } else if(discount) {
//         let bill = billAmount - billAmount * 0.05 + billAmount * gst;
//         console.log(bill);
//         finalValue = bill / personCount;
//         finalbillAmount.value = math.round(finalValue);
//         document.getElementById("billAmount").value = "";
//         document.getElementById("personCount").value = "";
//         document.getElementById("checkbox").checked = false;
//     } else if(discount ===false) {
//         let billing = billAmount + billAmount * gst;
//         console.log(billing);
//         finalValue = billing / personCount;
//         finalBillAmount.value = math.round(finalValue);
//         document.getElementById("billAmount").value = "";
//         document.getElementById("personCount").value ="";
//         billamount = "";
//         personCount = "";
//     } 
// }

function billsplit() {
    // Retrieve bill amount and person count from input fields
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var personCount = parseInt(document.getElementById("personCount").value);

    // Calculate total bill amount per person
    var finalBillAmount = billAmount / personCount;

    // Check if the checkbox is checked
    var checkboxChecked = document.getElementById("checkbox").checked;

    // If checkbox is checked, apply 5% discount
    if (checkboxChecked) {
        finalBillAmount *= 0.95; // 5% discount
    }

    // Update the input field with the calculated amount
    document.getElementById("finalBillAmount").value = finalBillAmount.toFixed(2);
}
    