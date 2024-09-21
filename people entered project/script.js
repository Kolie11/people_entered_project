let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-btn")
let entriesEl = document.getElementById("entries-el")

let quoteEl = document.getElementById("quote")

let date = new Date().getFullYear()
let name = "Fassou Mathias Kolie"
quoteEl.textContent =name + " " + " ©" + date

function increment(){
  count += 1
  countEl.innerText = count
}

function save(){
entriesEl.textContent =entriesEl.textContent + count + "-";
  countEl.innerText = 0
  count = 0
}