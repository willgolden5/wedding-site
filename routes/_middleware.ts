import { remultFresh } from "remult/remult-fresh";
import { Rsvp } from "../model/rsvp.ts";

export const remultServer = remultFresh({
  entities: [Rsvp],
}, Response);

export const handler = remultServer.handle;
