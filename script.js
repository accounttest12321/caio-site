addEventListener("submit", (e) => {
  e.preventDefault()
  const nick = document.querySelector("input[type='text']").value
  const tableNicks = document.querySelector(".apelidosCriados")
  tableNicks.innerHTML += `<p>${nick[0].toUpperCase()}${nick.slice(1, nick.length)}</p>`
  document.querySelector("input[type='text']").value = ""
})