class UI {
  constructor() {
    this.profile = document.getElementById('profile-div')
  }

  displayProfile(user) {
    let name, username, location, bio
    if (user.name === null) {
      name = '<h1></h1>'
    } else {
      name = `<h1>${user.name}</h1>`
    }
    if (user.login === null) {
      username = ''
    } else {
      username = `<p>${user.login}</p>`
    }
    if (user.location === null) {
      location = ''
    } else {
      location = `<p><i class="fas fa-map-marker-alt fa-1x"></i> ${user.location}<p>`
    }
    if (user.bio === null) {
      bio = `
      <h3>Bio :</h3>
      <p>--</p>
      `
    } else {
      bio = `
      <h3>Bio :</h3>
      <p>${user.bio}</p>
      `
    }
    this.profile.innerHTML = `
    <div class="profile">
    <div class="row1">
      <div class="part1">
        <img src=${user.avatar_url} alt=""/>
        ${name}
        ${location}
      </div>
      <div class="part2">
        <div class="username">
          <h3>Username :</h3>
          ${username}
        </div>
        <div class="bio">
          ${bio}
        </div>
        <a href=${user.html_url} target="_blank" class="btn">Visit GitHub Profile</a>
      </div>
    </div>
    <div class="row2">
      <ul>
        <li><button class="btn">Followers : ${user.followers}</button></li>
        <li><button class="btn">Following : ${user.following}</button></li>
        <li><button class="btn">Public Repos : ${user.public_repos}</button></li>
      </ul>
    </div>
    <div class="row3"></div>
    `
  }

  displayRepos(repos) {
    let output = ''
    repos.forEach(repo => {
      output += `
      <div class="repocard"><a href=${repo.html_url} target="_blank"><h2>${repo.name}</h2></a></div>
      `
    })
    document.querySelector('.row3').innerHTML = output
  }

  showAlert(message, classname) {
    const searchDiv = document.getElementById('search-div')
    const div = document.createElement('div')
    div.classList = `alert ${classname}`
    const h2 = document.createElement('h2')
    h2.textContent = message
    div.appendChild(h2)
    document.querySelector('.container').insertBefore(div, searchDiv)
    setTimeout(() => {
      div.remove()
    }, 2000)
  }

  startLoader() {
    document.getElementById('loader').style.display = 'block'
  }

  stopLoader() {
    document.getElementById('loader').style.display = 'none'
  }
}
