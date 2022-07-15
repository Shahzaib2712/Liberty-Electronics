document.getElementById("formsubmit").addEventListener("click", function() {
    let username = document.getElementById("inputEmail4").value;
    if (username == "") {
        alert("please fill form")
    } else {
        localStorage.setItem("localusername", username);
        showusername();
    }
})

function showusername() {
    let data = localStorage.getItem("localusername");
    console.log(data);

    document.getElementById("setusername").innerText = data;

}