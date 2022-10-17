const github = new Github
const ui = new UI
const userInput = document.getElementById('searchUser')

userInput.addEventListener('keyup', e=>{
    const input  = e.target.value
    if(input!==''){
    github.getUser(input)
    .then(data=>{
       if(data.profile.message==="Not Found"){
        ui.showAlert('not found', 'alert alert-danger')
       }else{
         //show Ui
         ui.showProfile(data.profile) 
         ui.showRepos(data.repositories)
         ui.clearAlert()

       }
    })
    }else{
     //
     ui.clearUi()

    }
})