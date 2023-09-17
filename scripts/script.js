/*
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.6
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 7.0.1-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "https://petstore.swagger.io/v2";
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
let apiKey = "TODO_EDIT_THE_API_KEY";

export default function() {
    
    const vars = {} 
    // Add/update/uploadPhoto Pet
    group("/pet", () => {

        // Request No. 1: addPet
        {
            let url = BASE_URL + `/pet`;
            let body = {"id": 0, "category": {"id": 1, "name": "pajaro"}, "name": "pupo", "photoUrls": "", "tags": "", "status": "available"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let resp = http.post(url, JSON.stringify(body), params);

            check(resp, {
                "OK": (r) => r.status === 200,
                "pet name": (r) => r.json().name == "pupo"
            });
            vars['petId'] = resp.json('id');
            vars['petName'] = resp.json('name');

        }
        
        // Request No. 2: updatePet
        {
            let url = BASE_URL + `/pet`;
            let photoUrls = ["","",""];
            let body = {"id": vars['petId'], "category": {"id": "long", "name": "string"}, "name": vars['petName'], "photoUrls": photoUrls, "tags": "list", "status": "available"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let resp = http.put(url, JSON.stringify(body), params);

            check(resp, {
                "OK": (r) => r.status === 200
            });

        }

        // Request No. 3: uploadFile
        {
            let url = BASE_URL + `/pet/`+vars['petId']+`/uploadImage`;
            // TODO: edit the parameters of the request body.
            let body = {"additionalMetadata": "string", "file": http.file(open("/path/to/file.bin", "b"), "test.bin")};
            let params = {headers: {"Content-Type": "multipart/form-data", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "successful operation": (r) => r.status === 200
            });
        }

        
    });


    // placed/get/delete order with Pet
    // group("/store/order", () => {

        
    //     let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1: getPetById
    //     {
    //         let url = BASE_URL + `/pet/${petId}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });

    //         sleep(SLEEP_DURATION);
    //     }
        
    //     // Request No. 1: placeOrder
    //     {
    //         let url = BASE_URL + `/store/order`;
    //         // TODO: edit the parameters of the request body.
    //         let body = {"id": "long", "petId": "long", "quantity": "integer", "shipDate": "date", "status": "string", "complete": "boolean"};
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, JSON.stringify(body), params);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }

    //     let orderId = 'TODO_EDIT_THE_ORDERID';

    //     // Request No. 2: getOrderById
    //     {
    //         let url = BASE_URL + `/store/order/${orderId}`;
    //         let request = http.get(url);
        
    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });        
    //         sleep(SLEEP_DURATION);
    //     }

    //     // Request No. 3: deleteOrder
    //     {
    //         let url = BASE_URL + `/store/order/${orderId}`;
    //         let request = http.del(url);

    //     }
    // });

    // //Get pet by ID/Status/Tags and delete it
    // group("/pet/{petId}", () => {
    //     let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1: getPetById
    //     {
    //         let url = BASE_URL + `/pet/${petId}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });

    //         sleep(SLEEP_DURATION);
    //     }

    //      // Request No. 2: findPetsByStatus
    //      {
    //         let url = BASE_URL + `/pet/findByStatus?status=${status}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }

    //     // Request No. 3: findPetsByTags
    //     {
    //         let url = BASE_URL + `/pet/findByTags?tags=${tags}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }

    //     // Request No. 4: deletePet
    //     {
    //         let url = BASE_URL + `/pet/${petId}`;
    //         let params = {headers: {"api_key": `${apiKey}`, "Accept": "application/json"}};
    //         // this is a DELETE method request - if params are also set, empty body must be passed
    //         let request = http.del(url, {} , params);

    //     }
    // });

    // group("/user/{username}", () => {
    //     let username = 'TODO_EDIT_THE_USERNAME'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1: getUserByName
    //     {
    //         let url = BASE_URL + `/user/${username}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });

    //         sleep(SLEEP_DURATION);
    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }

    //     // Request No. 2: deleteUser
    //     {
    //         let url = BASE_URL + `/user/${username}`;
    //         let request = http.del(url);
    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });

    //     }
    // });

    

    // group("/user/createWithList", () => {

    //     // Request No. 1: createUsersWithListInput
    //     {
    //         let url = BASE_URL + `/user/createWithList`;
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, params);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }
    // });


    // group("/store/inventory", () => {

    //     // Request No. 1: getInventory
    //     {
    //         let url = BASE_URL + `/store/inventory`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/user/login", () => {
    //     let password = 'TODO_EDIT_THE_PASSWORD'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let username = 'TODO_EDIT_THE_USERNAME'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1: loginUser
    //     {
    //         let url = BASE_URL + `/user/login?username=${username}&password=${password}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/user", () => {

    //     // Request No. 1: createUser
    //     {
    //         let url = BASE_URL + `/user`;
    //         // TODO: edit the parameters of the request body.
    //         let body = {"id": "long", "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": "integer"};
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, JSON.stringify(body), params);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/user/createWithArray", () => {

    //     // Request No. 1: createUsersWithArrayInput
    //     {
    //         let url = BASE_URL + `/user/createWithArray`;
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, params);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }
    // });

    

    

    // group("/user/logout", () => {

    //     // Request No. 1: logoutUser
    //     {
    //         let url = BASE_URL + `/user/logout`;
    //         let request = http.get(url);

    //         check(request, {
    //             "successful operation": (r) => r.status === 200
    //         });
    //     }
    // });


}
