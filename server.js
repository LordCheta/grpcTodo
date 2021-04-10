const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpc.todoPackage;

const server =  new grpc.server();
server.bind("0.0.0.0:4000", grpc.ServerCredentials.createInsecure());

server.addService(todoPackage.Todo.service, {
    "createTodo": createTodo
})

const createTodo = () => {

};

const readTodo = () => {
    
}