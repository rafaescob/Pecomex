const login = document.querySelector('#login');
const app = document.querySelector('#app');
const modal = document.querySelector('#modal');
const titles = {resumen:'Buenos dias, Rafael',campanas:'Campanas',objetivos:'Objetivos y KPIs',finanzas:'Impacto financiero',equipo:'Equipo',ia:'Nexo IA'};

document.querySelectorAll('.roles button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.roles button').forEach(item=>item.classList.remove('active'));button.classList.add('active')}));
document.querySelector('#loginForm').addEventListener('submit',event=>{event.preventDefault();login.classList.add('hidden');app.classList.remove('hidden')});
document.querySelector('#logout').addEventListener('click',()=>{app.classList.add('hidden');login.classList.remove('hidden')});

function showView(id){document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.id===id));document.querySelectorAll('.nav').forEach(item=>item.classList.toggle('active',item.dataset.view===id));document.querySelector('#pageTitle').textContent=titles[id];window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>showView(button.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>showView(button.dataset.go)));

const investment=[27,35,31,42,39,48,53,51,64,58,68,72];
const revenue=[48,55,61,66,72,78,91,85,106,112,126,138];
document.querySelector('#chart').innerHTML=investment.map((value,index)=>`<div class="bar-set"><i class="bar blue" style="height:${value}%" title="Inversion"></i><i class="bar green" style="height:${revenue[index]}px" title="Ingresos"></i></div>`).join('');

document.querySelector('#newCampaign').addEventListener('click',()=>modal.classList.remove('hidden'));
document.querySelector('.close').addEventListener('click',()=>modal.classList.add('hidden'));
modal.addEventListener('click',event=>{if(event.target===modal)modal.classList.add('hidden')});
document.querySelector('#campaignForm').addEventListener('submit',event=>{event.preventDefault();modal.classList.add('hidden');showView('campanas')});

const aiForm=document.querySelector('#aiForm');
aiForm.addEventListener('submit',event=>{event.preventDefault();const input=document.querySelector('#aiInput');if(!input.value.trim())return;const messages=document.querySelector('#messages');messages.insertAdjacentHTML('beforeend',`<div class="user-message">${input.value.replace(/[<>]/g,'')}</div><div class="bot">Segun los resultados actuales, Meta Ads ofrece la mejor oportunidad: genera Gs. 4,60 por cada guarani invertido. Recomiendo aumentar gradualmente su presupuesto y verificar el costo de adquisicion durante los proximos 7 dias.</div>`);input.value='';messages.scrollTop=messages.scrollHeight});
document.querySelectorAll('.suggestions button').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#aiInput').value=button.textContent;aiForm.requestSubmit()}));

