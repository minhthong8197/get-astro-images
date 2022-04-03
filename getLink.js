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
  const wheatherText =
    eachEle.childNodes[eachEle.childNodes.length - 1].innerText;
  // check case skip
  if (wheatherText[0] === "-") return output;
  const wheatherNumber = Number(wheatherText.match(/^\d+/));

  if (wheatherNumber >= 97)
    output.push(eachEle.childNodes[3].childNodes[0].href);
  return output;
}, []);
