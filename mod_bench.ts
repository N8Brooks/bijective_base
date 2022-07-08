import { fromBijectiveBase26, toBijectiveBase26 } from "./mod.ts";

Deno.bench("toBijectiveBase26", () => {
  toBijectiveBase26(Number.MAX_SAFE_INTEGER);
});

Deno.bench("fromBijectiveBase26", () => {
  fromBijectiveBase26("bktxhsoghkke");
});
