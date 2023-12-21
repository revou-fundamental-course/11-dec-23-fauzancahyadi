function gantinama() {
    let nama = prompt("Whats your name?","");
    document.getElementById("nama").innerHTML = nama
}
//gantinama();
document.getElementById('ganti').addEventListener("click", function() {
    gantinama()
})

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == '' || gender == '' || messages == ''){
        alert("tidak ada yang boleh kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    
    return false;
}
