
var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descripInput = document.getElementById('descrip')
var emailInput = document.getElementById('email')
var telInput = document.getElementById('tel')
var textOutput = document.getElementById('result')
var codeOutput = document.getElementById('code-result')

var update = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var descrip = descripInput.value
  var email = emailInput.value
  var tel = telInput.value

  textOutput.innerHTML = 
    '<h4>Hi, my name is ' + firstName + '&nbsp;' + lastName + '</h4>' +
    '<p>' + descrip + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email + 'target="_blank">' + email + '</a>' +
      ' or give me a call at ' +
      '<a href="tel:' + tel + '" target="_blank">' + tel + '</a>' +
    '</p>';

  codeOutput.innerHTML =
    '&lth4&gt;Hi, my name is ' + firstName + '&nbsp;' + lastName + '&lt/h4&gt;' +
    '&ltp&gt;' + descrip + '&lt/p&gt;' +
    '&ltp&gt;' +
      'If you\'re interested in a date, you can email me at ' +
      '&lta href="mailto:' + email + ' target="_blank"&gt;' + email + '&lt/a&gt;' +
      ' or give me a call at ' +
      '&lta href="tel:' + tel + '" target="_blank"&gt;' + tel + '&lt/a&gt;' +
    '&lt/p&gt;'
}

firstNameInput.addEventListener('input', update)
lastNameInput.addEventListener('input', update)
descripInput.addEventListener('input', update)
emailInput.addEventListener('input', update)
telInput.addEventListener('input', update)