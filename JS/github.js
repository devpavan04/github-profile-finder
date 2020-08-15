class Github {
  constructor() {
    this.client_id = '8c95a270adf6cb0a4bb7'
    this.client_secret = 'ae77f34fbe728f94c71408ba2ecbf9076b780d72'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getprofile(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profileData = await profileResponse.json()
    const repoData = await repoResponse.json()
    return {
      profiledata: profileData,
      repodata: repoData
    }
  }
}