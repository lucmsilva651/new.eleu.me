// region check for Pix donations in Brazil
// checking the browser language and then enabling/disabling the element
const navLang = navigator.language.split('-')[0]

if(navLang == "pt") {
  document.getElementById("pix_text").style.visibility = "visible"
  console.log("checagem de região feita com sucesso, ativando doações")
} else {
  document.getElementById("pix_text").style.visibility = "hidden"
  console.log(`region check failed, disabling donations\nactual language: ` + navLang)
}