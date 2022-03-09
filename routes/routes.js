import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts"
import * as mainController from "./controllers/mainController.js"

const router = new Router()

router.get("/", mainController.showMain)
router.get("/aboutMe", mainController.showAboutMe)
router.get("/javaScript", mainController.showJavaScript)
router.get("/python", mainController.showPython)
router.get("/resume", mainController.showResume)
router.get("/hobbies", mainController.showHobbies)

export { router }