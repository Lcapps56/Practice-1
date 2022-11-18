// let day = document.getElementById('days')
// let hours = document.getElementById('hours')
// let min = document.getElementById('min')
// let sec = document.getElementById('sec')

let startTime = new Date("Nov 1, 2025 00:00:00").getTime()

let x = setInterval(()=>{
    let now = new Date().getTime()
    let d = startTime - now

    let days = Math.floor(d/(1000*60*60*24))
    let hours = Math.floor((d%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor(d%(1000*60*60)/(1000*60))
    let seconds = Math.floor(d%(1000*60)/(1000))


    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('min').innerHTML = minutes
    document.getElementById('sec').innerHTML = seconds

    if(d <= 0){
        clearInterval(x)
    }

}, 1000)


// let updateTime = (d, h, m, s) =>{

//     console.log(d.textContent, h.textContent, m.textContent, s.textContent)
// }

// updateTime(day, hours, min, sec)