export var Reg_Dict = {
    "Moksh doshi" : [
        {
            "catergory": "....6842",
            "amount": "20983.98",
            "person": "Ronin hawkeye",
            "on": "Exp. 25/12"
        },{
            "catergory": "..test..2",
            "amount": "69983.98",
            "person": "TMNT hawkeye",
            "on": "Exp. 25/12"
        },{
            "catergory": "Food",
            "amount": "40",
            "person": "Aryan",
            "on": "23/01/23"
        },{
            "catergory": "Purchase",
            "amount": "150",
            "person": "Shreyansh",
            "on": "Somewhere in DEC"
        }
    ]
}

Reg_Dict.add = function(e) {
    Reg_Dict["Moksh doshi"].push(e)
    console.log(Reg_Dict)
}

export default class Entry {
    constructor(catergory, amount, person, on) {
        this.catergory = catergory,
        this.amount = amount,
        this.person = person,
        this.on = on
    }
}