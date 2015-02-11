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
        jquery = http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
        jquery.external = 1
        jquery.forceOnTop = 1
        file1 = fileadmin/Resources/Public/Bootstrap/js/bootstrap.js
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