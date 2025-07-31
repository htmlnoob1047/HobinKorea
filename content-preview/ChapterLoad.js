  const webtoonId = 'webtoon123'; // 예시, 실제로는 data-general-webtoon-id에서 가져옴
  const totalChapters = 20; // 실제 화 수 (하드코딩 or 서버에서 받아야 함)

  const chapterContainer = document.querySelector('.webtoon-chapter-content-align');

  for (let i = 1; i <= totalChapters; i++) {
    const chapterDiv = document.createElement('div');
    chapterDiv.className = 'webtoon-chapter';

    const numberDiv = document.createElement('div');
    numberDiv.className = 'webtoon-chapter-number';
    numberDiv.textContent = `${i}화`;

    const nameDiv = document.createElement('div');
    nameDiv.className = 'webtoon-chapter-name';
    nameDiv.textContent = `제목 없는 ${i}화`;

    const previewDiv = document.createElement('div');
    previewDiv.className = 'webtoon-preview-site-select';

    const img = document.createElement('img');
    img.src = 'icon.png'; // 임시 썸네일
    img.className = 'newjey';
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      // viewer로 이동
      window.location.href = `viewer/index.html?webtoon=${webtoonId}&chapter=${i}`;
    });

    previewDiv.appendChild(img);

    chapterDiv.appendChild(numberDiv);
    chapterDiv.appendChild(nameDiv);
    chapterDiv.appendChild(previewDiv);

    chapterContainer.appendChild(chapterDiv);
  }