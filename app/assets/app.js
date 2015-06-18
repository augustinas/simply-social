angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(n,o){t.currentUser=o})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,n){t.login=function(o,e){n.login(o,e).then(function(n){t.$emit("login",n.data)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,n){n.fetch().success(function(n){t.posts=n}),t.addPost=function(){t.postBody&&n.create({username:"_augustinas",body:t.postBody}).success(function(n){t.posts.unshift(n),t.postBody=null})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(n){return t.post("/api/posts",n)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var n=this;n.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},n.login=function(o,e){return t.post("/api/sessions",{username:o,password:e}).then(function(t){return n.token=t.data,n.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsIlVzZXJTdmMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCIkZW1pdCIsImRhdGEiLCJQb3N0c1N2YyIsImZldGNoIiwic3VjY2VzcyIsInBvc3RzIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwiYm9keSIsInBvc3QiLCJ1bnNoaWZ0Iiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwiZ2V0VXNlciIsImhlYWRlcnMiLCJYLUF1dGgiLCJ0b2tlbiIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDQSxZQ0RBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsbUJBQUEsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDQUgsRUFBQUksWUFBQUQsT0NIQU4sUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxVQUFBLFNBQUFDLEVBQUFLLEdBQ0FMLEVBQUFNLE1BQUEsU0FBQUMsRUFBQUMsR0FDQUgsRUFBQUMsTUFBQUMsRUFBQUMsR0FDQUMsS0FBQSxTQUFBQyxHQUNBVixFQUFBVyxNQUFBLFFBQUFELEVBQUFFLFlDTEFmLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBYSxHQUNBQSxFQUFBQyxRQUFBQyxRQUFBLFNBQUFDLEdBQ0FoQixFQUFBZ0IsTUFBQUEsSUFHQWhCLEVBQUFpQixRQUFBLFdBQ0FqQixFQUFBa0IsVUFDQUwsRUFBQU0sUUFDQVosU0FBQSxjQUNBYSxLQUFBcEIsRUFBQWtCLFdBQ0FILFFBQUEsU0FBQU0sR0FDQXJCLEVBQUFnQixNQUFBTSxRQUFBRCxHQUNBckIsRUFBQWtCLFNBQUEsV0NiQXJCLFFBQUFDLE9BQUEsT0FDQXlCLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFYLE1BQUEsV0FDQSxNQUFBVSxHQUFBRSxJQUFBLGVBR0FELEtBQUFOLE9BQUEsU0FBQUUsR0FDQSxNQUFBRyxHQUFBSCxLQUFBLGFBQUFBLE9DUEF4QixRQUFBQyxPQUFBLE9BQ0E2QixRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FDQTlCLFdBQUEsWUFDQStCLFlBQUEsZUFFQUQsS0FBQSxhQUNBOUIsV0FBQSxlQUNBK0IsWUFBQSxrQkFFQUQsS0FBQSxVQUNBOUIsV0FBQSxZQUNBK0IsWUFBQSxrQkNiQWpDLFFBQUFDLE9BQUEsT0FDQXlCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBQ0EsR0FBQU8sR0FBQU4sSUFFQU0sR0FBQUMsUUFBQSxXQUNBLE1BQUFSLEdBQUFFLElBQUEsY0FDQU8sU0FBQUMsU0FBQVQsS0FBQVUsVUFJQUosRUFBQXpCLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxNQUFBZ0IsR0FBQUgsS0FBQSxpQkFDQWQsU0FBQUEsRUFDQUMsU0FBQUEsSUFDQUMsS0FBQSxTQUFBMkIsR0FFQSxNQURBTCxHQUFBSSxNQUFBQyxFQUFBeEIsS0FDQW1CLEVBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICduZ1JvdXRlJ1xuXSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgIH0pO1xuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG4gICAgUG9zdHNTdmMuZmV0Y2goKS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0cykge1xuICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHM7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgIHVzZXJuYW1lOiAnX2F1Z3VzdGluYXMnLFxuICAgICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxuICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdCk7XG4gICAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcbiAgICB9O1xuICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgY29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncG9zdHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAud2hlbignL3JlZ2lzdGVyJywge1xuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvbG9naW4nLCB7XG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnXG4gICAgICB9KTtcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdmFyIHN2YyA9IHRoaXM7XG5cbiAgICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgJ1gtQXV0aCc6IHRoaXMudG9rZW4gfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHN2Yy50b2tlbiA9IHZhbC5kYXRhO1xuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==