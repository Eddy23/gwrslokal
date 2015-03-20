config {
    language = de
    htmlTag_langKey = de-DE
    locale_all = de_DE
    simulateStaticDocuments = 0
#    baseURL = http://www.gwrslokal.de/
# Folgende Einstellung aktivieren, wenn Tabletansicht gecheckt werden soll
    baseURL = http://www.gwrslokal.de.192.168.0.80.xip.io:8080/
    tx_realurl_enable = 1
}

#[globalString = IENV:HTTP_HOST=www.gwrslokal.de.192.168.0.80.xip.io]
    # Delete prior config
#    config.baseURL >
    #Base href called via xip.io
#    config.baseURL = http://www.gwrslokal.de.192.168.0.80.xip.io:8080/
#[global]


####################
### RTE Tabellen ###
####################
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list := addToList(table-striped,table-bordered)

#lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.default = table
#lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list = table,table-striped,table-bordered
#lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.nonWrappedTag = p
#lib.parseFunc_RTE.externalBlocks = ul,ol,table
###########################################
# Anpassungen css styled content          #
###########################################
###Klasse bodytext aus p entfernen
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >

###Klassen der Überschriften entfernen
#lib.stdheader.3 >

###Div um Überschriften entfernen
lib.stdheader.stdWrap.dataWrap =


###########################################
# Anpassungen responsive Images           #
###########################################
#tt_content.image.20.maxW = 200

#tt_content.image.20.1.sourceCollection {
#    small {
#        width = 300
#        srcsetCandidate = 768w
#        mediaQuery = (max-device-width:768px)
#        dataKey = small
#    }
#    middle {
#        width = 500
#        srcsetCandidate = 992w
#        mediaQuery = (min-device-width: 769px) AND (max-device-width: 992px)
#        dataKey = middle
#    }
#    large {
#        width = 800
#        srcsetCandidate = 1200w
#        mediaQuery = (min-device-width: 993px)
#        dataKey = large
#    }
#}

tt_content.image.20.1.params = class = "img-responsive"


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
# Header Slider                           #
###########################################
#####  1. Zugriff auf die Bildersammlung
lib.slider = COA

##### 1.  eine Startvariable festlegen
lib.slider.5 = LOAD_REGISTER
lib.slider.5.counter = 0

#####  2. Zugriff auf die Bilder
lib.slider.10 = FILES
lib.slider.10.references {
    table = tt_content
    #####UID des "Images"-Content-Elements, in das die Bilder geladen werden
    uid = 21
    fieldName = image
}

#####  3. Ausgabeiteration der Buttons steuern
lib.slider.10.renderObj = COA
#####  3.1. Zählervariable festlegen
lib.slider.10.renderObj.10 = LOAD_REGISTER
lib.slider.10.renderObj.10 {
    ### Die Startvariable wird der Zählervariablen zugewiesen
    divCounter.data = register:counter
    ### Die Startvariable wird bei jedem Durchlauf um eins erhöht
    counter.data = register:counter
    counter.stdWrap.wrap = |+1
    counter.prioriCalc = 1
}

#####  3.2 Die Zählervariable wird als Text ausgegeben und mit Optionsplit als Listenelemente gewrappt
lib.slider.10.renderObj.15 = TEXT
lib.slider.10.renderObj.15.data = register:divCounter
lib.slider.10.renderObj.15.wrap = <li data-target="#carousel-example-generic" data-slide-to="|" class="active"></li>|*|<li data-target="#carousel-example-generic" data-slide-to="|" class=""> </li>|*|<li data-target="#carousel-example-generic" data-slide-to="|" class=""></li>
##### 3.3 Container um den gesamten lib.slider.10
lib.slider.10.stdWrap.wrap3 =  <ol class="carousel-indicators">|</ol>


#####  4. Ausgabeiteration der Bilder steuern
#####  4. 1 Kopie des FILES-Objekts
lib.slider.20 < lib.slider.10
lib.slider.20.renderObj = COA


##### 4.2 Das Bild wird geladen
lib.slider.20.renderObj.10 = IMAGE
lib.slider.20.renderObj.10 {
file.import.data = file:current:publicUrl
##### 4.3 Das Bild erhält Alt-Text und Titel aus den Bildeigenschaften
altText.data = file:current:alternative
altText.htmlSpecialChars = 1
titleText.data = file:current:title
titleText.htmlSpecialChars = 1
}

lib.slider.20.renderObj.15 >

##### 4.4 Aus dem Feld "Description" wird ein Caption-Text erzeugt, der einen Link mit der im Linkfeld eingetragenen Adresse erhält
lib.slider.20.renderObj.20 = TEXT
lib.slider.20.renderObj.20 {
stdWrap.data = file:current:description
stdWrap.removeBadHTML = 1
stdWrap.typolink.parameter.data = file:current:link
##### 4.5 Container um die Caption
wrap = <div class="carousel-caption active">|</div>|*|<div class="carousel-caption">|</div>|*|<div class="carousel-caption">|</div>
}
##### 4.4 Container um die Bilder und Captions, das erste Element erhält eine andere Klasse als die anderen
lib.slider.20.renderObj.wrap = <div class="item active">|</div>|*|<div class="item">|</div>|*|<div class="item">|</div>

