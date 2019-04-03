import React from "react";
import ReactDOM from "react-dom";

import {IntlProvider, addLocaleData} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";

const localeMessage = function(){

    if(navigator.language.startsWith("es-ES")){
        return localeEsMessages;
    }

    else{
        return localeEnMessages;
    }

}

addLocaleData([...esLocaleData, ...enLocaleData])

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages = {localeMessage()}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root")
);