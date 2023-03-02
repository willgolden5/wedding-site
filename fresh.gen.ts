// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/About.tsx";
import * as $$1 from "./islands/CardDisplay.tsx";
import * as $$2 from "./islands/Home.tsx";
import * as $$3 from "./islands/RsvpForm.tsx";
import * as $$4 from "./islands/RsvpReveal.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/About.tsx": $$0,
    "./islands/CardDisplay.tsx": $$1,
    "./islands/Home.tsx": $$2,
    "./islands/RsvpForm.tsx": $$3,
    "./islands/RsvpReveal.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
