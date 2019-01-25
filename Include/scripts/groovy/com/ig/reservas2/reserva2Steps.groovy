package com.ig.reservas2
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class reserva2Steps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("ingreso a la pagina y la opcion hoteles")
	def ingreso_a_la_pagina_y_la_opcion_hoteles() {
		WebUI.openBrowser('')

		WebUI.navigateToUrl('https://www.tiquetesbaratos.com/')
	}

	@When("le de clic en hoteles")
	def le_de_clic_en_hoteles() {
		WebUI.click(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/a_Hoteles'))
	}

	@When("el usuario ingreso el (.*)")
	def el_usuario_ingreso_el_Destino(String Destino) {
		/*	WebUI.setText(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/input_Destino_PlaceName'),
		 'mede')
		 WebUI.click(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/span_MedellnColombia'))
		 */
		WebUI.setText(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/input_Destino_PlaceName'),
				Destino)
	}

	@When("el usuario ingreso la (.*)")
	def el_usuario_ingreso_la_fechallegada(String fechallegada) {
		WebUI.setText(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/input_Fecha de llegada_ap_dest'),
				fechallegada)
	}

	@When("el usuario ingreso las (.*)")
	def el_usuario_ingreso_la_fechaSalida(String fechaSalida) {

		WebUI.setText(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/input_Fecha de salida_ap_dest_'),
				fechaSalida)
	}

	@When("el usuario da clic en buscar")
	def el_usuario_da_clic_en_buscar() {

		WebUI.click(findTestObject('Object Repository/Page_tiquetes_baratos_2/Page_Tiquetes Baratos - Tiquetes y/input_Cerrar_ap-data_engine-Ho'))
	}

	@Then("deberia visualizar la disponibilidad deacuerdo a la seleccion")
	def deberia_visualizar_la_disponibilidad_deacuerdo_a_la_seleccion() {
		//arrange
		def resultadoEsperado="Hoteles"
		String resultadoObtenido

		//Act
		resultadoObtenido=WebUI.getText(findTestObject("Page_Hoteles en Medelln Colombia/span_Hoteles"))


		//Assert
		

		assert resultadoObtenido ==resultadoEsperado

		WebUI.closeBrowser()
	}
}