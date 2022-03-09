import { superoak } from "https://deno.land/x/superoak@4.6.0/mod.ts";
import { app } from "./app.js";

Deno.test("GET request to /vera.js should return 'Vera Aka DevaajaPrinsessa <3'", async () => {
  const testClient = await superoak(app);
  await testClient.get("/vera.js").expect("Vera Aka DevaajaPrinsessa <3");
});
