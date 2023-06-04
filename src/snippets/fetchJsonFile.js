function fetchFile() {
  fetch("./json/sample.json")
    .then((response) => response.json())
    .then((json) => {
      let firstObject = json[0];
      let beautifyObject = JSON.stringify(firstObject, null, 4);
    });
}
