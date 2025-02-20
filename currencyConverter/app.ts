import { countryList } from "./code.js";

const dropdown = document.querySelectorAll('.convertAmount select');
const btn = document.querySelector("form button");
const inpAmount = document.querySelector('input');
const fromCurr = document.querySelector(".from select") as HTMLSelectElement;
const toCurr = document.querySelector(".to select") as HTMLSelectElement;

for (let select of dropdown) {
    for (let curcode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = curcode;
        newOption.value = curcode;

        if (select.id === "from" && curcode === "USD"){
            newOption.selected = true;
        }else if(select.id === "to" && curcode === "PKR"){
            newOption.selected = true;
        }
        select.append(newOption)
    }
    select.addEventListener("change",(evt) => {
        updataFlag(evt.target as HTMLSelectElement)
    });
}


const updataFlag = (element:HTMLSelectElement) => {
    let currcode = element.value
    let countrycode = countryList[currcode];// PK SR US etc
    let srcimg = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement?.querySelector("img");
    if (img){
        img.src = srcimg    
    }
}


// btn?.addEventListener('click', (exrate) => {
//     exrate.preventDefault()
//     let amount = parseFloat(inpAmount?.value);
//     if (amount < 1){
//         amount = 1;
//         amount.value = 1;
//     }

//     console.log(amount);
    
// })
// dcdb54fec13e9a4b89f9c6c0


// btn?.addEventListener("click",async (exrate) => {
//     exrate.preventDefault();

//     // Ensure inpAmount?.value is a string, or default to "0"
//     let amountStr = inpAmount?.value ?? "0";
//     let amount = parseFloat(amountStr);

//     // Ensure the amount is at least 1
//     if (isNaN(amount) || amount < 1) {
//         amount = 1;
//         if (inpAmount) inpAmount.value = "1";
//     }
//     const url = `https://v6.exchangerate-api.com/v6/${fromCurr.value.toLowerCase()}/latest/${toCurr.value.toLowerCase()}`
//     fetch(url).then(response => response.json()).then(result => {
//         let exchangerate = result.conversion_rates[toCurr.value]
//         console.log(exchangerate);
        
//     })
    
    

// })




btn?.addEventListener("click", async (exrate) => {
    exrate.preventDefault();

    // Ensure inpAmount?.value is a string, or default to "0"
    let amountStr = inpAmount?.value ?? "0";
    let amount = parseFloat(amountStr);

    // Ensure the amount is at least 1
    if (isNaN(amount) || amount < 1) {
        amount = 1;
        if (inpAmount) inpAmount.value = "1"; 
    }

    const API_KEY = "dcdb54fec13e9a4b89f9c6c0"; 
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurr.value}`;

    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurr.value];
        let totalExchangeRate = (amount * exchangeRate).toFixed(2);
        const exchangeRateTxt = document.querySelector(".msg")!;
        exchangeRateTxt.textContent = `${amount} ${fromCurr.value} = ${totalExchangeRate} ${toCurr.value}`
    })
})
//     try {
//         const response = await fetch(url);
//         const result = await response.json();
//         let exchangeRate = 0; // Default value
    
//         if (result.result === "success") {
//             exchangeRate = result.conversion_rates[toCurr.value];
//             console.log("Exchange Rate:", exchangeRate);
//         } else {
//             console.error("Error fetching exchange rate:", result["error-type"]);
//         }
    
//         document.querySelector('.msg')!.textContent =  
//             `${amount} ${fromCurr.value} = ${exchangeRate} ${toCurr.value}`;
//     } catch (error) {
//         console.error("Network or API error:", error);
//     }
// });
