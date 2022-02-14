// json読み込み
async function jsonOutput() {

  const requestURL = 'github.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const mainScreen = await response.json();

  showContents(mainScreen);

}


function showContents(obj) {
  const main = document.querySelector('main');
  const contents = obj['items'];

  // jsonデータの中から必要なデータの取り出し
  for (const content of contents) {

    // HTML要素の生成
    const anchor = document.createElement('a');
    const figure_elm = document.createElement('figure');
    const icon = document.createElement('img');
    const figcaption_elm = document.createElement('figcaption');
    const parameter = document.createElement('p');
    const span_elm = document.createElement('span');

    // 要素の中身
    anchor.href = content.owner.html_url;
    icon.src = content.owner.avatar_url;
    icon.id = "icon";
    figcaption_elm.textContent = content.name;
    const star_img = new Image();
    star_img.src = "star.png";
    star_img.alt = "star";
    star_img.id = "star";
    span_elm.textContent = content.stargazers_count;

    // HTMLの構成
    anchor.appendChild(figure_elm);
    figure_elm.appendChild(icon);
    figure_elm.appendChild(figcaption_elm);
    figure_elm.appendChild(parameter);
    parameter.appendChild(star_img)
    parameter.appendChild(span_elm);

    main.appendChild(anchor);

  }

}

jsonOutput();

