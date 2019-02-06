var avaliacoesPorAnoCtrl = function ($scope, escolaApi) {

    $scope.avaliacoesPorAno = {}; //jason

    $scope.avaliacoesPorAno = function (codEscola, ano) {
        escolaApi.getAvaliacoesPorAno(codEscola, ano)
            .then(function (response) {
                $scope.avaliacoesPorAno = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};
escolaApp.controller("AvaliacoesPorAnoCtrl", avaliacoesPorAnoCtrl);
