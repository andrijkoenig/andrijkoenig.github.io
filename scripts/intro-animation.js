let header = document.querySelector('#intro');
let anim = [
{ t: " ", ms: 200 },
{ t: "_", ms: 200 },
{ t: " ", ms: 200 },
{ t: "_", ms: 200 },
{ t: "A_", ms: 100 },
{ t: "An_", ms: 100 },
{ t: "And_", ms: 100 },
{ t: "Andr_", ms: 100 },
{ t: "Andri_", ms: 100 },
{ t: "Andrij_", ms: 100 },
{ t: "Andrij _", ms: 100 },
{ t: "Andrij K_", ms: 100 },
{ t: "Andrij Kö_", ms: 100 },
{ t: "Andrij Kön_", ms: 100 },
{ t: "Andrij Köni_", ms: 100 },
{ t: "Andrij König", ms: 100 },
];

let i = 0;
let update = () => {
let step = anim[i];
header.innerText = step.t;
i++;

if (i < anim.length)
    setTimeout(update, step.ms / 1);
else {
    header.classList.add('top');
    setTimeout(() => {
        document.getElementsByTagName('main')[0].style.opacity = 1;
    }, 500);
}
}
update();