
window.alert("alert")
window.confirm("Confirm") //true or false
window.prompt("Warning") //I would write
alert("Jon")

const $btnOpen = document.getElementById("open-window"),
    $btnClose = document.getElementById("close-window"),
    $btnPrint = document.getElementById("print-window")

let w

$btnOpen.addEventListener("click", e=> {
    w = window.open("https://jonmircha.com")
})
$btnClose.addEventListener("click", e=> {
    //window.close()
    w.close()
})

$btnPrint.addEventListener("click", e=> {
    window.print()
})
