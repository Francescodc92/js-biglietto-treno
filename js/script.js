const StartButton = document.getElementById("start-button")

StartButton.addEventListener("click", () => {
  const name = prompt("digita il tuo nome")
  const lastname = prompt("digita il tuo cognome")
  const age = prompt("digita la tua età")
  const kmToGo = prompt("digita la distanza in km da percorrere")

  const tableRow = document.querySelector("#table-row")
  const nameElement = document.querySelector("#name")
  const lastnameElement = document.querySelector("#lastname")
  const ageElement = document.querySelector("#age")
  const kmToGoElement = document.querySelector("#km-to-go")
  const discountElement = document.querySelector("#discount")
  const priceElement = document.querySelector("#price")

  console.log(typeof Number(age))

  if (name != "" && lastname != "" && age != "" && kmToGo != "") {
    nameElement.innerHTML = name
    lastnameElement.innerHTML = lastname
    ageElement.innerHTML = age
    kmToGoElement.innerHTML = kmToGo + "km"
    discountElement.innerHTML = Utils.calculatePrice(age, kmToGo).discount
    priceElement.innerHTML = Utils.calculatePrice(age, kmToGo).price + "€"
  } else {
    tableRow.innerHTML = `<td class="error-td"  colspan="5" >
      <span class="error">inserisci dati validi</span>
    </td>`

    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
})

const Utils = {
  calculatePrice: (age, kmToGo) => {
    const priceToKm = 0.21
    let discount = 0

    let price = priceToKm * kmToGo

    if (age < 18 && age != 0) {
      discount = 20
    } else if (age > 65 && age != 0) {
      discount = 40
    }

    if (discount != 0) {
      const valueToBeDiscounted = price * (discount / 100)
      price = (price - valueToBeDiscounted).toFixed(2)
      discount += "%"
    } else {
      price
      discount = "-"
    }

    return {
      price,
      discount,
    }
  },
}
