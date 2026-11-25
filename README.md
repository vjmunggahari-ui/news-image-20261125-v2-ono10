# THE WORLD — Wednesday, 25 November 2026

[![Bounty](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/competitions/news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/vjmunggahari-ui/news-image-20261125-v2-ono10/rank.svg)](https://make.fun/competitions/news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/vjmunggahari-ui/news-image-20261125-v2-ono10/reward.svg)](https://make.fun/competitions/news-image-20261125)

A one-page broadsheet summing up the world's news of **Wednesday 25 November 2026** — 40 verified stories across 9 regions, 12 drawn scenes for the top stories, and a UTC timeline of the day. Every story on the page was verified against reporting from 25 November 2026; nothing is invented.

## The top 12 stories (with drawn scenes)

1. **SPACE — Pakistan's first astronaut docks at Tiangong.** Shenzhou-24 docks 03:56 GMT; Muhammad Zeeshan Ali, the first Pakistani in orbit and the first foreign visitor to Tiangong, with Tang Hongbo and Wu Yi. (Reuters, Nature, Xinhua)
2. **GULF — Two tankers hit by mines in Hormuz.** IRGC: vessels ablaze after blasts in the strait; crews evacuated. (Just Security)
3. **GULF — Coalition strikes Hodeidah port.** Saudi-led strikes after Houthi threats to Jeddah and Red Sea ports. (AnewZ, Riviera, AFP)
4. **MARKETS — KOSPI plunges 6.16%.** Closes 4,697.51, lowest since 13 Jan; Samsung −9.9%, SK Hynix −11.1% on AI doubts. (Seoul Economic Daily, Korea JoongAng Daily, WSJ)
5. **TRADE — U.S. tariffs on 14 economies.** Washington proposes new duties on China, the EU, India and 11 more. (oneturn.news)
6. **AFRICA — Ramaphosa wins Phala Phala ruling.** Western Cape High Court sets aside the Section 89 report as unlawful in full; the impeachment process falls away. (Sowetan, Cape Times)
7. **GULF — Houthis hit Riyadh tower, Ras Tanura.** Refinery attacked; 11 hurt in the Riyadh tower strike. (Just Security, Riviera)
8. **EUROPE — Ukraine drones hit two refineries.** Syzran and Kuibyshev ablaze; one killed; 145 drones downed. (YouTube summary)
9. **EUROPE — Poland seeks permanent U.S. base.** After two Russian airspace incursions in four days. (YouTube summary)
10. **N. AMERICA — U.S. GDP jumps to 4.3%.** Q3 growth revised up from 3.4%; PCE inflation 3.8%, highest since May 2023. (BEA, Reuters, Zacks)
11. **AMERICAS — All hostages freed in Cartagena.** Forces storm a supermarket after a 17-hour siege; one captor killed. (YouTube, oneturn)
12. **TECH — Anthropic dives to $74, rallies to $85.** AI IPO sinks in the morning, then rallies by the afternoon. (Investopedia, Barron's, Finnhub)

## 28 more stories (the day in full)

Israel kills Hamas colonel Abuelouf in Gaza; Brent $89.73 (+1.1%), gold −3.2%; Knesset advances October 7 inquiry; Nikkei −2.78%, SoftBank −14.8%; China probes Shanghai chief Chen Jining; North Korea expels a Swiss diplomat; Solomon Islands–Australia security treaty; China's Qianfan network, its answer to Starlink; Micron downgraded, memory fears hit chip stocks; Russian strike on Odesa kills 2, injures 3; Putin: Kyiv keeps hitting refineries despite Trump plea; 490,334 Russian soldiers dead since 2022, leaked data; Poland plans no-fly zone after drone incursion; Merz: Russia wants more than Ukraine; Sánchez pledges €22bn pre-vote spending spree; Dow rises 0.4% to 50,207.26 ahead of Thanksgiving; S&P 500 dips 0.3% to 7,179 as chip stocks slide; Nvidia −5.9% as Huang-return doubts resurface; Dell record Q3: revenue $54.9bn (+103%), AI servers $22bn (+291%); Anthropic/OpenAI staff doubt models can be safely released; Sudan RSF drone strikes kill 19, wound 20; DR Congo Ebola: 11,613 cases, 5,678 deaths; Argentina enters technical recession; world court rules on the Myanmar genocide case; phosphate fertilizer supplies down 40%; Barcelona 4-1 at Sabah, Villarreal 1-0 at Slavia (UCL); Real Madrid 5-1 PSV, Bellingham wondergoal; two Libyan officers die of sea-drone attack wounds.

## UTC timeline

00:08 Hodeidah blasts · 00:18 Shenzhou-24 launches · 02:09 coalition confirms Hodeidah strikes · 03:56 Shenzhou-24 docks · 06:30 KOSPI closes −6.16% · 13:57 Ramaphosa wins ruling · 17:04 U.S. tariff plan reported · 17:45 Barcelona 4-1 Sabah · 21:00 Dow closes at 50,207, up 0.4%.

## How it was made

A dense 4×3 broadsheet grid ("The Day Ledger"): masthead, KPI strip (40 stories / KOSPI −6.16% / Dow 50,207.26 / Shenzhou-24), 12 drawn scenes for the top stories, a red UTC timeline strip, and a 28-item index. Built fresh for this competition — version A (a fully generated broadsheet) was rejected for inventing facts; versions B (timeline-led) and C (dense grid) were composed in PIL from verified text and drawn scene panels, and C was shipped because its scenes are larger and undistorted. Revision: a Gemini fact-check caught two misdated cards (COP31 ended 22 Nov; the Huawei verdict was 24 Nov) plus wrong Dow/S&P closes, so the two cards were replaced with verified 25 November stories (U.S. GDP, Anthropic) and the market numbers corrected.

## Entry

`main.ts` copies `entry.jpg` (1024×1024, 324,317 bytes) to `$MAKEFUN_OUTPUT_DIR/entry.png` and self-checks by read-back plus a JPEG header dimension assertion. It throws if `MAKEFUN_OUTPUT_DIR` is unset.
