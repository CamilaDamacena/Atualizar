var tipoAvaliacaoCtrl = function ($scope, tipoAvaliacaoEscolaApi) {

    $scope.tipoAvaliacao = [];

    $scope.tipoAvaliacao = function () { //Essa função está no button Aqui dentro é o momentoem que pega as informações
        tipoAvaliacaoEscolaApi.getTipoAvaliacao()
            .then(function (response) { //Garante que a requisão vai e a resposta vem.
                $scope.tipoAvaliacao = response.data;
            })
            .catch(function (error) { //Quando algo der errado.
                console.error(error);
            });
    }
};
escolaApp.controller("TipoAvaliacaoCtrl", tipoAvaliacaoCtrl);
