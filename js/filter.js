// 조종환 회계사 - Insights 목록 분야별 필터
// 모든 글은 처음부터 실제 HTML에 존재하며(검색엔진 노출용),
// 이 스크립트는 화면에서 보이고 숨기는 것만 담당합니다.
(function () {
  var tags = document.querySelectorAll('.filter-tag');
  var items = document.querySelectorAll('#post-list li');
  var emptyState = document.getElementById('empty-state');
  if (!tags.length || !items.length) return;

  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      tags.forEach(function (t) { t.classList.remove('active'); });
      tag.classList.add('active');

      var filter = tag.getAttribute('data-filter');
      var visibleCount = 0;
      items.forEach(function (item) {
        var match = filter === 'all' || item.getAttribute('data-category') === filter;
        item.hidden = !match;
        if (match) visibleCount++;
      });
      if (emptyState) emptyState.hidden = visibleCount > 0;
    });
  });
})();
