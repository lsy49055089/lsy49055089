# 이승열 웹 포트폴리오

흑백 중심의 반응형 포트폴리오입니다. 대표 프로젝트 5개, 추가 프로젝트 9개, 각 프로젝트 상세 페이지, 모바일 메뉴와 분야별 필터를 포함합니다. `docs/print.html`은 A4 4페이지 인쇄/PDF 저장용 화면입니다.

## GitHub Pages 최초 설정

1. 이 저장소의 **Settings → Pages**를 엽니다.
2. **Source: Deploy from a branch**를 선택합니다.
3. **Branch: main**, **Folder: /docs**를 선택하고 **Save**를 누릅니다.
4. Pages의 **Visit site**에서 공개 주소를 확인합니다.

설정 이후 `main`의 `docs/` 변경 사항이 자동 게시됩니다. Jekyll을 사용하지 않는 정적 HTML/CSS/JavaScript 사이트입니다.

## 수정

- 프로젝트 내용: `projects.json`
- 페이지 구성/문구: `tools/build_site.py`
- 반응형 디자인/인쇄 스타일: `docs/style.css`
- 메뉴/필터/시연 재생: `docs/site.js`
- 실제 프로젝트 사진: `docs/assets/`

```bash
python3 tools/build_site.py
python3 tools/check_site.py
node --check docs/site.js
```

빌드에는 Python 표준 라이브러리만 필요합니다. 일반 정적 파일 서버에서 `docs/`를 열어 확인할 수 있습니다. 로봇팔 GIF는 버튼을 누를 때 원본 팀 저장소의 고정 commit 자료를 불러옵니다.
