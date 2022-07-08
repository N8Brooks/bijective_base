const BASE = 26;

/** The ASCII code for 'a', 97 */
const LOWERCASE_A_CHAR_CODE = "a".charCodeAt(0);

/** Matches valid bijective base 26 numbers */
const BIJECTIVE_BASE_26_PATTERN = /^[a-z0-9]*$/;

export function toBijectiveBase26(n: number): string {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError(
      `Cannot convert ${n} to a bijective base ${BASE} number`,
    );
  }

  const digits = [];
  while (n--) {
    digits.unshift((n % BASE) + LOWERCASE_A_CHAR_CODE);
    n = Math.floor(n / BASE);
  }

  return String.fromCharCode(...digits);
}

export function fromBijectiveBase26(s: string): number {
  s = s.toLowerCase();

  if (!BIJECTIVE_BASE_26_PATTERN.test(s)) {
    throw new RangeError(
      `Cannot convert ${s} from a bijective base ${BASE} number`,
    );
  }

  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const r = s.charCodeAt(i) - LOWERCASE_A_CHAR_CODE + 1;
    n = n * BASE + r;
  }

  return n;
}
