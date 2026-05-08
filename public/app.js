// 营业执照注销助手 - 每日工作引导小程序
// 数据存储使用 localStorage

// ==================== 数据定义 ====================

// 选题库数据
const topicLibrary = [
    // 痛点钩子型
    { id: 1, title: "营业执照不注销？小心这辈子后悔！", type: "痛点型", platform: "抖音", duration: "60秒", tags: ["痛点钩子", "高互动"], template: "痛点引发型" },
    { id: 2, title: "公司不干了营业执照不管行吗？", type: "痛点型", platform: "抖音/小红书", duration: "60秒", tags: ["痛点钩子", "系列选题"], template: "痛点引发型" },
    { id: 3, title: "营业执照放着不管，后果比你想的严重10倍！", type: "痛点型", platform: "抖音", duration: "60秒", tags: ["颠覆认知", "高点击"], template: "痛点引发型" },
    { id: 4, title: "被列入经营异常名录了？90%的人不知道怎么办", type: "痛点型", platform: "抖音", duration: "60秒", tags: ["问题解决", "实用"], template: "痛点引发型" },
    { id: 5, title: "营业执照异常3年不处理，我见了都替他捏把汗", type: "痛点型", platform: "抖音", duration: "45秒", tags: ["情绪共鸣", "警示"], template: "痛点引发型" },
    
    // 科普干货型
    { id: 16, title: "2024营业执照注销全流程，看完就会！", type: "干货型", platform: "抖音/小红书", duration: "90秒", tags: ["教程", "收藏级"], template: "清单教程型" },
    { id: 21, title: "注销营业执照需要什么？清单来了！", type: "干货型", platform: "抖音/小红书", duration: "60秒", tags: ["材料清单", "实用"], template: "清单教程型" },
    { id: 22, title: "收藏！营业执照注销材料清单", type: "干货型", platform: "小红书", duration: "图文", tags: ["清单", "可保存"], template: "图文笔记" },
    { id: 26, title: "营业执照丢了怎么注销？方法来了！", type: "干货型", platform: "抖音/小红书", duration: "60秒", tags: ["特殊情况", "解决方案"], template: "清单教程型" },
    
    // 案例背书型
    { id: 31, title: "浙江老板执照3天注销全记录！", type: "案例型", platform: "抖音/小红书", duration: "45秒", tags: ["真实案例", "背书"], template: "案例背书型" },
    { id: 32, title: "又一单完成！恭喜深圳王总", type: "案例型", platform: "抖音", duration: "30秒", tags: ["晒单", "信任"], template: "案例背书型" },
    { id: 36, title: "代办vs自己跑，营业执照注销选哪个？", type: "案例型", platform: "抖音/小红书", duration: "60秒", tags: ["对比", "决策参考"], template: "对比展示型" },
    
    // 信任背书型
    { id: 46, title: "专注营业执照注销服务", type: "信任型", platform: "抖音", duration: "30秒", tags: ["专业", "介绍"], template: "信任背书型" },
    { id: 48, title: "为什么选择我？", type: "信任型", platform: "抖音", duration: "45秒", tags: ["差异化", "优势"], template: "信任背书型" }
];

