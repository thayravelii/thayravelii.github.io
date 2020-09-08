let repGit = new XMLHttpRequest()
repGit.open("GET", "https://api.github.com/users/thayravelii/repos", false)
repGit.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const repositorio = JSON.parse(this.responseText)
    for (let i = 0; i < repositorio.length; i++) {
      let nomeUser = `<td><h3> Repostiório Github - ${repositorio[i].owner.login} </h3></td>`
      let nomeRepo = `<td>Nome: ${repositorio[i].full_name}</td>`
      let linkUser = `<td><a href=${repositorio[i].owner.html_url}'target='_blank'><img src='${repositorio[i].owner.avatar_url}' style= 'width: 100px;'></a>`
      let linkRepo = `<td><a href='${repositorio[i].html_url}' target ='_blank'><input type='button' value='Visualizar'></a></td>`
      let language = `<td>${repositorio[i].language}</td>`
      let btnInfos = `<td><button onclick='enviar(${JSON.stringify(repositorio[i])})'>Detalhes</button></td></tr>`

      document.getElementById("tabela").innerHTML += `<tr>${nomeUser}${nomeRepo}${linkUser}${linkRepo}${btnInfos}${language}</tr>`

    }
  }
}
repGit.send()

function enviar(repositorio) {
  localStorage.repositorioi = JSON.stringify(repositorio)
  window.open('perfil.html')
}