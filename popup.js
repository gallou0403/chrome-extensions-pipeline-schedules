(async function() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const sendMessage = (command) => {
        return chrome.tabs.sendMessage(tabs[0].id, {command});
    }

    document.getElementById('btnSortTableByOwner').addEventListener('click', async () => {
        await sendMessage('btnSortTableByOwner');
    });
}());
//
// (function() {
//     const sendMessage = (command) => {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {command}, function (result) {
//                 console.log(result)
//             });
//         });
//     }
//
//     document.getElementById('btnSortTableByOwner')
//         .addEventListener('click', sendMessage.bind(null, 'btnSortTableByOwner'))
// }());