##### 4.5 Container um den gesamten lib.slider.20
lib.slider.20.stdWrap.wrap3 =  <div class="carousel-inner">|</div>

##### 5. Container um des gesamte Element
lib.slider.stdWrap.wrap3 (
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="20000">|</div>
)


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
        # Versteckte Seite "Newsdetail" anzeigen, aber nicht die versteckte Seite uid=10 und 53
        includeNotInMenu = 1
        excludeUidList = 10, 53
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
lib.sidenavi = COA
lib.sidenavi {

    20 = HMENU
    20 {
        special = directory
        special.value = 53

        1 = TMENU
        1 {
            expAll = 1
            wrap = <ul> | </ul>

            NO = 1
            NO {
                wrapItemAndSub = <li class="sidebarheader">|</li>
                stdWrap.htmlSpecialChars = 1
                doNotLinkIt = 1
            }
        }

        2 = TMENU
        2 {
            expAll = 1

            NO {
                allWrap = <li>|</li>
                ATagTitle.field = abstract // description // title
            }

            ACT = 1
            ACT {
                wrapItemAndSub = <li class="active">|</li>
                ATagTitle.field = abstract // description // title
            }

            IFSUB = 1
            IFSUB {
                before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                after = <b class="caret"></b></a>
                doNotLinkIt = 1
                wrapItemAndSub = <li class="dropdown">|</li>
                ATagTitle.field = abstract // description // title
            }

            ACTIFSUB = 1
            ACTIFSUB {
                before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                after = <b class="caret"></b></a>
                doNotLinkIt = 1
                wrapItemAndSub = <li class="dropdown active">|</li>
                ATagTitle.field = abstract // description // title
            }

            wrap = <ul class="nav">|</ul>
        }

        3 = TMENU
        3 {
            expAll = 1

            ACT = 1
            ACT {
                wrapItemAndSub = <li class="active">|</li>
                ATagTitle.field = abstract // description // title
            }

            ACTIFSUB = 1
            ACTIFSUB {
                wrapItemAndSub = |
                before = <li class="divider"></li><li class="nav-header">
                after = </li>
                doNotLinkIt = 1
                ATagTitle.field = abstract // description // title
            }

            NO {
                allWrap = <li>|</li>
                ATagTitle.field = abstract // description // title
            }

            IFSUB = 1
            IFSUB {
                before = <li class="divider"></li><li class="nav-header">
                after = </li>
                doNotLinkIt = 1
                ATagTitle.field = abstract // description // title
            }

            SPC = 1
            SPC.allWrap = <li class="divider"></li><li class="nav-header">|</li>

            wrap = <ul class="dropdown-menu">|</ul>
        }

        4 = TMENU
        4 {
            NO {
                allWrap = <li>|</li>
                ATagTitle.field = abstract // description // title
            }

            ACT = 1
            ACT {
                wrapItemAndSub = <li class="active">|</li>
                ATagTitle.field = abstract // description // title
            }
        }

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
# Google Maps                             #
###########################################
#lib.googlemaps = COA
#lib.googlemaps {
#    10 = TEXT
#    10.value = <div>Hallo ich bin Googlemaps 2323</div>
#}


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


tmpl.kalender < tmpl.einspaltig
tmpl.kalender {
    template.file = fileadmin/Resources/Private/Templates/Kalender.html
}

tmpl.kontakt < tmpl.einspaltig
tmpl.kontakt {
    template.file = fileadmin/Resources/Private/Templates/Kontakt.html
    variables {
        addressContent < styles.content.getLeft
        googleMaps < styles.content.get
        googleMaps.select.where = colPos = 23
    }
}

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
        file3 = fileadmin/Resources/Public/Js/removepillsnav.js
        file4 = fileadmin/Resources/Public/Js/jquery.colorbox-min.js
#        file4 = fileadmin/Resources/Public/Js/jquery.colorbox.js
        file5 = fileadmin/Resources/Public/Js/dontCollapseParent.js
    }

    jsFooterInline {
        10 = COA
        10.wrap = $(document).ready(function(){|});
        10.10 = TEXT
        10.10.value = $(".lightbox").colorbox();
    }

    10 = CASE
    10 {
        key.field = backend_layout
        key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
        default = TEXT
        default.value = Bitte Backend-Layout auswählen!
        1 < tmpl.einspaltig
        2 < tmpl.zweispaltig
        3 < tmpl.startseite
        4 < tmpl.newsdetail
        5 < tmpl.kalender
        6 < tmpl.kontakt
    }
}