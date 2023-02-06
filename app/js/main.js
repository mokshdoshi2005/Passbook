import Entry, { Reg_Dict } from "../database/data.js";
console.log(Reg_Dict)

var cardNumber = 2 

function MakeCard(e = {
    'catergory': '....6842',
    'amount': '20983.98',
    'person': 'Ronin hawkeye',
    'on': 'Exp. 25/12'
}) {
    let dummy =`<div class="card">
    <p class="catorigray">....6842</p>
    <h2>₹<pre class="amount">20934.98</pre></h2>
    <div class="details">
        <pre class="details__person">Ronin hawkeye</pre>
        <pre class="details__On">Exp. 25/12</pre>
    </div>
</div>`
    // // container and card
    const container = document.getElementById("cards-Container")
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.card = cardNumber
    cardNumber++
    container.appendChild(card)
    
    // // context
    const p1 = document.createElement('p')
    p1.classList.add('catorigary')
    p1.innerHTML = e.catergory

    const h2 = document.createElement('h2')
    h2.innerHTML = '₹'
        const pre_h2 = document.createElement('pre')
    pre_h2.classList.add('amount')
    pre_h2.textContent = e.amount
    h2.appendChild(pre_h2)

    const details = document.createElement('div')
    details.classList.add('details')

    const pre1_details = document.createElement('pre')
    pre1_details.classList.add('details__person')
    pre1_details.textContent = e.person
    details.appendChild(pre1_details)

    const pre2_details = document.createElement('pre')
    pre2_details.classList.add('details__On')
    pre2_details.textContent = e.on
    details.appendChild(pre2_details)

    // // adding context
    console.log('appending', e)
    card.appendChild(p1)
    card.appendChild(h2)
    card.appendChild(details)

}


document.getElementById('test-button').addEventListener("click", e => {
    
    // // dicationary for content
    var d = dataJSON(Reg_Dict, cardNumber)

    // //cards
    var Total_amount = document.getElementById('Total-amount')
    var No_of_cards = document.getElementById('card-Number')
    No_of_cards.textContent = cardNumber
    MakeCard(d)
    // // amount change
    const amounts = document.querySelectorAll('.amount')
    let total = 0
    for (let index = 0; index < amounts.length; index++) {
        let addAmount = amounts[index].textContent;
        addAmount = parseFloat(addAmount);
        total = parseInt(total + addAmount);
    }
    Total_amount.textContent = total
})

// //Modal
const OpenModalButton = document.getElementById('add');
const CloseModalButton = document.getElementById('close-modal');
const Modal = document.querySelector('#addForm');

CloseModalButton.addEventListener("click", () => {
    Modal.classList.add('closed');
    console.log('closed')
});
OpenModalButton.addEventListener("click", () => {
    Modal.classList.remove('closed');
    console.log('opened')
});

const additionBox = document.getElementsByClassName('flex');
let additionAmountsAry = document.querySelectorAll("#AddAmount");


for (let i = 0;i < additionAmountsAry.length;i++) {
    console.log(additionAmountsAry[i])
    let currentAmount = additionAmountsAry[i];
    currentAmount.addEventListener("click", () => {
        console.log(currentAmount.dataset.price)
    })
}


// //json
 function dataJSON(dict, index = 1) {
    return dict["Moksh doshi"][index - 1]
};  


// // add data
const Input = document.querySelector("#inputAmount");
Input.addEventListener('change', e => {
    
    const Form = document.querySelector(".form");
    Form.style.display = "flex";
    let sumbitForm = document.querySelectorAll("#Form-submit");
    let str = "";

    for (let index = 0; index < sumbitForm.length; index++) {
        const element = sumbitForm[index];
        console.log(element)
        element.addEventListener("click", () => {
            console.log('new enter')
            let AddAmount = e.target.value;
            let catergory = document.querySelector("#Form_Catergory").value;
            let to = document.querySelector("#Form_ToPerson").value;
            let on = document.querySelector("#Form_Date").value;
            if (element.dataset.type == "paid") {
                str = "Paid " + to + " for " + catergory + "on the" + on;
                alert(str);
                return
            }

            str = "Spend " + AddAmount + " on " + catergory + " on the " + on;
            alert(str);

            let NewEntry = new Entry(catergory, AddAmount, to, on)
            console.log(NewEntry)
        });

    };
});
    

