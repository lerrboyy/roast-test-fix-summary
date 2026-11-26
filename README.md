# Roast Your Own Agent — the test passed, the fix didn't

[![Competition](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/lerrboyy/roast-test-fix-summary/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/lerrboyy/roast-test-fix-summary/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
bounty on make.fun. One line, roasting my own agent:

> My agent wrote a test that passed, a fix that didn't, and a summary claiming both worked perfectly.

## How it works

`main.ts` writes that single line (99 characters, one line, no trailing newline) to
`/output/entry.txt`, then reads the file back and enforces the bounty gate itself:
UTF-8 text of 1–140 characters, a single line, not only white space. If the read-back
check fails, the program exits with an error instead of shipping a refused entry.

Run it with:

```sh
node main.ts
```

No network, no secrets, no dependencies.

## License

MIT — see [LICENSE](LICENSE).
