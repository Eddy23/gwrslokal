config {
    language = de
    htmlTag_langKey = de-DE
    locale_all = de_DE
    simulateStaticDocuments = 0
    baseURL = http://gwrslokal.de/
    tx_realurl_enable = 1
}

tmpl.meta {
    DESCRIPTION {
        data = TSFE:page|description
    }

    KEYWORDS {
        data = TSFE:page|keywords
        keywords = 1
    }
    viewport = width=device-width
    X-UA-Compatible = IE=edge,chrome=1
    X-UA-Compatible.httpEquivalent = 1
}

tmpl.einspaltig = FLUIDTEMPLATE
tmpl.einspaltig {
    template = FILE
    template.file = fileadmin/Resources/Private/Templates/Einspaltig.html
    partialRootPath = fileadmin/Resources/Private/Partials/
    layoutRootPath = fileadmin/Resources/Private/Layouts/
    variables {
        content < styles.content.get
    }
}

tmpl.zweispaltig < tmpl.einspaltig
tmpl.zweispaltig {
    template.file = fileadmin/Resources/Private/Templates/Zweispaltig.html
    variables.contentRight < styles.content.getRight
}

tmpl.startseite < tmpl.einspaltig
tmpl.startseite {
    template.file = fileadmin/Resources/Private/Templates/Startseite.html
}

tmpl.newsdetail < tmpl.einspaltig
tmpl.newsdetail {
    template.file = fileadmin/Resources/Private/Templates/Newsdetail.html
}

###########################################
# Logografik                              #
###########################################
lib.logo = IMAGE
lib.logo {
    file = fileadmin/Logo/logo_gwrs2.png
    #    file.width = 185
    #    file.height = 75
    altText = Logo GWRS Enzweihingen
    titleText = Logo GWRS Enzweihingen
    imageLinkWrap = 1
    imageLinkWrap {
        enable = 1
        typolink.parameter = 2
    }
}


###########################################
# Breadcrumb-Navigation                   #
###########################################
lib.breadcrumb = COA
lib.breadcrumb {
    10 = TEXT
    10.value = Sie befinden sich hier:&nbsp;
    20 = HMENU
    20 {
        special = rootline
        # Anzeige ab Ebene 1 bis unendlich
        special.range = 1 | -1
        # Versteckte Seite "Newsdetail" anzeigen, aber nicht die versteckte Seite uid=10
        includeNotInMenu = 1
        excludeUidList = 10
        1 = TMENU
        1 {
            NO = 1
            NO.doNotLinkIt = |*| 0 |*| 1
            NO.allWrap = |*| |&nbsp;&gt;&nbsp; |*| <span class="breadcrumbact">|</span>
        }
    }
}

###########################################
# Meta-Navigation                         #
###########################################
lib.metanavi = HMENU
lib.metanavi {
    special = directory
    special.value = 10
    1 = TMENU
    1 {
        expAll = 1
        wrap = <ul class="nav nav-pills"> | </ul>
        NO {
            wrapItemAndSub = <li role="presentation"> | </li>
            stdWrap.htmlSpecialChars = 1
            stdWrap.htmlSpecialChars.preserveEntities = 1
        }

        ACT < .NO
        ACT = 1
        ACT {
            wrapItemAndSub = <li class="active"> | </li>
        }
    }
}

###########################################
# Seiten-Navigation                         #
###########################################
lib.sidenavi = HMENU
lib.sidenavi {
    #    special = directory
    #    special.value = 13
    entryLevel = 0
    1 = TMENU
    1 {
        expAll = 0
        collapse = 0
        wrap = <ul class="nav navbar-nav"> | </ul>
        NO {
            wrapItemAndSub = <li> | </li>
            stdWrap.htmlSpecialChars = 1
            stdWrap.htmlSpecialChars.preserveEntities = 1
        }

        ACT < .NO
        ACT = 1
        ACT {
            wrapItemAndSub = <li> | </li>
        }

        IFSUB = 1
        IFSUB {
            wrapItemAndSub = <li>| </li>
            doNotLinkIt = 1
            stdWrap.cObject = TEXT
            stdWrap.cObject.value =
            before.stdWrap.cObject = TEXT
            before.stdWrap.cObject {
                field = title
#                dataWrap = <a data-toggle="collapse" data-target="#testcollapse" href=#>|<span class="caret"></span></a>
                dataWrap = <button data-toggle="collapse" data-target="#testcollapse">|<span class="caret"></span></button>
            }
        }

        ACTIFSUB < .IFSUB
        ACTIFSUB {
            wrapItemAndSub = <li class="active">|</li>
        }
    }

    2 < .1
    2.collapse = 0
    2.wrap = <ul id="testcollapse" class="nav collapse"> | </ul>
    2.NO {
        wrapItemAndSub = <li> | </li>
    }
}

