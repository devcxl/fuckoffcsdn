# 搜索引擎网址屏蔽器 - 屏蔽低质量站点

一个简洁实用的浏览器插件，自动在常见搜索引擎（Google、Bing、DuckDuckGo）中屏蔽指定网址结果，提升搜索体验，避免点击低质量网站（如 CSDN、某些采集站等）。

---

## 🚀 功能特点

- 🧹 自动屏蔽指定域名（默认包括 CSDN）
- 🔍 支持 Google、Bing、DuckDuckGo 等主流搜索引擎
- 💡 屏蔽后在页面右下角显示已隐藏结果数
- ⚙️ 可扩展支持更多站点（后续支持自定义配置）

---

## 📌 默认屏蔽网站

- `csdn.net`
- `www.csdn.net`
- `codechina.net`
- `csdn.com`
- `csdn.net`
- `csdn.net.cn`
- `csdnimg.cn`
- `csto.com`
- `datasea.cn`
- `gitbook.cn`
- `gitchat.cn`
- `gitcode.com`
- `gitcode.net`
- `iteye.com`
- `kaifayun.com`
- `programmer.com.cn`
- `programmer.net.cn`


如需屏蔽更多网址，可在源码中编辑 `content.js` 中的 `blockedSites` 列表。

---

## 📷 插件截图

![Image](https://github.com/user-attachments/assets/a7d9b239-94c6-462d-95e1-fd9edb563edc)

> 插件页面右下角会出现提示：“已隐藏 X 条结果”。

---

## 🔒 权限说明

本插件仅使用以下权限：

- `scripting` 和 `tabs`：用于在搜索页面上注入内容脚本
- 不读取或存储用户数据，完全本地运行，安全可靠

---

## 🛠️ 开源与反馈

项目为开源项目，欢迎在Issus中提交建议或反馈

---

## 📄 隐私政策

本插件不会收集任何用户信息，亦不会将数据发送至外部服务器。所有操作均在用户浏览器本地执行。

