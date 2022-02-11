console.log($('#showVR'))

$('#showVR').on('click', e => {
    $('#scene').show()
    $('#image360').hide()
})

$('#showImage').on('click', e => {
    $('#scene').hide()
    $('#image360').show()
})