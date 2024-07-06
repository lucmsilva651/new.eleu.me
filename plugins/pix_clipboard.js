// copying the Pix donation key to the clipboard
// only works if /region_check.js loads the "pix_btn" element

function copyToClipboard() {
  const chave_pix = "00020101021126810014br.gov.bcb.pix01368d6a266f-59e5-4084-be71-ee134b21e6de0219PIX DOACAO VIA SITE5204000053039865802BR5918LUCAS G M DA SILVA6007PIQUETE62070503***6304AB6D";
  navigator.clipboard.writeText(chave_pix);
  document.getElementById("pix").textContent="chave pix copiada com sucesso! vai no seu app de banco e me dá um pouco do seu dinheiro, por favor?";
}