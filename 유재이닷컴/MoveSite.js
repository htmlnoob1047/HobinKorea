const webtoonLinks = {
    "wjswlwjrehrwktlwja": "https://newtoki468.com/webtoon/2163684?stx=%EC%A0%84%EC%A7%80%EC%A0%81+%EB%8F%85%EC%9E%90+%EC%8B%9C%EC%A0%90&title=%EC%A0%84%EC%A7%80%EC%A0%81-%EB%8F%85%EC%9E%90-%EC%8B%9C%EC%A0%90",
    "skghswkaksfpqpfdjq": "https://newtoki468.com/webtoon/46711?stx=%EB%82%98+%ED%98%BC%EC%9E%90%EB%A7%8C&title=%EB%82%98-%ED%98%BC%EC%9E%90%EB%A7%8C-%EB%A0%88%EB%B2%A8%EC%97%85",
  };

  document.querySelectorAll('.general-webtoon-content').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.generalWebtoonId;
      const targetUrl = webtoonLinks[id];

      if (targetUrl) {
        window.open(targetUrl, '_blank');
      } else {
        alert('해당 웹툰 ID에 대한 링크가 없습니다.');
      }
    });
  });
