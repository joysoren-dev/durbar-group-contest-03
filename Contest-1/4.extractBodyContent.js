function extractBodyContent(htmlString) {
  // body tag er porer part ta alada kore nicchi
  const bodyPart = htmlString.split("<body>")[1];

  // closing body tag er ager content ta nicchi
  const bodyContent = bodyPart.split("</body>")[0];

  // body er vitore je content peyechi seta return korchi
  return bodyContent;
}
