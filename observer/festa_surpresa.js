const readline = require('readline')

function obtainResponse(question){
    const rl  =  readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve =>{
        rl.question(question, resp =>{
            resolve(resp)
            rl.close()
        })
    })
}

function girfriend(){
    setTimeout(()=> {
        console.log('Girfriend: turn off the lights...')
        console.log('Girfriend: ask for silence...')
        console.log('Girfriend: shout surprise!!')
    },2000)
}

// observer
function sindico(event){
    setTimeout(()=> {
        console.log('Sindico: monitoring the noise!')
        console.log(`Sindico: evento -> ${event.resp}`)
        console.log(`Sindico: evento -> ${event.date}`)
    },1000)
}

// subject
async function porter(stakholders){
    while(true){
        const resp = await obtainResponse('The arrived boyfriend? (s/N/q) ')
        if(resp.toLowerCase() === 's'){
            (stakholders || []).forEach(observer => observer({resp, date: Date.now()}))
        }else if(resp.toLowerCase() === 'q'){
            break
        }
    }
}

porter([girfriend, sindico])