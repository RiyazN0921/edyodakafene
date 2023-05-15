$(document).ready(function () {
    if (localStorage.getItem('loginStatus') !== 'true') {
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    var responseArr;
    $.get("https://63c3dfb9f0028bf85f9ed4f5.mockapi.io/orders",
        function (data) {
            responseArr = data;
            data.map((item, pos) => {
                createRows(item)
                $('#counter').html(data.length);
            })
        },
    );
    function createRows(data) {
        let tr = (`
        <tr>
            <td><span>${data.id}</span></td>
            <td><span class='s-black'>${data.customerName}</span></td>
            <td><span class='s-black'>${data.orderDate}</span><span class='s-gray'>${data.orderTime}</span></td>
            <td><span>$${data.amount}</span></td>
            <td><span class='s-black'>${data.orderStatus}</span></td>
        </tr>`)
        $('#t-body').append(tr);
    }


    var newCheckBox = document.getElementById('nCheckBox');
    newCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('t-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'New'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#counter').html(parseInt($('#counter').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#counter').html(parseInt($('#counter').html()) - 1 );
                    }     
                }
            }
        }
        console.log(tablebody.getElementsByTagName('tr').length)
    })



    var DeliveredCheckBox = document.getElementById('DCheckBox');
    DeliveredCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('t-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'Delivered'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#counter').html(parseInt($('#counter').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#counter').html(parseInt($('#counter').html()) - 1 );
                    }     
                }
            }
        }
    })




    var IntransitcheckBox = document.getElementById('IcheckBox');
    IntransitcheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('t-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'InTransit'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#counter').html(parseInt($('#counter').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#counter').html(parseInt($('#counter').html()) - 1 );
                    }     
                }
            }
        }
    })




    var PackedCheckBox = document.getElementById('PCheckBox');
    PackedCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('t-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'Packed'){
                    if(this.checked === true){
                        tr[i].style.display = "";
                        $('#counter').html(parseInt($('#counter').html()) + 1 );
                    }else{
                        tr[i].style.display = "none";
                        $('#counter').html(parseInt($('#counter').html()) - 1 );
                    }     
                }
            }
        }
    })
});