let domRegister = {
createRegisterContainer: function(){
        var registerContainer = document.createElement("div");
        registerContainer.setAttribute("id","registerContainer");
        registerContainer.setAttribute("class", "fluid-container");
        document.body.appendChild(registerContainer);


        document.getElementById("registerContainer").innerHTML = '<button id = "registerBtn" onClick = "domRegister.removeRegisterContainer(domLogin.createLoginContainer)">Log in</button>'
        +'<p id = "register" class = "paragraph">Register</p>'
        +'<div class="d-flex justify-content-center">'
        // +'<!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->' 
        // + '<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />'
        + '<p id="profile-name" class="profile-name-card"></p>'
        + '<div id = "sign" class="form-signin">'
            + '<span id="reauth-email" class="reauth-email"></span>'
            + '<input type="email" id="inputEmail" class="form-control" placeholder="Email address" >'
            + '<input type="password" id="inputPassword" class="form-control" placeholder="Password" >'
            // + '<div id="remember" class="checkbox">'
            // //    + '<label>'
            // //        + '<input type="checkbox" value="remember-me"> Remember me'
            // //    + '</label>'
            // + '</div>'
            + '<button  onClick ="ajaxTest.ajaxPostForm()" class="btn btn-lg btn-primary btn-block btn-signin">Sign in</button>'
        + '</div>'
        // + '<a href="#" class="forgot-password">'
        //    + 'Forgot the password?'
        // + '</a>'
    + '</div><!-- /card-container -->"'
    },

    removeRegisterContainer: function(callback){
        var registerContainer = document.getElementById("registerContainer");
        registerContainer.parentNode.removeChild(registerContainer);
        callback()
    },
}