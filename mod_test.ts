import { fromBijectiveBase26, toBijectiveBase26 } from "./mod.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.147.0/testing/asserts.ts";

Deno.test("toBijectiveBase26", async (t) => {
  await t.step("-1", () => {
    assertThrows(() => toBijectiveBase26(-1));
  });

  await t.step("0", () => {
    assertEquals(toBijectiveBase26(0), "");
  });

  await t.step("1", () => {
    assertEquals(toBijectiveBase26(1), "a");
  });

  await t.step("26", () => {
    assertEquals(toBijectiveBase26(26), "z");
  });

  await t.step("27", () => {
    assertEquals(toBijectiveBase26(27), "aa");
  });

  await t.step("safe", () => {
    assertEquals(toBijectiveBase26(Number.MAX_SAFE_INTEGER), "bktxhsoghkke");
  });

  await t.step("unsafe", () => {
    assertEquals(toBijectiveBase26(1e16), "brutmhyhiizq");
  });

  await t.step("non-finite", () => {
    assertThrows(() => toBijectiveBase26(NaN));
  });
});

Deno.test("fromBijectiveBase26", async (t) => {
  await t.step("non-bijective-base-26", () => {
    assertThrows(() => fromBijectiveBase26("."));
  });

  await t.step('""', () => {
    assertEquals(fromBijectiveBase26(""), 0);
  });

  await t.step("a", () => {
    assertEquals(fromBijectiveBase26("a"), 1);
  });

  await t.step("A", () => {
    assertEquals(fromBijectiveBase26("A"), 1);
  });

  await t.step("z", () => {
    assertEquals(fromBijectiveBase26("z"), 26);
  });

  await t.step("Z", () => {
    assertEquals(fromBijectiveBase26("Z"), 26);
  });

  await t.step("aa", () => {
    assertEquals(fromBijectiveBase26("aa"), 27);
  });

  await t.step("bktxhsoghkke", () => {
    assertEquals(fromBijectiveBase26("bktxhsoghkke"), Number.MAX_SAFE_INTEGER);
  });

  await t.step("brutmhyhiizq", () => {
    assertEquals(fromBijectiveBase26("brutmhyhiizq"), 1e16);
  });
});
