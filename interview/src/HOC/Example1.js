// create one HOC
const higherOrderCompo = (WrappedCompo) => {
  return (props) => {
    return <WrappedCompo {...props} />;
  };
};

const MyComponent=({props})=>{
    return (
        <>Hello , I am Devil... {props}</>
    )
}

const CatchCompo=higherOrderCompo(MyComponent);
export default CatchCompo
