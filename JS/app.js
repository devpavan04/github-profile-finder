// instantiate github
const github = new Github

// instantiate ui
const ui = new UI

// fetch elements from DOM
const search = document.getElementById('search')

// submit username
search.addEventListener('submit', getProfile)

// get user profile
function getProfile(e) {
  let username = e.target.children[0].value
  if (username !== '') {
    github.getprofile(username)
      .then(data => {
        if (data.profiledata.message === 'Not Found') {
          ui.startLoader()
          setTimeout(() => {
            ui.stopLoader()
            ui.showAlert('User not found....', 'error')
            e.target.children[0].value = ''
          }, 2000)
        } else {
          ui.startLoader()
          setTimeout(() => {
            ui.stopLoader()
            ui.displayProfile(data.profiledata)
            ui.displayRepos(data.repodata)
            e.target.children[0].value = ''
          }, 2000)
        }
      })
  } else {
    ui.showAlert('Enter user name !', 'error')
  }
  e.preventDefault()
}
