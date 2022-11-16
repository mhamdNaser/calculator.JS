let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users)
        function logSubmit(event) {
            console.log('hello from submit')
            let compareName = UserName.value 
            let comparePass = pass.value
            // console.log(compareName, comparePass)
            // console.log(users)
            users.map(e => {
                if(e.name === compareName && e.password == comparePass){
                    console.log(`Welcome ${e.name}`)
                    log.textContent = `Welcome ${e.name}`
                }
            })
            

        event.preventDefault();
        }
        const log = document.getElementById('log')
        const logName = document.getElementById('UserName')
        const password = document.getElementById('pass')
        const form = document.getElementById('form');
        form.addEventListener('submit', logSubmit);