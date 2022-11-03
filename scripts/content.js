const btnSortTableByOwner = () => {
    console.log('btnSortTableByOwnered');

    // select links from DOM
    const links = $('.pipeline-schedule-table-row');
    const linksParent = $('.table.ci-table tbody');

    // detach links and sort
    links.detach().sort((a, b) => {
        const aInnerText = $(a).find('.gl-avatar + a').text()
        const bInnerText = $(b).find('.gl-avatar + a').text()

        if (aInnerText < bInnerText) return -1;
        if (aInnerText === bInnerText) return 0;
        if (aInnerText > bInnerText) return 1;
    });

    //reattach links
    links.appendTo(linksParent);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.command) {
            case 'btnSortTableByOwner': btnSortTableByOwner();
        }

        sendResponse('success');
    }
);
