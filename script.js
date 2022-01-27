document.addEventListener('DOMContentLoaded', function (event) {
    var submit = document.querySelector("#submit");
    submit.addEventListener('click', function () {
        var table = document.getElementById("dataTable")
        var row = table.insertRow(table.length)
        var fname = row.insertCell(0)
        var lname = row.insertCell(1)
        var addre = row.insertCell(2)
        var pin = row.insertCell(3)
        var gen = row.insertCell(4)
        var foodcell = row.insertCell(5)
        var statecell = row.insertCell(6)
        var countrycell = row.insertCell(7)
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var address = document.getElementById("address");
        var pincode = document.getElementById("pincode");
        var state = document.getElementById("state")
        var country = document.getElementById("country")
        fname.innerHTML = firstName.value;
        lname.innerHTML = lastName.value;
        addre.innerHTML = address.value;
        pin.innerHTML = pincode.value;
        var gender = document.getElementsByName('gender');
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked)
                gen.innerHTML = gender[i].value;
        }
        var ul = document.createElement('ul');
        var italian = document.getElementById("italian");
        if(italian.checked){
            var ital = document.createElement('li')
            ul.appendChild(ital)
            ital.innerHTML = "Italian"
        }
        var chinese = document.getElementById("chinese");
        if(chinese.checked){
            var chin = document.createElement('li')
            ul.appendChild(chin)
            chin.innerHTML = "Chinese"
        }
        var indian = document.getElementById("indian");
        if(indian.checked){
            var ind = document.createElement('li')
            ul.appendChild(ind)
            ind.innerHTML = "Indian"
        }
        var american = document.getElementById("american");
        if(american.checked){
            var ame = document.createElement('li')
            ul.appendChild(ame)
            ame.innerHTML = "American"
        }
        var japanese = document.getElementById("japanese");
        if(japanese.checked){
            jap = document.createElement('li')
            ul.appendChild(jap)
            jap.innerHTML = "Japanese"
        }
        foodcell.appendChild(ul)
        statecell.innerHTML = state.value;
        countrycell.innerHTML = country.value;
        var form = document.getElementById("form");
        form.reset();
    })

})