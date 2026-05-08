#!/bin/bash

# 营业执照注销助手 - 自动部署脚本
# 使用方法: 在Git Bash中运行 ./deploy.sh

echo "🚀 开始部署流程..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 获取GitHub用户名
echo -e "${BLUE}请输入你的GitHub用户名:${NC}"
read USERNAME

if [ -z "$USERNAME" ]; then
    echo -e "${YELLOW}❌ 用户名不能为空${NC}"
    exit 1
fi

REPO_NAME="daily-guide-app"

echo ""
echo -e "${GREEN}✓ 配置信息:${NC}"
echo "  GitHub用户名: $USERNAME"
echo "  仓库名称: $REPO_NAME"
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo -e "${YELLOW}❌ 错误: 请在项目根目录运行此脚本${NC}"
    exit 1
fi

echo -e "${BLUE}📦 步骤1/3: 推送到GitHub...${NC}"
echo ""

# 添加远程仓库
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

# 推送代码
echo -e "${YELLOW}正在推送代码到GitHub...${NC}"
git push -u origin master

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ 代码已成功推送到GitHub!${NC}"
    echo -e "${BLUE}仓库地址: https://github.com/$USERNAME/$REPO_NAME${NC}"
else
    echo ""
    echo -e "${YELLOW}⚠️ 推送失败，请检查:${NC}"
    echo "  1. GitHub仓库是否已创建"
    echo "  2. 是否有推送权限"
    echo "  3. 网络连接是否正常"
    echo ""
    echo -e "${BLUE}请手动访问 https://github.com/new 创建仓库后再试${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}🌐 步骤2/3: 部署到Vercel...${NC}"
echo ""

# 检查是否安装了Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}正在安装Vercel CLI...${NC}"
    npm install -g vercel
fi

echo -e "${YELLOW}正在部署到Vercel...${NC}"
echo -e "${BLUE}首次部署需要在浏览器中登录授权${NC}"
echo ""

# 部署到Vercel
vercel --prod

echo ""
echo -e "${GREEN}🎉 部署完成!${NC}"
echo ""
echo -e "${BLUE}📱 手机访问步骤:${NC}"
echo "  1. 用手机浏览器打开上面的链接"
echo "  2. iPhone: 分享 → 添加到主屏幕"
echo "  3. Android: 菜单 → 添加到主屏幕"
echo ""
echo -e "${GREEN}✨ 恭喜!你的小程序已上线!${NC}"
