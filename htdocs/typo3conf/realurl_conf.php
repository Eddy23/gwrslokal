<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array(
        '_DEFAULT' =>
                array(
                        'init' =>
                                array(
                                        'enableCHashCache' => TRUE,
                                        'appendMissingSlash' => 'ifNotFile,redirect',
                                        'adminJumpToBackend' => TRUE,
                                        'enableUrlDecodeCache' => TRUE,
                                        'enableUrlEncodeCache' => TRUE,
                                        'emptyUrlReturnValue' => '/',
                                ),
                        'pagePath' =>
                                array(
                                        'type' => 'user',
                                        'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
                                        'spaceCharacter' => '-',
                                        'languageGetVar' => 'L',
//      'autoUpdatePathCache' => '1',
//      'rootpage_id' => '1',
                                ),
                        'fileName' =>
                                array(
                                        'defaultToHTMLsuffixOnPrev' => 1,
                                        'acceptHTMLsuffix' => 1,
                                        'index' =>
                                                array(
                                                        'print' =>
                                                                array(
                                                                        'keyValues' =>
                                                                                array(
                                                                                        'type' => 98,
                                                                                ),
                                                                ),
                                                ),
                                ),
                        'postVarSets' =>
                                array(
                                        '_DEFAULT' =>
                                                array(
                                                        'news' => array(
                                                                array(
                                                                        'GETvar' => 'tx_news_pi1[action]',
                                                                ),
                                                                array(
                                                                        'GETvar' => 'tx_news_pi1[controller]',
                                                                ),
                                                                array(
                                                                        'GETvar' => 'tx_news_pi1[news]',
                                                                        'lookUpTable' => array(
                                                                                'table' => 'tx_news_domain_model_news',
                                                                                'id_field' => 'uid',
                                                                                'alias_field' => 'title',
                                                                                'addWhereClause' => ' AND NOT deleted',
                                                                                'useUniqueCache' => 1,
                                                                                'useUniqueCache_conf' => array(
                                                                                        'strtolower' => 1,
                                                                                        'spaceCharacter' => '-',
                                                                                ),
                                                                                'languageGetVar' => 'L',
                                                                                'languageExceptionUids' => '',
                                                                                'languageField' => 'sys_language_uid',
                                                                                'transOrigPointerField' => 'l10n_parent',
                                                                                'autoUpdate' => 1,
                                                                                'expireDays' => 180,
                                                                        ),
                                                                ),
                                                        ),
                                                ),
                                ),
                ),
);
