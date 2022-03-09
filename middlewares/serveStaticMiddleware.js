import { send } from "https://deno.land/x/oak@v9.0.1/mod.ts"


const serveStaticFiles = async (context, next) => {
    
      const path = context.request.url.pathname
      await send(context, path, {
        root: `${Deno.cwd()}/views/layouts/styles`,
      });
      next()
  };
  
  export { serveStaticFiles };
