import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

/*
WebUI.openBrowser('')

WebUI.navigateToUrl('https://www.tiquetesbaratos.com/')

WebUI.click(findTestObject('Page_Tiquetes Baratos - Tiquetes y/a_Hoteles'))

WebUI.setText(findTestObject('Page_Tiquetes Baratos - Tiquetes y/input_Destino_PlaceName'), 'mede')

WebUI.click(findTestObject('Page_Tiquetes Baratos - Tiquetes y/span_MedellnColombia'))

WebUI.setText(findTestObject('Page_Tiquetes Baratos - Tiquetes y/input_Destino_PlaceName'), 'Medellín, Colombia')

WebUI.setText(findTestObject('Page_Tiquetes Baratos - Tiquetes y/input_Fecha de llegada_ap_dest'), '12/01/2019')

WebUI.setText(findTestObject('Page_Tiquetes Baratos - Tiquetes y/input_Fecha de salida_ap_dest_'), '24/01/2019')

WebUI.selectOptionByValue(findTestObject('Page_Tiquetes Baratos - Tiquetes y/select_1                2'), '2', true)

WebUI.click(findTestObject('Page_Tiquetes Baratos - Tiquetes y /input_Cerrar_ap-data_engine-Ho'))

*/

CucumberKW.runWithCucumberRunner(Reserva2Runner.class)

