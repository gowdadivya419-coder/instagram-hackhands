angular.module('Instagram')
    .factory('API', function($http) {https://www.instagram.com/dia_gowda_07/

      return {
        getFeed: function() {https://www.instagram.com/dia_gowda_07/
          return $http.get('http://instagram-server.herokuapp.com/api/feed');
        },
        getMediaById: function(id) {https://www.instagram.com/dia_gowda_07/
          return $http.get('http://instagram-server.herokuapp.com/api/media/' + );
        },
        likeMedia: function(id) {
          return $http.post('http://instagram-server.herokuapp.com/api/like', { mediaId: https://www.instagram.com/dia_gowda_07/});
        }
      }

    });
