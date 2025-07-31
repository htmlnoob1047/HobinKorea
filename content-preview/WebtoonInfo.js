const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const cover = params.get('cover');
const writer = params.get('writer');
const tags = params.get('tags');

document.title = `${name} - 미리보기`;
document.querySelector('.webtoon-title').textContent = name;
document.querySelector('.webtoon-preview-cover').src = `../${cover}`;
document.querySelector('.webtoon-writer-info').textContent = `${writer}`;

// 태그 생성
if (tags) {
    const tagContainer = document.querySelector('.tag');
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