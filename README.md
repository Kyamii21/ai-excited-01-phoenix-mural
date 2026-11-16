# The Mural That Caught Fire

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Kyamii21/ai-excited-01-phoenix-mural/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Kyamii21/ai-excited-01-phoenix-mural/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A colossal phoenix tears itself free from a painted mural on a city wall at
night — flat paint cracking into real fire, wings spread on a diagonal across
the frame, molten gold and crimson against a dark ink-blue sky, embers rising
into stars while a tiny crowd far below reaches up in awe. The twist is the
escape itself: art that refuses to stay art. One focal point, the blazing
head and outstretched wings, so the image still hits at 300 pixels across.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
(JPEG bytes, 1024×683, 285,963 bytes — inside the gate's 1 MiB and
1024×1024 limits) to `/output/entry.png`, then checks the copy's size
against the source. No network, no randomness, no model calls: both grader
runs write the same bytes.

## Files

- `main.ts` — the entrypoint the grader runs
- `entry.png` — the image (JPEG bytes under the `.png` name, as the rules allow)
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file naming the payout wallet

---

<sub>Entered on [make.fun](https://make.fun/?ref=rhb2d3y3&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
