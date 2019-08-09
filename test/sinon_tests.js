" use strict";

// jshint expr: true

var chai = require("chai");
var sinon = require("sinon");
// expect = chai.expect;

chai.should();

describe("Sinon tests", () => {
  var student, schedule;
  beforeEach(()=>{
    student = {
      dropClass:(classId,cb)=>{
        // callback is called
        if (!!cb.dropClass){
          console.log("the callback has dropClass");
          cb.dropClass()
        } else {
          console.log('the callback has dropClass');
          cb()
        }
      },
      addClass:(schedule)=>{
        if (!schedule.classIsFull()){
          return true
        } else {
          return false
        }
      }
    },
    schedule = {
      dropClass:()=>{
        console.log('schedule has also been logged')
      },
      classIsFull:()=>{
        return true
      }
    }
  })
  it("should call the callback function", () => {
    var spy = sinon.spy()
    student.dropClass(1,spy)
    spy.called.should.equal(true)
  });
  it("should call the callback function and log to the console", () => {
    droppedClass= ()=>{
      console.log('I have been called and have logged to the console')
    }
    var spy = sinon.spy(droppedClass);
    student.dropClass(1,spy)
    spy.called.should.equal(true)
  });
  it("should call the callback even if callback is a method of an object and log to the console", () => {
    sinon.spy(schedule, 'dropClass')
    student.dropClass('1', schedule)
    schedule.dropClass.called.should.equal(true);
  });
  describe('Student with spies',()=>{
    it('should call a stubbed method', ()=>{
      let stub = sinon.stub(schedule);
      student.dropClass(1, stub.dropClass)
      stub.dropClass.called.should.equal(true)

      student.dropClass(1, stub);
      stub.dropClass.called.should.equal(true);
    });
    it("should call a stubbed method", () => {
      let stub = sinon.stub(schedule);
      student.dropClass(1, stub.dropClass);
      stub.dropClass.called.should.equal(true);

      student.dropClass(1, stub);
      stub.dropClass.called.should.equal(true);
    });
    it('should return true when class is not full',()=>{
      let stub = sinon.stub(schedule)
      stub.classIsFull.returns(false)
      let returnValue = student.addClass(stub)
      returnValue.should.equal(true);
    });
  });
  describe('Student with mocks',()=>{
    it('mocks schedule',()=>{
      let mockObj = sinon.mock(schedule);
      let expectation = mockObj.expects('classIsFull').once()

      student.addClass(schedule);
      expectation.verify()
    });
  });
});
