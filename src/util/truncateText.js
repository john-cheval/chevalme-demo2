function truncateHTML(html, wordLimit = 100) {
  const div = document.createElement("div");
  div.innerHTML = html;

  const text = div.textContent || div.innerText;
  const words = text.split(/\s+/);

  if (words.length > wordLimit) {
    const truncatedText = words.slice(0, wordLimit).join(" ") + "...";
    div.textContent = truncatedText;
  }

  return div.innerHTML;
}

export default truncateHTML;
