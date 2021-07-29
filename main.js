const startBtn = document.querySelector("#start")
const clearBtn = document.querySelector("#clear")
clearBtn.style.display = "none"
let timer = null
let seconds = 0

startBtn.addEventListener("click", () => {
  startTimer()
})

const startTimer = () => {
  if (!timer) {
    updateTime()
    timer = setInterval(() => {
      seconds++
      updateTime()
    }, 1000)
    startBtn.innerHTML = "Stop"
    startBtn.id = "stop"
    clearBtn.style.display = "block"
  }
  else {
    clearInterval(timer)
    timer = null
    startBtn.innerHTML = "Start"
    startBtn.id = "start"
  }
}

const updateTime = () => {
  const people = parseInt(document.querySelector("#people").value)
  const salary = parseInt(document.querySelector("#salary").value)
  const resultMoney = document.querySelector("#result_money")
  const resultTime = document.querySelector("#result_time")
  let minutes = Math.floor(seconds / 60)
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes
  let secondsText = seconds % 60
  secondsText = secondsText.toString().length === 1 ? "0" + secondsText : secondsText
  resultMoney.innerHTML = (people * salary * seconds / 3600).toFixed(2) + "€"
  resultTime.innerHTML = minutes + ":" + secondsText + " Minutes"
}

clearBtn.addEventListener("click", () => {
  seconds = 0
  const resultMoney = document.querySelector("#result_money")
  const resultTime = document.querySelector("#result_time")
  resultMoney.innerHTML = "0.00€"
  resultTime.innerHTML = "00:00 Minutes"

	if (!timer){
    clearBtn.style.display = "none"
  }
})