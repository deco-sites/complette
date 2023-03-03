import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 554,
  site: "complette",
  domains: ["complette.deco.site"],
});