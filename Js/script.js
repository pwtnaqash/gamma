var num = 1;

let Add = () => {
    let num1 = num++
    document.getElementById('num').innerHTML = num1
    console.log('add : ', num1);
}

let Negtive = () => {
    // if(num > )
    let num1 = --num;
    document.getElementById('num').innerHTML = num1;
    console.log('negtive : ', num1);
}


var num = 1;


let data = [
    {
        id: 1,
        price: 100,
        unit: 45,
        color: "red"
    },
    
    {
        id: 2,
        price: 100,
        unit: 95,
        color: "black"
    },
    {
        id: 3,
        price: 300,
        unit: 145,
        color: "blue"
    },
    {
        id: 4,
        price: 400,
        unit: 115,
        color: "cyan"
    },
    {
        id: 5,
        price: 100,
        unit: 45,
        color: "red"
    },
    
];

// let colorCode = data[0].map((item)=>{
//     console.log(item.color);
//     return item
// });



function colorGet(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<p onclick=getValue(${arr[i].id}) style="background-color: ${arr[i].color};cursor: pointer;width: 34px;height: 34px;margin-right:1rem"></p>`
    }
    return items
}

document.getElementById('colors').innerHTML = colorGet(data)


function getValue(a) {
    console.log(a);
    let item = data.filter((x) => x.id === a);

    for (var i = 0; i < item.length; i++) {
        console.log(item[i].color);
        document.getElementById('color_piker').innerHTML = item[i].color;
        document.getElementById('price_piker').innerHTML = item[i].price;
        document.getElementById('stock_piker').innerHTML = `In stock (${item[i].unit}), ready to be shipped`;
    }

}

window.onload = function(){
    document.getElementById("autoplay").play()
  }


