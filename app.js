//getElementById
let date = new Date();
console.log(date);
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleString();


//getElementsByTagName
let list = document.getElementsByTagName('a');
console.log(list);
for(let i = 0; i < list.length; i++){
  console.log(list.item(i).href);
}


//getElementsByName
let name = document.getElementsByName('email');
console.log(name);
console.log(name[0].value);


//getElementsByClassName
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);
for(let i = 0; i < fuga.length; i++){
  //console画面に、fugaの要素、(1,2,3)を表示してください。
  console.log(fuga[i].textContent);
  console.log(fuga.item(i).textContent);
}

//querySelector
//文章まとめて送る
let tako = document.querySelector('#tako .ika');
console.log(tako);
console.log(tako.tagName);
console.log(tako.textContent);

//宿題
console.log('宿題');

function sendValue(){
  // value値を取得する
  let result = document.getElementByName('email').value;
  let tagp = document.createElement('p');
  let textp = document.createTextNode(result);
   document.body.appendChild(tagp).appendChild(textp);
}

//1.メソッド用意する。
//2.メソッドの中に絶対実行されるであろう処理を書く。
//3.取得したい値を取得してconsole
//4.pタグに格納して出力













