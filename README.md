# Priyanshi Sharma

**B.Tech Computer Science** · Lloyd Institute of Engineering and Technology, Greater Noida (2024–2028)

**Google Summer of Code 2026** · STE||AR Group (HPX)
*Use C++26 Reflection for HPX Remote Operations*

---

## GSoC 2026 — HPX

Implementing C++26 static reflection (P2996) to eliminate macro boilerplate in HPX's distributed action system. Before this work, defining a remote operation required three verbose macro steps. After:

```cpp
// Before
HPX_PLAIN_ACTION(app::compute, compute_action)
HPX_REGISTER_ACTION_DECLARATION(compute_action)
HPX_REGISTER_ACTION(compute_action)

// After — single line, auto-registration, zero boilerplate
using compute_action = hpx::actions::reflect_action<^^app::compute>;
```

**Merged PRs:** reflect_action · reflect_component_action · reflect_component_direct_action · reflect_direct_action · compile-time benchmarks · CI workflow fixes · migration guide documentation

**Key results:**
- Reflection path is ~1.2–1.4x faster than macro expansion at runtime (Release mode, GCC 16.0.1 trunk)
- Compile time: equal or faster across N=10–100 action definitions, never slower
- Full backwards compatibility — existing HPX_PLAIN_ACTION code requires zero changes

---

## Technical Skills

**Languages:** C++20/26 · Python · Java · C  
**C++ expertise:** Templates · CRTP · consteval · C++26 reflection (std::meta, P2996)  
**Systems:** Distributed computing (HPX) · CMake · Ninja · Docker · GitHub Actions CI/CD  
**Practices:** Open source contribution · code review · test-driven development

---

## Contact

- **GitHub:** [github.com/Priyanshi507](https://github.com/Priyanshi507)
- **LinkedIn:** [linkedin.com/in/priyanshi-sharma-62a431337](https://linkedin.com/in/priyanshi-sharma-62a431337)
- **Email:** hiiuiuiabi@gmail.com
