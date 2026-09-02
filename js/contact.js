// 조종환 회계사 - 사이트 연락처 정보 (모든 페이지 공용)
// 연락처가 바뀌면 이 파일의 html 값만 수정하면 모든 페이지에 반영됩니다.
(function () {
  var html =
    '<a href="mailto:kicpa.jjh@gmail.com">kicpa.jjh@gmail.com</a> · ' +
    '<a href="tel:010-6395-4799">010-6395-4799</a> · ' +
    '<a href="tel:02-569-8589">02-569-8589</a> · ' +
    '서울시 강남구 논현로 79길 8, 2층';
  var el = document.getElementById('site-contact');
  if (el) el.innerHTML = html;
})();
