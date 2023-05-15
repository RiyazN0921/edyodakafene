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
    $.get("https://63c2a672b0c286fbe5f10b3f.mockapi.io/users",
        function (data) {           
            data.map((item,pos) => {
                createRows(item)              
            })
            searchFun();
            $('#rBtn').click(function (e) { 
                e.preventDefault();
                $('#sBox').val('');
                $('#t-body tr').css('display','')
            });
        },
    );
    function createRows(data) {
        let tr = (`
        <tr>
            <td><span>${data.id}</span></td>
            <td><img src=${data.profilePic}/></td>
            <td><span>${data.fullName}</span></td>
            <td><span class='s-black'>${data.dob}</span></td>
            <td><span>${data.gender}</span></td>
            <td><span>${data.currentCity}, ${data.currentCountry}</span></td>
        </tr>`)
        $('#t-body').append(tr);
    }


    const searchFun = () => {
        $('#s-form').submit((e) => {
            let searchValue = document.getElementById('sBox').value.toUpperCase();
            e.preventDefault();
            if (searchValue.length < 2) {
                alert('Please enter atleast 2 characters');
                $('#t-body tr').css('display','')
            } 
            else {
                $.get(`https://63c2a672b0c286fbe5f10b3f.mockapi.io/users?fullName=${searchValue}`,
                    function (data, textStatus, jqXHR) {

                        let tablebody = document.getElementById('t-body');
                        let tr = tablebody.getElementsByTagName('tr');
                        for (let i = 0; i < tr.length; i++) {
                            let td = tr[i].getElementsByTagName('td')[2];
                            if (td) {
                                let textValue = td.textContent || td.innerHTML;

                                if (textValue.toUpperCase().indexOf(searchValue) > -1) {
                                    tr[i].style.display = "";
                                } else {
                                    tr[i].style.display = 'none';
                                }
                            }
                        }
                    },
                );
            }
        })
    }
});