// 脚本模板数据
const scriptTemplates = {
    video: [
        {
            id: "pain",
            name: "痛点引发型脚本",
            type: "60秒",
            content: `【开场钩子 - 0-3秒】
画面：表情严肃，直视镜头
台词：你还在用这种方式处理营业执照吗？小心吃大亏！

【抛出问题 - 3-10秒】
画面：公司空镜头 / 营业执照特写
台词：很多人以为公司不干了，营业执照放着就行了...

【讲述后果 - 10-25秒】
画面：依次展示后果，配合文字动画
台词：实际上，营业执照不注销，会导致：
第一，工商年报异常
第二，法人个人征信受影响
第三，严重的话会被列入黑名单！

【解决方案 - 25-40秒】
画面：开始讲解材料清单
台词：如果你想注销，只需要准备这3样东西...

【提供价值 - 40-55秒】
画面：逐步讲解流程
台词：今天教大家一个简单的方法，自己就能办

【引导互动 - 55-60秒】
画面：手写文字「评论区见」
台词：还有问题的评论区告诉我，帮你一对一回！`
        },
        {
            id: "list",
            name: "清单教程型脚本",
            type: "90秒",
            content: `【开场 - 0-5秒】
画面：大字标题 + 营业执照图片
台词：注销营业执照，只需要准备这4样材料！

【逐条讲解 - 5-60秒】
第一，营业执照正副本原件...
如果丢了也没关系，可以先登报声明...

第二，法人身份证原件和复印件...

第三，税务清税证明...
如果没做过税务登记，需要先到税务局...

第四，...

【注意事项 - 60-80秒】
画面：文字动画标注
台词：特别提醒，这2种情况需要先处理才能注销：
第一，税务异常要先补申报
第二，有债务要先清算

【CTA - 80-90秒】
画面：关注按钮 + 主页入口
台词：觉得有用就点个赞，有问题评论区见！
也可以关注我，每天分享创业干货`
        },
        {
            id: "case",
            name: "案例背书型脚本",
            type: "45秒",
            content: `【开场 - 0-5秒】
画面：客户营业执照 / 合照（需授权）
台词：上个月帮[地名]的[称呼]完成了注销

【案例描述 - 5-30秒】
画面：时间线动画 / 流程图
台词：[称呼]的[公司/店铺类型]因为[原因]不运营了
营业执照放了[时间]都没管
结果被列入了经营异常...

联系到我之后
我帮他梳理了所有材料
补报了税务
全程他只来了一次

【结果展示 - 30-40秒】
画面：注销证明图片 / 好评截图
台词：[X]天后，拿到了注销证明
[客户原话评价]

【引导 - 40-45秒】
画面：评论区入口
台词：有类似问题的，评论区扣1`
        }
    ],
    graphic: [
        {
            id: "xhs",
            name: "小红书图文笔记模板",
            type: "标准结构",
            content: `【封面设计】
大字标题：痛点关键词 + 情绪词
副标题：实用价值点
视觉：红色/黄色警示色 + 专业感

【正文结构】

▌你是否有这样的困惑？
（引发共鸣）
「公司不干了，营业执照一直放着...
  不知道要不要注销...
  不知道不注销有什么后果...」

▌营业执照不处理，会有这些问题：
（痛点放大）
❌ 工商年报逾期 → 进入经营异常名录
❌ 法人征信受影响 → 贷款、乘坐飞机受限
❌ 严重 → 法人永久进入黑名单

▌今天一次说清楚！
（转折 + 价值预告）
「不管你是想自己跑，还是找代办
  先把这篇看完，绝对有用！」

▌注销营业执照需要准备：
（干货清单）
📋 个体户材料：
1. 营业执照正副本原件
2. 经营者身份证原件
3. 税务清税证明（如已做税务登记）
4. 注销申请书

📋 企业材料：
1. 营业执照正副本原件
2. 法人身份证原件+公章
3. 税务清税证明
4. 清算报告

▌特别注意！
（避坑提示）
⚠️ 营业执照丢失要先登报声明
⚠️ 税务异常要先处理
⚠️ 有债务要先清算

▌还想了解更多？
（互动引导）
「评论区留言你的具体情况
 看到都会回复！
 也可以点我主页私信
 帮你看看你的情况需要多少费用」

【标签】
#营业执照注销 #公司注销 #创业干货 
#营业执照异常 #企业服务 #创业避坑

【评论区置顶】
「想注销营业执照，不知道流程的扣1
 想知道代办价格的扣2」`
        }
    ],
    title: [
        {
            id: "title1",
            name: "痛点型标题公式",
            content: `公式1：痛点+数字+情绪
「营业执照不注销，小心罚款+失信！（附处理方法）」
「营业执照不处理，后果比你想的严重10倍！」

公式2：疑问+权威
「营业执照到底要不要注销？听我一句劝！」
「营业执照不注销会怎样？工商人员说实话！」

公式3：颠覆认知+好奇
「营业执照放着不管的后果，90%的人不知道！」
「营业执照注销的坑，踩一个就后悔！」`
        },
        {
            id: "title2",
            name: "干货型标题公式",
            content: `公式4：实用工具+承诺
「注销营业执照所需材料清单，收藏这一篇就够了！」
「营业执照注销流程图，一看就会！」

公式5：热点+专业
「2024营业执照注销新规，不知道你就亏了！」
「新公司法来了，营业执照注销要注意这5点！」

公式6：地域+案例
「杭州老板营业执照3天注销全记录！」
「深圳公司注销全流程，看完少走弯路！」`
        }
    ]
};

