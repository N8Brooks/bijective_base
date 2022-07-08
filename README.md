# bijective_base

Tools for converting to and from
[bijective numeration](https://en.wikipedia.org/wiki/Bijective_numeration).

## toBijectiveBase26

Converts non-negative integers to bijective base 26.

```ts
import { toBijectiveBase26 } from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(toBijectiveBase26(1), "a");
assertEquals(toBijectiveBase26(2), "b");
assertEquals(toBijectiveBase26(3), "c");

assertEquals(toBijectiveBase26(26), "z");
assertEquals(toBijectiveBase26(27), "aa");
assertEquals(toBijectiveBase26(28), "ab");

assertEquals(toBijectiveBase26(52), "az");
assertEquals(toBijectiveBase26(53), "ba");

assertEquals(toBijectiveBase26(702), "zz");
assertEquals(toBijectiveBase26(703), "aaa");
```

## fromBijectiveBase26

Converts bijective base 26 number to integers.

```ts
import { fromBijectiveBase26 } from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(fromBijectiveBase26("A"), 1);
assertEquals(fromBijectiveBase26("B"), 2);
assertEquals(fromBijectiveBase26("C"), 3);

assertEquals(fromBijectiveBase26("Z"), 26);
assertEquals(fromBijectiveBase26("AA"), 27);
assertEquals(fromBijectiveBase26("AB"), 28);

assertEquals(fromBijectiveBase26("AZ"), 52);
assertEquals(fromBijectiveBase26("BA"), 53);

assertEquals(fromBijectiveBase26("ZZ"), 702);
assertEquals(fromBijectiveBase26("AAA"), 703);
```
