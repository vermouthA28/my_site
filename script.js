document.addEventListener('DOMContentLoaded', function() {
  const drawerInput = document.getElementById('drawer_input');
  const navLinks = document.querySelectorAll('.nav_list a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // デフォルトのリンク動作を無効化
      const targetId = this.getAttribute('href'); // href属性からIDを取得
      const targetElement = document.querySelector(targetId); // IDを持つ要素を取得
      if (targetElement) {
        drawerInput.checked = false; // ハンバーガーメニューを閉じる
        // スムーズにスクロール
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
