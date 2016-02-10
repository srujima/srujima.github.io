var app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
    $scope.appetizers = [{
        item: 'Lettuce wraps',
        price: 10
    }, {
        item: 'Fried wontons(8 pcs)',
        price: 9
    }, {
        item: 'Spring rolls(3 pc)',
        price: 8
    }, {
        item: 'Fried chilli paneer',
        price: 11
    }, {
        item: 'Cheese bhel',
        price: 8
    }, {
        item: 'Manchurian',
        price: 7
    }, {
        item: 'Chilli baby corn',
        price: 9
    }, {
        item: 'Samosa(3 pcs)',
        price: 6
    }];
    $scope.soups = [{
        item: 'Sweet corn',
        price: 5
    }, {
        item: 'Tomato ginger',
        price: 5
    }, {
        item: 'Hot & sour',
        price: 4
    }, {
        item: 'Tom yum',
        price: 5
    }, {
        item: 'Mixed veggie',
        price: 5
    }, {
        item: 'Tomato garlic',
        price: 5
    }];
    $scope.maincourse = [{
        item: 'Burnt garlic fried rice',
        price: 7
    }, {
        item: 'Szechwan',
        price: 7
    }, {
        item: 'Vegetable biryani',
        price: 9
    }, {
        item: 'Curry fried',
        price: 7
    }, {
        item: 'Mixed vegetable',
        price: 8
    }, {
        item: 'Hakka noodles',
        price: 7
    }, {
        item: 'Chilli garlic noodles',
        price: 6
    }, {
        item: 'Yellow curry noodles',
        price: 7
    }];
    $scope.desserts = [{
        item: 'Coconut ice cream',
        price: 5
    }, {
        item: 'Banana fried ice Cream',
        price: 6
    }, {
        item: 'Chocolate mousse cake with ice cream ',
        price: 5
    }, {
        item: 'Saucy chocolate cake with ice cream',
        price: 4
    }, {
        item: 'Fruit cocktail sundae',
        price: 6
    }, {
        item: 'Chocolate sundae',
        price: 5
    }, {
        item: 'Caramel ice cream',
        price: 6
    }, {
        item: 'Fruit salad with ice cream',
        price: 6
    }];
    $scope.drinks = [{
        item: 'Coke',
        price: 2
    }, {
        item: 'Sprite',
        price: 2
    }, {
        item: 'Thai Iced tea ',
        price: 5
    }, {
        item: 'Root beer',
        price: 3
    }, {
        item: 'Fresh fruit juice',
        price: 4
    }, {
        item: 'Mixed berries',
        price: 5
    }, {
        item: 'Coconut water',
        price: 3
    }, {
        item: 'Milk shake',
        price: 3
    }];
    $scope.appetizer = function() {

        $scope.one = $scope.one ? false : true;
        $scope.two = false;
        $scope.three = false;
        $scope.four = false;
        $scope.five = false;

    };
    $scope.soup = function() {

        $scope.two = $scope.two ? false : true;
        $scope.one = false;
        $scope.three = false;
        $scope.four = false;
        $scope.five = false;
    };
    $scope.mainc = function() {

        $scope.three = $scope.three ? false : true;
        $scope.one = false;
        $scope.two = false;
        $scope.four = false;
        $scope.five = false;

    };
    $scope.dessert = function() {

        $scope.four = $scope.four ? false : true;
        $scope.one = false;
        $scope.two = false;
        $scope.three = false;
        $scope.five = false;

    };
    $scope.drink = function() {

        $scope.five = $scope.five ? false : true;
        $scope.one = false;
        $scope.two = false;
        $scope.three = false;
        $scope.four = false;

    };
});
