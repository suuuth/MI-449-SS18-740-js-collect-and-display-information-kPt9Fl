
var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descripInput = document.getElementById('descrip')
var emailInput = document.getElementById('email')
var telInput = document.getElementById('tel')
var textOutput = document.getElementById('result')
var codeOutput = document.getElementById('code-result')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var descrip = descripInput.value
  var email = emailInput.value
  var tel = telInput.value

  var profile = '<h4>Hi, my name is ' + firstName + '&nbsp;' + lastName + '</h4>' +
    '<p>' + descrip + '</p>' +
    '<p>' +
    'If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + 'target="_blank">' + email + '</a>' +
    ' or give me a call at ' +
    '<a href="tel:' + tel + '" target="_blank">' + tel + '</a>' +
    '</p>'

  textOutput.innerHTML = profile
  codeOutput.textContent = profile
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
descripInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
telInput.addEventListener('input', updateProfile)
