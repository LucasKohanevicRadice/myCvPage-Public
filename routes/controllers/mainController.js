
const showMain = async ({render}) => {
    return await render("index.html")
}

const showAboutMe = async ({render}) => {
    return await render("aboutMe.html")
}

const showJavaScript = async ({render}) => {
    return await render("javaScript.html")
}

const showPython = async ({render}) => {
    return await render("python.html")
}

const showResume = async ({render}) => {
    return await render("resume.html")
}

const showHobbies = async ({render}) => {
    return await render("hobbies.html")
}





export { 
    showMain,
    showAboutMe,
    showJavaScript,
    showPython,
    showResume,
    showHobbies,
         }