###########################################
# Footer Adress                           #
###########################################
lib.footeradress = COA
lib.footeradress {
    10 = TEXT
    10.value = <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><br />
    20 = TEXT
    20.value = <b>Anschrift:</b><br />
    30 = TEXT
    30.value = <p>GWRS Enzweihingen<br />Schulstraße 38<br />71665 Vaihingen-Enzweihingen</p>
}

###########################################
# Footer Phone                            #
###########################################
lib.footerphone = COA
lib.footerphone {
    10 = TEXT
    10.value = <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span><br />
    20 = TEXT
    20.value = <b>Telefon:</b><br />
    30 = TEXT
    30.value = 07042 97310
    30.wrap = <p><a href="tel:0704297310">|</a></p>
}

###########################################
# Footer Mail                             #
###########################################
lib.footermail = COA
lib.footermail {
    10 = TEXT
    10.value = <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><br />
    20 = TEXT
    20.value = <b>E-Mail:</b><br />
    30 = TEXT
    30.value = <p>poststelle@enzweihinger-schule.de</p>
    30.typolink {
        parameter = poststelle@enzweihinger-schule.de
        title = E-Mail an die Poststelle der GWRS Enzweihingen
    }
}

###########################################
# tx_news Allgemeine Einstellungen        #
###########################################
lib.news = USER
lib.news {
    userFunc = tx_extbase_core_bootstrap->run
    extensionName = News
    pluginName = Pi1
    controller = News
    settings =< plugin.tx_news.settings
    persistence =< plugin.tx_news.persistence
    view =< plugin.tx_news.view

    settings {
        detailPid = 21
        list.media.dummyImage = fileadmin/News/DummyImage/standard.png
        detail.media.image.maxWidth = 200
    }

    view {
        templateRootPath >
        templateRootPaths {
            100 = EXT:news/Resources/Private/Templates/
            200 = fileadmin/Resources/Private/ext_news/Templates/
        }

        partialRootPath >
        partialRootPaths {
            100 = EXT:news/Resources/Private/Partials/
            200 = fileadmin/Resources/Private/ext_news/Partials/
        }

        layoutRootPath >
        layoutRootPaths {
            100 = EXT:news/Resources/Private/Layouts/
            200 = fileadmin/Resources/Private/ext_news/Layouts/
        }
    }
}

###########################################
# tx_news List-Einstellungen              #
###########################################
lib.newslist < lib.news
lib.newslist {
    action = list
    switchableControllerActions.News.1 = list
    settings.archiveRestriction = active
}

###########################################
# tx_news Detail-Einstellungen            #
###########################################
lib.newsdetail < lib.news
lib.newsdetail {
    action = detail
    switchableControllerActions.News.1 = detail
    lib.metanavi.includeNotInMenu = 1
}


####################################################################################
# Seite Newsdetail (ID 21) einblenden und nicht verlinken, wenn Newsdetailansicht  #
####################################################################################
[globalVar = TSFE:id=21]
    lib.metanavi.includeNotInMenu = 1
    lib.metanavi.1.CUR = < .NO
    lib.metanavi.1.CUR {
        wrapItemAndSub = <li class="menunewsdetail"> | </li>
        doNotLinkIt = 1
    }
[end]


page = PAGE
page {
    headerData.100 = TEXT
    headerData.100.value = <link href='http://fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>

    meta < tmpl.meta

    includeCSS {
        file1 = fileadmin/Resources/Public/Bootstrap/css/bootstrap.css
        file2 = fileadmin/Resources/Public/CSS/style.css
    }

    includeJSFooterlibs {
#        jquery = http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
        jquery = http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
        jquery.external = 1
        jquery.forceOnTop = 1
        file1 = fileadmin/Resources/Public/Bootstrap/js/bootstrap.js
#        file2 = fileadmin/Resources/Public/Js/navitoggle.js
        file3 = fileadmin/Resources/Public/Js/removepillsnav.js
#        file4 = fileadmin/Resources/Public/Js/imagefade.js
    }

    10 = CASE
    10 {
        key.field = backend_layout
        key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
        default = TEXT
        default.value = Bitte Backend-layout auswählen!
        1 < tmpl.einspaltig
        2 < tmpl.zweispaltig
        3 < tmpl.startseite
        4 < tmpl.newsdetail
    }
}