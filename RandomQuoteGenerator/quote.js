$(document).ready(function() {


    function codegenerator(index) {

        var quotes = {
            "nature": "' The earth has music for those who listen. ',' Should you shield the canyons from the windstorms you would never see the true beauty of their carvings. ',' Adopt the pace of nature: her secret is patience. ',' All water has a perfect memory and is forever trying to get back to where it was. ',' Nature always wears the colors of the spirit. ',' In the depth of winter I finally learned that there was in me an invincible summer. '",
            "love": " ' Love isn't something you find. Love is something that finds you. ',' Immature love says: ' I love you because I need you.' Mature love says I need you because I love you. ',' Sometimes the heart sees what is invisible to the eye. ','The best thing to hold onto in life is each other.',' The sweetest of all sounds is that of the voice of the person we love. ',' It is not a lack of love, but a lack of friendship that makes unhappy marriages ',' Love is that condition in which the happiness of another person is essential to your own. ',' If I had a flower for every time I thought of you...I could walk through my garden forever. '",
            "art": "' The purpose of art is washing the dust of daily life off our souls. ',' Vision is the art of seeing what is invisible to others. ',' Art evokes the mystery without which the world would not exist. ',' I don't believe in art. I believe in artists. ',' The history of art is the history of revivals. ',' Everything you can imagine is real. ',' Every child is an artist. The problem is how to remain an artist once he grows up. ',' Art is the lie that enables us to realize the truth. ',' I dream my painting and I paint my dream. ',' Art enables us to find ourselves and lose ourselves at the same time. ',' Art washes away from the soul the dust of everyday life. '",
            "fun":"' A woman's mind is cleaner than a man's : she changes it more often. ',' If you haven't got anything nice to say about anybody come sit next to me. ',' Do not take life too seriously: you will never get out of it alive. ',' We are all here on earth to help others; What on earth the others are here for I don't know. ',' Get your facts first then you can distort them as you please. ',' Don't talk about yourself; it will be done when you leave. '"
        };

        quote = quotes[index].split(",");
        randomQuote = quote[Math.floor(Math.random() * quote.length)];

        $('blockquote.quotes').html(randomQuote);
    }

    $('.button').on("click", function() {

        $(this).next().text(codegenerator(this.id));

    });
	
	$.ajax({
    url: 'http://www.eduro.com/',
    type: 'GET',
    success: function(res) {
        var headline = $(res.dayquote).find('dailyquote > p .author').text();
        alert(headline);
    }
});
 
});
