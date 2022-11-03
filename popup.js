(async function() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const sendMessage = (command) => {
        return chrome.tabs.sendMessage(tabs[0].id, {command});
    }

    document.getElementById('btnSortTableByOwner').addEventListener('click', async () => {
        await sendMessage('btnSortTableByOwner');
    });
}());
