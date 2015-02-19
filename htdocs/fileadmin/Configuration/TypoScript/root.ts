config {
    language = de
    htmlTag_langKey = de-DE
    locale_all = de_DE
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
    variables {
        news < styles.content.getRight
    }
}

###########################################
# Logografik                              #
###########################################
lib.logo = IMAGE
lib.logo {
    file = fileadmin/Logo/logo_gwrs.png
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
            stdWrap.wrap = | <span class="caret"></span>
            ATagParams = data-toggle="collapse" data-target="#collapse"
        }

        ACTIFSUB < .IFSUB
        ACTIFSUB {
            wrapItemAndSub = <li class="active">|</li>
        }
    }

    2 < .1
    2.wrap = <ul id="collapse" class="nav collapse"> | </ul>
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
    10.value = <b>Anschrift:</b><br />
    20 = TEXT
    20.value = GWRS Enzweihingen<br />Schulstraße 38<br />71665 Vaihingen-Enzweihingen
}

###########################################
# Footer Phone                            #
###########################################
lib.footerphone = COA
lib.footerphone {
    10 = TEXT
    10.value = <b>Telefon:</b><br />
    20 = TEXT
    20.value = 07042 97310
    20.wrap = <a href="tel:0704297310">|</a>
}

###########################################
# Footer Mail                             #
###########################################
lib.footermail = COA
lib.footermail {
    10 = TEXT
    10.value = <b>E-Mail:</b><br />
    20 = TEXT
    20.value = poststelle@enzweihinger-schule.de
    20.typolink {
        parameter = poststelle@enzweihinger-schule.de
        title = E-Mail an die Poststelle der GWRS Enzweihingen
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
#        file2 = fileadmin/Resources/Public/Js/navitoggle.js
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
    }
}