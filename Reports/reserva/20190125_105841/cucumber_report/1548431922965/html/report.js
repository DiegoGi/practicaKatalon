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
  "status": "passed"
});
formatter.step({
  "name": "le de clic en hoteles",
  "keyword": "When "
});
formatter.match({
  "location": "reserva2Steps.le_de_clic_en_hoteles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario ingreso el cali",
  "keyword": "And "
});
formatter.match({
  "location": "reserva2Steps.el_usuario_ingreso_el_Destino(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario ingreso la 25/01/2019",
  "keyword": "And "
});
formatter.match({
  "location": "reserva2Steps.el_usuario_ingreso_la_fechallegada(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario ingreso las 27/01/2019",
  "keyword": "And "
});
formatter.match({
  "location": "reserva2Steps.el_usuario_ingreso_la_fechaSalida(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deberia visualizar la disponibilidad deacuerdo a la seleccion",
  "keyword": "Then "
});
formatter.match({
  "location": "reserva2Steps.deberia_visualizar_la_disponibilidad_deacuerdo_a_la_seleccion()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/Page_Hoteles en Medelln Colombia/span_Hoteles\u0027 (Root cause: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/Page_Hoteles en Medelln Colombia/span_Hoteles\u0027 located by \u0027By.xpath: //nav[@id\u003d\u0027breadcrumbs\u0027]/span[2]\u0027 not found)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat com.ig.reservas2.reserva2Steps.deberia_visualizar_la_disponibilidad_deacuerdo_a_la_seleccion(reserva2Steps.groovy:92)\r\n\tat ✽.deberia visualizar la disponibilidad deacuerdo a la seleccion(C:/Users/cvalencia/Katalon Studio/Tiquetes/Include/features/reserva2.feature:30)\r\n",
  "status": "failed"
});
});