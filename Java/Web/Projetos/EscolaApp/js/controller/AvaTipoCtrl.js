var avaliacoesPorTipoCtrl = function ($scope, escolaApi) {

    $scope.avaliacoesPorTipo = {}; //jason

    $scope.avaliacoesPorTipo = function (codEscola, tipo) {
        escolaApi.getAvaliacoesPorTipo(codEscola, tipo)
            .then(function (response) {
                $scope.avaliacoesPorTipo = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};
escolaApp.controller("AvaliacoesPorTipoCtrl", avaliacoesPorTipoCtrl);
