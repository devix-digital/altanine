export const initCaptcha = () => {
    var recaptchas = document.querySelectorAll("#form .g-recaptcha-response")
    recaptchas.forEach((recaptcha) => {
        recaptcha.required = true
        recaptcha.oninvalid = function (e) {
            // do something
            alert("Please complete the captcha")
        }
    })
}
