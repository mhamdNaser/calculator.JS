var users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users)
        function logSubmit(event) {
            console.log('hello from submit');
            let compareName = logName.value 
            let comparePass = password.value
            users.map(e => {
                if(e.name === compareName && e.password == comparePass){
                    console.log(`Welcome ${compareName}`)
                    log.textContent = `Welcome ${e.name}`
                }
                
            })
            

            event.preventDefault();
        }
        const log = document.getElementById('demo')
        const logName = document.getElementById('UserName')
        const password = document.getElementById('pass')
        const form = document.getElementById('form')
        form.addEventListener('submit', logSubmit)