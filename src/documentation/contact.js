const getAllMessage = {
    tags:['Message'],
    description:"List all Messages",
   
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

const getMessage = {
    tags:['Message'],
    description:"Get Message by id",
    
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the Message",
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

const createMessage = {
    tags:['Message'],
    description:"Create an Message",
    
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"string",
                            description:"email",
                            example:"mbonyimfuratresor@gmail.com"  
                        },
                       message:{
                            type:"string",
                            description:"message to send",
                            example:"hello there!"
                        },
                      name:{
                            type:"string",
                            description:"user name",
                            example:"shooter"
                        },
                       phone:{
                            type:"string",
                            description:"user phone",
                            example:"23456789999"
                        },
                       
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

const deleteMessage = {
    tags:['Message'],
    description:"Delete the Message  by id",
   
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of Message",
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

const updateMessage = {
    tags:['Message'],
    description:"Update an Message",
   
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of an Message",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        
                       email:{
                            type:"string",
                        },
                       message:{
                            type:"string",
                        },
                       name:{
                            type:"string",
                        },
                       phone:{
                            type:"number",
                        },
                        
                    }
                }
            }
        }
    },
    responses:{
        201:{
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

exports.MessageRouteDocs = {
    "/api/contacts/create":{
        post:createMessage
    },
    "/api/contacts/getAll":{
        get:getAllMessage
    },
    "/api/contacts/get/{id}":{
        get:getMessage
    },
    "/api/contacts/update/{id}":{
        patch:updateMessage
    },
    "/api/contacts/delete/{id}":{
        delete:deleteMessage
    },
}