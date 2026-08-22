# 이승열 | RTL Design · Verification · Embedded · AI

RTL 설계부터 SystemVerilog/UVM 검증, FPGA·임베디드 구현과 Edge AI까지 수행한 프로젝트 포트폴리오입니다.

> **Focus:** RTL/FPGA Design · Design Verification · Embedded Systems · Computer Vision

## Featured Project

### 📄 Parallel Decision Tree Hardware

한 입력 벡터의 현재 노드와 두 자식 노드를 병렬 계산한 2025 한국스마트미디어학회 추계학술대회 논문 프로젝트입니다. 최종 논문이 명시한 4-state FSM과 복구 기록의 6-state 개발 구현을 분리하고, 동일한 37개 벡터로 결과 동등성과 완료 사이클을 검증했습니다.

| Evidence | Result |
|---|---:|
| Recovered 6-state regression | **37 / 37 PASS** |
| Paper-aligned 4-state equivalence | **37 / 37 equivalent** |
| Recovered batch cycles | **293 → 255 (13.0%↓)** |
| Paper-reported traversal | **평균 1.37× · 최대 1.50× speedup** |

[View Conference Paper Project](https://github.com/lsy49055089/Graduation-Thesis) · [Recovered 6-state](https://github.com/lsy49055089/Graduation-Thesis/tree/main/parallel-decision-tree/rtl/recovered_6state) · [Paper-aligned 4-state](https://github.com/lsy49055089/Graduation-Thesis/tree/main/parallel-decision-tree/rtl/refined_4state)

## Project Collections

| Area | Repository | Highlights |
|---|---|---|
| 📄 Conference Paper | [Parallel Decision Tree Hardware](https://github.com/lsy49055089/Graduation-Thesis) | Parallel UN1–UN3 · 4-state paper FSM · 37-vector equivalence |
| 🧩 RTL Design | [RTL / FPGA Design Projects](https://github.com/lsy49055089/RTL-Design-Projects) | RV32I CPU · UART/FIFO Sensor · Stopwatch/Watch |
| ✅ Verification | [RTL Verification Projects](https://github.com/lsy49055089/RTL-Verification-Projects) | SPI/I2C UVM · UART/FIFO/Parity SystemVerilog TB |
| ⚙️ Embedded | [Embedded Systems Projects](https://github.com/lsy49055089/Embedded-Systems-Projects) | STM32 Cortex-M4 LED Mini Games |
| 🤖 AI / CV | [AI / Computer Vision Projects](https://github.com/lsy49055089/AI-Projects) | Jetson RPS · Multi-Camera Re-ID |

## Selected Results

- **Parallel Decision Tree:** 37/37 equivalent, recovered batch cycles 293 → 255, paper average speedup 1.37×
- **SPI / I2C UVM:** SPI 38 PASS / 0 FAIL, I2C 7 PASS / 0 FAIL
- **RV32I CPU:** 37개 명령어 RTL 구현
- **AXI4-Lite Verification:** I2C LCD Scoreboard 30 PASS, Functional Coverage 80.50%

## Featured Team Project

- [Multi-Camera Person Tracking & Re-ID CCTV](https://github.com/realisshoon/jetson-multicam-re_id-tracking)
  - Jetson 4-node · YOLO · ByteTrack · OSNet · MQTT

## Tech Stack

- **HDL / Verification:** Verilog, SystemVerilog, VHDL, UVM 1.2, Class-based Testbench, TLM, Functional Coverage, Scoreboard
- **Embedded / FPGA:** C, ARM Cortex-M4, STM32, RISC-V RV32I, Basys3, MicroBlaze
- **AI / Computer Vision:** Jetson Orin Nano, TensorRT, OpenCV, YOLO, ByteTrack, OSNet Re-ID
