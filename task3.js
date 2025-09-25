function showLinksInfo() {
  // Obtener todos los enlaces
  const links = document.getElementsByTagName("a");
  const total = links.length;

  // Primer y último enlace
  const first = links[0].href;
  const last = links[links.length - 1].href;

  alert(
    `Número de enlaces: ${total}\n` +
    `Primer enlace: ${first}\n` +
    `Último enlace: ${last}`
  );
}
