export interface Project {
  id: string;
  name: string;
  tagline: string;
  coverImage: string;
  promptText: string;
  githubUrl: string;
  geminiShareUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "GlobalGuard AI —— 跨境出海合规助手",
    tagline: "基于 RAG 技术的移动端合规咨询平台。用户只需输入“拟出海国家”和“业务赛道”，AI 即可精准检索该国最新的法律文本、行业准入白皮书及税务政策，将复杂的法条转化为具有业务指导意义的“活工具”。",
    coverImage: "https://i.postimg.cc/mgw84cVY/jie-ping2026-02-23-shang-wu10-13-01.png",
    promptText: `你现在的身份是 GlobalGuard AI，一个为中国出海企业提供精准合规咨询的首席人工智能法律顾问。你的核心任务是基于用户上传的政策文本和白皮书，进行严谨的政策解析和风险提示。
工作铁律（必须严格遵守）：

绝对忠于原文（反幻觉）： 面对用户的提问，你只能基于当前对话中上传的文件内容进行回答。如果文件中没有相关信息，请直接回答：“根据当前知识库，暂无具体政策规定，建议进行深度人工法务尽调。” 绝对不允许编造任何法律条款。

强制精准溯源： 你的每一条核心建议或法律事实陈述，必须在句子结尾使用括号标明出处（例如：[来源：印尼贸易部2023年第31号条例，第3章第5条]）。

跨语言降维解析： 如果原文中出现了当地语言的专有法律或税务名词，必须自动提供“原文+中文+英文”的对照解释。

输出结构约束：

🚦 准入红绿灯（Executive Summary）：一句话总结合规风险等级。

📜 核心政策摘要（Key Regulations）：列出最重要的 2-3 条限制条款并溯源。

💡 落地实操建议（Actionable Steps）：给出下一步具体操作建议。`,
    githubUrl: "",
    geminiShareUrl: "https://ai.studio/apps/d1969b89-6b19-490b-af24-f9c72e60be49"
  },
  {
    id: "2",
    name: "GBA Pulse —— 大湾区跨境流动政策看板",
    tagline: "数据驱动的政策感应与供应链预警系统。利用数据分析与自然语言处理（NLP）技术，抓取社交媒体对跨境政策的讨论热度，为政府或企业预测物流高峰及潜在拥堵点，提供政策落地前的“舆情体检”。",
    coverImage: "https://i.postimg.cc/fLQyYCm8/jie-ping2026-02-23-shang-wu10-13-09.png",
    promptText: "暂无 Prompt",
    githubUrl: "",
    geminiShareUrl: "https://ai.studio/apps/b42f6147-cf91-4e84-b87a-f8c117a19450"
  },
  {
    id: "3",
    name: "GoGlobal Strategist —— 企业海外扩张决策系统",
    tagline: "交互式海外设厂风险评估与路径策划案。系统基于多准则决策分析 (MCDA) 模型，量化税务、用工、地缘政治等各项权重。支持动态参数输入（如投资额、本地化比例、电价波动），自动重算整体运营成本并提供战略对冲方案。",
    coverImage: "https://i.postimg.cc/Rhntvh7P/jie-ping2026-02-23-shang-wu10-12-52.png",
    promptText: "暂无 Prompt",
    githubUrl: "",
    geminiShareUrl: "https://ai.studio/apps/8371fa14-986d-4506-9349-fb38565c9f1f"
  },
  {
    id: "4",
    name: "Wanderlust AI",
    tagline: "基于Google地图数据，为你规划最合理的出游行程，一键生成“不走回头路”路线安排。",
    coverImage: "https://i.postimg.cc/xdGYn3hv/jie-ping2026-02-23-shang-wu11-00-53.png",
    promptText: "暂无 Prompt",
    githubUrl: "",
    geminiShareUrl: "https://ai.studio/apps/05cfc6c9-b90d-42b6-b61b-6972e2e1a89e"
  },
  {
    id: "5",
    name: "Civic Debate AI",
    tagline: "选择你想要群聊的AI伙伴，与不同观念、性格和成长背景的AI一起讨论你感兴趣的话题",
    coverImage: "https://i.postimg.cc/C5BQLFdh/jie-ping2026-02-23-shang-wu11-07-58.png",
    promptText: "暂无 Prompt",
    githubUrl: "",
    geminiShareUrl: "https://ai.studio/apps/12ae9b13-1c48-4bf3-9199-f7758e4fa352"
  },
  {
    id: "6",
    name: "LingoMix",
    tagline: "上传图片，学习该场景下最地道的外语表达，并且支持生成语音、单词总结和剧情延伸",
    coverImage: "https://i.postimg.cc/SsR3XLjK/jie-ping2026-02-23-xia-wu1-04-57.png",
    promptText: "暂无 Prompt",
    githubUrl: "",
    geminiShareUrl: "https://ai.studio/apps/7940d758-e869-4842-a259-dc6237add36a"
  }
];
