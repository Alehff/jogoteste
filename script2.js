
let oxe= 0;
let ids = 10;

let hr = 0;
let min = 0;
let seg = 31;
let tempor = 1000;
let pl = 0;
let recipeState = 0;
let score = 0 ;
let valor1 = document.querySelector('.pergaminho');
let valor2 = document.querySelector('.pergaminho2');
let valor3 = document.querySelector('.pergaminho3');
let valort ;
const pergaminhos = [ {
    "src": 'pergaminho1-removebg-preview.png',
    "recipe": 'receita-vigor-removebg-preview.png',
    "id": 10,
    "value": 3
    
},
{
    "src": 'pergaminho2-removebg-preview.png',
    "recipe": 'receita-mana-removebg-preview.png',
    "id": 15,
    "value": 5
},
{
    "src": 'pergaminho3-removebg-preview.png',
    "recipe": 'receita-disciplina-removebg-preview.png',
    "id": 20,
    "value": 7
},
{
    "src": 'pergaminho4-removebg-preview.png',
    "recipe": 'receita-poder-removebg-preview.png',
    "id": 13,
    "value": 3
    
},
{
    "src": 'pergaminho5-removebg-preview.png',
    "recipe": 'receita-vida-removebg-preview.png',
    "id": 18,
    "value": 5
},
{
    "src": 'pergaminho6-removebg-preview.png',
    "recipe": 'receita-animacao-removebg-preview.png',
    "id": 24,
    "value": 7
}
]

function timer(){
    seg--;
    let format = (hr < 10 ? '0' + hr: hr) + ':' + (min < 10 ? '0' +min: min) + ':' + (seg < 10 ? '0' + seg: seg)
    $('.tiempo').text(format)
    if(seg == 0){
        playzim.pause()
        $('.pergaminho').hide();
        $('.pergaminho2').hide();
        $('.pergaminho3').hide();
        $('.mago').hide();
        $('.tiempo').hide();
        $('.calderon').hide();
        $('.fim').text('game over')
    }
}



//$('button').fadeOut("3000");

// $('#lista').sortable();


pegar("mago")
valor1.setAttribute("value", "3")
valor2.setAttribute("value", "5")
valor3.setAttribute("value", "7")
largar("calderon", "mago");
largarperg("pergaminho", "jon");
largarperg("pergaminho2", "jon");
largarperg("pergaminho3", "jon");


console.log(valor1.class)

function libera() {
    if (oxe == 7){
        novo = document.createElement('img');
        novo.src= '1.png';
        novo.classList.add('jon');
        novo.id= '11'
        pocao = document.querySelector('.potions')
        pocao.appendChild(novo);
        // let pocao = document.querySelector('.potions');
        // pocao.innerHTML = `<li><img src="1.png" class="jon" id=${ids}></li>`
        pegarpot('jon')
        ids++;
        oxe = 0;
        
    }
    else if (oxe == 4){
        novo = document.createElement('img');
        novo.src= '9.png';
        novo.classList.add('jon');
        novo.id= '14'
        pocao = document.querySelector('.potions')
        pocao.appendChild(novo);
        // let pocao = document.querySelector('.potions');
        // pocao.innerHTML = `<li><img src="1.png" class="jon" id=${ids}></li>`
        pegarpot('jon')
        ids++;
        oxe = 0;
        
    }
    else if (oxe == 13){
        novo = document.createElement('img');
        novo.src= '3.png';
        novo.classList.add('jon');
        novo.id= '16'
        pocao = document.querySelector('.potions')
        pocao.appendChild(novo);
        // let pocao = document.querySelector('.potions');
        // pocao.innerHTML = `<li><img src="1.png" class="jon" id=${ids}></li>`
        pegarpot('jon')
        ids++;
        oxe = 0;
        
    }
    else if (oxe == 18){
        novo = document.createElement('img');
        novo.src= '2.png';
        novo.classList.add('jon');
        novo.id= '19'
        pocao = document.querySelector('.potions')
        pocao.appendChild(novo);
        // let pocao = document.querySelector('.potions');
        // pocao.innerHTML = `<li><img src="1.png" class="jon" id=${ids}></li>`
        pegarpot('jon')
        ids++;
        oxe = 0;
        
    }
    else if (oxe == 21){
        novo = document.createElement('img');
        novo.src= '5.png';
        novo.classList.add('jon');
        novo.id= '21'
        pocao = document.querySelector('.potions')
        pocao.appendChild(novo);
        // let pocao = document.querySelector('.potions');
        // pocao.innerHTML = `<li><img src="1.png" class="jon" id=${ids}></li>`
        pegarpot('jon')
        ids++;
        oxe = 0;
        
    }
    else if (oxe == 27){
        novo = document.createElement('img');
        novo.src= '8.png';
        novo.classList.add('jon');
        novo.id= '25'
        pocao = document.querySelector('.potions')
        pocao.appendChild(novo);
        // let pocao = document.querySelector('.potions');
        // pocao.innerHTML = `<li><img src="1.png" class="jon" id=${ids}></li>`
        pegarpot('jon')
        ids++;
        oxe = 0;
        
    }
    
}





