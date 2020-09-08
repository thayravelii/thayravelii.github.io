let repGit = JSON.parse(localStorage.getItem('repositorioi'))
let nomeUsuario = repGit.owner.login
let fotoPerfil = repGit.owner.avatar_url


document.getElementById('main').innerHTML += `<img id="perfil" src='${fotoPerfil}'>`
document.getElementById('main').innerHTML += `<p id="user">${nomeUsuario}</p>`

const buscaSeguidores = new XMLHttpRequest()
buscaSeguidores.open('GET', 'https://api.github.com/users/thayravelii/followers', false)
buscaSeguidores.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    dadosJSON = this.responseText
    dadosOBJ = JSON.parse(dadosJSON)
    const followers = `<p id="seg">${dadosOBJ.length} Seguidores</p>`
    document.getElementById('main').innerHTML += followers
  }
}
buscaSeguidores.send()


