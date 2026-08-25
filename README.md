# 이승열 | RTL Design · Verification · Embedded · AI

RTL 설계부터 SystemVerilog/UVM 검증, FPGA·임베디드 구현과 Edge AI까지 수행한 프로젝트 포트폴리오입니다.

> **Focus:** RTL/FPGA Design · Design Verification · Embedded Systems · Computer Vision

## Featured Project

### 📄 Parallel Decision Tree Hardware

한 입력 벡터에서 현재 노드와 두 자식 노드를 병렬 계산해 트리 탐색 시간을 단축한 2025 한국스마트미디어학회 추계학술대회 논문 프로젝트입니다. 논문에서 제안한 4-state FSM을 RTL로 구현하고, 6-state 비교 구현과 동일한 37개 분류 결과를 유지하면서 배치 완료 사이클을 293에서 255로 줄였습니다.

| Evidence | Result |
|---|---:|
| 6-state baseline | **37 / 37 PASS** |
| 4-state implementation | **37 / 37 equivalent** |
| Batch completion cycles | **293 → 255 (13.0%↓)** |
| Paper-reported traversal | **평균 1.37× · 최대 1.50× speedup** |

[View Conference Paper Project](https://github.com/lsy49055089/Parallel-Decision-Tree-Hardware) · [6-state RTL](https://github.com/lsy49055089/Parallel-Decision-Tree-Hardware/tree/main/parallel-decision-tree/rtl/recovered_6state) · [4-state RTL](https://github.com/lsy49055089/Parallel-Decision-Tree-Hardware/tree/main/parallel-decision-tree/rtl/refined_4state)

## Project Collections

| Area | Repository | Highlights |
|---|---|---|
| 📄 Conference Paper | [Parallel Decision Tree Hardware](https://github.com/lsy49055089/Parallel-Decision-Tree-Hardware) | Parallel UN1–UN3 · 4-state FSM · 37-vector equivalence |
| 🧩 RTL Design | [RTL / FPGA Design Projects](https://github.com/lsy49055089/RTL-Design-Projects) | RV32I CPU · UART/FIFO Sensor · Stopwatch/Watch |
| ✅ Verification | [RTL Verification Projects](https://github.com/lsy49055089/RTL-Verification-Projects) | SPI/I2C UVM · UART/FIFO/Parity SystemVerilog TB |
| ⚙️ Embedded | [Embedded Systems Projects](https://github.com/lsy49055089/Embedded-Systems-Projects) | STM32 Cortex-M4 LED Mini Games |
| 🤖 AI / CV | [AI / Computer Vision Projects](https://github.com/lsy49055089/AI-Projects) | Jetson RPS · Multi-Camera Re-ID |

## Selected Results

- **Parallel Decision Tree:** 37/37 equivalent, batch cycles 293 → 255, paper average speedup 1.37×
- **SPI / I2C UVM:** SPI 38 PASS / 0 FAIL, I2C 7 PASS / 0 FAIL
- **RV32I CPU:** 37개 명령어 RTL 구현
- **AXI4-Lite Verification:** I2C LCD Scoreboard 30 PASS, Functional Coverage 80.50%

## Featured Team Project

- [Multi-Camera Person Tracking & Re-ID CCTV](https://github.com/realisshoon/jetson-multicam-re_id-tracking)
  - Jetson 4-node · YOLO · ByteTrack · OSNet · MQTT

## Tech Stack

- **HDL / Verification:** Verilog, SystemVerilog, UVM 1.2, Class-based Testbench, TLM, Functional Coverage, Scoreboard
- **Embedded / FPGA:** C, ARM Cortex-M4, STM32, RISC-V RV32I, Basys3, MicroBlaze
- **AI / Computer Vision:** Jetson Orin Nano, TensorRT, OpenCV, YOLO, ByteTrack, OSNet Re-ID
