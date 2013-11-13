require('should');
var getIntervals = require('./getIntervals');

describe('getIntervals', function () {
  "use strict";

  it('should not accept 0 parameters', function () {
    var throwFunc = function () {
      getIntervals();
    };
    throwFunc.should.throw();
  });

  it('should yield [] for a single param', function () {
    var intervals = getIntervals(1);

    intervals.should.be.an.instanceOf(Array);
    intervals.length.should.equal(0);
  });

  it('should yield [[p1,p2]] for 2 params', function () {
    var p1 = 1,
        p2 = 2,
        intervals = getIntervals(p1, p2);

    intervals.should.be.an.instanceOf(Array);
    intervals.length.should.equal(1);
    intervals[0].should.be.an.instanceOf(Array);
    intervals[0].length.should.equal(2);
    intervals[0][0].should.equal(p1);
    intervals[0][1].should.equal(p2);
  });

  it('should yield [[p1,p2]] for 3 params', function () {
    var intervals = getIntervals(1, 2, 3);

    intervals.length.should.equal(1);
    intervals[0].length.should.equal(2);
  });

  it('should yield [[p1, p2], [p3, p4]] for 4 params', function () {
    var p1 = 1,
        p2 = 2,
        p3 = 3,
        p4 = 4,
        intervals = getIntervals(p1, p2, p3, p4);

    intervals.length.should.equal(2);
    intervals[0][0].should.equal(p1);
    intervals[0][1].should.equal(p2);
    intervals[1][0].should.equal(p3);
    intervals[1][1].should.equal(p4);
  });

  it('should pass a 2-dimensional array directly back', function () {
    var param = [[1,2],[3,4],[5,6]],
        intervals = getIntervals(param);

    intervals.length.should.equal(param.length);
    intervals.should.eql(param);
  });

  it('should gracefully handle a 1-dimensional array being passed', function () {
    var param = [1,2,3,4,5,6,7],
        intervals = getIntervals(param);

    intervals.length.should.equal(3);
  });
});