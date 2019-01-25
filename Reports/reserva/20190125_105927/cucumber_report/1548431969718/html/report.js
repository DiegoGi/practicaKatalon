$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cvalencia/Katalon Studio/Tiquetes/Include/features/reserva2.feature");
formatter.feature({
  "name": "reserva2",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "consulta de reserva",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "ingreso a la pagina y la opcion hoteles",
  "keyword": "Given "
});
formatter.step({
  "name": "le de clic en hoteles",
  "keyword": "When "
});
formatter.step({
  "name": "el usuario ingreso el \u003cDestino\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "el usuario ingreso la \u003cfechallegada\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "el usuario ingreso las \u003cfechaSalida\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "deberia visualizar la disponibilidad deacuerdo a la seleccion",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Destino",
        "fechallegada",
        "fechaSalida"
      ]
    },
    {
      "cells": [
        "cali",
        "25/01/2019",
        "27/01/2019"
      ]
    }
  ]
});
formatter.scenario({
  "name": "consulta de reserva",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "ingreso a la pagina y la opcion hoteles",
  "keyword": "Given "
});
formatter.match({
  "location": "reserva2Steps.ingreso_a_la_pagina_y_la_opcion_hoteles()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to open browser with url: \u0027\u0027 (Root cause: org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027P-CVALENCIA\u0027, ip: \u002710.60.27.220\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.OpenBrowserKeyword.openBrowser(OpenBrowserKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.OpenBrowserKeyword.execute(OpenBrowserKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.openBrowser(WebUiBuiltInKeywords.groovy:60)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$openBrowser.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat com.ig.reservas2.reserva2Steps.ingreso_a_la_pagina_y_la_opcion_hoteles(reserva2Steps.groovy:56)\r\n\tat ✽.ingreso a la pagina y la opcion hoteles(C:/Users/cvalencia/Katalon Studio/Tiquetes/Include/features/reserva2.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "le de clic en hoteles",
  "keyword": "When "
});
formatter.match({
  "location": "reserva2Steps.le_de_clic_en_hoteles()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el usuario ingreso el cali",
  "keyword": "And "
});
formatter.match({
  "location": "reserva2Steps.el_usuario_ingreso_el_Destino(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el usuario ingreso la 25/01/2019",
  "keyword": "And "
});
formatter.match({
  "location": "reserva2Steps.el_usuario_ingreso_la_fechallegada(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el usuario ingreso las 27/01/2019",
  "keyword": "And "
});
formatter.match({
  "location": "reserva2Steps.el_usuario_ingreso_la_fechaSalida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deberia visualizar la disponibilidad deacuerdo a la seleccion",
  "keyword": "Then "
});
formatter.match({
  "location": "reserva2Steps.deberia_visualizar_la_disponibilidad_deacuerdo_a_la_seleccion()"
});
formatter.result({
  "status": "skipped"
});
});