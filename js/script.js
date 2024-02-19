const allSeat = document.getElementsByClassName('seat')
let count = 0;

for(const seat of allSeat){
    seat.addEventListener('click', function(e){
        count = count + 1;

        seat.style.backgroundColor = "#1DD100";



        // seat number
        const seatNumber = e.target.innerText;
        // console.log(seatNumber)

        const seatClass = e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[3].innerText;
        // console.log(seatClass)

        const seatPrice = e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[5].innerText
        console.log(seatPrice)

        const selected = document.getElementById('seat-economy');
        // console.log(selected)


        const tr = document.createElement('tr');
        // console.log(tr);
        const td1 = document.createElement('td')
        td1.innerText = seatNumber;
        // console.log(td1)
        const td2 = document.createElement('td');
        td2.innerText = seatClass;
        // console.log(td2)
        const td3 = document.createElement('td');
        td3.innerText = seatPrice;
        // console.log(td3)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        selected.appendChild(tr);


        // total cost 
        const totalCost = document.getElementById('Total-cost').innerText;
        const convertedTotalCost = parseInt(totalCost);
        document.getElementById('Total-cost').innerText = convertedTotalCost + parseInt(seatPrice);



        //grand total cost
        const grandTotalCost = document.getElementById('gran-total-cost').innerText;
        const convertedGrandtotalCost = parseInt(grandTotalCost);
        const sum2 = convertedGrandtotalCost + parseInt(seatPrice)



        
        setInnerText('gran-total-cost', sum2)


        setInnerText('seat-count', count)

        

    })
}

function setInnerText(id, value){
        document.getElementById(id).innerText = value;
        
}
