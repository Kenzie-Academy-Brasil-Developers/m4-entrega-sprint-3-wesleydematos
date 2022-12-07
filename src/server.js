import app from "./app";
import "dotenv/config";
import { startDatabase } from "./database";

app.listen(3000, async () => {
  await startDatabase();
  console.log(`Server running on PORT ${process.env.PORT}`);
});
