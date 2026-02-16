@apiReqRes
Feature: Gestión de usuario - API ReqRes
  Como usuario
  Quiero consumir los servicios de la API ReqRes
  Para gestionar la información de los usuarios  

  Background:
    Given Userqa quiere consumir el API "https://reqres.in"

  @GET_ConsultaExitosaUsuario
  Scenario Outline: Consulta de usuarios por página
    When el realiza una petición GET en el endpoint "/api/users?page=<page>"
    Then el código de respuesta debe ser "<statusCode>"
    And el campo data no debe estar vacío
    And el campo context debe ser igual a "<metaValue>"

    Examples:
      | page | statusCode | metaValue      |
      |    1 |        200 | legacy_success |

  @GET_PaginaInexistente
  Scenario Outline: Consulta de página que no existe
    When el realiza una petición GET en el endpoint "/api/users?page=<page>"
    Then el código de respuesta debe ser "<statusCode>"
    And el campo data debe estar vacío
    And el campo context debe ser igual a "<metaValue>"

    Examples:
      | page | statusCode | metaValue      |
      |  999 |        200 | legacy_success |


  @POST_RegistroExitoso
  Scenario Outline: Registro exitoso de usuario
    When el user realiza una petición POST en el endpoint "<endpoint>" con los siguientes datos
      | email   | password   |
      | <email> | <password> |
    Then el código de respuesta debe ser "<statusCode>"
    And el campo id debe existir
    And el campo token no debe estar vacío
    And el campo context debe ser igual a "<metaValue>"

    Examples:
      | endpoint      | email              | password | statusCode | metaValue      |
      | /api/register | eve.holt@reqres.in | pistol   |        200 | legacy_success |


  @POST_RegistroFallido
  Scenario: Registro fallido por password o email faltante
    When el user realiza una petición POST en el endpoint "<endpoint>" con los siguientes datos
      | email   | password   |
      | <email> | <password> |
    Then el código de respuesta debe ser "<statusCode>"
    And el campo error debe ser "<error>"

    Examples:
      | endpoint      | email              | password | statusCode | error                     |
      | /api/register | eve.holt@reqres.in |          |        400 | Missing password          |
      | /api/register |                    | pistol   |        400 | Missing email or username |


  @PUT_ActualizacionExitosa
  Scenario Outline: Actualización exitosa de usuario
    When el user realiza una petición PUT en el endpoint "<endpoint>" con los siguientes datos
      | email   | first_name   | last_name   | avatar   |
      | <email> | <first_name> | <last_name> | <avatar> |
    Then el código de respuesta debe ser "<statusCode>"
    And el campo first_name debe ser igual a "<first_name>"
    And el campo last_name debe ser igual a "<last_name>"
    And el campo context debe ser igual a "<metaValue>"

    Examples:
      | endpoint     | email                  | first_name | last_name | avatar                                  | statusCode | metaValue      |
      | /api/users/1 | george.bluth@reqres.in | GeorgeTest | Bluth     | https://reqres.in/img/faces/1-image.jpg |        200 | legacy_success |


  @DELETE_EliminacionExitosa
  Scenario: Eliminación exitosa de usuario
    When el user realiza una petición DELETE en el endpoint "/api/users/2"
    Then el código de respuesta debe ser "204"