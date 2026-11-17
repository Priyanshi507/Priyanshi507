## Priyanshi Sharma

B.Tech CSE (AI & ML), 3rd year, Lloyd Institute of Engineering and Technology, Greater Noida. Google Summer of Code 2026 contributor with the STE||AR Group (HPX).

I work on two things: C++26 reflection for a distributed runtime, and a pre-registered study of Formula 1's 2026 energy rules.

### ERS-Lens: Formula 1 2026 energy deployment

The 2026 cars split power between the engine and a battery, and drivers slow down on straights when the battery runs dry (super-clipping). ERS-Lens works out the lap-time-optimal way to spend the battery and tests that against real laps.

- Dynamic programming over position, speed and charge, written in JAX with a CUDA kernel and a NumPy twin
- Every result comes with a weak-duality certificate that bounds how far a solution can be from optimal
- Built on public OpenF1 telemetry only
- Predictions were written down with pass marks before the data was run, and the ones that failed are in the log next to the ones that held
- One prediction held on 17 of 17 circuits; others held on 15 of 18 and 13 of 16
- 2027 forecast frozen before the season: SHA-256 recorded, tagged `forecast-2027-v1`, archived on Zenodo (DOI 10.5281/zenodo.24238738) and registered on OSF (https://osf.io/fh6mx)
- 197 tests, and one command rebuilds every headline number from the committed results with no GPU

Repo: [github.com/Priyanshi507/ers-lens](https://github.com/Priyanshi507/ers-lens)

### GSoC 2026: C++26 reflection for HPX

Replacing the macro boilerplate for HPX actions with static reflection.

```cpp
// Before
HPX_PLAIN_ACTION(app::compute, compute_action)
HPX_REGISTER_ACTION_DECLARATION(compute_action)
HPX_REGISTER_ACTION(compute_action)

// After: one line, auto-registration
using compute_action = hpx::actions::reflect_action<^^app::compute>;
```

- Merged PRs: `reflect_action`, `reflect_component_action`, `reflect_component_direct_action`, `reflect_direct_action`, compile-time benchmarks, CI workflow fixes, migration guide
- Reflection path about 1.2-1.4x faster than macro expansion at runtime (Release, GCC 16.0.1 trunk)
- Fully backwards compatible: existing `HPX_PLAIN_ACTION` code needs no changes

Repo: [github.com/Priyanshi507/hpx-gsoc-2026](https://github.com/Priyanshi507/hpx-gsoc-2026)

### Other open source

- **Spack** (HPC package manager): merged PRs in [spack-packages](https://github.com/spack/spack-packages) (#7204, #7205); reviewed the PURL support for SPDX SBOMs in spack/spack#53193
- **RISC-V Unified Database:** documented the `sext` IDL function (riscv-unified-db#2260, merged)

### Skills

**Languages:** Python, C++20/26, SQL, PHP, JavaScript
**C++ depth:** templates, CRTP, consteval, C++26 reflection (`std::meta`, P2996)
**Systems and tools:** distributed computing (HPX), JAX, CUDA, CMake, Docker, GitHub Actions

### Contact

GitHub: [Priyanshi507](https://github.com/Priyanshi507) · LinkedIn: [priyanshi-sharma](https://linkedin.com/in/priyanshi-sharma-62a431337)
