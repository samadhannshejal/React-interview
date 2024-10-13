const withAuth = (WrappedCompo) => {
  const isAuthanticated = true;
  return () => {
    if (!isAuthanticated) return "Log in failed";

    return <WrappedCompo />;
  };
};
const Dashboard=()=>{
    return (
        <>Welcome to Dashboard ....</>
    )
}

const AuthHOC=withAuth(Dashboard);
export default AuthHOC;
