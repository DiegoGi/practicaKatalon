#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: reserva2
  I want to use this template for my feature file

  @tag1
  Scenario Outline: consulta de reserva
    Given ingreso a la pagina y la opcion hoteles  
    When le de clic en hoteles
    And el usuario ingreso el <Destino>
    And el usuario ingreso la <fechallegada>
    And el usuario ingreso las <fechaSalida>
    And el usuario da clic en buscar
    Then deberia visualizar la disponibilidad deacuerdo a la seleccion

    Examples: 
      | Destino  | fechallegada | fechaSalida  |
      | Medellin | 25/01/2019   | 27/01/2019   |
     # | Bogota  | 26/01/2019    | 28/01/2019   |
      