var dialog = document.querySelector('dialog')
document.querySelector(
    '#openDialog'
).onclick = function() {
    dialog.show() // Показываем диалоговое окно
}
document.querySelector(
    '#closeDialog'
).onclick = function() {
    dialog.close() // Прячем диалоговое окно
}