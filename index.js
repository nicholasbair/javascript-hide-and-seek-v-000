function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let e = document.querySelector('div#grand-node');

  while (e.children[0].childElementCount === 1) {
    e = e.children[0];
  }

  return e.children[0];
}

function increaseRankBy(n) {
  document.querySelectorAll('ul.ranked-list li').forEach((i) => i.innerHTML = parseInt(i.innerHTML) + n);
}
