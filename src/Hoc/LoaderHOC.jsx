import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useSelector } from 'react-redux';


function LoaderHOC({children}) {
  const loader = useSelector((state)=>state.auth.loader)
  return (
    <>
          {children}
   
    {!!loader && <div style={{ zIndex: 9999999, position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', alignContent: 'center', left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', }}>
    <RotatingLines
    visible={true}
    height="50"
    width="50"
    color="grey"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
          </div>}
    </>
  )
}

export default LoaderHOC


;