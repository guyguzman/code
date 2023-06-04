async function getTextFile(filename) {
  fetch(`./snippets/${filename}`)
    .then((response) => response.text())
    .then((textString) => {
      return textString;
    });
}
