var mockLogin = 'testuser';
var mockPassword = 'mypassword';
var login = document.getElementById("login")
var senha = document.getElementById("password")
var slider = document.getElementById("sliderNumeros");
var bloco = document.getElementById("bloco");


var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

function resetCampo(){
    login.className = "zeradin"
    login.vaue = ""
    senha.className = "zeradin"
    senha.vaue = ""
}


function logIn(){

    login.className = "zeradin";
    login.className = "zeradin";
    //login e senha tem espaço?
    
    if (spaceBetween(login.value)){ 
        alert("Login has spaces, this is not allowed. Please check your login.")
        login.focus();
        login.className="error errorSpace";

    }else if(spaceBetween(senha.value)){
        alert("Password has spaces, this is not allowed. Please check your login.")
        senha.focus();
        senha.className="error errorSpace";
    }else{

        //validação dos dados
        if (login.value === mockLogin){
            console.log("aeeee porra ta certin o login")
            if (senha.value === mockPassword){
                criaModal();
                login.className="zeradin";
                senha.className="zeradin";
            }else{
                alert("Wrong password. Please check your login.")
                senha.focus();
                senha.className="error";
        }
        
        }else{
            alert("Wrong username. Please check your login.")
            login.focus();
            login.className="error";
    }

    }
    
}


//espaçooooouOOoOoOoOoOoooOoOOooOo
function spaceBetween(string){
    if (string.indexOf(' ') >= 0){
        return true;
    }else{
        return false;
    }
    
}


function criaModal(){
    modal.style.display = "block"
    span.onclick = function(){
        modal.style.display="none";
    }
    window.onclick = function(event){
        if (event.target == modal){
            this.modal.style.display="none";
    
        }
    }
}


function alterRadius(){
    bloco.style = `border-radius: ${slider.value}px`
    if(slider.value >= 50){
        document.getElementById("footer-modal").innerHTML= "Opa, ta bem redondo.";
    }else if (slider.value <= 0 ){
        document.getElementById("footer-modal").innerHTML= "Parece que tá quadarado.";
    }
}