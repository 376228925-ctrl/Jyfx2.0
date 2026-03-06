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
  Target,
  Layers,
  ArrowUpRight,
  Workflow,
  Sparkles
} from 'lucide-react';

const SECTIONS = [
  { id: 'problem', title: '01 痛点：科技要破局' },
  { id: 'logic', title: '02 逻辑：认知带宽 vs 维度全集' },
  { id: 'solution', title: '03 方案：放大数据中台价值杠杆' },
  { id: 'case', title: '04 案例：从“描述数据”到“解释经营”' },
  { id: 'simulator', title: '05 仿真：人工 vs AI 分析模拟器' },
  { id: 'opportunity', title: '06 机会：我们的破局点' },
  { id: 'finale', title: '07 燎原计划v1.0' }
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
            {activeSection === 'opportunity' && <OpportunitySection onNavigate={() => setActiveSection('finale')} />}
            {activeSection === 'finale' && <FinaleSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function FinaleSection() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#000000] overflow-hidden flex items-center justify-center font-sans">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(1); opacity: 1; }
          5% { opacity: 1; }
          100% { transform: translateX(-2000px) translateY(2000px) rotate(-45deg) scale(0.1); opacity: 0; }
        }
        @keyframes slow-pan {
          0% { transform: scale(1.1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-2%, 2%); }
          100% { transform: scale(1.1) translate(0, 0); }
        }
        @keyframes particle-drift {
          0% { transform: translateY(0) translateX(0) translateZ(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-100vh) translateX(20vw) translateZ(0); opacity: 0; }
        }
        @keyframes particle-drift-reverse {
          0% { transform: translateY(100vh) translateX(0) translateZ(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-20vh) translateX(-20vw) translateZ(0); opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(129, 140, 248, 0.6);
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>

      {/* Deep Space Background */}
      <div className="absolute inset-0 animate-[slow-pan_60s_ease-in-out_infinite]">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1b2735_0%,_#000000_100%)]"></div>
        
        {/* Giant Nebulas */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-fuchsia-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-indigo-900/20 blur-[100px] rounded-full mix-blend-screen"></div>

        {/* Stars Layer 1 (Small, many) */}
        {[...Array(150)].map((_, i) => (
          <div key={`star1-${i}`} className="star" style={{
            width: Math.random() * 2 + 'px',
            height: Math.random() * 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random(),
            animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`
          }}></div>
        ))}

        {/* Stars Layer 2 (Larger, glowing) */}
        {[...Array(50)].map((_, i) => (
          <div key={`star2-${i}`} className="star shadow-[0_0_12px_rgba(255,255,255,0.9)]" style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            backgroundColor: Math.random() > 0.5 ? '#e0f2fe' : '#fdf4ff',
            animation: `twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 5}s`
          }}></div>
        ))}

        {/* Dynamic Light Particles (Moving upwards/diagonally) */}
        {[...Array(40)].map((_, i) => (
          <div key={`particle1-${i}`} className="particle" style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + 20 + '%',
            animation: `particle-drift ${Math.random() * 15 + 10}s linear infinite ${Math.random() * 10}s`,
            opacity: 0
          }}></div>
        ))}

        {/* Dynamic Light Particles (Moving downwards/diagonally) */}
        {[...Array(30)].map((_, i) => (
          <div key={`particle2-${i}`} className="particle shadow-[0_0_15px_3px_rgba(192,132,252,0.6)]" style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * -20 + '%',
            animation: `particle-drift-reverse ${Math.random() * 20 + 15}s linear infinite ${Math.random() * 10}s`,
            opacity: 0
          }}></div>
        ))}

        {/* Enhanced Shooting Stars */}
        {[...Array(12)].map((_, i) => (
          <div key={`shooting-${i}`} className="absolute top-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" style={{
            width: Math.random() * 150 + 50 + 'px',
            left: Math.random() * 150 + '%',
            top: Math.random() * 100 - 50 + '%',
            animation: `shooting-star ${Math.random() * 2 + 1.5}s linear infinite ${Math.random() * 10}s`,
            opacity: 0
          }}></div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 w-full h-screen overflow-y-auto overflow-x-hidden py-12 sm:py-20 scrollbar-hide flex flex-col items-center justify-start sm:justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-8 sm:space-y-12 text-center w-full pb-20"
        >
          {/* Title Area */}
          <div className="space-y-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-indigo-500/30 bg-indigo-950/30 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.2)]"
            >
              <Sparkles className="text-blue-400" size={24} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 font-black tracking-[0.3em] uppercase text-lg">
                燎原计划 v1.0
              </span>
              <Sparkles className="text-purple-400" size={24} />
            </motion.div>
          </div>

          {/* Main Text Content */}
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-slate-200 leading-relaxed tracking-wide">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="space-y-2"
            >
              <p className="text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">AI 正在以前所未有的速度发展。</p>
              <p>也许很快，生产力将不再是稀缺资源。</p>
              <p>那个靠“多做一点”取胜的时代，正在过去。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="space-y-2"
            >
              <p className="text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.4)]">一个全新的时代正在展开。</p>
              <p>它会重塑行业，重塑组织，也会重塑每一个人。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="space-y-2"
            >
              <p>我发自内心地觉得幸运——</p>
              <p>我们不是生在一个平稳的年代，</p>
              <p className="text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">而是又一次站在了一场真正的变革之中。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
              className="space-y-2"
            >
              <p>时代会制造焦虑，</p>
              <p className="text-purple-300 drop-shadow-[0_0_10px_rgba(216,180,254,0.4)]">但效率的背后也充满着机会。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5.5 }}
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto"
            >
              <p>真心的希望，在这次百年大变的 AI 变革中，</p>
              <p>在座的每个人都是这场变革的参与者，一起见证下一次奇迹；</p>
            </motion.div>
          </div>

          {/* Footer Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 7.0 }}
            className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-indigo-500/20"
          >
            <p className="text-xs sm:text-sm text-indigo-300/60 mb-4 uppercase tracking-[0.3em]">最后，一段话送给大家</p>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <p className="mb-3">保持热爱、保持乐观、保持自驱；</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_20px_rgba(129,140,248,0.5)]">乾坤未定，你我皆是黑马。</p>
            </div>
          </motion.div>

          {/* CENTERED CALL TO ACTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 8.5, type: "spring", bounce: 0.4 }}
            className="pt-16 sm:pt-24 pb-12 w-full flex justify-center"
          >
            <div className="relative group cursor-pointer inline-block">
              {/* Glowing Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              
              {/* Button Content */}
              <div className="relative px-6 py-4 sm:px-10 sm:py-6 bg-black/80 backdrop-blur-2xl rounded-full flex items-center justify-center border border-indigo-400/50 shadow-[inset_0_0_30px_rgba(99,102,241,0.3)] overflow-hidden">
                {/* Inner shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <span className="relative flex items-center gap-3 sm:gap-4">
                  <Target className="text-blue-400 h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 tracking-wider">
                    期待你的加入，一起引领这场变革～
                  </span>
                  <ArrowRight className="text-purple-400 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
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
                <div className="font-bold text-slate-800 mb-1">周一：需求方提需</div>
                <p>“我想看华东区收入下降的原因，帮我拉一下区域、产品、客户维度的报表。”</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                <div className="font-bold text-slate-800 mb-1">周三：科技交付</div>
                <p>开发完成，需求方看完说：“这几个维度没发现问题，是不是线路或者天气原因？再加几个维度。”</p>
              </div>
              <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                <div className="font-bold text-red-800 mb-1">周五：再次交付</div>
                <p>需求方又说：“战略调整了，现在我们要看 KA 客户的利润贡献，之前的报表没用了。”</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">结果：科技资源在“猜谜”和“补丁”中消耗殆尽，需求方依然觉得数据“不解渴”。</p>
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
                  <p className="text-sm text-blue-100">每个需求方只看自己负责的“一亩三分地”，提出的需求本身就是片面的。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                <div>
                  <div className="font-bold mb-1">探索性需求 vs 确定性开发</div>
                  <p className="text-sm text-blue-100">需求方在“试错”，而科技在“盖楼”。用沉重的开发资源去应对轻灵的探索需求，必然导致浪费。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                <div>
                  <div className="font-bold mb-1">单一场景的“幸存者偏差”</div>
                  <p className="text-sm text-blue-100">需求方只想要他“认为”有问题的维度，却忽略了 90% 没被看到的可能性。</p>
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
          <Database size={14} />
          Middle Platform Empowerment
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          解决方案：<br />
          <span className="text-blue-600">放大数据中台价值杠杆</span>
        </h2>
        <p className="text-slate-500 max-w-2xl leading-relaxed">
          我们的数据中台已具备极高的成熟度——全域数据已然打通，BI 与 AI 工具链也已就绪。现在的核心战略不再是“建烟囱”，而是<strong>释放中台基建红利，将强大的数据能力直接赋能给听得见炮火的一线</strong>。
        </p>
      </div>

      {/* Maturity Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 flex items-center gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
            <Database size={32} />
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">基建就绪 01</div>
            <h3 className="text-lg font-bold text-white mb-2">数据全面性 (OneData)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              核心业务数据（财务、运单、CRM、人资）已实现 100% 融通，告别数据孤岛，底层指标字典统一规范。
            </p>
          </div>
        </div>
        <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 flex items-center gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0">
            <Cpu size={32} />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">基建就绪 02</div>
            <h3 className="text-lg font-bold text-white mb-2">工具链成熟度 (Toolchain)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              从拖拽式自助 BI 到基于大模型的智能数据问答（Data Chat），赋能一线的工具武器库已装配完毕。
            </p>
          </div>
        </div>
      </div>

      {/* Before vs After Case Study */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Target className="text-blue-600" size={24} />
            一线赋能案例：某大区“客户毛利异常”排查
          </h3>
          <div className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
            效率对比实录
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Before */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 space-y-8 relative bg-slate-50/50">
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <XCircle size={16} /> 过去：无中台时代 (人肉取数)
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-slate-200">
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-slate-50" />
                <div className="font-bold text-sm text-slate-700">1. 需求方提单排期</div>
                <p className="text-xs text-slate-500 mt-1">提工单申请数据，排队等待 IT 资源分配。</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-slate-50" />
                <div className="font-bold text-sm text-slate-700">2. 跨系统手工找表</div>
                <p className="text-xs text-slate-500 mt-1">数据人员分别去 CRM、财务、运单系统写 SQL 关联数据。</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-slate-50" />
                <div className="font-bold text-sm text-slate-700">3. 离线跑批对账</div>
                <p className="text-xs text-slate-500 mt-1">T+1 跑批，人工核对口径，发现数据对不上再重跑。</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-slate-50" />
                <div className="font-bold text-sm text-slate-700">4. 交付静态 Excel</div>
                <p className="text-xs text-slate-500 mt-1">交付死数据，需求方想下钻看明细？对不起，重新提单。</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-700">3-5 天</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">交付周期</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                <div className="text-2xl font-bold text-red-500">0%</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">业务自主率</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-8 md:p-12 space-y-8 relative bg-blue-50/30">
            <div className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle size={16} /> 现在：中台赋能时代 (自助分析)
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-blue-200">
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-blue-50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-bold text-sm text-blue-900">1. 业务自助接入</div>
                <p className="text-xs text-blue-700/70 mt-1">一线人员直接打开自助 BI 或 AI 数据助手。</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-blue-50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-bold text-sm text-blue-900">2. 调用中台统一模型</div>
                <p className="text-xs text-blue-700/70 mt-1">底层 OneData 模型已就绪，指标口径唯一，开箱即用。</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-blue-50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-bold text-sm text-blue-900">3. 实时多维钻取</div>
                <p className="text-xs text-blue-700/70 mt-1">秒级响应，任意拖拽“区域、产品、客户”维度进行交叉分析。</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-blue-50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-bold text-sm text-blue-900">4. 洞察直达决策</div>
                <p className="text-xs text-blue-700/70 mt-1">直接定位到某几个 KA 客户的运价折扣异常，当天下达调整指令。</p>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-100 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-blue-100 text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600">5 分钟</div>
                <div className="text-[10px] text-blue-400 uppercase font-bold mt-1">交付周期</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-blue-100 text-center shadow-sm">
                <div className="text-2xl font-bold text-emerald-500">80%+</div>
                <div className="text-[10px] text-emerald-600/70 uppercase font-bold mt-1">业务自主率</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Transition Banner */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">数据人员的价值跃迁</h3>
            <p className="text-sm text-slate-400">中台包揽了脏活累活，我们的战场在哪里？</p>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="flex-1 md:flex-none p-5 bg-white/5 rounded-2xl border border-white/10 text-center space-y-2">
              <div className="w-10 h-10 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                <Database size={18} />
              </div>
              <div className="text-sm font-bold text-slate-300">取数工具人</div>
              <div className="text-[10px] text-slate-500">关注“怎么把数据跑出来”</div>
            </div>
            
            <div className="text-blue-400 animate-pulse shrink-0">
              <ArrowRight size={32} />
            </div>
            
            <div className="flex-1 md:flex-none p-5 bg-blue-600/20 rounded-2xl border border-blue-500/30 text-center space-y-2 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Brain size={18} />
              </div>
              <div className="text-sm font-bold text-blue-300">业务架构师 / 赋能者</div>
              <div className="text-[10px] text-blue-200/70">关注“怎么用数据打赢仗”</div>
            </div>
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
              <p className="text-sm text-slate-500">需求方初步怀疑是“华南区销售不力”。</p>
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

function OpportunitySection({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="space-y-12 relative">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <Target size={14} />
            Our Opportunities
          </div>
          <h2 className="text-4xl font-bold text-slate-900">
            我们的机会点：<br />
            <span className="text-blue-600">重塑科技与业务的生产关系</span>
          </h2>
        </div>
        
        <button 
          onClick={onNavigate}
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Sparkles size={18} className="relative z-10 text-blue-400 group-hover:text-white transition-colors" />
          <span className="relative z-10">燎原计划v1.0</span>
          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="space-y-8">
        {/* Point 1 & 3 in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Point 1 */}
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 hover:border-indigo-200 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold">1. 知识工程：沉淀全员 Skills 库</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              “知识工程”专项不能仅停留在数据层面。我们需要将<strong>数据、前端、后端、产品</strong>全链路的隐性经验显性化。
            </p>
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 border-l-4 border-indigo-400">
              把现在员工脑子里的“业务直觉”和“技术套路”，按照统一规范沉淀成 AI 可调用的 <strong>Skills 技能库</strong>，让个人能力转化为组织的数字资产。
            </div>
          </div>

          {/* Point 3 */}
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 hover:border-amber-200 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">3. 全员创造：建立创造力工坊</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              全员创造，不仅于此刻，此人。凡是结合业务痛点与新技术（如大模型）有爆破点的想法，全员皆可参与。
            </p>
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 border-l-4 border-amber-400">
              <strong>机制：</strong>资源灵活配置，人人可以冲锋。鼓励创新试错，但强调<strong>短周期、高频次</strong>的实质性价值交付。
            </div>
          </div>
        </div>

        {/* Point 2: 听见炮火声 */}
        <div className="p-8 md:p-12 bg-slate-900 rounded-[40px] text-white space-y-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <Target className="text-blue-400" size={32} />
              2. 让数据听见炮火声：深耕一线阵地
            </h3>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              走出总部的“象牙塔”，把数据武器直接交到一线听得见炮火的指挥员手里，用业绩证明价值。
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 transition-all">
              <div className="text-blue-400 font-bold text-lg">01 发挥人际连接力</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                依托团队 25 年沉淀的无可比拟的业务人际网络，直接打通与一线分公司（如物流）的信任桥梁，这是我们独有的护城河。
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 transition-all">
              <div className="text-blue-400 font-bold text-lg">02 下沉最小价值单元</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                拒绝闭门造车！深入业务源头场景，与一线业务员同吃同住同劳动，挖掘连他们自己都没意识到的真实痛点。
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 transition-all">
              <div className="text-blue-400 font-bold text-lg">03 打造“一击必杀”标杆</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                集中优势兵力，在 1-2 个核心分公司打出直接可见的业绩增长（降本/增效/提润），用真金白银的战绩为数据正名。
              </p>
            </div>
          </div>

          {/* AI Empowerment Chart */}
          <div className="relative z-10 p-8 bg-white/5 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">地区 AI 与技术能力赋能</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                地区对技术的认知仍停留在“工业时代”，对遥遥领先的 AI 知之甚少。我们需要将地区的整体技术与 AI 能力从 30 分拉升至 60 分及格线。
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300"><CheckCircle size={14} className="text-emerald-400"/> AI 工具使用教学（Prompt 编写、数据对话）</div>
                <div className="flex items-center gap-2 text-xs text-slate-300"><CheckCircle size={14} className="text-emerald-400"/> 基础数据开发赋能（自助取数、低代码）</div>
                <div className="flex items-center gap-2 text-xs text-slate-300"><CheckCircle size={14} className="text-emerald-400"/> 业务分析思维培养（从看报表到找根因）</div>
              </div>
            </div>
            <div className="p-8 bg-slate-950/50 rounded-3xl space-y-8 relative border border-slate-800/50">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Target size={16} className="text-blue-400" />
                地区数据能力演进路线
              </div>
              <div className="relative mt-8">
                {/* Connecting Line */}
                <div className="absolute top-7 left-[16%] right-[16%] h-1 bg-slate-800 rounded-full" />
                <motion.div 
                  initial={{ width: '0%' }}
                  whileInView={{ width: '34%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="absolute top-7 left-[16%] h-1 bg-blue-500 rounded-full z-0" 
                />
                <motion.div 
                  initial={{ width: '0%' }}
                  whileInView={{ width: '34%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                  className="absolute top-7 left-[50%] h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full z-0" 
                />

                <div className="relative flex justify-between z-10">
                  {/* Stage 1 */}
                  <div className="flex flex-col items-center w-1/3 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-slate-400 shadow-inner">
                      <FileText size={24} />
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">当前阶段</div>
                      <div className="text-sm font-bold text-white">工业时代</div>
                      <div className="text-xs text-slate-400 mt-2 leading-relaxed">
                        依赖手工 Excel 拼凑<br/>被动接收静态报表
                      </div>
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="flex flex-col items-center w-1/3 space-y-4">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="w-14 h-14 rounded-2xl bg-blue-900 border-4 border-slate-900 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                      <LayoutDashboard size={24} />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">科技赋能</div>
                      <div className="text-sm font-bold text-white">数字化时代</div>
                      <div className="text-xs text-blue-200/60 mt-2 leading-relaxed">
                        掌握 BI 工具链<br/>实现自助拖拽分析
                      </div>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="flex flex-col items-center w-1/3 space-y-4">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="w-14 h-14 rounded-2xl bg-emerald-900 border-4 border-slate-900 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    >
                      <Brain size={24} />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">终极目标</div>
                      <div className="text-sm font-bold text-white">智能时代</div>
                      <div className="text-xs text-emerald-200/60 mt-2 leading-relaxed">
                        AI 决策引擎辅助<br/>智能洞察与建议
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brainstorming */}
          <div className="relative z-10 p-6 bg-red-500/10 border border-red-500/20 rounded-3xl space-y-4">
            <h4 className="text-lg font-bold text-red-400 flex items-center gap-2">
              <HelpCircle size={20} />
              灵魂拷问 (Brainstorming)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-red-500/10 rounded-2xl text-sm text-red-200 leading-relaxed italic border border-red-500/10">
                “如果我们下周就要派一支 3 人突击队去物流分公司驻点，谁敢带队？我们要解决的第一个能直接影响他们利润的问题是什么？”
              </div>
              <div className="p-5 bg-red-500/10 rounded-2xl text-sm text-red-200 leading-relaxed italic border border-red-500/10">
                “一线业务员最讨厌我们现在提供的什么数据产品？为什么他们宁愿私下用 Excel 也不用我们花大力气做的系统？”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