// 话术库数据
const scriptLibrary = {
    comment: [
        {
            id: "c1",
            title: "通用引导型",
            content: "想快速注销营业执照，不知道流程的，评论区扣1"
        },
        {
            id: "c2",
            title: "价格咨询引导",
            content: "想知道代办需要多少钱，扣"费用"，发你详细报价"
        },
        {
            id: "c3",
            title: "问题引导",
            content: "你们那边注销营业执照遇到过什么问题？说出来帮你解决"
        },
        {
            id: "c4",
            title: "收藏引导",
            content: "觉得有用就收藏，有问题评论区见！"
        },
        {
            id: "c5",
            title: "关注引导",
            content: "关注我，每天分享营业执照相关干货"
        },
        {
            id: "c6",
            title: "案例引导",
            content: "上个月帮XX老板3天完成注销，需要的话可以私信我"
        },
        {
            id: "c7",
            title: "针对流程问题",
            content: "你的情况说一下，我帮你看看流程。不同类型（个体户/公司）流程不一样，扣1我发你"
        },
        {
            id: "c8",
            title: "针对价格问题",
            content: "费用要看具体情况，扣"费用"我给你详细报价。不同地区、不同类型收费不一样"
        }
    ],
    private: [
        {
            id: "p1",
            title: "自动回复（标准版）",
            content: `您好！感谢信任～我是XX，专注营业执照注销代办服务。

请问您是想咨询：
1️⃣ 了解注销流程/材料
2️⃣ 了解代办费用
3️⃣ 解决具体问题

直接回复数字，帮你解答！
也可以说说你目前的情况哦～`
        },
        {
            id: "p2",
            title: "报价前询问",
            content: `好的，根据您说的情况，我大概了解了。

在报价之前，需要确认几个问题：

1️⃣ 是个体户还是公司？
   （两者流程和收费不一样）

2️⃣ 执照目前是什么状态？
   （正常 / 经营异常 / 税务异常 / 其他）

3️⃣ 有没有做过税务登记？
   （这个会影响办理周期）

4️⃣ 在哪个城市？
   （不同地区可能有差异）

把这些告诉我，可以给您一个准确报价～`
        },
        {
            id: "p3",
            title: "引导加微信",
            content: `好的，您的情况我大概了解了。

方便的话加我微信[微信号]，详细帮你分析一下，顺便发你一份办理指南。

微信通过更快哦～`
        },
        {
            id: "p4",
            title: "促成成交",
            content: `情况都了解了，没问题可以帮您处理。

确定要办理的话：
1️⃣ 加我微信[微信号]
2️⃣ 签订服务合同
3️⃣ 支付定金[金额]
4️⃣ 开始办理

整个流程您只需要配合签字，其他交给我们～`
        }
    ],
    guide: [
        {
            id: "g1",
            title: "主页设置建议",
            content: `头像：真人出镜（或专业logo）增加信任感
昵称：「XX营业执照注销代办」「XX企业服务」
简介：「专注营业执照注销服务 | 全国接单 | 帮您省心省力 | 评论区见」
置顶视频1：成功案例 + 服务介绍（30秒版）
置顶视频2：常见问题解答 / 干货合集
小红书群聊：创建「营业执照咨询群」，置顶在个人主页`
        }
    ]
};

