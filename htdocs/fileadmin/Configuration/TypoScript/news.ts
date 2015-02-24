lib.news = USER
lib.news {
    userFunc = tx_extbase_core_bootstrap->run
    extensionName = News
    pluginName = Pi1

    switchableControllerActions {
        News {
            1 = list
        }
    }

    settings < plugin.tx_news.settings
    settings {
        //categories = 49
        limit = 30
        detailPid = 8
        overrideFlexformSettingsIfEmpty := addToList(detailPid)
        startingpoint = 9
    }
}