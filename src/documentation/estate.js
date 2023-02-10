const getAllEstate = {
    tags:['Estate'],
    description:"List all Estates",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getEstate = {
    tags:['Estate'],
    description:"Get Estate by id",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the estate",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createEstate = {
    tags:['Estate'],
    description:"Create an Estate",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        province:{
                            type:"string",
                        },
                        district:{
                            type:"string",
                        },
                        street:{
                            type:"string",
                        },
                        price:{
                            type:"string",
                        },
                        beds:{
                            type:"number",
                        },
                        description:{
                            type:"string",
                        },
                        bath:{
                            type:"number",
                        },
                        LotSize:{
                            type:"string",
                        },
                        status:{
                            type:"string",
                        },
                        images:{
                            type:"file",
                            description:"the images of an estate"
                        },
                        images:{
                            type:"file",
                            description:"the images of an estate"
                        }
                    }
                }
            }
        }
    },
    responses:{
        201:{
            description:"Created",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

const deleteEstate = {
    tags:['Estate'],
    description:"Delete the Estate  by id",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of Estate",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updateEstate = {
    tags:['Estate'],
    description:"Update an Estate",
    // security: [
    //     {
    //       token: [],
    //     },
    // ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of an Estate",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        province:{
                            type:"string",
                        },
                        District:{
                            type:"string",
                        },
                        street:{
                            type:"string",
                        },
                        price:{
                            type:"string",
                        },
                        beds:{
                            type:"number",
                        },
                        description:{
                            type:"string",
                        },
                        bath:{
                            type:"number",
                        },
                        LotSize:{
                            type:"string",
                        },
                        status:{
                            type:"string",
                        },
                        images:{
                            type:"file",
                            description:"estate image"
                        },
                        images:{
                            type:"file",
                            description:"estate image"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

exports.estateRouteDocs = {
    "/api/estates":{
        post:createEstate
    },
    "/api/estates/getAll":{
        get:getAllEstate
    },
    "/api/estates/get/{id}":{
        get:getEstate
    },
    "/api/estates/update/{id}":{
        patch:updateEstate
    },
    "/api/estates/delete/{id}":{
        delete:deleteEstate
    },
}