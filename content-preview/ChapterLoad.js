document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const name = params.get('name');
  const writer = params.get('writer');
  const cover = params.get('cover');
  const tags = params.get('tags');
  const totalChapters = parseInt(params.get('chapters')) || 0;
  const type = params.get('type') || 'webtoon';

  // 타이틀, 정보 셋팅
  document.title = `${name} - 미리보기`;
  document.querySelector('.webtoon-title').textContent = name;
  document.querySelector('.webtoon-writer-info').textContent = writer;

  // 태그 표시
  if (tags) {
    const tagContainer = document.querySelector('.tag');
    tagContainer.innerHTML = ''; // 기존 태그 초기화
    const tagList = tags.split(',').map(t => t.trim());
    tagList.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = `#${tag}`;
      span.style.marginRight = '8px';
      span.style.padding = '4px 8px';
      span.style.background = '#eee';
      span.style.borderRadius = '8px';
      span.style.fontSize = '0.9em';
      span.style.display = 'inline-block';
      tagContainer.appendChild(span);
    });
  }

  // 커버 이미지 셋팅
  const coverImg = document.querySelector('.webtoon-preview-cover');
  if (coverImg) {
    coverImg.src = cover.startsWith('http') || cover.startsWith('/') ? cover : `../${cover}`;
  }

  const chapterContainer = document.querySelector('.webtoon-chapter-content-align');
  chapterContainer.innerHTML = ''; // 기존 회차 초기화

  for (let i = 1; i <= totalChapters; i++) {
    const chapterDiv = document.createElement('div');
    chapterDiv.className = 'webtoon-chapter';

    const numberDiv = document.createElement('div');
    numberDiv.className = 'webtoon-chapter-number';
    numberDiv.textContent = `${i}화`;

    const previewDiv = document.createElement('div');
    previewDiv.className = 'webtoon-preview-site-select';
    previewDiv.style.cursor = 'pointer';

    // 클릭 이벤트
    previewDiv.addEventListener('click', () => {
      const query = new URLSearchParams();
      query.set('chapter', i);

      if (type === 'novel') {
        if (!id) {
          alert('잘못된 접근: ID 없음');
          return;
        }
        query.set('id', id);
        window.location.href = `../novel-viewer/index.html?${query.toString()}`;
      } else {
        if (!id) {
          alert('잘못된 접근: ID 없음');
          return;
        }
        query.set('webtoon', id);
        window.location.href = `../viewer/index.html?${query.toString()}`;
      }
    });

    // hover 효과용 내부 div 추가
    const innerDiv = document.createElement('div');
    previewDiv.appendChild(innerDiv);

    chapterDiv.appendChild(numberDiv);
    chapterDiv.appendChild(previewDiv);
    chapterContainer.appendChild(chapterDiv);
  }
});
