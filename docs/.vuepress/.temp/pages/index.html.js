export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroText": "阿一叁的博客",
    "tagline": null,
    "actions": [
      {
        "text": "起步",
        "link": "/start/index",
        "type": "primary"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1653106299000,
    "contributors": [
      {
        "name": "洪伟",
        "email": "171832340@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
