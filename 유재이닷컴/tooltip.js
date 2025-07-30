const webtoonTooltips = {
        "wjswlwjrehrwktlwja": " 전지적 독자 시점 | UMI / 슬리퍼-C ",
        "skghswkaksfpqpfdjq": " 나 혼자만 레벨업 | 현군 / 장성락 / 추공 ",
        "wksqnfdmlrltk": " 잔불의 기사 | 환댕 ",
        "dlwlrfhrm": " 이직로그 | 우시목 / 이하안 ",
        "angksdmlakqjqtk": " 무한의 마법사 | Kiraz / 아디티 / 김치우 ",
        "aksfpqvmffpdldjdml100qjsWoghlrnl": " 만렙 플레이어의 100번째 회귀 | Kiraz / 아디티 / 김치우 ",
        "thtjfthrdprtmxmfk": " 소설 속 엑스트라 | CarrotStudio / 지갑송 ",
        "tlqdlwlthsu": " 십이지소녀 | MAJOR / 지지 ",
        "dlsrkstjstodsla": " 인간 선생님 | 기령 ",
        "ghlrnlwktkdydtjfaudtj": " 회귀자 사용 설명서 | 도미 / Midnoght Studio / 흙수저 ",
      };

      document.querySelectorAll('.general-webtoon-content').forEach(el => {
        const id = el.dataset.generalWebtoonId;
        if (webtoonTooltips[id]) {
          el.title = webtoonTooltips[id];
        } else {
          el.title = "웹툰 정보 없음";
        }
      });