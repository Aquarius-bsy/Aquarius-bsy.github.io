# my_page

终端风个人主页。第一版是纯 HTML / CSS / JS，不需要安装 Node。

## 本地预览

在这个目录打开终端：

```powershell
python -m http.server 5173
```

浏览器访问 http://localhost:5173/

不要直接双击 `index.html`（`file://`）。博客列表依赖按 URL 加载 `js/posts.js`，用本地服务器更稳。

改文件后刷新页面即可。

## 文件怎么分工

| 路径 | 作用 |
| --- | --- |
| `index.html` | 首页：介绍、精选项目、最近文章、链接 |
| `projects.html` | 项目列表 |
| `resume.html` | 简历；可用浏览器打印成 PDF |
| `blog/` | 文章；索引页从 `js/posts.js` 渲染 |
| `css/tokens.css` | 颜色、字体、间距。换主题色改这里 |
| `css/base.css` | 排版、布局、打印与减少动画 |
| `css/components.css` | 导航、卡片、文章、简历块 |
| `js/main.js` | 当前页高亮、年份、打字机 |
| `js/posts.js` | 文章标题、日期、摘要 |

HTML 用 `header` / `nav` / `main` / `section` / `footer`，方便读屏和搜索引擎理解哪一块是导航、哪一块是正文。

## 改成你自己的信息

全局搜索这些占位符并替换：

- `aquar` — 名字 / 站点名
- `you@example.com` — 邮箱
- 首页 `data-typewriter="..."` — 那句自我介绍（打字机文案）
- `projects.html` 和首页项目卡片 — 项目名、说明、标签、链接
- `resume.html` — 学校、技能、经历

颜色只改 `css/tokens.css` 里的 `--bg`、`--accent`、`--fg` 即可。

## 加一篇博客

1. 复制 `blog/hello-world.html` 为 `blog/your-slug.html`，改标题和正文。
2. 在 `js/posts.js` 的数组**最前面**加一条（新文章在上）：

```js
{
  id: "your-slug",
  href: "your-slug.html",
  title: "标题",
  date: "2026-09-01",
  summary: "一句话摘要"
}
```

首页用 `data-limit` 只显示最近几篇；博客索引页不设 limit，会列出全部。

## 简历上的公网地址

本地 `localhost` 只有你自己能打开。要写进简历、别人点开就能看，需要发布到 GitHub Pages。

仓库名用 `Aquarius-bsy.github.io` 时，地址是：

**https://aquarius-bsy.github.io/**

改完文件后，在本目录提交并推送：

```powershell
git add .
git commit -m "Update homepage"
git push
```

几分钟后刷新上述地址即可。这是免费的；自定义短域名（例如 `bsy-aquarius.com`）需要另买域名并做解析。

## 下一阶段

安装 Node 之后，可以用 Vite 包一层，把 CSS/JS 改成模块引入。第一版先把内容和结构改熟。
