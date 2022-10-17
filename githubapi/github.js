class Github {
    constructor(){
        this.client_id = `d70f466dfd662eb9a8db`
        this.client_secret = `42e96a6a08e84921853a7d2052285b2c1cbe3464`
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        //get users
        const userr = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        
      //get repos
        const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

         const getRepos = await repos.json()
        const profile = await userr.json()

        return{
            profile:profile,
            repositories: getRepos
        }
    }
}