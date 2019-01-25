package com.ig.runner


import org.junit.runner.RunWith

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber


@RunWith(Cucumber.class)
@CucumberOptions(features="Include/features", glue="", plugin=["pretty"])
class Reserva2Runner{
}