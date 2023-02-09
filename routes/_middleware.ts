import { remultFresh } from "remult/remult-fresh";
import { Rsvp } from "../model/rsvp.ts";
import { createPostgresConnection } from "https://deno.land/x/remult@v0.17.3/postgres.ts";

export const remultServer = remultFresh({
  entities: [Rsvp],
  dataProvider: async () => {
    const dbUrl = Deno.env.get("DATABASE_URL");
    if (dbUrl) {
      return createPostgresConnection({ connectionString: dbUrl });
    }
    return await undefined;
  },
}, Response);

export const handler = remultServer.handle;
