angular.module("app",["ngRoute"]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,o){o.fetch().success(function(o){t.posts=o}),t.addPost=function(){t.postBody&&o.create({username:"_augustinas",body:t.postBody}).success(function(o){t.posts.unshift(o),t.postBody=null})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(o){return t.post("/api/posts",o)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiLCJyb3V0ZXMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImZldGNoIiwic3VjY2VzcyIsInBvc3RzIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwidXNlcm5hbWUiLCJib2R5IiwicG9zdCIsInVuc2hpZnQiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE9BQ0EsWUNEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFDLEdBQ0FBLEVBQUFDLFFBQUFDLFFBQUEsU0FBQUMsR0FDQUosRUFBQUksTUFBQUEsSUFHQUosRUFBQUssUUFBQSxXQUNBTCxFQUFBTSxVQUNBTCxFQUFBTSxRQUNBQyxTQUFBLGNBQ0FDLEtBQUFULEVBQUFNLFdBQ0FILFFBQUEsU0FBQU8sR0FDQVYsRUFBQUksTUFBQU8sUUFBQUQsR0FDQVYsRUFBQU0sU0FBQSxXQ2JBVCxRQUFBQyxPQUFBLE9BQ0FjLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFaLE1BQUEsV0FDQSxNQUFBVyxHQUFBRSxJQUFBLGVBR0FELEtBQUFQLE9BQUEsU0FBQUcsR0FDQSxNQUFBRyxHQUFBSCxLQUFBLGFBQUFBLE9DUEFiLFFBQUFDLE9BQUEsT0FDQWtCLFFBQUEsaUJBQUEsU0FBQUMsR0FDQUEsRUFDQUMsS0FBQSxLQUNBbkIsV0FBQSxZQUNBb0IsWUFBQSxlQUVBRCxLQUFBLGFBQ0FuQixXQUFBLGVBQ0FvQixZQUFBLGtCQUVBRCxLQUFBLFVBQ0FuQixXQUFBLFlBQ0FvQixZQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICduZ1JvdXRlJ1xuXSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG4gICAgUG9zdHNTdmMuZmV0Y2goKS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0cykge1xuICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHM7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgIHVzZXJuYW1lOiAnX2F1Z3VzdGluYXMnLFxuICAgICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxuICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdCk7XG4gICAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcbiAgICB9O1xuICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgY29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncG9zdHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAud2hlbignL3JlZ2lzdGVyJywge1xuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvbG9naW4nLCB7XG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnXG4gICAgICB9KTtcbiAgfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9