// 每日任务定义
const dailyTasks = [
    { id: "publish", name: "发布今日内容", desc: "根据推荐选题发布视频/图文", icon: "publish", completed: false },
    { id: "comment", name: "回复所有评论", desc: "逐条回复评论区问题，引导互动", icon: "comment", completed: false },
    { id: "message", name: "私信跟进", desc: "回复私信，引导加微信", icon: "message", completed: false },
    { id: "data", name: "记录今日数据", desc: "记录播放量、点赞、评论、私信数", icon: "data", completed: false },
    { id: "plan", name: "规划明日选题", desc: "查看明日推荐选题，提前准备", icon: "plan", completed: false },
    { id: "hot", name: "热点监控", desc: "查看是否有可借势的热点话题", icon: "hot", completed: false }
];

// 激励语录
const quotes = [
    "坚持日更，数据会说话。今天的努力是明天成交的基础。",
    "每一条评论都是潜在的客户，认真回复就是积累信任。",
    "内容为王，互动为皇。做好内容，真诚互动，成交自然来。",
    "不要小看每天1条内容的力量，复利效应会让你惊讶。",
    "客户找的是靠谱的人，专业+真诚就是最好的名片。",
    "今天的私信回复，可能是明天的成交订单。",
    "数据不好不要气馁，测试和优化是必经之路。",
    "坚持30天，你会看到不一样的自己。",
    "每一个成功案例，都是从第一条内容开始的。",
    "私域是资产，用心经营，长期受益。"
];

// ==================== 数据管理 ====================

const DataManager = {
    // 获取数据
    get(key, defaultValue = null) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    },
    
    // 保存数据
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    // 获取今日日期字符串
    getTodayString() {
        return new Date().toISOString().split('T')[0];
    },
    
    // 获取打卡记录
    getCheckinRecords() {
        return this.get('checkinRecords', []);
    },
    
    // 添加打卡记录
    addCheckinRecord() {
        const records = this.getCheckinRecords();
        const today = this.getTodayString();
        if (!records.includes(today)) {
            records.push(today);
            this.set('checkinRecords', records);
        }
        return records;
    },
    
    // 获取连续打卡天数
    getStreakDays() {
        const records = this.getCheckinRecords().sort();
        if (records.length === 0) return 0;
        
        const today = this.getTodayString();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        // 如果今天没打卡，昨天也没打卡，连续天数为0
        if (!records.includes(today) && !records.includes(yesterdayStr)) {
            return 0;
        }
        
        // 计算连续天数
        let streak = 0;
        let checkDate = new Date();
        
        while (true) {
            const dateStr = checkDate.toISOString().split('T')[0];
            if (records.includes(dateStr)) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                // 如果是今天没打卡，继续检查昨天
                if (dateStr === today && streak === 0) {
                    checkDate.setDate(checkDate.getDate() - 1);
                    continue;
                }
                break;
            }
        }
        
        return streak;
    },
    
    // 获取今日任务状态
    getTodayTasks() {
        const today = this.getTodayString();
        const saved = this.get(`tasks_${today}`, null);
        if (saved) return saved;
        
        // 初始化今日任务
        const tasks = dailyTasks.map(t => ({ ...t }));
        this.set(`tasks_${today}`, tasks);
        return tasks;
    },
    
    // 更新任务状态
    updateTask(taskId, completed) {
        const tasks = this.getTodayTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = completed;
            this.set(`tasks_${this.getTodayString()}`, tasks);
        }
        return tasks;
    },
    
    // 获取今日数据记录
    getTodayStats() {
        const today = this.getTodayString();
        return this.get(`stats_${today}`, {
            views: '',
            likes: '',
            comments: '',
            messages: '',
            deals: ''
        });
    },
    
    // 保存今日数据
    saveTodayStats(stats) {
        const today = this.getTodayString();
        this.set(`stats_${today}`, stats);
    },
    
    // 获取历史数据
    getHistory() {
        const records = this.getCheckinRecords().sort().reverse();
        return records.map(date => ({
            date,
            stats: this.get(`stats_${date}`, {})
        }));
    },
    
    // 获取今日推荐选题
    getTodayTopic() {
        const today = this.getTodayString();
        const saved = this.get(`topic_${today}`, null);
        if (saved) return saved;
        
        // 根据日期选择选题（循环使用）
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const topicIndex = dayOfYear % topicLibrary.length;
        const topic = topicLibrary[topicIndex];
        
        this.set(`topic_${today}`, topic);
        return topic;
    }
};

