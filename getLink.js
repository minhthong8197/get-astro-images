/**
 * copy script to chrome console
 */

/**
 * @type HTMLTableRowElement
 */
listEle = document.querySelectorAll(".New_Object");

/**
 * @type string[]
 */
listLink = Array.from(listEle).reduce((output, eachEle) => {
  const wheatherNumber = Number(
    eachEle.childNodes[eachEle.childNodes.length - 1].innerText
  );
  if (wheatherNumber >= 97)
    output.push(eachEle.childNodes[3].childNodes[0].href);
  return output;
}, []);
