/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, 
  Brain, 
  Database, 
  FileText, 
  Filter, 
  LayoutDashboard, 
  Lightbulb, 
  LineChart, 
  MessageSquare, 
  Microscope, 
  Play, 
  Settings, 
  Zap,
  ArrowRight,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  Users,
  TrendingDown,
  TrendingUp,
  Search,
  Cpu,
  Eye,
  EyeOff,
  Target
} from 'lucide-react';

const SECTIONS = [
  { id: 'problem', title: '01 痛点：科技要破局' },
  { id: 'logic', title: '02 逻辑：认知带宽 vs 维度全集' },
  { id: 'solution', title: '03 方案：BDP 的“精装修”工程' },
  { id: 'case', title: '04 案例：从“描述数据”到“解释经营”' },
  { id: 'simulator', title: '05 仿真：人工 vs AI 分析模拟器' },
  { id: 'action', title: '06 行动：知识工程路线图' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('problem');

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-72 bg-white border-r border-slate-200 z-50 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Cpu size={22} />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block leading-tight">经营决策增强引擎</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Decision Intelligence</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group ${
                activeSection === s.id 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <span className={`text-sm font-medium ${activeSection === s.id ? 'text-white' : 'text-slate-600'}`}>{s.title}</span>
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-slate-100">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">物流数据专项宣讲</div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Engine Ready</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-72 p-12 lg:p-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {activeSection === 'problem' && <ProblemSection />}
            {activeSection === 'logic' && <LogicSection />}
            {activeSection === 'solution' && <SolutionSection />}
            {activeSection === 'case' && <CaseSection />}
            {activeSection === 'simulator' && <SimulatorSection />}
            {activeSection === 'action' && <ActionSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
          <AlertTriangle size={14} />
          The Resource Trap
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          科技困境，需求做不完，<br />
          <span className="text-blue-600">价值难衡量；</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <Clock className="text-red-500" size={20} />
              案例：一个典型的“无效循环”
            </h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                <div className="font-bold text-slate-800 mb-1">周一：业务提需</div>
                <p>“我想看华东区收入下降的原因，帮我拉一下区域、产品、客户维度的报表。”</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                <div className="font-bold text-slate-800 mb-1">周三：科技交付</div>
                <p>开发完成，业务看完说：“这几个维度没发现问题，是不是线路或者天气原因？再加几个维度。”</p>
              </div>
              <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                <div className="font-bold text-red-800 mb-1">周五：再次交付</div>
                <p>业务又说：“战略调整了，现在我们要看 KA 客户的利润贡献，之前的报表没用了。”</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">结果：科技资源在“猜谜”和“补丁”中消耗殆尽，业务依然觉得数据“不解渴”。</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-blue-600 rounded-3xl text-white space-y-6 shadow-xl shadow-blue-100">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <Users size={20} />
              深层原因剖析
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                <div>
                  <div className="font-bold mb-1">分工太细，认知断层</div>
                  <p className="text-sm text-blue-100">每个业务方只看自己负责的“一亩三分地”，提出的需求本身就是片面的。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                <div>
                  <div className="font-bold mb-1">探索性需求 vs 确定性开发</div>
                  <p className="text-sm text-blue-100">业务在“试错”，而科技在“盖楼”。用沉重的开发资源去应对轻灵的探索需求，必然导致浪费。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                <div>
                  <div className="font-bold mb-1">单一场景的“幸存者偏差”</div>
                  <p className="text-sm text-blue-100">业务方只想要他“认为”有问题的维度，却忽略了 90% 没被看到的可能性。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogicSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
          <Brain size={14} />
          Cognitive Bandwidth
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          底层逻辑：<br />
          <span className="text-blue-600">人类认知的“10 维度天花板”</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <EyeOff className="text-slate-400" size={20} />
              人类分析的困境
            </h4>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <div className="flex justify-between text-sm mb-2">
                <span>认知带宽</span>
                <span className="font-bold">~7±2 个对象</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 w-[15%]" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                因为大脑无法同时处理几百个维度的交叉影响，所以我们被迫进行<strong>“降维打击”</strong>。我们只选最熟悉的维度，这叫“分析”，其实是“抽样”。
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2 text-blue-600">
              <Eye className="text-blue-600" size={20} />
              AI 科学探索的可能
            </h4>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 space-y-4">
              <div className="flex justify-between text-sm mb-2 text-blue-700">
                <span>计算带宽</span>
                <span className="font-bold">无限扩展</span>
              </div>
              <div className="h-3 bg-blue-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-full" />
              </div>
              <p className="text-sm text-blue-700 leading-relaxed">
                AI 可以同时扫描 BDP 中的几百个维度，进行<strong>“全量穷举”</strong>。它能看到人类看不到的微小扰动和非线性关联。
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[40px] text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-2xl" />
          <h4 className="text-xl font-bold">对比案例：收入波动的解释</h4>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-widest">人工分析结论</div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                “因为华东区订单量下降了 10%，所以收入下降了。” <br />
                <span className="text-red-400 text-xs mt-2 block">（描述了现象，但没找到根因）</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-blue-400 uppercase tracking-widest">AI 科学分析结论</div>
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30 text-sm">
                “收入下降的核心原因是<strong>‘客户结构迁移’</strong>。虽然订单总量下降 10%，但高单价的 KA 客户流失了 25%，而低单价的中小客户增长了 15%。同时，由于<strong>‘燃油附加费政策’</strong>滞后，导致单票毛利进一步收缩。”
                <span className="text-emerald-400 text-xs mt-2 block">（穿透了现象，揭示了结构性本质）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider">
          <Settings size={14} />
          The Solution
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          解决方案：<br />
          <span className="text-blue-600">BDP 库表的“精装修”工程</span>
        </h2>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">改造前：原始表结构 (Raw Schema)</div>
              <div className="font-mono text-[11px] bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-500">
                TABLE: t_income_detail <br />
                FIELDS: <br />
                - order_id (varchar) <br />
                - region_id (int) <br />
                - amount (decimal) <br />
                - cust_type (int) <br />
                - create_time (datetime)
              </div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-bold">
                <XCircle size={14} /> AI 只能写 SQL，无法理解业务逻辑
              </div>
            </div>
            <div className="p-8 bg-blue-50/30 space-y-4">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">改造后：语义增强 (Semantic Enhanced)</div>
              <div className="font-mono text-[11px] bg-white p-4 rounded-xl border border-blue-100 text-blue-800 shadow-sm">
                TABLE: 收入明细表 <br />
                DESCRIPTION: 记录物流全链路收入，包含基础运费与增值费。 <br />
                FIELDS: <br />
                - region_id: 业务大区。注意：华东区包含上海和江苏。 <br />
                - amount: 结算金额。已扣除内部结算，代表真实外部收入。 <br />
                - cust_type: 客户分层。1-KA客户(高粘性)，2-散客(高毛利)。
              </div>
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                <CheckCircle size={14} /> AI 具备了“业务专家”的思考背景
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <Database size={20} />
            </div>
            <h4 className="font-bold">语义注入</h4>
            <p className="text-xs text-slate-500 leading-relaxed">让数据人员从“写代码”转向“写注释”，将脑子里的业务逻辑沉淀为机器可读的知识。</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <Search size={20} />
            </div>
            <h4 className="font-bold">全量扫描</h4>
            <p className="text-xs text-slate-500 leading-relaxed">AI 基于语义理解，自动遍历相关表的所有维度，寻找对指标影响最大的“关键因子”。</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <FileText size={20} />
            </div>
            <h4 className="font-bold">结论提炼</h4>
            <p className="text-xs text-slate-500 leading-relaxed">不再扔给业务一堆表，而是直接输出一段带逻辑、带证据、带建议的自然语言结论。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider">
          <LineChart size={14} />
          Real-world Case
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          案例深挖：<br />
          <span className="text-blue-600">从“描述数据”到“解释经营”</span>
        </h2>
      </div>

      <div className="space-y-8">
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
              <TrendingDown size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">场景：某月收入意外下滑 300 万</h3>
              <p className="text-sm text-slate-500">业务方初步怀疑是“华南区销售不力”。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <XCircle size={16} /> 传统报表分析（人脑）
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm italic text-slate-600">
                  “拉了区域报表，华南区确实降了。拉了产品报表，标快件降了。结论：华南区标快业务需要加强销售。”
                </div>
                <div className="p-4 bg-red-50 rounded-xl text-xs text-red-700">
                  <strong>缺陷：</strong>只看到了表象。事实上，销售团队已经很努力了，问题出在别处。
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle size={16} /> AI 语义深度分析
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm text-blue-800 font-medium">
                  “AI 扫描了 400 个维度后发现：华南区收入下降 80% 来自于<strong>‘结算周期错位’</strong>。由于本月 3 个大客户切换了结算系统，导致 240 万收入顺延至下月入账。剔除此因素后，实际经营收入稳步增长 2%。”
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl text-xs text-emerald-700">
                  <strong>价值：</strong>精准定位非经营性波动，保护了业务团队的积极性，避免了错误的决策动作。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[40px] text-white">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="text-amber-400" size={20} />
            为什么 AI 能做到？
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-blue-400 font-bold">不带偏见</div>
              <p className="text-xs text-slate-400 leading-relaxed">人会先入为主（比如先怀疑销售），AI 会公平地扫描所有表字段。</p>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-bold">语义联想</div>
              <p className="text-xs text-slate-400 leading-relaxed">AI 知道“结算周期”和“收入”在业务逻辑上的因果关系，而这在普通报表中是断裂的。</p>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-bold">自动压缩</div>
              <p className="text-xs text-slate-400 leading-relaxed">AI 过滤了 397 个无关维度，只把最重要的 3 个真相呈现在你面前。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimulatorSection() {
  const [mode, setMode] = useState<'manual' | 'ai'>('manual');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const DIMENSIONS = [
    '业务大区', '产品类型', '客户分层', '结算周期', '燃油单价', 
    '天气指数', '交通拥堵', '竞品价格', '装载率', '人力成本',
    '网点效能', '线路时效', '优惠券核销', '退货率', '投诉率',
    'KA占比', '散单频次', '外部政策', '节假日效应', '品牌热度',
    '库存周转', '车型配比', '单票毛利', '异常补偿', '系统账期'
  ];

  const AI_LOGS = [
    "正在连接 BDP 语义库...",
    "识别核心指标：[收入] 波动幅度 -12%",
    "启动全量维度扫描 (428个字段)...",
    "排除弱相关因子：[天气]、[库存]、[车型]...",
    "锁定异常关联：[结算周期] 与 [名义收入] 强相关",
    "发现交叉影响：[竞品价格] x [珠三角] x [中小散客]...",
    "执行因果推断：排除经营性流失，锁定账期顺延...",
    "生成深度洞察报告..."
  ];

  const MANUAL_LOGS = [
    "打开 Excel 报表...",
    "筛选 [华南区] 数据...",
    "对比 [产品维度]...",
    "发现标快件下降...",
    "手动计算同比/环比...",
    "得出初步结论..."
  ];

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsAnalyzing(false);
            return 100;
          }
          const step = mode === 'manual' ? 2 : 5;
          
          // Update logs based on progress
          const logList = mode === 'manual' ? MANUAL_LOGS : AI_LOGS;
          const logIndex = Math.floor((prev / 100) * logList.length);
          if (logList[logIndex] && !logs.includes(logList[logIndex])) {
            setLogs(prevLogs => [...prevLogs, logList[logIndex]].slice(-5));
          }

          return prev + step;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, mode, logs]);

  const startAnalysis = () => {
    setProgress(0);
    setLogs([]);
    setIsAnalyzing(true);
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
          <Play size={14} />
          Intelligent Simulator
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          仿真模拟器：<br />
          <span className="text-blue-600">人工 vs AI 深度分析实测</span>
        </h2>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden">
        <div className="flex border-b border-slate-100 bg-slate-50/50">
          <button 
            onClick={() => { setMode('manual'); setProgress(0); setLogs([]); }}
            className={`flex-1 py-6 font-bold text-sm transition-all flex items-center justify-center gap-2 ${mode === 'manual' ? 'bg-white text-slate-900 border-b-2 border-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Users size={18} />
            传统手工分析 (经验驱动)
          </button>
          <button 
            onClick={() => { setMode('ai'); setProgress(0); setLogs([]); }}
            className={`flex-1 py-6 font-bold text-sm transition-all flex items-center justify-center gap-2 ${mode === 'ai' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-blue-400'}`}
          >
            <Cpu size={18} />
            AI 语义引擎 (数据科学)
          </button>
        </div>

        <div className="p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Control & Scanning */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">分析目标</div>
                <div className="text-2xl font-black text-slate-800 tracking-tight">“解释本月收入波动原因”</div>
              </div>
              <button 
                onClick={startAnalysis}
                disabled={isAnalyzing}
                className={`px-10 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${isAnalyzing ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95'}`}
              >
                {isAnalyzing ? <Clock size={18} className="animate-spin" /> : <Play size={18} />}
                {isAnalyzing ? '深度分析中...' : '启动引擎'}
              </button>
            </div>

            {/* Progress & Logs */}
            <div className="space-y-4 p-6 bg-slate-900 rounded-3xl text-white font-mono text-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Brain size={80} className={isAnalyzing ? 'animate-pulse' : ''} />
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-400 font-bold tracking-widest">{mode === 'manual' ? 'MANUAL_PROCESS' : 'AI_SEMANTIC_SCAN'}</span>
                <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">{progress}%</span>
              </div>
              <div className="space-y-2 h-32 overflow-hidden">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 items-start"
                  >
                    <span className="text-slate-500">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                    <span className={i === logs.length - 1 ? 'text-emerald-400' : 'text-slate-300'}>
                      {i === logs.length - 1 ? '> ' : '  '}{log}
                    </span>
                  </motion.div>
                ))}
                {!isAnalyzing && progress === 0 && <div className="text-slate-600 italic">等待指令输入...</div>}
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-4">
                <motion.div 
                  className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Dimension Grid */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">维度穿透矩阵 (Dimension Matrix)</h4>
                <span className="text-[10px] text-slate-400">{isAnalyzing ? '正在遍历全量字段...' : '就绪'}</span>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {DIMENSIONS.map((dim, i) => {
                  const isActive = progress > (i * 4);
                  return (
                    <div 
                      key={i} 
                      className={`relative p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-1 group ${
                        isActive 
                          ? (mode === 'manual' && i > 5 
                              ? 'bg-slate-50 border-slate-100 opacity-30' 
                              : (mode === 'ai' 
                                  ? 'bg-blue-50 border-blue-200 shadow-sm' 
                                  : 'bg-slate-800 border-slate-700 text-white'))
                          : 'bg-white border-slate-100'
                      }`}
                    >
                      <div className={`text-[9px] font-bold text-center leading-tight ${isActive ? (mode === 'ai' ? 'text-blue-600' : (mode === 'manual' && i <= 5 ? 'text-white' : 'text-slate-400')) : 'text-slate-300'}`}>
                        {dim}
                      </div>
                      {isActive && mode === 'ai' && (
                        <motion.div 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,1)]" 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Report Output */}
          <div className="lg:col-span-5 flex flex-col">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">分析报告输出 (Insight Output)</h4>
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                {progress === 100 ? (
                  <motion.div 
                    key="report"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-8 rounded-[32px] border h-full flex flex-col space-y-6 ${mode === 'manual' ? 'bg-white border-slate-200' : 'bg-slate-900 text-white shadow-2xl border-transparent'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${mode === 'manual' ? 'bg-slate-100 text-slate-600' : 'bg-blue-600 text-white'}`}>
                          {mode === 'manual' ? <Users size={16} /> : <Cpu size={16} />}
                        </div>
                        <span className="font-bold text-sm tracking-tight">{mode === 'manual' ? '人工经验报告' : 'AI 深度穿透报告'}</span>
                      </div>
                      <div className="text-[10px] font-bold px-2 py-1 rounded bg-slate-500/10 text-slate-400 uppercase">
                        Confidential
                      </div>
                    </div>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      {mode === 'manual' ? (
                        <div className="space-y-4">
                          <p className="text-sm leading-relaxed text-slate-600">
                            通过对比上月数据，发现<strong>华南区标快件</strong>收入下降明显。
                          </p>
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                            <div className="text-xs font-bold text-slate-800">初步结论：</div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              华南区订单量下滑 10%，主要受标快产品线拖累。建议销售团队加大华南区客户拜访力度，提升单量。
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-red-500 text-[10px] font-bold">
                            <AlertTriangle size={12} /> 局限：未发现非经营性因素，可能导致决策偏离。
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">核心穿透结论</div>
                            <p className="text-sm leading-relaxed font-medium">
                              本次收入波动并非单纯的经营性下滑，而是由<strong>“系统性账期迁移”</strong>与<strong>“局部价格博弈”</strong>共同导致的结构性变化。
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                              <div className="flex items-center gap-2 text-blue-400">
                                <TrendingDown size={14} />
                                <span className="text-xs font-bold">维度交叉 1：账期顺延 (80% 影响)</span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed">
                                华南区 3 个核心 KA 客户于本月切换结算系统。通过交叉扫描 [客户ID] x [结算周期] x [名义收入]，锁定 240 万收入顺延至下月入账，非经营损失。
                              </p>
                            </div>

                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                              <div className="flex items-center gap-2 text-amber-400">
                                <Zap size={14} />
                                <span className="text-xs font-bold">维度交叉 2：价格战预警 (15% 影响)</span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed">
                                扫描 [竞品价格] x [珠三角] x [中小散客] 发现：过去 72 小时内，散单流失率与竞品 A 的调价动作呈现 0.92 强正相关。
                              </p>
                            </div>

                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                              <div className="flex items-center gap-2 text-emerald-400">
                                <TrendingUp size={14} />
                                <span className="text-xs font-bold">维度交叉 3：毛利侵蚀 (5% 影响)</span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed">
                                外部油价上涨与内部燃油附加费更新存在 48 小时滞后，导致单票毛利在收入下滑的同时收缩了 3.8%。
                              </p>
                            </div>
                          </div>

                          <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                            <div className="text-xs font-bold text-blue-400 mb-1">经营建议：</div>
                            <p className="text-[11px] text-blue-100 leading-relaxed">
                              1. 保持华南区销售节奏，无需盲目降价；<br />
                              2. 立即启动珠三角散单价格监控；<br />
                              3. 优化燃油附加费自动更新机制。
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-slate-100/10 flex justify-between items-center">
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="text-[10px] text-slate-500 uppercase font-bold">科学性</div>
                          <div className={`text-sm font-bold ${mode === 'manual' ? 'text-amber-500' : 'text-emerald-500'}`}>{mode === 'manual' ? '65%' : '99%'}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[10px] text-slate-500 uppercase font-bold">深度</div>
                          <div className={`text-sm font-bold ${mode === 'manual' ? 'text-amber-500' : 'text-emerald-500'}`}>{mode === 'manual' ? 'L2' : 'L5'}</div>
                        </div>
                      </div>
                      <button className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest ${mode === 'manual' ? 'bg-slate-100 text-slate-600' : 'bg-blue-600 text-white'}`}>
                        Export PDF
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-[32px] text-slate-300 space-y-4">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                      <FileText size={32} className="opacity-20" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sm">等待分析完成</div>
                      <div className="text-[10px] opacity-60">报告将在此处实时生成</div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
          <Target size={14} />
          The Roadmap
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          行动计划：<br />
          <span className="text-blue-600">启动“知识工程”专项</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 relative group hover:border-blue-200 transition-all">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">1</div>
          <h3 className="font-bold text-xl">语义沉淀</h3>
          <div className="space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              推动数据人员对 BDP 核心表进行“精装修”。不仅是定义，更是<strong>业务逻辑含义</strong>和<strong>应用场景</strong>。
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 text-xs">
              <div className="font-bold text-blue-800 mb-2 flex items-center gap-1">
                <CheckCircle size={14} /> 案例举措：建立《业务语义字典》
              </div>
              <p className="text-slate-600 leading-relaxed">
                由业务专家与数据人员共同定义字段的经营逻辑。例如：“单票成本”不仅是财务支出，更要关联“装载率”和“线路时效”等前置因子，确保 AI 知道成本上升背后的物理原因。
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-50 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            重点：让机器读懂业务
          </div>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 relative group hover:border-blue-200 transition-all">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">2</div>
          <h3 className="font-bold text-xl">模型对齐</h3>
          <div className="space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              将沉淀的语义知识库喂给大模型，建立“表-业务-场景”的联想能力。
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 text-xs">
              <div className="font-bold text-blue-800 mb-2 flex items-center gap-1">
                <CheckCircle size={14} /> 案例举措：构建《经营因果图谱》
              </div>
              <p className="text-slate-600 leading-relaxed">
                通过 RAG 技术将业务 SOP 和历史分析报告喂给模型。例如：让 AI 学习到“时效下降”通常与“分拣中心拥堵”或“中转环节增加”正相关，从而在分析时能自动进行逻辑联想。
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-50 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            重点：建立因果联想
          </div>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 relative group hover:border-blue-200 transition-all">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">3</div>
          <h3 className="font-bold text-xl">引擎上线</h3>
          <div className="space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              前端产品接入 AI 分析能力，实现“一键深度穿透”，直接输出深刻的分析结论。
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 text-xs">
              <div className="font-bold text-blue-800 mb-2 flex items-center gap-1">
                <CheckCircle size={14} /> 案例举措：上线《智能诊断助手》
              </div>
              <p className="text-slate-600 leading-relaxed">
                在看板中点击任意异常指标，AI 自动调取底层明细并结合语义库生成“诊断报告”。例如：不再是给业务一张明细表，而是直接告诉他“本月收入下滑是因为 A 客户切换了结算口径，建议调整核算基准”。
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-50 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            重点：决策增强闭环
          </div>
        </div>
      </div>

      <div className="p-12 bg-slate-900 rounded-[40px] text-white text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-3xl font-bold">“数据分析的本质是数据科学，<br />而数据科学的基石是语义理解。”</h3>
          <p className="text-slate-400">让我们一起，结合数据+AI 变成一个真正懂业务的“智能大脑”。</p>
        </div>
        <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto">
          <Play size={24} />
          立即启动数据专项
        </button>
      </div>
    </div>
  );
}
