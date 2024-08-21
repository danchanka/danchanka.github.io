"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[76057],{44661:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=s(74848),n=s(28453);const r={title:"Scheduler"},c=void 0,d={id:"Scheduler",title:"Scheduler",description:"The scheduler is designed to automatically execute certain tasks with specified frequency.",source:"@site/versioned_docs/version-v4/Scheduler.md",sourceDirName:".",slug:"/Scheduler",permalink:"/v4/Scheduler",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Scheduler.md",tags:[],version:"v4",lastUpdatedAt:1620823281e3,frontMatter:{title:"Scheduler"},sidebar:"learn",previous:{title:"Process monitor",permalink:"/v4/Process_monitor"},next:{title:"Journals and logs",permalink:"/v4/Journals_and_logs"}},o={},h=[];function a(e){const t={code:"code",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The scheduler is designed to automatically execute certain tasks with specified frequency."}),"\n",(0,i.jsxs)(t.p,{children:["The scheduler is configured in the ",(0,i.jsx)(t.code,{children:"Administration > Scheduler > Tasks menu"}),". You can start the scheduler on this form by clicking ",(0,i.jsx)(t.code,{children:"Start scheduler"})," button and stop it by clicking ",(0,i.jsx)(t.code,{children:"Stop scheduler"})," (Fig. 7.11.). If the Server is specified in the system settings, then the scheduler can be launched from this server only (Fig. 1.)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(18453).A+"",width:"652",height:"321"})}),"\n",(0,i.jsx)(t.p,{children:"Fig. 1. Specifying a server to run the scheduler"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(53934).A+"",width:"652",height:"278"})}),"\n",(0,i.jsx)(t.p,{children:"Fig. 2. Scheduler start/stop"}),"\n",(0,i.jsxs)(t.p,{children:["This form determines the composition of Tasks \u2013 buttons ",(0,i.jsx)(t.code,{children:"Add"}),", ",(0,i.jsx)(t.code,{children:"Delete"}),".  The scheduler will execute only active Tasks \u2013 ",(0,i.jsx)(t.code,{children:"Active"})," mark. For each task the following required parameters are set:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Start date"})," \u2013 the task will be executed only after the specified date. The time in this field is not tied to the start date; it is tied to the current date and indicates the time of the first task launch within a day. The task repetition is counted from this time. The frequency is set in the ",(0,i.jsx)(t.code,{children:"Repeat every (seconds)"})," field. If the period is more than a day (86400 seconds), then the starting date is the date of the server start (restart)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Repeat every (seconds)"})," \u2013 the task execution frequency."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Countdown"})," \u2013 indicates the time from which to count down the time for the repeated task: either ",(0,i.jsx)(t.code,{children:"From the end of the previous"})," or ",(0,i.jsx)(t.code,{children:"From the start of the previous"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Also, the optional parameters can be specified:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Time from"}),"/",(0,i.jsx)(t.code,{children:"Time to"})," \u2013 time limit for the task execution within 24 hours."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Execute at start"})," \u2013 the task is performed only when the server is started (restarted)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For each task the following buttons are available:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Execute task"})," - executes the task manually. The task runs immediately on the button click. If the task is not completed when the button is pressed, it will be launched twice."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Restart task"})," - executes the task manually. The task runs immediately on the button click. If the task is not completed when the button is pressed, it will be stopped and restarted."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Delete"})," - deletes the task."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Tabs on the ",(0,i.jsx)(t.code,{children:"Tasks"})," form:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"Properties"})," tab lists the actions included in the selected task. The sequence of actions is determined by the values in the ",(0,i.jsx)(t.code,{children:"Order"})," field from the smallest to the largest. Only actions with the ",(0,i.jsx)(t.code,{children:"Active"})," mark are executed. The ",(0,i.jsx)(t.code,{children:"Ignore errors"})," mark allows you to run the action despite the error that occurred in the previous action, otherwise, the current action will not start. An action can be implemented either by built-in commands (the list of commands appears on clicking the ",(0,i.jsx)(t.code,{children:"Action"})," field) or user-created scripts \u2013 the ",(0,i.jsx)(t.code,{children:"Script"})," field. Some built-in actions require input parameters (usually numeric) which are entered in the ",(0,i.jsx)(t.code,{children:"Action parameter"})," field. In the ",(0,i.jsx)(t.code,{children:"Perform no longer than (seconds)"})," field the maximum acceptable duration for the execution of this action is indicated. If the action is not completed within the specified period, the system considers it an error."]}),"\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.code,{children:"Log"})," tab the results of the action, when it started and finished, can be traced. If an error preventing the action from being completed has occurred during its execution, then it is marked in the ",(0,i.jsx)(t.code,{children:"Error"})," field in the log. Some actions are accompanied by informational messages \u2013 mark in the ",(0,i.jsx)(t.code,{children:"Messages"})," field. If the log has a mark in the ",(0,i.jsx)(t.code,{children:"Error in messages"})," field, this means that during the execution inconsistencies with some of the program constraints were found. All errors and messages are followed by notes in the ",(0,i.jsx)(t.code,{children:"Client messages"})," section (Fig. 3.)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(18848).A+"",width:"651",height:"151"})}),"\n",(0,i.jsx)(t.p,{children:"Fig. 3. Scheduler log."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the task is run once every few days, then on the ",(0,i.jsx)(t.code,{children:"Filter by day"})," tab you can specify either the days of the week or days of the month on which the task should be started. If both the days of the week and days of the month are specified, then the task will be executed only on those days of the month that fall on the specified days of the week (Fig. 4.)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(84111).A+"",width:"652",height:"248"})}),"\n",(0,i.jsx)(t.p,{children:"Fig. 4. Setting filter by day."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.code,{children:"Scheduler settings"})," tab the maximum number of threads (tasks) that can be executed simultaneously is specified. If the number of threads is not specified, then, by default, up to 5 tasks can be executed simultaneously."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},18848:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Scheduler_log-bdd9dc6ffb3fd52e2a5b87a50c3525ad.png"},18453:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Scheduler_server-735f5ea0a1790692554314fc84d716d4.png"},53934:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Scheduler_start-7610a81749792a2ddf40b34cedc593fd.png"},84111:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Scheduler_time-347134b40d674f88f506bfb84f7a0816.png"},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var i=s(96540);const n={},r=i.createContext(n);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);