/* eslint-disable no-extend-native */
import React from "react";

const Pollyfills = () => {
  //map
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "samadhan"];

  // const callBack=(i)=>{
  //     return i +10;
  // }
  // Array.prototype.myMap=function(cb){
  //     const temp=[];
  //     for(let i=0;i<this.length;i++){
  //       temp.push(cb(this[i]));
  //     }
  //     return temp;
  // }
  // console.log(arr.myMap(callBack));

  // filter

  // const callBack =(i)=>{
  //    return i<5;
  // }
  // Array.prototype.myFilter=function(cb){
  //   const temp=[];
  //   console.log(this)
  //   for(let i=0;i<this.length;i++){
  //         if(cb(this[i]))temp.push(this[i]);
  //   }
  //   return temp;
  // }
  // console.log(arr.myFilter(callBack))

  //reduce

  // const callBack = (acc, currentValue, idx) => {
  //   return acc + currentValue;
  // };
  // Array.prototype.myReduce = function (cb, initialValue) {
  //   let accumlatedValue = initialValue !== undefined ? initialValue : this[0];
  //   for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
  //     accumlatedValue = cb(accumlatedValue, this[i], i);
  //   }
  //   return accumlatedValue;
  // };

  // console.log(arr.myReduce(callBack));

  // const callBack=(element)=>{
  //     return element>0
  // }
  // Array.prototype.myEvery=function(cb){
  //    for(let i=0;i<this.length-1;i++){
  //         if(!cb(this[i]))return false;
  //    }
  //    return true;
  // }
  // console.log(arr.myEvery(callBack))

  // Array.prototype.myIncludes = function (element, startIndx) {
  //   let start = startIndx === undefined ? 0 : startIndx;
  //   if(start<0){
  //     start=Math.max(this.length+start,0);
  //   }
  //   for (let i =start ; i < this.length; i++) {
  //     if (this[i] === element) return true;
  //   }
  //   return false;
  // };
  // console.log(arr)
  // console.log(arr.myIncludes(2,1));

  return <div>All PollyFills</div>;
};

export default Pollyfills;
