window.__FRAME_PREAMBLE={"v":1,"cred":"cookie","capabilities":{
                "artifact":"artifact.w_ePPE-a.js","assets":"assets.DOAjpBS9.js","comments":"comments.BcqPhVn7.js","db":"db.zFlAA4qL.js","dictation":"dictation.f3j7VXQ8.js","downloads":"downloads.axDW2QAi.js","embed":"embed.SWCZLzn6.js","endpoints":"endpoints.BPfoKaE1.js","files":"files.IkpCjcgM.js","mcp":"mcp.kl0G36TA.js","network":"network.B5UA9Su4.js","permissions":"permissions.6yWoDecA.js","reads":"reads.Bgov9hIw.js","room":"room.Dy3vHyq9.js","sample":"sample.D5wHJkl_.js","self":"artifact.w_ePPE-a.js","user":"user.CB0zJsP2.js"
                }
                ,"transforms":"_transforms.DF0fPd9f.js","comments":"_comments.CVOoGJSh.js","translate":"_translate.DqxC5ek1.js","ldx":"_ldx.B4FSryPi.js"
                }   

        var Q=[
            {q:"Ciao vitaaa, mh.. Domanda:",s:"Nel Plettro che ti ho dato c'era scritto qualcosa, cosa?",a:["Le Nostre Iniziali",'"Ti amo"',"Una data",'"Scusa"'],c:0,f:"Esatto, menomale che l'ho fatto"},
            {q:"Vabbe, quella era semplice.. Andiamo hard:",s:"Chi cucina meglio?",a:["Nessuno dei due, Ovvio","Nina","Manu","Troppo semplice, entrambi"],c:2,f:"MI SEMBRA OVVIO CHE SONO IO"},
            {q:"OH.. BASTA EH, MO VERO HARD",s:"Quale soprannome ti do più spesso?",a:["Dura","Scema","Amore","Nina"],c:2,f:"Anche se non vorrei proprio chiamarti ma girarmi e averti qui..."},
            {q:"Vabbe oh, Mi arrendo",s:"Il primo piatto che ti ho cucinato è:",a:["Pasta con salmone","Un Dolce","Non ho cucinato","Pollo e Bastoncini"],c:3,f:"Che fucking Cuoco eh hahaha"},
            {q:"Vabbe dai, questa è facile",s:"Il primo regalo che ti ho fatto è:",a:["Suonare per te","Una lettera","Un sito","Dei lego"],c:0,f:"Obbligato ma si.. "},
            {q:"Bello il giochino fin'ora?",s:"La prima cosa che ti ho detto quando ci siamo visti:",a:["Ti amo","Ciao nana","Sei bellissima","Ma chi sei?"],c:1,f:"Non dimenticherò mai quell'abbraccio..."},
            {q:"Le domande stanno per finire, sicura che sei pronta?",s:"Giorno 19/08/2026 ti ho dato qualcosa di unico:",a:["Un lego","Una Felpa","Una rosa","Dei lego"],c:2,f:"Di un colore leggero che ricorda la calma, proprio come te<3"},
            {q:"Penultima domanda, non ti preoccupare",s:"Il primo film che abbiamo visto insieme è:",a:["Non lo abbiamo visto","La forma della voce","Un passo dal cielo","Era un anime"],c:2,f:"Uno dei miei preferiti, e tu mi hai odiato per avertelo fatto vedere"},
            {q:"Ultima domanda. MA LA PIU IMPORTANTE",s:"La cosa che mi piace di piu di te è:",a:["Occhi","Culo (mhh, bello)","Carattere","Viso"],c:2,f:"Merda, so che stavi pensando a 'culo' ma no... Il tuo carattere mi ha preso, è unico<3"}
            ];
            var i=0,s=0,el=document.getElementById('screen');
            function show(){
                if(i>=Q.length)
                    {var p=Math.round(s/Q.length*10);
                el.innerHTML='<section class="result"><h2>Bravaaaa hai finitooo</h2><p class="score">'+s+'/'+Q.length+'</p><p class="result-message">Qualunque sia il punteggio, per me hai già vinto, sono tuo...</p><div class="surprise"><strong>Sorpresa:</strong> |Buono Per Fare Tutto Quello Che Vuoi|</div><button class="btn" onclick="i=0;s=0;show()">Rigioca</button></section>';return}
                var d=Q[i];
                el.innerHTML='<div class="progress"><div class="progress-bar" style="width:'+(i/Q.length*100)+'%"></div></div><p class="question-count">Domanda '+(i+1)+' di '+Q.length+'</p><section class="question-card"><h2 class="question-text">'+d.q+'</h2>'+(d.s?'<p class="question-subtitle">'+d.s+'</p>':'')+'<div class="answers">'+d.a.map(function(t,k){return '<button class="answer" data-k="'+k+'">'+t+'</button>'}).join('')+'</div><div id="fb"></div></section>';
                el.querySelectorAll('.answer').forEach(function(b){
                    b.onclick=function(){
                        var k=+b.dataset.k;
                        if(k===d.c)
                        s++;
                        el.querySelectorAll('.answer').forEach(function(x,j){x.disabled=true;
                            if(j===d.c)
                            x.classList.add('correct');
                            else if(x===b)
                            x.classList.add('wrong')});
                        document.getElementById('fb').innerHTML='<p class="feedback">'+d.f+'</p><button class="btn btn-block" id="nx">'+(i+1<Q.length?'Prossima domanda':'Vedi il risultato')+'</button>';
                        document.getElementById('nx').onclick=function(){i++;show()}
                    }
                })
            }
            show();