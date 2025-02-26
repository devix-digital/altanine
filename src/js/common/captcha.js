export const initCaptcha = () => {
    function loadRecaptcha() {
        if (!document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]')) {
            const script = document.createElement("script")
            script.src = "https://www.google.com/recaptcha/api.js"
            script.async = true
            script.defer = true
            document.body.appendChild(script)
        }
    }

    loadRecaptcha()

    const recaptchas = document.querySelectorAll("#form .g-recaptcha-response")

    if (recaptchas.length > 0) {
        recaptchas.forEach((recaptcha) => {
            recaptcha.required = true
            recaptcha.oninvalid = function () {
                alert("Please complete the captcha")
            }
        })
    }
}
