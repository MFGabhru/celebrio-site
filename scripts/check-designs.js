#!/usr/bin/env node
/* Checks the rule in TASTE.md: every design is a unique layout + palette + ornament,
   every reference resolves, and Magic invite returns four different options.
   Run: node scripts/check-designs.js   (no dependencies) */
var fs=require('fs'),path=require('path');
var html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
var a=html.indexOf('/* ===== Card system:'),b=html.indexOf('var POSTS=[');
if(a<0||b<0){console.error('Could not find the card system in index.html');process.exit(2)}
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
eval(html.slice(a,b));
var problems=[],seen={},n=0,perCat=[],tags={};
CAT_ORDER.forEach(function(k){
  CATS[k].i.forEach(function(it,i){
    n++;var d=designFor(k+'-'+i),key=[d.layout,d.pal,d.orn].join('+');
    if(seen[key])problems.push('duplicate '+key+': '+seen[key]+' and '+k+'-'+i);seen[key]=k+'-'+i;
    if(!LAYOUTS[d.layout])problems.push(k+'-'+i+' unknown layout '+d.layout);
    if(!PAL[d.pal])problems.push(k+'-'+i+' unknown palette '+d.pal);
    if(!ORN[d.orn])problems.push(k+'-'+i+' unknown ornament '+d.orn);
    if(!FONTS[d.font])problems.push(k+'-'+i+' unknown font '+d.font);
    if(!TEXTURES[d.tex])problems.push(k+'-'+i+' unknown texture '+d.tex);
    if(!BORDERS[d.border])problems.push(k+'-'+i+' unknown border '+d.border);
    try{if(cardHtml({id:k+'-'+i}).indexOf('<article')!==0)problems.push(k+'-'+i+' did not render')}catch(e){problems.push(k+'-'+i+' threw '+e.message)}
    tags[k]=tags[k]||{};tags[k][d.tag]=(tags[k][d.tag]||0)+1;
  });
  perCat.push(CATS[k].n+' '+CATS[k].i.length);
});
var used={L:{},O:{}};Object.keys(seen).forEach(function(t){var p=t.split('+');used.L[p[0]]=1;used.O[p[2]]=1});
var magicBad=0,magicRuns=0;
OCC.forEach(function(g){g[1].forEach(function(o){['','Sam'].forEach(function(nm){
  magicRuns++;var set=draftSet(parseMagic({ev:'',occ:o[0],names:nm}),TONES,o[0]+nm);
  var L={},H={};set.forEach(function(s){L[s.layout]=1;H[hnorm(s.h)]=1});
  if(set.length!==4||Object.keys(L).length!==4||Object.keys(H).length!==4){magicBad++;problems.push('magic '+o[0]+(nm?' with a name':'')+': options not distinct')}
})})});
console.log(n+' designs in '+CAT_ORDER.length+' occasions: '+perCat.join(', '));
console.log(Object.keys(LAYOUTS).length+' layout families ('+Object.keys(used.L).length+' used), '+Object.keys(ORN).length+' ornaments ('+Object.keys(used.O).length+' used), '+Object.keys(PAL).length+' palettes, '+Object.keys(FONTS).length+' type pairings');
console.log('Unique layout+palette+ornament combinations: '+Object.keys(seen).length+' of '+n);
console.log('Magic invite: '+(magicRuns-magicBad)+' of '+magicRuns+' occasion runs gave 4 distinct layouts and headlines');
if(process.argv.indexOf('--tags')>0)CAT_ORDER.forEach(function(k){console.log('  '+CATS[k].n+': '+Object.keys(tags[k]).map(function(t){return t+' '+tags[k][t]}).join(', '))});
if(problems.length){console.log('\nFAIL\n'+problems.join('\n'));process.exit(1)}
console.log('PASS');
