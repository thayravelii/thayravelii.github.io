let repGit = new XMLHttpRequest() 

repGit.open("GET", "https://api.github.com/users/thayravelii/repos", false)

repGit.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        const repositorio = JSON.parse(this.responseText)
        

    for (let i = 0; i < repositorio.length; i++) {
        document.getElementById("tabela").innerHTML += "<tr><td><h3> Repostiório Github - " + repositorio[i].owner.login + "</td></h3>" + "<td>Nome:" + repositorio[i].full_name + "</td><td><a href='"+ repositorio[i].owner.html_url +"' target='_blank'><img src='" + repositorio[i].owner.avatar_url + "'style= 'width: 100px; border-radius: 50px;'></a>" + "<a href='" + repositorio[i].html_url + "' target ='_blank'><input type='button' value='Visualizar'></a>" +  "</td><td><img src='./Imagem/" + repositorio[i].language + ".PNG' width ='60px' height='60px'></td></img>" +  "<td><a target='_blank' href='./perfil.html' onclick = 'funcao(" + JSON.stringify(repositorio[i]) + ")'><img src='info.png' width= 30px </a></td>" 

    }
}
}

repGit.send()


function funcao(repositorio) {
    localStorage["repositorio"] = JSON.stringify(repositorio)
    console.log(repositorio)
}