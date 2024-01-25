import swaggerJSDoc, {OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Swapi Challenge: Documentación de API",
        version: "1.0.0",
    },
    servers: [
        {
            url: process.env.API_URL!,
            description: "Serverless Dev Deploy",
        },
    ],
    components: {
        schemas: {
            //Entidades
            Character: {
                type: "object",
                properties: {
                    nombre: {
                        type: "string",
                        example: "Luke Skywalker"
                    },
                    estatura: {
                        type: "number",
                        example: 172
                    },
                    peso: {
                        type: "number",
                        example: 77
                    },
                    color_cabello: {
                        type: "string",
                        example: "blond"
                    },
                    color_piel: {
                        type: "string",
                        example: "fair"
                    },
                    color_ojos: {
                        type: "string",
                        example: "blue"
                    },
                    fecha_nacimiento: {
                        type: "string",
                        example: "19BBY"
                    },
                    genero: {
                        type: "string",
                        example: "male"
                    },
                    vehiculos: {
                        type: "array",
                        example: [
                            process.env.API_URL!+"/api/v1/vehicles/14/",
                            process.env.API_URL!+"/api/v1/vehicles/30/"
                        ],
                        items: {type: "string"}
                    },
                    fuente_datos: {
                        type: "string",
                        example: "swapi"
                    }
                }
            },
            Vehicle: {
                type: "object",
                properties: {
                    nombre: {
                        type: "string",
                        example: "Sand Crawler"
                    },
                    modelo: {
                        type: "string",
                        example: "Digger Crawler"
                    },
                    fabricante: {
                        type: "string",
                        example: "Corellia Mining Corporation"
                    },
                    costo_en_creditos: {
                        type: "number",
                        example: 150000
                    },
                    longitud: {
                        type: "number",
                        example: 36.8
                    },
                    velocidad_maxima: {
                        type: "number",
                        example: 30
                    },
                    tripulacion: {
                        type: "number",
                        example: 46
                    },
                    pasajeros: {
                        type: "number",
                        example: 30
                    },
                    capacidad_carga: {
                        type: "number",
                        example: 50000
                    },
                    consumibles: {
                        type: "string",
                        example: "2 months"
                    },
                    clase_vehiculo: {
                        type: "string",
                        example: "wheeled"
                    }
                }
            },
            //Respuestas Base
            RequestValidationError: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        example: "an error occurred by some property"
                    },
                    errors: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/PropertyError"
                        }
                    }
                }
            },
            PropertyError: {
                type: "object",
                properties: {
                    location: {type: "string", example: "query.for.error"},
                    msg: {type: "string", example: "Some Error value"},
                    path: {type: "string", example: "query.for.error"},
                    type: {type: "string", example: "field|param|etc"}
                }
            },
            ErrorMessage: {
                type: "object",
                properties: {
                    message: {type: "string", example: "Mensaje de error"},
                    context: {type: "object", properties: { key: {type: "string", example: "value"} }}
                }
            },
            ErrorResponse: {
                type: "object",
                properties: {
                    errors: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ErrorMessage"
                        }
                    }
                }
            },
            BaseResponse: {
                type: "object",
                properties: {
                    res: {type: "boolean", example: true},
                    message: {type: "string", example: "Operación exitosa"},
                }
            },
            //API Resquest & Response
            CharacterListResponse: {
                type: "object",
                properties: {
                    res: {type: "boolean", example: true},
                    message: {type: "string", example: "Operación exitosa"},
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/Character"
                        }
                    }
                }
            },
            CharacterCreateRequest: {
                type: "object",
                properties: {
                    nombre: { type: "string", example: "Luke Skywalker" },
                    estatura: { type: "number", example: 172 },
                    peso: { type: "number", example: 77 },
                    color_cabello: { type: "string", example: "blond" },
                    color_piel: { type: "string", example: "fair" },
                    color_ojos: { type: "string", example: "blue" },
                    fecha_nacimiento: { type: "string", example: "19BBY" },
                    genero: { type: "string", example: "male" },
                }
            },
            CharacterCreateResponse: {
                type: "object",
                properties: {
                    res: {type: "boolean", example: true},
                    message: {type: "string", example: "Operación exitosa"},
                    data: {
                        type: "object",
                        $ref: "#/components/schemas/Character"
                    }
                }
            },
            VehicleListRequest: {
                type: "params",
                properties: {
                    id: {
                        type: "number",
                        example: "1"
                    }
                }
            },
            VehicleListResponse: {
                type: "object",
                properties: {
                    res: {type: "boolean", example: true},
                    message: {type: "string", example: "Operación exitosa"},
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/Vehicle"
                        }
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: [],
    paths: {
        "/api/v1/vehicles/{id}": {
            get: {
                tags: ["VehicleRoutes"],
                summary: "Datos de un vehículo",
                description: "Se obtiene la información de un vehículo desde la swapi",
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/VehicleListResponse",
                                },
                            },
                        },
                    },
                    400: {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/ErrorResponse",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/v1/characters/list": {
            get: {
                tags: ["CharacterRoutes"],
                summary: "Listado de personajes",
                description: "Se obtiene un listado de personajes desde la fuente de datos",
                parameters: [
                    {
                        in: "query",
                        name: "source",
                        schema: {
                            type: "string",
                        },
                        description: "Fuente de datos (local|swapi)",
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/CharacterListResponse",
                                },
                            },
                        },
                    },
                    400: {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/ErrorResponse",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/v1/characters/add": {
            post: {
                tags: ["CharacterRoutes"],
                summary: "Agregar un personaje",
                description: "Se agrega un personaje a la base de datos local",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CharacterCreateRequest",
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/CharacterCreateResponse",
                                },
                            },
                        },
                    },
                    400: {
                        description: "Bad Request",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/ErrorResponse",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
}

export default swaggerJSDoc(swaggerOptions);