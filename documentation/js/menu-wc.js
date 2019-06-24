'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">My app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3f110abdfa3f863d8dd03440f4371bbd"' : 'data-target="#xs-components-links-module-AppModule-3f110abdfa3f863d8dd03440f4371bbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3f110abdfa3f863d8dd03440f4371bbd"' :
                                            'id="xs-components-links-module-AppModule-3f110abdfa3f863d8dd03440f4371bbd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CanselMapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CanselMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConferenceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConferenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiplomaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DiplomaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EducationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeoenvironementProject1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GeoenvironementProject1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeomaticaProject1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GeomaticaProject1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeadPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeadPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsuredConnectProject1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsuredConnectProject1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListOfProjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListOfProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfessionalExperienceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfessionalExperienceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublicationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScotiabankProject1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScotiabankProject1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScotiabankProject2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScotiabankProject2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoftwareSkillsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoftwareSkillsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrainingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrainingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UniversityOfCalgaryProject1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UniversityOfCalgaryProject1Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserWindowRef.html" data-type="entity-link">BrowserWindowRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowRef.html" data-type="entity-link">WindowRef</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataCompanyService.html" data-type="entity-link">DataCompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImgExternalUrlService.html" data-type="entity-link">ImgExternalUrlService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});