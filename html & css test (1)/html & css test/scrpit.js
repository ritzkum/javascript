const input ="Ritesh";
const inputpassword = '12345678';
function validation() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if( user == input && pass == inputpassword){
        alert('Login Successfully');
    }
    else{
        alert('Login Failed');
    }

}