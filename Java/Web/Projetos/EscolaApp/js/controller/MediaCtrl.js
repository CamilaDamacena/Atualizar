var mediaAvaliacoesCtrl = function ($scope, escolaApi) {

    $scope.mediaAvaliacoes = {}; //jason

    $scope.mediaAvaliacoes = function (codEscola) {
        escolaApi.getMediaAvaliacoes(codEscola)
            .then(function (response) {
                $scope.mediaAvaliacoes = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("MediaAvaliacoesCtrl", mediaAvaliacoesCtrl);