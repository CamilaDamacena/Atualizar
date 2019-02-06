// Controllers pega as informações para listar -------------------------------------------------
var listarEscolaCtrl = function ($scope, escolaApi) {

    $scope.escolas = []; //mudar nos demais controller's;
    $scope.quantidades = [10, 20, 30, 40, 50, 100];

    $scope.listarEscola = function (quantidade) { //Essa função está no button Aqui dentro é o momentoem que pega as informações
        escolaApi.getEscolas(quantidade) //mudar o escolaApi nos demais controller's;
            .then(function (response) { //Garante que a requisão vai e a resposta vem.
                $scope.escolas = response.data;
            })
            .catch(function (error) { //Quando algo der errado.
                console.error(error);
            });
    }
};



escolaApp.controller("ListarEscolaCtrl", listarEscolaCtrl);
