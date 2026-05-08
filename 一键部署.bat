@echo off
chcp 65001 >nul
title 营业执照注销助手 - 一键部署
color 0A

echo.
echo  ╔══════════════════════════════════════════════════════════╗
echo  ║                                                          ║
echo  ║     营业执照注销助手 - 云端部署工具                      ║
echo  ║                                                          ║
echo  ╚══════════════════════════════════════════════════════════╝
echo.

:: 检查是否在正确目录
if not exist "index.html" (
    echo [错误] 请在项目根目录运行此脚本
    pause
    exit /b 1
)

:: 获取GitHub用户名
set /p USERNAME=请输入你的GitHub用户名: 

if "%USERNAME%"=="" (
    echo [错误] 用户名不能为空
    pause
    exit /b 1
)

set REPO_NAME=daily-guide-app

echo.
echo [信息] 配置确认:
echo   GitHub用户名: %USERNAME%
echo   仓库名称: %REPO_NAME%
echo.

:: 检查git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到Git，请先安装Git
    echo 下载地址: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [步骤 1/3] 正在推送到GitHub...
echo.

:: 配置远程仓库
git remote remove origin 2>nul
git remote add origin https://github.com/%USERNAME%/%REPO_NAME%.git

:: 推送代码
git push -u origin master

if %errorlevel% neq 0 (
    echo.
    echo [警告] 推送失败，可能的原因:
    echo   1. GitHub仓库尚未创建
    echo   2. 用户名输入错误
    echo   3. 网络连接问题
    echo.
    echo [提示] 请先访问以下地址创建仓库:
    echo   https://github.com/new
    echo.
    echo 仓库名称填写: %REPO_NAME%
    echo 选择 Public 公开仓库
    echo.
    pause
    exit /b 1
)

echo.
echo [✓] 代码已成功推送到GitHub!
echo   仓库地址: https://github.com/%USERNAME%/%REPO_NAME%
echo.

echo [步骤 2/3] 检查Vercel CLI...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo [信息] 正在安装Vercel CLI...
    call npm install -g vercel
)

echo.
echo [步骤 3/3] 正在部署到Vercel...
echo [提示] 首次部署需要在浏览器中登录授权
echo.

vercel --prod

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║                     部署完成!                             ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo [📱] 手机使用步骤:
echo   1. 复制上面的链接，用手机浏览器打开
echo   2. iPhone Safari: 分享按钮 → 添加到主屏幕
echo   3. Android Chrome: 菜单 → 添加到主屏幕
echo.
echo [✨] 你的小程序现在已经可以在手机上使用了!
echo.
pause