// ==================== UI 渲染 ====================

const UI = {
    // 显示Toast提示
    showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    },
    
    // 复制到剪贴板
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('已复制到剪贴板');
            });
        } else {
            // 降级方案
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast('已复制到剪贴板');
        }
    },
    
    // 渲染连续打卡
    renderStreak() {
        const days = DataManager.getStreakDays();
        document.getElementById('streakDays').textContent = days;
        
        // 更新徽章
        const badge = document.getElementById('streakBadge');
        let badgeText = '新手';
        if (days >= 7) badgeText = '坚持者';
        if (days >= 30) badgeText = '达人';
        if (days >= 100) badgeText = '专家';
        badge.querySelector('span').textContent = badgeText;
        
        // 渲染日历
        const calendar = document.getElementById('streakCalendar');
        const records = DataManager.getCheckinRecords();
        const today = new Date();
        const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        
        let html = '';
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const isActive = records.includes(dateStr);
            const dayName = weekDays[date.getDay()];
            
            html += `
                <div class="calendar-day ${isActive ? 'active' : ''}">
                    <div class="day-name">${dayName}</div>
                    <div class="day-icon">
                        <i class="fas ${isActive ? 'fa-check' : 'fa-circle'}"></i>
                    </div>
                </div>
            `;
        }
        calendar.innerHTML = html;
    },
    
    // 渲染任务进度
    renderProgress() {
        const tasks = DataManager.getTodayTasks();
        const completed = tasks.filter(t => t.completed).length;
        const total = tasks.length;
        const percent = Math.round((completed / total) * 100);
        
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('totalTasks').textContent = total;
        document.getElementById('progressPercent').textContent = percent + '%';
        document.getElementById('progressFill').style.width = percent + '%';
        
        return { completed, total, percent };
    },
    
    // 渲染任务列表
    renderTaskList(containerId, isHome = false) {
        const tasks = DataManager.getTodayTasks();
        const container = document.getElementById(containerId);
        
        if (tasks.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-clipboard-check"></i>
                    <p>今日任务已加载</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        tasks.forEach((task, index) => {
            if (isHome && index >= 3) return; // 首页只显示前3个
            
            const iconMap = {
                publish: 'fa-video',
                comment: 'fa-comments',
                message: 'fa-envelope',
                data: 'fa-chart-bar',
                plan: 'fa-calendar-alt',
                hot: 'fa-fire'
            };
            
            html += `
                <div class="task-item ${task.completed ? 'completed' : ''}" onclick="toggleTask('${task.id}')">
                    <div class="task-icon ${task.icon}">
                        <i class="fas ${iconMap[task.icon]}"></i>
                    </div>
                    <div class="task-info">
                        <div class="task-name">${task.name}</div>
                        <div class="task-desc">${task.desc}</div>
                    </div>
                    <div class="task-status ${task.completed ? 'completed' : ''}">
                        <i class="fas ${task.completed ? 'fa-check' : ''}"></i>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    },
    
    // 渲染今日选题
    renderTodayTopic() {
        const topic = DataManager.getTodayTopic();
        document.getElementById('topicTitle').textContent = topic.title;
        document.getElementById('topicType').textContent = topic.type;
        document.getElementById('topicId').textContent = '#' + topic.id;
        document.getElementById('topicDuration').textContent = topic.duration;
        document.getElementById('topicPlatform').textContent = topic.platform;
        
        const tagsContainer = document.getElementById('topicTags');
        tagsContainer.innerHTML = topic.tags.map(tag => `<span class="topic-tag">${tag}</span>`).join('');
        
        // 设置今日日期
        const today = new Date();
        document.getElementById('todayDate').textContent = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    },
    
    // 渲染模板列表
    renderTemplates(type) {
        const container = document.getElementById('templateContent');
        const templates = scriptTemplates[type] || [];
        
        let html = '<div class="template-list">';
        templates.forEach(template => {
            html += `
                <div class="template-item">
                    <div class="template-header" onclick="toggleTemplate(this)">
                        <span class="template-title">${template.name}</span>
                        <span class="template-type">${template.type}</span>
                    </div>
                    <div class="template-body">
                        <div class="template-text">${template.content}</div>
                        <div class="template-actions">
                            <button class="btn btn-primary" onclick="copyTemplate('${template.id}', '${type}')">
                                <i class="fas fa-copy"></i> 复制全部
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    },
    
    // 渲染话术列表
    renderScripts(type) {
        const container = document.getElementById('scriptContent');
        if (!container) return;
        
        const scripts = scriptLibrary[type] || [];
        
        let html = '<div class="script-list">';
        scripts.forEach(script => {
            html += `
                <div class="script-item">
                    <div class="script-title">${script.title}</div>
                    <div class="script-content">${script.content}</div>
                    <div class="script-actions">
                        <button class="btn-copy" onclick="copyScript('${script.id}', '${type}')">
                            <i class="fas fa-copy"></i> 一键复制
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    },
    
    // 渲染数据统计
    renderStats() {
        const stats = DataManager.getTodayStats();
        const viewsInput = document.getElementById('statViews');
        const likesInput = document.getElementById('statLikes');
        const commentsInput = document.getElementById('statComments');
        const messagesInput = document.getElementById('statMessages');
        const dealsInput = document.getElementById('statDeals');
        
        if (viewsInput) viewsInput.value = stats.views || '';
        if (likesInput) likesInput.value = stats.likes || '';
        if (commentsInput) commentsInput.value = stats.comments || '';
        if (messagesInput) messagesInput.value = stats.messages || '';
        if (dealsInput) dealsInput.value = stats.deals || '';
        
        // 更新累计数据
        const totalCheckins = document.getElementById('totalCheckins');
        const currentStreak = document.getElementById('currentStreak');
        if (totalCheckins) totalCheckins.textContent = DataManager.getCheckinRecords().length;
        if (currentStreak) currentStreak.textContent = DataManager.getStreakDays();
    },
    
    // 渲染历史记录
    renderHistory() {
        const container = document.getElementById('historyList');
        if (!container) return;
        
        const history = DataManager.getHistory();
        
        if (history.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-history"></i>
                    <p>暂无历史记录</p>
                </div>
            `;
            return;
        }
        
        let html = '<div class="history-list">';
        history.slice(0, 10).forEach(item => {
            const date = new Date(item.date);
            const dateStr = `${date.getMonth() + 1}月${date.getDate()}日`;
            html += `
                <div class="history-item">
                    <span class="history-date">${dateStr}</span>
                    <div class="history-stats">
                        <span class="history-stat"><i class="fas fa-eye"></i> ${item.stats.views || 0}</span>
                        <span class="history-stat"><i class="fas fa-heart"></i> ${item.stats.likes || 0}</span>
                        <span class="history-stat"><i class="fas fa-comment"></i> ${item.stats.comments || 0}</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    },
    
    // 渲染激励语录
    renderQuote() {
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const quoteIndex = dayOfYear % quotes.length;
        document.getElementById('dailyQuote').textContent = quotes[quoteIndex];
    }
};

// ==================== 事件处理 ====================

// 页面切换
function showPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageName).classList.add('active');
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });
    
    // 页面特定初始化
    if (pageName === 'templates') {
        // 延迟渲染确保DOM已更新
        setTimeout(() => {
            UI.renderTemplates('video');
        }, 100);
    } else if (pageName === 'scripts') {
        setTimeout(() => {
            initScriptTabs();
        }, 100);
    } else if (pageName === 'stats') {
        UI.renderStats();
        UI.renderHistory();
    }
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 切换任务状态
function toggleTask(taskId) {
    const tasks = DataManager.getTodayTasks();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const newStatus = !task.completed;
        DataManager.updateTask(taskId, newStatus);
        
        // 重新渲染
        UI.renderProgress();
        UI.renderTaskList('homeTodoList', true);
        UI.renderTaskList('todayTaskList');
        
        // 显示提示
        if (newStatus) {
            UI.showToast('任务已完成');
        }
        
        // 检查是否全部完成
        checkAllCompleted();
    }
}

// 检查是否全部完成
function checkAllCompleted() {
    const tasks = DataManager.getTodayTasks();
    const allCompleted = tasks.every(t => t.completed);
    const checkinBtn = document.getElementById('checkinBtn');
    
    if (checkinBtn) {
        if (allCompleted) {
            checkinBtn.disabled = false;
            checkinBtn.innerHTML = '<i class="fas fa-check-circle"></i><span>完成今日打卡</span>';
        } else {
            checkinBtn.disabled = true;
            checkinBtn.innerHTML = '<i class="fas fa-lock"></i><span>请先完成所有任务</span>';
        }
    }
}

// 打卡
function doCheckin() {
    const tasks = DataManager.getTodayTasks();
    const allCompleted = tasks.every(t => t.completed);
    
    if (!allCompleted) {
        UI.showToast('请先完成所有任务');
        return;
    }
    
    // 添加打卡记录
    DataManager.addCheckinRecord();
    
    // 更新UI
    UI.renderStreak();
    UI.showToast('🎉 打卡成功！继续保持！');
    
    // 禁用按钮
    const checkinBtn = document.getElementById('checkinBtn');
    if (checkinBtn) {
        checkinBtn.disabled = true;
        checkinBtn.innerHTML = '<i class="fas fa-check-double"></i><span>今日已打卡</span>';
    }
}

// 切换模板标签
function switchTab(tabName) {
    // 更新标签样式
    document.querySelectorAll('.template-tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 渲染对应模板
    UI.renderTemplates(tabName);
}

// 展开/收起模板
function toggleTemplate(header) {
    const body = header.nextElementSibling;
    body.classList.toggle('expanded');
}

// 复制模板
function copyTemplate(templateId, type) {
    const templates = scriptTemplates[type] || [];
    const template = templates.find(t => t.id === templateId);
    if (template) {
        UI.copyToClipboard(template.content);
    }
}

// 复制选题
function copyTopic() {
    const topic = DataManager.getTodayTopic();
    const text = `【今日选题】${topic.title}\n【类型】${topic.type}\n【平台】${topic.platform}\n【时长】${topic.duration}`;
    UI.copyToClipboard(text);
}

// 查看模板
function viewTemplate() {
    showPage('templates');
}

// 初始化话术标签
function initScriptTabs() {
    // 直接渲染评论话术
    UI.renderScripts('comment');
}

// 切换话术标签
function switchScriptTab(type) {
    document.querySelectorAll('.script-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    UI.renderScripts(type);
}

// 复制话术
function copyScript(scriptId, type) {
    const scripts = scriptLibrary[type] || [];
    const script = scripts.find(s => s.id === scriptId);
    if (script) {
        UI.copyToClipboard(script.content);
    }
}

// 保存数据
function saveStats() {
    const stats = {
        views: document.getElementById('statViews').value,
        likes: document.getElementById('statLikes').value,
        comments: document.getElementById('statComments').value,
        messages: document.getElementById('statMessages').value,
        deals: document.getElementById('statDeals').value
    };
    
    DataManager.saveTodayStats(stats);
    UI.showToast('数据已保存');
    UI.renderHistory();
}

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化首页
    UI.renderStreak();
    UI.renderProgress();
    UI.renderTaskList('homeTodoList', true);
    UI.renderTaskList('todayTaskList');
    UI.renderTodayTopic();
    UI.renderQuote();
    checkAllCompleted();
    
    // 绑定导航点击事件
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            showPage(this.dataset.page);
        });
    });
    
    // 检查今日是否已打卡
    const today = DataManager.getTodayString();
    const records = DataManager.getCheckinRecords();
    if (records.includes(today)) {
        const checkinBtn = document.getElementById('checkinBtn');
        if (checkinBtn) {
            checkinBtn.disabled = true;
            checkinBtn.innerHTML = '<i class="fas fa-check-double"></i><span>今日已打卡</span>';
        }
    }
});