function pegar (arg){
    $(`.${arg}`).draggable({
        containment: "document",
        cursor: "grabbing",
        revert: 'invalid',
        helper: 'clone',
    });
}
function pegarpot (arg){
    $(`.${arg}`).draggable({
        containment: "document",
        cursor: "grabbing",
        revert: true
        
        
    });
}

function largar(arg, arg2){
    $( `.${arg}` ).droppable({
        accept: `.${arg2}`,
        drop: function( event, ui){
            let valor = parseInt(ui.draggable.attr("id"));
            oxe = oxe + valor;
            console.log(oxe)
            let audio = new Audio('Retro Blop StereoUP 04.wav');
            audio.play()
            libera();
            
        }
    });
}
function largarperg(arg, arg2){
    $( `.${arg}` ).droppable({
        accept: `.${arg2}`,
        drop: function( event, ui){
            let id = ui.draggable.attr("id");
            //let perg = document.querySelector(`.${arg}`);
            let pergid = $(`.${arg}`).attr("id")
            pergid++;
            console.log(pergid)
            console.log(id);
            //console.log(id2);
            if (pergid == id){
                ui.draggable.remove();
                $(`.${arg}`).fadeOut("3000")
                seg = seg + parseInt($(`.${arg}`).attr("value"));
                score = score + 300;
                let audio = new Audio('Retro Event UI 01.wav');
                audio.play()
                $('.score').text(`${score}`)
                $('.acrescimo').text(`+${parseInt($(`.${arg}`).attr("value"))}:00`)
                $('.acrescimo').show()
                $('.acrescimo').fadeOut(500)
                
                setTimeout( function(){
                    sorteio(`${arg}`)
                    $(`.${arg}`).fadeIn("3000")
                }, 5000);
            }


            
        }
    });
}
function sorteio(pergam) {
    let escolhido = parseInt(Math.random()*pergaminhos.length);
    let pergamus = pergaminhos[escolhido];
    console.log(pergamus)
    console.log(pergamus.src)

    let imagem = document.querySelector(`.${pergam}`);
    valort = document.querySelector(`.${pergam}`);
    console.log(valort.value)
    imagem.src = pergamus.src;
    imagem.id = pergamus.id;
    imagem.alt = pergamus.recipe;
    valort.setAttribute("value", `${pergamus.value}`)

    imgs = escolhido;
}
function showrecipe(recipeobj) {
    if (recipeState == 0){
        let olga = document.querySelector('.receita');
        let pergamim = document.querySelector(`.${recipeobj}`);
        console.log(pergamim.alt)
        olga.src= `${pergamim.alt}`
        $('.receita').fadeIn(200);
        recipeState++;
    }
    else{
        $('.receita').fadeOut(200);
        recipeState = 0;

    }


}
//$('.pergaminho').on( "click", console.log("agr vai"));
// $('.pergaminho2').onclick(showrecipe("pergaminho2"));
// $('.pergaminho3').onclick(showrecipe("pergaminho3"));

$('.pergaminho').hide();
$('.pergaminho2').hide();
$('.pergaminho3').hide();
$('.acrescimo').hide();
$('.mago').hide();
$('.receita').hide();




window.onclick = ( ()=>{
    if(pl == 0){
    playzim = new Audio('music1.wav');
    playzim.play();
    $('.pergaminho').fadeIn("3000");
    $('.pergaminho2').fadeIn("3000");
    $('.pergaminho3').fadeIn("3000");
    $('.mago').fadeIn("3000");
    $('.inicio').hide();
    
    setInterval(() => {timer()}, tempor);

    pl++;
    }

});
if(seg == 0){
    playzim.pause();
    $('.pergaminho').hide();
    $('.pergaminho2').hide();
    $('.pergaminho3').hide();
    $('.mago').hide();
    //$('.fim').append('game over');
}
