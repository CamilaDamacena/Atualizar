var pesquisarEscolaCtrl = function ($scope, $stateParams, escolaApi) {

    $scope.escola = {}; //jason
    $scope.codEscola= $stateParams.codEscola; // faz o codigo ir para outra página

    $scope.pesquisarEscola = function (codEscola) {
        escolaApi.getPesquisarEscola(codEscola)
            .then(function (response) {
                $scope.escola = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("PesquisarEscolaCtrl", pesquisarEscolaCtrl);

