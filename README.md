# 이승열 | RTL Design · Verification · Embedded · AI

RTL 설계부터 SystemVerilog/UVM 검증, FPGA·임베디드 구현과 Edge AI까지 수행한 프로젝트 포트폴리오입니다.

> **Focus:** RTL/FPGA Design · Design Verification · Embedded Systems · Computer Vision

## Featured Project

### 🎓 Parallel Decision Tree Hardware

FPGA에서 현재 노드와 두 자식 노드를 병렬 계산하는 졸업논문 프로젝트입니다. 유실된 학술대회 6-state RTL을 근거 기반으로 복구하고, 불필요한 제어 상태를 합친 refined 4-state RTL과 기능·사이클을 비교했습니다.

| Version | Verification | Batch Cycles |
|---|---:|---:|
| Recovered 6-state | **37 / 37 PASS** | 293 |
| Refined 4-state | **37 / 37 equivalent** | 255 |

[View Graduation Thesis](https://github.com/lsy49055089/school-projects) · [Recovered 6-state](https://github.com/lsy49055089/school-projects/tree/main/parallel-decision-tree/rtl/recovered_6state) · [Refined 4-state](https://github.com/lsy49055089/school-projects/tree/main/parallel-decision-tree/rtl/refined_4state)

## Project Collections

| Area | Repository | Highlights |
|---|---|---|
| 🎓 Graduation Thesis | [Parallel Decision Tree Hardware](https://github.com/lsy49055089/school-projects) | 6-state recovery · refined 4-state · 37-vector equivalence |
| 🧩 RTL Design | [RTL / FPGA Design Projects](https://github.com/lsy49055089/ondevice-design) | RV32I CPU · UART/FIFO Sensor · Stopwatch/Watch |
| ✅ Verification | [RTL Verification Projects](https://github.com/lsy49055089/ondevice-verification) | SPI/I2C UVM · UART/FIFO/Parity SystemVerilog TB |
| ⚙️ Embedded | [Embedded Systems Projects](https://github.com/lsy49055089/ondevice-embedded) | STM32 Cortex-M4 LED Mini Games |
| 🤖 AI / CV | [AI / Computer Vision Projects](https://github.com/lsy49055089/ondevice-ai) | Jetson RPS · Multi-Camera Re-ID |

## Selected Results

- **Parallel Decision Tree:** recovered/refined RTL 37/37 equivalent, batch cycles 293 → 255
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
