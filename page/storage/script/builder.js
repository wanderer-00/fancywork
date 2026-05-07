let cluster = document.getElementById('cluster');

const storage = [
    'obsidian',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

for( i=0; i<storage.length; i++ ) {
    cluster.innerHTML += `
        <div class="box">
            <h2>NAME</h2>
            <div class="img"></div>
            <a href="#">SVG</a>
            <a href="#">DST</a>
        </div>
    `;
};