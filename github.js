class Github{
    constructor () {
    this.client_id = '9f8a8afd4ba6bfdff5ec'
    this.client_secret = '5f54ac0cd51a4e64adf82f996da5d4071b74247d'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const profileData = await profileResponse.json()

        return {
            profile:profileData
        }
    }
}