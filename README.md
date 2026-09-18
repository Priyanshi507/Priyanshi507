# Priyanshi Sharma

B.Tech Computer Science · Lloyd Institute of Engineering and Technology (2024–2028)

## Google Summer of Code 2026 — STE||AR Group (HPX)
**C++26 Reflection for HPX Remote Operations**

Implementing C++26 static reflection (P2996) to eliminate macro boilerplate in HPX's distributed action system.

```cpp
// Before
HPX_PLAIN_ACTION(app::compute, compute_action)
HPX_REGISTER_ACTION_DECLARATION(compute_action)
HPX_REGISTER_ACTION(compute_action)

// After — single line, auto-registration, zero boilerplate
using compute_action = hpx::actions::reflect_action<^^app::compute>;
```

- Merged PRs: `reflect_action` · `reflect_component_action` · `reflect_component_direct_action` · `reflect_direct_action` · compile-time benchmarks · CI workflow fixes · migration guide
- Reflection path ~1.2–1.4x faster than macro expansion at runtime (Release, GCC 16.0.1 trunk)
- Full backwards compatibility — existing `HPX_PLAIN_ACTION` code requires zero changes

## Open Source — RISC-V Unified Database
Contributing to [riscv/riscv-unified-db](https://github.com/riscv/riscv-unified-db), the machine-readable RISC-V specification database used to generate simulators, docs, and toolchains.

- Documented the `sext` IDL standard library function ([#2260](https://github.com/riscv/riscv-unified-db/pull/2260), merged)
- Data corrections to architectural parameter definitions ([#2288](https://github.com/riscv/riscv-unified-db/pull/2288), [#2296](https://github.com/riscv/riscv-unified-db/pull/2296))

## Distributed LLM Inference Server

Building a distributed inference-serving layer on top of HPX — orchestrating
multiple llama.cpp workers with session-affinity and load-aware routing,
benchmarked rigorously enough to trust the numbers.

- Three routing policies (round-robin, sticky, hybrid) compared head-to-head
  across multiple trials with position-bias controls
- Hybrid load-aware routing: 2.5–4x lower compute time than naive round-robin,
  with real backpressure (condition-variable-based admission control)
- Sticky cache-affinity routing: ~38% lower mean prompt-processing latency
  vs. round-robin, isolated from generation-length noise

**Stack:** HPX (async orchestration) · llama.cpp (Metal-accelerated inference) · C++20

Repo: [github.com/Priyanshi507/hpx-distributed-inference](https://github.com/Priyanshi507/hpx-distributed-inference)


## Technical Skills
**Languages:** Python · C++20/26 · SQL · PHP · JavaScript
**C++ depth:** Templates · CRTP · consteval · C++26 reflection (`std::meta`, P2996)
**Systems:** Distributed computing (HPX) · CMake · Docker · GitHub Actions CI/CD
**Data:** YAML-based data modeling · JSON Schema validation

## Contact
GitHub: [github.com/Priyanshi507](https://github.com/Priyanshi507)
LinkedIn: [linkedin.com/in/priyanshi-sharma-62a431337](https://linkedin.com/in/priyanshi-sharma-62a431337)
