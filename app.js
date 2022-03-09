import {Application, send, Router} from "https://deno.land/x/oak@v9.0.1/mod.ts"
import renderMiddleware from "./middlewares/renderMiddleware.js"
import { Session } from "https://deno.land/x/oak_sessions@v3.1.3/mod.ts"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
import { serveStaticFiles } from "./middlewares/serveStaticMiddleware.js"
import { router } from "./routes/routes.js"


const app = new Application()

app.use(errorMiddleware)

const session = new Session()
app.use(session.initMiddleware())

app.use(serveStaticFiles);
app.use(renderMiddleware)

app.use(router.routes());


if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  await app.listen({ port: Number(lastArgument) });
}

export { app } 
 
