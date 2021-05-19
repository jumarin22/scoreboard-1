function main() {
  const allSections = document.querySelectorAll('section')

  allSections.forEach(function (element) {
    if (element.nodeName == 'H3') {
      const name = document
        .querySelector('input')
        .addEventListener('input', updateName)

      function updateName(event) {
        name.textContent = event.target.value
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', main)
