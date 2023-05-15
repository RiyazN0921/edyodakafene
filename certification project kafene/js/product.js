$(document).ready(function () {
    if(localStorage.getItem('loginStatus') !== 'true'){
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    $.get("https://63c3dfb9f0028bf85f9ed4f5.mockapi.io/products",
        function (data) {
            data.map((item,pos) => {    
                createRows(item)
                $('#counter').html(data.length)
            })
        },
    );
    function createRows(data) {
        let tr = (`
        <tr>
            <td><span>${data.id}</span></td>
            <td><span class='s-black'>${data.medicineName}</span></td>
            <td><span>${data.medicineBrand}</span></td>
            <td><span class='s-black text-nowrap'>${data.expiryDate}</span></td>
            <td><span>$${data.unitPrice}</span></td>
            <td><span>${data.stock}</span></td>
        </tr>`)
        $('#t-body').append(tr);
    }


    
    var expiredCheckBox = document.getElementById('eCheckBox');
    expiredCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('t-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[3];
            if (td) {
                let textValue = myParser(td.textContent || td.innerHTML);
                if (new Date(textValue).getTime() < new Date().getTime()){
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


    var lowStockCheckBox = document.getElementById('lCheckBox');
    lowStockCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('t-body');
        let tr = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[5];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue < 100){
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


    function myParser (date) {
        var arr = date.split('-');
        return arr.join(' ')
    }
});