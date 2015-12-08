var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

process.env.MONGOLAB_URI = 'mongodb://localhost/restaurants_test';
require(__dirname + '/../server');
var mongoose = require('mongoose');
var Restaurant = require(__dirname + '/../models/restaurant');

describe('retaurants routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a restaurant', function(done) {
    var restaurantData = {title: "Sushi", liked: false};
    chai.request('localhost:3000')
      .post('/api/restaurants')
      .send(restaurantData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.title).to.eql('Sushi');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  it('should be able to get all  restaurants', function(done) {
    chai.request('localhost:3000')
      .get('/api/restaurants')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  describe('needs a restaurant', function() {
    beforeEach(function(done) {
      (new Restaurant({title: 'Sushi'})).save(function(err, data) {
        expect(err).to.eql(null);
        this.restaurant = data;
        done();
      }.bind(this));
    });

    it('should be able to modify a restaurant', function(done) {
      chai.request('localhost:3000')
        .put('/api/restaurants/' + this.restaurant._id)
        .send({title: 'a different restaurant name'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });

    it('should be able to remove a restaurant', function(done) {
      chai.request('localhost:3000')
        .delete('/api/restaurants/' + this.restaurant._id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });
  });
});
