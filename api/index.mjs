import { createServer } from "./server.mjs";

const server = createServer();
const port = 3000; 

try {
  await server.listen({ host: "0.0.0.0", port }); 
  console.log(`Server started on http://localhost:${port}`); 
} catch (err) {
  console.log(err);
  process.exit(1);
}
        