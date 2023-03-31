
export var Reg_Dict = {
    "Moksh doshi" : [
        {
            "category": "....6842",
            "amount": "20983.98",
            "person": "Ronin hawkeye",
            "on": "Exp. 25/12"
        },{
            "category": "..test..2",
            "amount": "69983.98",
            "person": "TMNT hawkeye",
            "on": "Exp. 25/12"
        },{
            "category": "Food",
            "amount": "40",
            "person": "Aryan",
            "on": "23/01/23"
        },{
            "category": "Purchase",
            "amount": "150",
            "person": "Shreyansh",
            "on": "Somewhere in DEC"
        }
    ],
    AddEntry : (entry) => {
        Reg_Dict["Moksh doshi"].push(entry)
    },
    DelEntry : (entry) => {
        console.log(Reg_Dict,entry)
    }
}

export default class Entry {
    constructor(category, amount, person, on) {
        this.category = category,
        this.amount = amount,
        this.person = person,
        this.on = on
    }
};
