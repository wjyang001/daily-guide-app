# 🚀 Vercel 部署指南

## 部署步骤

### 第一步：准备GitHub仓库

1. 访问 https://github.com/new 创建新仓库
2. 仓库名称建议：`daily-guide-app` 或 `business-license-guide`
3. 选择 **Public**（公开）
4. 点击 **Create repository**

### 第二步：推送代码到GitHub

在本地项目目录执行以下命令：

```bash
# 添加远程仓库（将 YOUR_USERNAME 替换为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/daily-guide-app.git

# 推送到GitHub
git push -u origin master
```

### 第三步：部署到Vercel

#### 方式一：通过Vercel网站部署（推荐）

1. 访问 https://vercel.com/new
2. 点击 **Import Git Repository**
3. 授权Vercel访问你的GitHub账号
4. 选择你刚创建的 `daily-guide-app` 仓库
5. 点击 **Import**
6. 配置项目：
   - Project Name: `daily-guide-app`（或自定义）
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: 留空
   - Output Directory: `./`
7. 点击 **Deploy**

等待约30秒，部署完成后会显示访问链接，例如：
`https://daily-guide-app.vercel.app`

#### 方式二：使用Vercel CLI（高级用户）

```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署
vercel

# 生产环境部署
vercel --prod
```

### 第四步：手机访问

部署成功后，你会获得一个类似 `https://daily-guide-app.vercel.app` 的链接。

**添加到手机主屏幕：**

#### iPhone (Safari)
1. 用Safari打开部署链接
2. 点击底部分享按钮 ⬆️
3. 选择 **"添加到主屏幕"**
4. 点击 **添加**

#### Android (Chrome)
1. 用Chrome打开部署链接
2. 点击右上角菜单 ⋮
3. 选择 **"添加到主屏幕"** 或 **"安装应用"**
4. 点击 **添加**

现在你的小程序就会像原生APP一样出现在手机桌面上！

---

## 🔄 后续更新

当你修改代码后，推送到GitHub，Vercel会自动重新部署：

```bash
git add -A
git commit -m "更新内容"
git push
```

Vercel会自动检测到推送并重新部署，约30秒后更新生效。

---

## 🌐 自定义域名（可选）

如果你有自己的域名，可以在Vercel设置中绑定：

1. 进入Vercel项目控制台
2. 点击 **Settings** → **Domains**
3. 输入你的域名，如 `guide.yourdomain.com`
4. 按照提示配置DNS记录

---

## 📱 使用提示

- **数据同步**：由于使用LocalStorage，不同设备间的数据不互通
- **数据备份**：可以在设置页面导出数据（如需此功能请告知）
- **离线使用**：添加到主屏幕后，部分功能支持离线访问

---

## 🆘 常见问题

**Q: 部署失败怎么办？**
A: 检查项目根目录是否有 `index.html` 文件，确保Framework Preset选择 **Other**

**Q: 如何更新已部署的网站？**
A: 修改代码后执行 `git push`，Vercel会自动重新部署

**Q: 访问速度慢？**
A: Vercel在全球有CDN节点，国内访问通常很快。如慢可尝试刷新或检查网络

**Q: 需要备案吗？**
A: Vercel.app域名不需要备案。如果使用自定义域名且服务器在国外，也不需要备案

---

## 📞 需要帮助？

如果在部署过程中遇到问题，可以：
1. 查看Vercel官方文档：https://vercel.com/docs
2. 检查GitHub仓库是否正确推送
3. 确认Vercel项目配置是否正确
