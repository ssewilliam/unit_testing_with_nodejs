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
      }
    },
    schedule = {
      dropClass:()=>{
        console.log('schedule has also been logged')
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
});
