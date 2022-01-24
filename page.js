function next(){
    username=document.getElementById("name").value;
    localStorage.setItem("username", username);
    window.location="page2.html";
}
function log_out(){
    window.location="index.html";
}