var avaliacoesEscolaCtrl = function ($scope, $stateParams, escolaApi) {

    $scope.avaliacoesEscola = {}; //jason
    $scope.codEscola= $stateParams.codEscola;

    $scope.avaliacoesEscola = function (codEscola) {
        escolaApi.getAvaliacoesEscola(codEscola)
            .then(function (response) {
                $scope.avaliacoesEscola = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("AvaliacoesEscolaCtrl", avaliacoesEscolaCtrl);
