
const DESKS={distributor:{label:"Become a distributor",desk:"Commercial — Distribution"},
 supplier:{label:"Supply to Stallion",desk:"Group Procurement"},
 invest:{label:"Partnership & investment",desk:"Corporate Development"},
 careers:{label:"Careers",desk:"Group Talent"},press:{label:"Press & media",desk:"Corporate Communications"}};
const DIVS=["Agriculture","Fish & Cold Chain","Automobiles","Auto Assembly","Steel & Mines","Packaging & Plastics","Logistics","FMCG Distribution","Business Solutions","Stallion.AI","Group-level"];
let st={};
function chatEl(){return document.getElementById('chat')}
function push(c,t){const d=document.createElement('div');d.className='msg '+c;d.textContent=t;chatEl().appendChild(d);chatEl().scrollTop=1e5}
function opts(l,cb){const w=document.createElement('div');w.className='opts';
 l.forEach(o=>{const b=document.createElement('button');b.textContent=o;b.onclick=()=>{w.remove();push('me',o);cb(o)};w.appendChild(b)});
 chatEl().appendChild(w);chatEl().scrollTop=1e5}
function toggleBot(){const b=document.getElementById('bot');b.classList.toggle('open');if(b.classList.contains('open')&&!chatEl().children.length)start()}
function openBot(i){document.getElementById('bot').classList.add('open');chatEl().innerHTML='';st={};start(i)}
function start(i){push('bot','Welcome to Stallion Group. I direct enquiries to the right desk — normally answered within one business day.');
 if(i){st.intent=i;push('me',DESKS[i].label);askDiv()}
 else{push('bot','How can we help?');opts(Object.values(DESKS).map(d=>d.label),l=>{st.intent=Object.keys(DESKS).find(k=>DESKS[k].label===l);askDiv()})}}
function askDiv(){push('bot','Which part of the group does this concern?');opts(DIVS,d=>{st.div=d;ask('name','Your name?')})}
function ask(f,q){st.aw=f;push('bot',q)}
function sendInput(){const i=document.getElementById('inp'),v=i.value.trim();if(!v||!st.aw)return;i.value='';push('me',v);st[st.aw]=v;
 if(st.aw==='name')ask('org','Your company or organisation?');
 else if(st.aw==='org')ask('email','The best email to reach you?');
 else if(st.aw==='email')ask('note','Briefly — what would you like to discuss?');
 else{st.aw=null;finish()}}
function finish(){const d=DESKS[st.intent]||DESKS.invest;
 push('bot',`Thank you, ${st.name}. Your enquiry has been directed to ${d.desk} — ${st.div}. You will hear from us within one business day.`);
 const s=encodeURIComponent(`[Website] ${d.label} — ${st.div} — ${st.org}`);
 const b=encodeURIComponent(`Name: ${st.name}\nOrganisation: ${st.org}\nEmail: ${st.email}\nDivision: ${st.div}\nDesk: ${d.desk}\n\n${st.note}`);
 opts(['Send now'],()=>{location.href=`mailto:contact@stalliongroup.com?subject=${s}&body=${b}`})}
