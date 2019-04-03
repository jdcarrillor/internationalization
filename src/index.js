import React from "react";
import ReactDOM from "react-dom";

import {IntlProvider, addLocaleData} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";

const funleng = function(){

    if(navigator.language.startsWith("en")){
        return localeEnMessages;

    }

    else{
        return localeEsMessages;
    }

}

addLocaleData([...esLocaleData, ...enLocaleData])

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages = {funleng()}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root")
);