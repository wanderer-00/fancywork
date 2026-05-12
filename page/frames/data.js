// данные
// синтаксис: форма (0=круг, 1=квадрат) | размер | колличество
// const array = [
//     [0,     90,     3],
//     [0,     128,    3],
//     [0,     168,    2],
//     [0,     208,    3],
//     [1,     290,    1],
//     [1,     295,    3],
//     [1,     395,    2]
// ];

const array = [
    [1,     395,    2],
    [1,     295,    3],
    [1,     290,    1],
    [0,     208,    3],
    [0,     168,    2],
    [0,     128,    3],
    [0,     90,     3],
];

let past = document.getElementById('cluster');

cluster.innerHTML += `
    <div class="card" style="width: 900px; height: 400px">
        <div>
            <div>400x900</div>
            <div>mm</div>
        </div>
        <div>1</div>
    </div>
`;

for( i=0; i<array.length; i++ ){
    let form = array[i][0];
    let size = array[i][1];
    let count = array[i][2];

    if( form == 0){
        cluster.innerHTML += `
            <div class="card circle" style="width: ${size}px">
                <div>
                    <div>${size}x${size}</div>
                    <div>mm</div>
                </div>
                <div>${count}</div>
            </div>
        `
    } else {
        cluster.innerHTML += `
            <div class="card" style="width: ${size}px; height: ${size}px">
                <div>
                    <div>${size}x${size}</div>
                    <div>mm</div>
                </div>
                <div>${count}</div>
            </div>
        `
    };
};