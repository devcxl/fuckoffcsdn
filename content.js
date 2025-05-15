// 要屏蔽的域名列表
const blockedSites = [
  "codechina.net",
  "csdn.com",
  "csdn.net",
  "csdn.net.cn",
  "csdnimg.cn",
  "csto.com",
  "datasea.cn",
  "gitbook.cn",
  "gitchat.cn",
  "gitcode.com",
  "gitcode.net",
  "iteye.com",
  "kaifayun.com",
  "programmer.com.cn",
  "programmer.net.cn"
];

function isBlocked(url) {
  return blockedSites.some(site => url.includes(site));
}

let hiddenCount = 0;

function removeBlockedResults() {
  let removedThisRound = 0;

  document.querySelectorAll('a').forEach(a => {
    const url = a.href;
    if (isBlocked(url)) {
      const result = a.closest('div.g') 
      || a.closest('div.tF2Cxc')  
      || a.closest('li.b_algo') 
      || a.closest('.result');
      if (result && !result.dataset.blocked) {
        result.remove();
        result.dataset.blocked = "true";
        removedThisRound++;
      }
    }
  });

  if (removedThisRound > 0) {
    hiddenCount += removedThisRound;
    showHiddenCount();
  }
}

function showHiddenCount() {
  let infoBox = document.getElementById("block-info-box");
  if (!infoBox) {
    infoBox = document.createElement("div");
    infoBox.id = "block-info-box";
    infoBox.style.position = "fixed";
    infoBox.style.bottom = "10px";
    infoBox.style.right = "10px";
    infoBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    infoBox.style.color = "#fff";
    infoBox.style.padding = "8px 12px";
    infoBox.style.borderRadius = "8px";
    infoBox.style.fontSize = "14px";
    infoBox.style.zIndex = "9999";
    document.body.appendChild(infoBox);
  }
  infoBox.textContent = `已隐藏 ${hiddenCount} 条结果`;
}

// 使用 MutationObserver 监听动态加载的搜索结果
const observer = new MutationObserver(removeBlockedResults);
observer.observe(document.body, { childList: true, subtree: true });

// 页面初始时执行一次
removeBlockedResults();